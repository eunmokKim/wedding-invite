import Section from '../layout/Section';

export default function Greeting() {
  return (
    <Section title="초대합니다">
      <p>
        서로의 하루가 되어
        <br />
        같은 길을 걷고자 합니다.
      </p>

      <p style={{ marginTop: '24px' }}>
        소중한 분들을 모시고
        <br />
        결혼식을 올리고자 하오니
        <br />
        자리를 빛내주시길 바랍니다.
      </p>

      <p style={{ marginTop: '32px', fontWeight: 500 }}>
        신랑 김OO · 신부 이OO
      </p>
    </Section>
  );
}
