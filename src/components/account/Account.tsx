import { useState } from "react";
import FadeIn from "../FadeIn";
import { Copy } from "lucide-react";
import Toast from "../Toast";

interface PersonAccount {
  role: string;
  bank: string;
  number: string;
  name: string;
}

interface FamilyAccount {
  side: string;
  accounts: PersonAccount[];
}

const familyAccounts: FamilyAccount[] = [
  {
    side: "신랑 측",
    accounts: [
      { role: "신랑", bank: "하나은행", number: "759-910177-12507", name: "김은목" },
      { role: "아버지", bank: "국민은행", number: "052-301042-22806", name: "김만식" },
      { role: "어머니", bank: "기업은행", number: "020-114764-01010", name: "박현주" },
    ],
  },
  {
    side: "신부 측",
    accounts: [
      { role: "신부", bank: "국민은행", number: "361-401041-38627", name: "김혜진" },
      { role: "아버지", bank: "농협은행", number: "189-12-235801", name: "김동수" },
      { role: "어머니", bank: "국민은행", number: "672-702961-03697", name: "이선자" },
    ],
  },
];

export default function AccountSection() {
  // 🔥 side별 열림 상태 관리
  const [openSide, setOpenSide] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleSide = (side: string) => {
    setOpenSide(prev => (prev === side ? null : side));
  };

  const copy = (text: string) => {
    navigator.clipboard.writeText(text.replaceAll("-", "").trim());
    setToastMessage("계좌번호가 복사되었습니다");
  };

  return (
    <div className="account-section">
      <FadeIn>
        <div className="account-title">마음 전하실 곳</div>
        <div className="account-message">
        참석이 어려워 직접 축하를 전하지 못하는<br />
        분들을 위해 계좌번호를 기재하였습니다.<br />
        넓은 마음으로 양해 부탁드립니다.<br />
        전해주시는 진심은 소중하게 간직하여<br />
        좋은 부부의 모습으로 보답하겠습니다.
      </div>

        <div className="family-account-list">
          {familyAccounts.map((family, i) => (
            <div className="family-card" key={i}>

              {/* 🔹 상단 타이틀 + 버튼 */}
              <div className="family-header">
                <div className="family-title">{family.side}</div>
                <button
                  className="toggle-btn"
                  onClick={() => toggleSide(family.side)}
                >
                  {openSide === family.side ? "닫기" : "계좌번호 보기"}
                </button>
              </div>

              {/* 🔹 해당 side만 열림 */}
              {openSide === family.side && (
                <div className="account-list">
                  {family.accounts.map((person, idx) => (
                    <div className="account-row" key={idx}>
                      <div className="account-left">
                        <div className="account-person">
                          <span className="account-role">{person.role}</span>
                          <span className="account-name">{person.name}</span>
                        </div>
                        <div className="account-number">
                          {person.bank} {person.number}
                        </div>
                      </div>

                      <div className="account-right">
                        <button onClick={() => copy(person.number)} className="copy-btn">
                          <Copy size={0} strokeWidth={1.5} />복사
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
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
