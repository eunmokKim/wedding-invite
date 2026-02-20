import { useEffect, useState } from "react";
import FadeIn from "../FadeIn";

export default function WeddingDay() {
  const weddingDate = new Date("2026-06-07T14:00:00");

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = weddingDate.getTime() - now.getTime();

    const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
    const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
    const minutes = Math.max(0, Math.floor((diff / (1000 * 60)) % 60));
    const seconds = Math.max(0, Math.floor((diff / 1000) % 60));

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 2026년 6월 달력 생성
  const year = 2026;
  const month = 5; // JS는 0부터 시작 (5 = 6월)

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const calendar: (number | null)[] = [];

  for (let i = 0; i < firstDay; i++) {
    calendar.push(null);
  }

  for (let i = 1; i <= lastDate; i++) {
    calendar.push(i);
  }

  return (
    <div className="wedding-section">
        <FadeIn>
        <div className="wedding-title">WEDDING DAY</div>

        <div className="wedding-date">
            2026년 6월 7일 일요일 | 오후 2시
        </div>

        <div className="calendar">
            {["일","월","화","수","목","금","토"].map((d) => (
            <div key={d} className="calendar-header">{d}</div>
            ))}

            {calendar.map((day, i) => (
            <div
                key={i}
                className={`calendar-cell ${
                day === 7 ? "wedding-day" : ""
                }`}
            >
                {day}
            </div>
            ))}
        </div>

        <div className="countdown">
            <div className="count-card">
            <div>{timeLeft.days}</div>
            <span>DAYS</span>
            </div>
            <div className="count-card">
            <div>{timeLeft.hours}</div>
            <span>HOURS</span>
            </div>
            <div className="count-card">
            <div>{timeLeft.minutes}</div>
            <span>MINUTES</span>
            </div>
            <div className="count-card">
            <div>{timeLeft.seconds}</div>
            <span>SECONDS</span>
            </div>
        </div>

        <div className="wedding-message">
            은목 ♥ 혜진 결혼식이 {timeLeft.days}일 남았습니다
        </div>
        </FadeIn>
    </div>
  );
}