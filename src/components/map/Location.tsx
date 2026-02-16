import { MapPin, Phone, Copy } from "lucide-react";
import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Location() {
  const address =
    "서울 송파구 올림픽로35길 137 한국광고문화회관 2층";

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    alert("주소가 복사되었습니다");
  };

  useEffect(() => {
    if (!window.kakao) return;

    const container = document.getElementById("staticMap");
    if (!container) return;

    const position = new window.kakao.maps.LatLng(
      37.5159272595028,
      127.099643159822
    );

    const options = {
      center: position,
      level: 4,
      marker: {
        position: position,
      },
    };

    new window.kakao.maps.StaticMap(container, options);
  }, []);

  return (
    <div className="location-section">
      <div className="location-header">
        <div className="location-title">LOCATION</div>
      </div>

      <div className="location-info">
        <h3>잠실 아펠가모 2층 단독홀</h3>

        <div className="location-address-row">
          <p>{address}</p>
          <button onClick={copyAddress} className="address-copy-btn">
            <Copy size={14} strokeWidth={1.5} />
          </button>
        </div>

        <p>02-2144-0230</p>
      </div>

      <div className="location-buttons">
        <a
          href="https://map.kakao.com/link/map/잠실아펠가모,37.5159272595028,127.099643159822"
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

      <div
        id="staticMap"
        style={{
          width: "100%",
          height: "300px",
          marginTop: "30px",
          borderRadius: "14px",
          overflow: "hidden",
        }}
      ></div>
    </div>
  );
}
