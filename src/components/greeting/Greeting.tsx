import FadeIn from "../FadeIn";

export default function Greeting() {
  return (
      <div className='greeting-section'>
        <FadeIn>
          <div className="invitation-header">
            <div className="invitation-title">INVITATION</div>
          </div>
          <div className="greeting-content">
            <p>
              저희 두 사람의 작은 만남이
              <br />
              사랑의 결실을 이루어
              <br />
              소중한 결혼식을 올리게 되었습니다.
              <br />
              평생 서로 귀하게 여기며
              <br />
              첫 마음 그대로 존중하고 배려하며 살겠습니다.
              <br />
              오로지 믿음과 사랑을 약속하는 날
              <br />
              오셔서 축복해 주시면 더 없는 기쁨으로
              <br />
              간직하겠습니다.
            </p>
          </div>
          {/* 🔥 부모님 정보 영역 */}
          <div className="family-info">
            <p>
              김만식 · 박현주의 아들 <strong>김은목</strong>
            </p>
            <p>
              김동수 · 이선자의 &nbsp;&nbsp;딸&nbsp;&nbsp; <strong>김혜진</strong>
            </p>
          </div>
        </FadeIn>
      </div>
  );
}
