import { useEffect, useRef, useState } from "react";
import heroImage from "../../assets/images/gallery/main.jpg";
import bgm from "../../assets/music/bgm2.mp3";
import { Pause, Play } from "lucide-react";

export default function Intro() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((current / duration) * 100);
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
      <div className="intro-title">
        Love begins here
      </div>

      <section
        className="intro-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="intro-overlay">
          <h1>
            은목 <span className="heart">♥</span> 혜진
          </h1>
          <p className="date">2026.06.07 SUN <br/>PM 2:00</p>
        </div>
      </section>

      {/* 🎵 음악 영역 */}
      <div className="music-player">
        <audio
          ref={audioRef}
          src={bgm}
          onTimeUpdate={handleTimeUpdate}
          preload="auto"
          loop
        />

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="music-controls">

          <button className="play-btn" onClick={togglePlay}>
            {playing ? <Pause size={28} /> : <Play size={28} />}
          </button>
        </div>
      </div>
    </div>
  );
}
