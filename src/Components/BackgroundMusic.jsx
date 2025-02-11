import { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.log("Автозапуск заблокирован:", error);
        });
      }
    };

    const events = ["pointerdown", "keydown", "mousemove", "touchstart", "click"];
    
    events.forEach((event) => document.addEventListener(event, playAudio, { once: true }));

    return () => {
      events.forEach((event) => document.removeEventListener(event, playAudio));
    };
  }, []);

  return (
    <audio ref={audioRef} src="/the-way-home-6674.mp3" loop autoPlay style={{ display: "none" }} />
  );
};

export default BackgroundMusic;
