import { MapPin, Phone } from "lucide-react";

export default function MapSection() {
  return (
    <div className="location-section">

      <div className="location-header">
        <div className="location-title">LOCATION</div>
      </div>

      <div className="location-info">
        <h3>잠실 아펠가모 2층 단독홀</h3>
        <p>서울 송파구 올림픽로35길 137 한국광고문화회관 2층</p>
        <p>02-2144-0230</p>
      </div>

      <div className="location-buttons">
        <a
          href="https://map.naver.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MapPin size={16} strokeWidth={1.5} />
          지도
        </a>

        <a href="tel:0221440230">
          <Phone size={16} strokeWidth={1.5} />
          전화
        </a>
      </div>

      {/* 지도 이미지 */}
      <div className="map-image">
        <img
          src="https://via.placeholder.com/800x400?text=Map+Preview"
          alt="map"
        />
      </div>
    </div>
  );
}
