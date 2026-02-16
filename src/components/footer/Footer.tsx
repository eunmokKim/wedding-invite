import { Link } from "lucide-react";

export default function Footer() {

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("청첩장 링크가 복사되었습니다");
  };

  return (
    <footer className="footer">

      {/* 상단 회색 바 */}
      <div className="footer-bar">
        <button onClick={copyLink}>
          <Link size={16} strokeWidth={1.5} />
          링크 복사
        </button>
      </div>

      {/* 기존 감성 영역 */}
      <div className="footer-content">
        <p>© 김은목 · 김혜진</p>
      </div>

    </footer>
  );
}
