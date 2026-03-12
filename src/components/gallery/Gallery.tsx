import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "/gallery/ws01.jpg";
import img2 from "/gallery/ws02.jpg";
import img3 from "/gallery/ws03.jpg";
import img4 from "/gallery/ws04.jpg";
import img5 from "/gallery/ws05.jpg";
import img6 from "/gallery/ws06.jpg";
import img7 from "/gallery/ws07.jpg";
import img8 from "/gallery/ws08.jpg";
import img9 from "/gallery/ws09.jpg";
import img10 from "/gallery/ws10.jpg";
import img11 from "/gallery/ws11.jpg";
import img12 from "/gallery/ws12.jpg";
import FadeIn from "../FadeIn";
import { createPortal } from "react-dom";
import { useSwipeable } from "react-swipeable";

const images = [img2, img3, img1, img4, img5, img6, img7, img8, img9, img10, img11, img12];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    trackMouse: true, // PC에서도 드래그 가능
  });

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

  useEffect(() => {
    if (currentIndex !== null) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [currentIndex]);

  return (
      <div className="gallery-section">
        <FadeIn>
          <div className="gallery-header">
            <div className="gallery-title">GALLERY</div>
          </div>

          <div className="gallery-grid">
            {images.map((src, i) => (
              <div key={i} className="gallery-item" onClick={() => open(i)}>
                <img src={src} alt={`gallery-${i}`} loading="lazy" />
              </div>
            ))}
          </div>

          {/* 🔥 풀스크린 모달 */}
          {currentIndex !== null && 
          createPortal(
            <div className="gallery-modal" {...handlers}>
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
            </div>, document.body
          )}
        </FadeIn>
      </div>
  );
}
