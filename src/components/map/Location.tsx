import { MapPin, Phone, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import FadeIn from "../FadeIn";
import Toast from "../Toast";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Location() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const address =
    "서울 송파구 올림픽로35길 137 \n한국광고문화회관 2층";

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setToastMessage("주소가 복사되었습니다");
  };

  useEffect(() => {
    if (!window.kakao) return;

    const container = document.getElementById("map");
    if (!container) return;

    const kakao = window.kakao;

    const position = new kakao.maps.LatLng(
      37.5159272595028,
      127.099643159822
    );

    const options = {
      center: position,
      level: 4, // 숫자 낮을수록 확대
    };

    const map = new kakao.maps.Map(container, options);

    // 마커 생성
    const marker = new kakao.maps.Marker({
      position: position,
    });

    marker.setMap(map);

  }, []);

  return (
    <div className="location-section">
      <FadeIn>
        <div className="location-header">
          <div className="location-title">오시는 길</div>
        </div>

        <div className="location-info">
          <h4>잠실 아펠가모 2층 단독홀</h4>

          <div className="location-address-row">
            <p>{address}</p>
            
          </div>
        </div>

        <div className="location-buttons">
          <button onClick={copyAddress} className="address-copy-btn">
              <Copy size={9} strokeWidth={1.1} />주소복사
          </button>
          <a
            href="https://map.kakao.com/link/map/잠실아펠가모,37.5159272595028,127.099643159822"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={13} strokeWidth={1.3} />
            지도
          </a>

          <a href="tel:0221440230">
            <Phone size={13} strokeWidth={1.3} />
            전화
          </a>
        </div>

        <div
          id="map"
          style={{
            width: "100%",
            height: "350px",
            marginTop: "30px",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        ></div>
        {/* 🔥 교통 안내 영역 */}
        <div className="transport-section">
          <div className="transport-block">
            <h4>지하철</h4>
            <p><span style={{color: "#008000"}}>●</span> 2호선 잠실역 7번 출구</p>
            <p><span style={{color: "#ff69b4"}}>●</span> 8호선 잠실역 7번 출구</p>
            <p className="transport-sub">
              · 직진 방향 224M 우측 방향 100M 도보 후 우측 건물
            </p>
          </div>
          <hr/>
          <div className="transport-block">
            <h4>주차</h4>

            <p>
              <span className="parking-dot">●</span>
              건물 내 지하 주차장 무료 이용 가능
            </p>

            <p className="transport-sub">
              · 2시간 무료 주차 지원
            </p>

            <p className="transport-sub">
              · 주차장 입구가 매우 협소하오니 천천히 진입해 주세요.
            </p>
          </div>
        </div>
      </FadeIn>
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
    
    
  );
}
