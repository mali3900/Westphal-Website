import React, { useEffect, useState } from "react";
import { preloadImages } from "../../utils/imageLoader";
import "./About.css";

const About: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<{ [key: string]: string }>({});
  const [imagesToShow, setImagesToShow] = useState<number>(() => {
    if (typeof window !== "undefined") return window.innerWidth <= 768 ? 4 : 8;
    return 8;
  });

  useEffect(() => {
    const handleResize = () => {
      setImagesToShow(window.innerWidth <= 768 ? 4 : 8);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      const imageNames = [
        "https://firebasestorage.googleapis.com/v0/b/goldentouchsolutions-c5aea.firebasestorage.app/o/malachi%2Fgallery10.jpg?alt=media&token=6ebb3802-e3a1-42ec-b16a-cbd77aa6f37e",
        "https://firebasestorage.googleapis.com/v0/b/goldentouchsolutions-c5aea.firebasestorage.app/o/malachi%2Fgallery1.jpg?alt=media&token=48139e3b-412e-42fc-bc05-a051e777a383",
        "https://firebasestorage.googleapis.com/v0/b/goldentouchsolutions-c5aea.firebasestorage.app/o/malachi%2Fgallery11.jpg?alt=media&token=e4907732-9118-4635-a903-429c622fa01b",
        "https://firebasestorage.googleapis.com/v0/b/goldentouchsolutions-c5aea.firebasestorage.app/o/malachi%2Fgallery12.jpg?alt=media&token=5fbea648-f171-438a-84f3-8be0f42400c0",
        "https://firebasestorage.googleapis.com/v0/b/goldentouchsolutions-c5aea.firebasestorage.app/o/malachi%2Fgallery13.jpg?alt=media&token=3be9a971-8d58-4491-9ac4-5d9c69e93545",
        "https://firebasestorage.googleapis.com/v0/b/goldentouchsolutions-c5aea.firebasestorage.app/o/malachi%2Fgallery14.jpg?alt=media&token=f787517d-b546-4f60-8bd8-4a90db6542dd",
        "https://firebasestorage.googleapis.com/v0/b/goldentouchsolutions-c5aea.firebasestorage.app/o/malachi%2Fgallery15.jpg?alt=media&token=0ffd381b-6528-454a-a357-cb71967807dd",
        "https://firebasestorage.googleapis.com/v0/b/goldentouchsolutions-c5aea.firebasestorage.app/o/malachi%2Fgallery16.jpg?alt=media&token=e7c1829c-8a13-4962-a2c9-f8d84ee9b2e8",
        "https://firebasestorage.googleapis.com/v0/b/goldentouchsolutions-c5aea.firebasestorage.app/o/malachi%2Fgallery17.jpg?alt=media&token=242f557c-7a8a-4a26-b0da-20a6e34641f2",
        "https://firebasestorage.googleapis.com/v0/b/goldentouchsolutions-c5aea.firebasestorage.app/o/malachi%2Fgallery2.jpg?alt=media&token=03910434-6253-42f3-a43c-da532698c622",
        "https://firebasestorage.googleapis.com/v0/b/goldentouchsolutions-c5aea.firebasestorage.app/o/malachi%2Fgallery3.jpg?alt=media&token=b19f2846-7171-4d37-85ec-3e2de2e32000",
        "https://firebasestorage.googleapis.com/v0/b/goldentouchsolutions-c5aea.firebasestorage.app/o/malachi%2Fgallery4.jpg?alt=media&token=411b084b-dfcc-452d-b2a0-cde9df467cc5",
        "https://firebasestorage.googleapis.com/v0/b/goldentouchsolutions-c5aea.firebasestorage.app/o/malachi%2Fgallery5.jpg?alt=media&token=8b1b16ff-7702-421e-8cd4-bd1c6617e404",
        "https://firebasestorage.googleapis.com/v0/b/goldentouchsolutions-c5aea.firebasestorage.app/o/malachi%2Fgallery6.jpg?alt=media&token=584cf055-feec-4208-87f0-e9b9d82d8be5",
        "https://firebasestorage.googleapis.com/v0/b/goldentouchsolutions-c5aea.firebasestorage.app/o/malachi%2Fgallery7.jpg?alt=media&token=ebfed2f5-1434-4f9e-a64c-ac23cde12e04",
        "https://firebasestorage.googleapis.com/v0/b/goldentouchsolutions-c5aea.firebasestorage.app/o/malachi%2Fgallery8.jpg?alt=media&token=b9fb7d4f-9a11-4b29-932c-cb00fc509080",
        "https://firebasestorage.googleapis.com/v0/b/goldentouchsolutions-c5aea.firebasestorage.app/o/malachi%2Fgallery9.jpg?alt=media&token=0dfed20e-d591-44a0-bc47-537d54ce17e4",
      ];

      // Shuffle and pick random based on viewport
      const shuffled = imageNames.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, imagesToShow);

    try {
      const urls = await preloadImages(selected);
      setImageUrls(urls);
    } catch (error) {
      console.error("Failed to load gallery images:", error);
      // fallback if preload fails
      const fallbackUrls: { [key: string]: string } = {};
      selected.forEach(name => {
        fallbackUrls[name] = name;
      });
      setImageUrls(fallbackUrls);
    }
  };
// eslint-disable-next-line
  loadImages();}, []);

  return (
    <div className="about">
      <div className="title">
        <h1>About Westphal Audio Works</h1>  
      </div>
      
      <section className="about-container">
        <div>
          <p className="body-text">
            Westphal Audio Works is a solo musician who also offers professional sound engineering services. 
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
            alt={`Gallery ${index + 1}`}
            loading="lazy"
          />
        ))}
      </section>
    </div>
  );
};

export default About;
