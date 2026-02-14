import heroImage from '../../assets/images/gallery/main.jpg';

export default function Intro() {
  return (
    <div className="intro-wrapper">
      <div className="intro-title">
        Love begins here
      </div>

      <section className="intro-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="intro-overlay">
          <h1>은목 <span className="heart">♥</span> 혜진</h1>
          <p className="date">2026.06.07 SUN PM 2:00</p>
        </div>
      </section>
    </div>
    
  );
}
