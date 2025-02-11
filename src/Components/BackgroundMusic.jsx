import { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      audioRef.current.play().catch((error) => {
        console.log("Автозапуск заблокирован:", error);
      });
    };

    document.addEventListener("click", playAudio, { once: true });

    return () => document.removeEventListener("click", playAudio);
  }, []);

  return (
    <audio ref={audioRef} src="/the-way-home-6674.mp3" loop autoPlay style={{ display: "none" }} />
  );
};

export default BackgroundMusic;
