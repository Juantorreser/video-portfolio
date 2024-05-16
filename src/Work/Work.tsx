import "./Work.scss";
import Bartender from "../assets/portfolio/Bartender.mp4";
import Wines from "../assets/portfolio/Wines.mp4";
// import Deadpool from "../assets/portfolio/Deadpool.mp4";
import jsPark from "../assets/portfolio/JsPark.mp4";
import LaAxe from "../assets/portfolio/LaAxe.mp4";
// import Nike from "../assets/portfolio/NikeAsPizza.mp4";
import { useEffect, useState } from "react";

export default function Work() {
  const videos = [Bartender, Wines, LaAxe, jsPark];

  const [activeVideo, setActiveVideo] = useState(0);

  const playVideo = (activeVideo: number) => {
    const playBtn = document.querySelector(".playBtn") as HTMLElement;

    const videoToPlay = document.getElementById(
      `video${activeVideo}`
    ) as HTMLMediaElement;

    if (videoToPlay.paused) {
      videoToPlay.play();
      playBtn.innerHTML = "||";
    } else {
      videoToPlay.pause();
      playBtn.innerHTML = "&#x25B6;";
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 767) {
      const videoElements =
        document.querySelectorAll<HTMLVideoElement>(".slider ul video");

      let rightPosition = 40;
      let leftPosition = -100;
      let zIndex = 0;
      videoElements.forEach((video, i) => {
        video.style.position = "absolute";
        if (i > activeVideo && i === activeVideo + 1) {
          //Right Video
          video.style.transform = `translateX(${rightPosition}px) translateY(-50%) scale(0.8)`;
          video.style.zIndex = `${zIndex - 1}`;
          video.style.opacity = `${0.5}`;
        } else if (i < activeVideo && i === activeVideo - 1) {
          //Left Video
          video.style.transform = `translateX(${leftPosition}%) translateY(-50%) scale(0.8)`;
          video.style.zIndex = `${zIndex - 1}`;
          video.style.opacity = `${0.5}`;
        } else if (i === activeVideo) {
          //ACtive VIdeo
          video.style.transform = `translate(-50%, -50%) scale(1)`;
          video.style.zIndex = `${1}`;
          video.style.opacity = `${1}`;
        } else {
          //Other Videos
          video.style.opacity = `${0}`;
        }
      });
    } else {
      const videoElements =
        document.querySelectorAll<HTMLVideoElement>(".slider ul video");

      videoElements.forEach((video) => {
        video.style.position = "relative";
        video.style.transform = `translateX(-50%)`;
        video.style.zIndex = `${1}`;
        video.style.opacity = `${1}`;
      });
    }
  }, [activeVideo, window.innerWidth]);

  return (
    <section id="work" className="flex items-center flex-col">
      <h1 className="sectionTitle">
        My Work
      </h1>
      <div id="portfolio" className="bg-ter">
        <div id="portfolioDisplay" className="slider">
          <ul>
            {videos.map((video, i) => {
              return (
                <li key={video + i}>
                  <video id={`video${i}`} controls src={video}></video>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="controls">
          <div
            onClick={() => {
              setActiveVideo(() => {
                if (activeVideo === 0) {
                  return activeVideo;
                }
                return activeVideo - 1;
              });
            }}
            className="btn prevBtn"
          >
            {"<"}
          </div>
          <div
            onClick={() => {
              playVideo(activeVideo);
            }}
            className="btn playBtn"
          >
            &#x25B6;
          </div>
          <div
            onClick={() => {
              setActiveVideo(() => {
                if (activeVideo === videos.length - 1) {
                  return activeVideo;
                }
                return activeVideo + 1;
              });
            }}
            className="btn nextBtn"
          >
            {">"}
          </div>
        </div>
      </div>
    </section>
  );
}
