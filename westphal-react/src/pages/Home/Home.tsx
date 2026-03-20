import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../utils/imageLoader";
import "./Home.css";

const Home: React.FC = () => {
  const [heroImageUrl, setHeroImageUrl] = useState<string>("https://firebasestorage.googleapis.com/v0/b/goldentouchsolutions-c5aea.firebasestorage.app/o/malachi%2Fhero.jpg?alt=media&token=bd3d51c9-b661-4434-b979-d7087affe4cc");

  useEffect(() => {
    const loadHeroImage = async () => {
      try {
        const url = await getImageUrl("hero.jpg");
        setHeroImageUrl(url);
      } catch (error) {
        console.error("Failed to load hero image:", error);
      }
    };

    loadHeroImage();
  }, []);

  return (
    <div className="home">
     <section className="hero" id="hero">
        <img
          src={heroImageUrl}
          alt="Westphal Audio Works"
          className="hero-img"
          loading="eager"
        />
        <div className="hero-inner">
          <div className="hero-inner-bg">
            <h1>Westphal Audio Works</h1>
            <p>Sound Engineer / Songwriter</p>
          </div>
          <Link to="/music" className="hero-cta">
            Check Out My Latest Music
          </Link>
        </div>
      </section>  
    </div>
  );
};

export default Home;
