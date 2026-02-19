import FadeIn from "../FadeIn";

export default function Greeting() {
  return (
      <div className='greeting-section'>
        <FadeIn>
          <div className="invitation-header">
            <div className="mini-heart">♥</div>
            <div className="invitation-title">INVITATION</div>
          </div>
          <div className="greeting-content">
            <p>
              소중한 내 사람과 부부라는 이름으로
              <br />
              따뜻한 가정을 이루게 되었습니다.
              <br />
              바쁘시더라도 빛나는 날
              <br />
              시작하는 저희의 앞날을 축복해 주시면 
              <br />
              더없는 기쁨이 되겠습니다.
            </p>
          </div>
        </FadeIn>
      </div>
  );
}
