import { useState } from "react";

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
      { role: "아버지", bank: "하나은행", number: "111-222-3333", name: "김만식" },
      { role: "어머니", bank: "국민은행", number: "444-555-6666", name: "박현주" },
    ],
  },
  {
    side: "신부 측",
    accounts: [
      { role: "신부", bank: "국민은행", number: "361-401041-38627", name: "김혜진" },
      { role: "아버지", bank: "신한은행", number: "777-888-9999", name: "김동수" },
      { role: "어머니", bank: "농협", number: "000-111-2222", name: "이선자" },
    ],
  },
];

export default function AccountSection() {

  // 🔥 side별 열림 상태 관리
  const [openSide, setOpenSide] = useState<string | null>(null);

  const toggleSide = (side: string) => {
    setOpenSide(prev => (prev === side ? null : side));
  };

  const copy = (text: string) => {
    navigator.clipboard.writeText(text.replaceAll("-", "").trim());
    alert("계좌번호가 복사되었습니다");
  };

  return (
    <div className="account-section">

      <div className="account-title">마음 전하실 곳</div>

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
                      <div className="account-role">{person.role}</div>
                      <div className="account-name">{person.name}</div>
                    </div>

                    <div className="account-right">
                      <span className="account-number">
                        {person.bank} {person.number}
                      </span>
                      <button
                        className="copy-btn"
                        onClick={() => copy(person.number)}
                      >
                        복사
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}
