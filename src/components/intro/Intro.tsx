import heroImage from '../../assets/images/gallery/main.jpg';


export default function Intro() {
  return (
    <section className="intro-hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="intro-overlay">
        <h1>
          김은목 <span>❤️</span> 김혜진
        </h1>
        <p>2026년 6월 7일 일요일 오후 2시</p>
        <p className="venue">잠실 아펠가모</p>
      </div>
    </section>
  );
}
