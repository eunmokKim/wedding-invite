import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Phone, MessageCircle, X } from "lucide-react";
import FadeIn from "../FadeIn";

export default function Greeting() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div className="greeting-section">
      <FadeIn>
        <div className="invitation-header">
          <div className="invitation-title">소중한 분들을 초대합니다.</div>
        </div>

        <div className="greeting-content">
          <p>
              저희 두 사람의 작은 만남이
              <br />
              사랑의 결실을 이루어
              <br />
              소중한 결혼식을 올리게 되었습니다.
              <br /><br />
              평생 서로 귀하게 여기며
              <br />
              첫 마음 그대로 존중하고 배려하며 살겠습니다.
              <br /><br />
              오로지 믿음과 사랑을 약속하는 날
              <br />
              오셔서 축복해 주시면 더 없는 기쁨으로
              <br />
              간직하겠습니다.
            </p>
        </div>

        <div className="family-info">
          <p>김만식 · 박현주의 아들 <strong>김은목</strong></p>
          <p>김동수 · 이선자의 &nbsp;딸&nbsp;<strong> &nbsp;김혜진</strong></p>
        </div>

        <button className="contact-btn" onClick={() => setOpen(true)}>
          연락하기
        </button>
      </FadeIn>

      {open &&
        createPortal(
          <div className="contact-modal-full">
            <div className="contact-modal-card">
              <div className="contact-header">
                <div className="contact-script">Contact</div>
                <h2>연락하기</h2>
                <button className="contact-close" onClick={() => setOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              {/* ===== 신랑측 ===== */}
              <div className="contact-section">
                <div className="section-title">
                  신랑 측 <span>GROOM</span>
                </div>

                <ContactItem role="신랑" name="김은목" number="01067224399" />
                <ContactItem role="신랑 아버님" name="김만식" number="01037894399" />
                <ContactItem role="신랑 어머님" name="박현주" number="01042974399"/>
              </div>

              {/* ===== 신부측 ===== */}
              <div className="contact-section">
                <div className="section-title">
                  신부 측 <span>BRIDE</span>
                </div>

                <ContactItem role="신부" name="김혜진" number="01033157383"/>
                <ContactItem role="신부 아버님" name="김동수" number="01062307383"/>
                <ContactItem role="신부 어머님" name="이선자" number="01033557383"/>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

/* 🔥 연락 카드 컴포넌트 */
function ContactItem({ role, name, number }: { role: string; name: string; number:string; }) {
  return (
    <div className="contact-item">
      <div className="contact-left">
        <div className="contact-role">{role}</div>
        <div className="contact-name">{name}</div>
      </div>

      <div className="contact-actions">
        <a href={`tel:${number}`}>
          <Phone size={18}/>
        </a>
        <a href={`sms:${number}`}>
          <MessageCircle size={18} />
        </a>
      </div>
    </div>
  );
}