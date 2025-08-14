import React, { useEffect, useState } from 'react';
import { preloadImages } from '../../utils/imageLoader';
import './About.css';

const About: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const loadImages = async () => {
      const imageNames = [
        'gallery1.jpg', 'gallery2.jpg', 'gallery3.jpg', 'gallery4.jpg',
        'gallery5.jpg', 'gallery6.jpg', 'gallery7.jpg', 'gallery8.jpg',
        'gallery9.jpg', 'gallery10.jpg', 'gallery11.jpg', 'gallery12.jpg',
        'gallery13.jpg', 'gallery14.jpg', 'gallery15.jpg', 'gallery16.jpg',
        'gallery17.jpg'
      ];

      try {
        const urls = await preloadImages(imageNames);
        setImageUrls(urls);
      } catch (error) {
        console.error('Failed to load gallery images:', error);
        // Set fallback URLs
        const fallbackUrls: { [key: string]: string } = {};
        imageNames.forEach(name => {
          fallbackUrls[name] = `/img/${name}`;
        });
        setImageUrls(fallbackUrls);
      }
    };

    loadImages();
  }, []);

  return (
    <div className="about">
      <section className="hero">
        <h1>About Westphal Audio Works</h1>
      </section>

      <section className="about-container">
        <div>
          <p className="body-text">
            Westphal Audio Works is a solo lofi musician who also offers professional sound engineering services. 
            With a passion for creating unique and captivating sounds, Westphal Audio Works is dedicated to 
            delivering top-notch musical experiences for both independent artists and bands.
          </p>
        </div>
        <div>
          <p className="body-text">
            Currently one of the guitarists for Sober Cafe. Stay updated with the latest releases and 
            behind-the-scenes insights from Westphal Audio Works. Connect with us to explore collaboration 
            opportunities and gain valuable insights into the world of music production and sound engineering.
          </p>
        </div>
      </section>

      <section className="about-gallery">
        {Object.entries(imageUrls).map(([imageName, url], index) => (
          <img 
            key={imageName}
            src={url} 
            alt={`Gallery image ${index + 1}`}
            loading="lazy"
          />
        ))}
      </section>
    </div>
  );
};

export default About;
