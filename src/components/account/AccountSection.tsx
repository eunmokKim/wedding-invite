import { useState } from 'react';
import Section from '../layout/Section';

interface Account {
  label: string;
  bank: string;
  number: string;
  name: string;
}

const accounts: Account[] = [
  {
    label: '신랑',
    bank: '하나은행',
    number: '759-910177-12507',
    name: '김은목',
  },
  {
    label: '신부',
    bank: '국민은행',
    number: '361-401041-38627',
    name: '김혜진',
  },
];

export default function AccountSection() {
  const [open, setOpen] = useState(false);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('계좌번호가 복사되었습니다');
  };

  return (
    <Section title="마음 전하실 곳">
      <button onClick={() => setOpen(!open)}>
        {open ? '닫기' : '계좌번호 보기'}
      </button>

      {open &&
        accounts.map((acc, i) => (
          <div className='account-item' key={i} style={{ marginTop: '20px' }}>
            <p>
              {acc.label} ({acc.name})
            </p>
            <p>
              {acc.bank} {acc.number}
            </p>
            <button onClick={() => copy(acc.number)}>
              계좌번호 복사
            </button>
          </div>
        ))}
    </Section>
  );
}
