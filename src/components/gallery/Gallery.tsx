import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../../assets/images/gallery/ws01.jpg";
import img2 from "../../assets/images/gallery/ws02.jpg";
import img3 from "../../assets/images/gallery/ws03.jpg";
import img4 from "../../assets/images/gallery/ws04.jpg";
import img5 from "../../assets/images/gallery/ws05.jpg";
import img6 from "../../assets/images/gallery/ws06.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const open = (index: number) => {
    setCurrentIndex(index);
  };

  const close = () => {
    setCurrentIndex(null);
  };

  const prev = () => {
    if (currentIndex === null) return;
    setCurrentIndex(
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const next = () => {
    if (currentIndex === null) return;
    setCurrentIndex(
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="gallery-section">
      <div className="gallery-header">
        <div className="gallery-title">GALLERY</div>
      </div>

      <div className="gallery-grid">
        {images.map((src, i) => (
          <div key={i} className="gallery-item" onClick={() => open(i)}>
            <img src={src} alt={`gallery-${i}`} />
          </div>
        ))}
      </div>

      {/* 🔥 풀스크린 모달 */}
      {currentIndex !== null && (
        <div className="gallery-modal">
          <div className="modal-top">
            <span>
              {currentIndex + 1} / {images.length}
            </span>
            <button onClick={close}>
              <X size={24} />
            </button>
          </div>

          <button className="modal-left" onClick={prev}>
            <ChevronLeft size={32} />
          </button>

          <img
            src={images[currentIndex]}
            className="modal-image"
            alt="large"
          />

          <button className="modal-right" onClick={next}>
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}
