import "./Work.scss";
import poster from "../assets/portfolio/PlayIcon.png";
import {useEffect, useState} from "react";

export default function Work() {
    const nikeVideoUrl = "https://www.youtube.com/embed/EyQaYMqNcUs";
    const deadpoolVideoUrl = "https://www.youtube.com/embed/-_HY6ODw88w";
    const figmaVideoUrl = "https://www.youtube.com/embed/lq_kNqrodJs";
    const debesSaber1Url = "https://www.youtube.com/embed/gbWXAw3r4uY";
    const debesSaberUrl2 = "https://www.youtube.com/embed/5sWww1hh28M";
    const videos = [deadpoolVideoUrl, nikeVideoUrl, figmaVideoUrl, debesSaber1Url, debesSaberUrl2];

    const [activeVideo, setActiveVideo] = useState(0);

    useEffect(() => {
        if (window.innerWidth <= 767) {
            const videoElements = document.querySelectorAll<HTMLVideoElement | HTMLIFrameElement>(
                ".slider ul video, .slider ul iframe"
            );

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
            const videoElements = document.querySelectorAll<HTMLVideoElement>(".slider ul video");

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
            <h1 className="sectionTitle">My Work</h1>
            <div id="portfolio" className="bg-ter">
                <div id="portfolioDisplay" className="slider">
                    <ul>
                        {videos.map((video, i) => {
                            return (
                                <li key={video + i}>
                                    <iframe src={video}></iframe>
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
                        className="btn prevBtn">
                        {"<"}
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
                        className="btn nextBtn">
                        {">"}
                    </div>
                </div>
            </div>
        </section>
    );
}
