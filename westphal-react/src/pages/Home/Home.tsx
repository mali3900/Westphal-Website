import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../utils/imageLoader';
import './Home.css';

const Home: React.FC = () => {
  const [heroImageUrl, setHeroImageUrl] = useState<string>('/img/hero.jpg');

  useEffect(() => {
    const loadHeroImage = async () => {
      try {
        const url = await getImageUrl('hero.jpg');
        setHeroImageUrl(url);
      } catch (error) {
        console.error('Failed to load hero image:', error);
      }
    };

    loadHeroImage();
  }, []);

  const scrollToHero = (duration: number = 1500) => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const start = window.scrollY;
    const target = hero.getBoundingClientRect().top + window.scrollY + hero.offsetHeight/2 - window.innerHeight/2;
    const distance = target - start;
    let startTime: number | null = null;

    // Ease-in-out function
    const easeInOutQuad = (t: number) => t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t;

    function animation(currentTime: number) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutQuad(progress);
      window.scrollTo(0, start + distance * easedProgress);
      if (progress < 1) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
  };

  return (
    <div className="home">
      <section className="hero" id="hero" style={{ backgroundImage: `url(${heroImageUrl})` }}>
        <div className="hero-inner">
          <div className="hero-inner-bg">
            <h1>Westphal Audio Works</h1>
            <p>Sound Engineer / Songwriter</p>
          </div>
          <Link to="/music" className="hero-cta">
            Check Out My Latest Lo-Fi Beats
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
