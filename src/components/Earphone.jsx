import React, { useEffect, useRef, useState } from "react";
import piano from "../assets/piano.mp3";
import EarphoneOff from "../assets/earphoneOff.svg";
import EarphoneOn from "../assets/earphoneOn.svg";
import "./Earphone.css";

const Earphone = () => {
  const [sound, setSound] = useState(true); // Default to true, meaning sound is ON
  const [hover, setHover] = useState(false);
  const audioRef = useRef(null);

  // Automatically play the audio when the component mounts, with initial mute.
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = false; // Make sure the audio is unmuted
      audioRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
        // Handle any errors like autoplay being blocked
      });
    }
  }, []); // Empty dependency means this runs only once when the component is mounted

  // Toggle the sound on and off
  useEffect(() => {
    if (audioRef.current) {
      if (sound) {
        audioRef.current.play(); // Play when sound is ON
      } else {
        audioRef.current.pause(); // Pause when sound is OFF
      }
    }
  }, [sound]);

  return (
    <>
      <button
        className="app__earphone"
        onClick={() => setSound((prev) => !prev)} // Toggle sound on/off
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
