import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>몽골 여행</h1>
      <p>떠나 볼까요?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle={"btn--outline"}
          buttonSize={"btn--large"}
        >
          바로 가기
        </Button>
        <Button
          className="btns"
          buttonStyle={"btn--primary"}
          buttonSize={"btn--large"}
        >
          미리 보기 <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
