import React, { useEffect, useRef, useState } from "react";
import piano from "../assets/piano.mp3";
import EarphoneOff from "../assets/earphoneOff.svg";
import EarphoneOn from "../assets/earphoneOn.svg";
import "./Earphone.css";

const Earphone = () => {
  const [sound, setSound] = useState(false);
  const [hover, setHover] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    // Auto play muted audio
    if (audioRef.current) {
      audioRef.current.muted = true; // Initially muted
      audioRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []); // Empty dependency array means this effect runs only once when the component is mounted

  useEffect(() => {
    if (sound === true) {
      audioRef.current?.play();
    } else {
      audioRef.current.pause();
    }
  }, [sound]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted; // Toggle mute
    }
    setSound((prev) => !prev);
  };

  return (
    <>
      <button
        className="app__earphone"
        onClick={toggleMute}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={sound ? EarphoneOn : EarphoneOff}
          alt="Earphone"
          className="app__earphone-img"
        />
        <span
          className={hover ? "app__earphone-span_show" : "app__earphone-span"}
        >
          {sound ? `Sound On` : `Sound Off`}
        </span>
        {/* AUDIO */}
        <audio ref={audioRef} className="app__audio" loop>
          <source src={piano} type="audio/mp3" />
        </audio>
      </button>
    </>
  );
};

export default Earphone;
