import { useRef, useEffect } from "react";

const Hero = () => {
  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);
  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="Build for Apple Intelligence." />
      </div>
      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
      <button>購入</button>
      <p>248,800円（税込）から、または10,366円/月（税込）の24回払いから*</p>
      <span>Apple Intelligenceは現在、米国英語で利用できます</span>
    </section>
  );
};

export default Hero;
