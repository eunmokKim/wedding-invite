import img1 from '../../assets/images/gallery/ws01.jpg';
import img2 from '../../assets/images/gallery/ws02.jpg';
import img3 from '../../assets/images/gallery/ws03.jpg';
import img4 from '../../assets/images/gallery/ws04.jpg';
import img5 from '../../assets/images/gallery/ws05.jpg';
import img6 from '../../assets/images/gallery/ws06.jpg';

const images = [img1, img2, img3, img4, img5, img6];

export default function Gallery() {
  return (
    <div className="gallery-section">

      <div className="gallery-header">
        <div className="gallery-title">GALLERY</div>
      </div>

      <div className="gallery-grid">
        {images.map((src, i) => (
          <div key={i} className="gallery-item">
            <img src={src} alt={`gallery-${i}`} />
          </div>
        ))}
      </div>

    </div>
  );
}
