import React, { useEffect, useState } from 'react';
import { preloadImages } from '../../utils/imageLoader';
import './Gallery.css';

const Gallery: React.FC = () => {
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
    <div className="gallery-page">
      <section className="title">
        <h1>Westphal Audio Works Gallery</h1>
      </section>

      <section className="gallery">
        <div className="grid-sizer"></div>
        <div className="grid-item">
          <img src={imageUrls['gallery15.jpg'] || '/img/gallery15.jpg'} alt="Gallery image 1" />
        </div>
        <div className="grid-item short">
          <img src={imageUrls['gallery9.jpg'] || '/img/gallery9.jpg'} alt="Gallery image 2" />
        </div>
        <div className="grid-item short">
          <img src={imageUrls['gallery12.jpg'] || '/img/gallery12.jpg'} alt="Gallery image 3" />
        </div>
        <div className="grid-item">
          <img src={imageUrls['gallery10.jpg'] || '/img/gallery10.jpg'} alt="Gallery image 4" />
        </div>
        <div className="grid-item">
          <img src={imageUrls['gallery14.jpg'] || '/img/gallery14.jpg'} alt="Gallery image 5" />
        </div>
        
        {/* Custom row layout */}
        <div className="gallery-row">
          <div className="gallery-row-left">
            <img src={imageUrls['gallery7.jpg'] || '/img/gallery7.jpg'} alt="Gallery image 6" />
          </div>
          <div className="gallery-row-right">
            <div className="gallery-row-top">
              <img src={imageUrls['gallery6.jpg'] || '/img/gallery6.jpg'} alt="Gallery image 7" />
            </div>
            <div className="gallery-row-bottom">
              <img src={imageUrls['gallery11.jpg'] || '/img/gallery11.jpg'} alt="Gallery image 8" />
            </div>
          </div>
        </div>

        <div className="grid-item">
          <img src={imageUrls['gallery5.jpg'] || '/img/gallery5.jpg'} alt="Gallery image 9" />
        </div>
        <div className="grid-item">
          <img src={imageUrls['gallery4.jpg'] || '/img/gallery4.jpg'} alt="Gallery image 10" />
        </div>
        <div className="grid-item">
          <img src={imageUrls['gallery3.jpg'] || '/img/gallery3.jpg'} alt="Gallery image 11" />
        </div>
        <div className="grid-item">
          <img src={imageUrls['gallery2.jpg'] || '/img/gallery2.jpg'} alt="Gallery image 12" />
        </div>
        <div className="grid-item">
          <img src={imageUrls['gallery1.jpg'] || '/img/gallery1.jpg'} alt="Gallery image 13" />
        </div>
        <div className="grid-item">
          <img src={imageUrls['gallery8.jpg'] || '/img/gallery8.jpg'} alt="Gallery image 14" />
        </div>
        <div className="grid-item">
          <img src={imageUrls['gallery16.jpg'] || '/img/gallery16.jpg'} alt="Gallery image 15" />
        </div>
        <div className="grid-item">
          <img src={imageUrls['gallery17.jpg'] || '/img/gallery17.jpg'} alt="Gallery image 16" />
        </div>
        <div className="grid-item">
          <img src={imageUrls['gallery13.jpg'] || '/img/gallery13.jpg'} alt="Gallery image 17" />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
