import { useEffect, useRef, useState } from "react";
import heroImage from "/gallery/main.jpg";
import bgm from "../../assets/music/bgm.mp3";
import { Pause, Play } from "lucide-react";

export default function Intro() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const playAudio = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        // 모바일 브라우저 autoplay 차단됨
        console.log("Autoplay prevented:", error);
      }
    };

    playAudio();
  }, []);

  return (
    <div className="intro-wrapper">
      {/* 🔥 작은 플레이 버튼 */}
        <button className="floating-play-btn" onClick={togglePlay}>
          {playing ? <Pause size={16} /> : <Play size={16} />}
        </button>
      <div className="intro-title">
        Love begins here
      </div>

      <section className="intro-hero" style={{ backgroundImage: `url(${heroImage})` }}>
      </section>

      {/* 🎵 음악 영역 */}
        <audio
          ref={audioRef}
          src={bgm}
          preload="auto"
          loop
        />
    </div>
  );
}
