import "./hero.scss";
import heroImage from "../assets/hero/heroImage3.png";

export default function Hero() {
  return (
    <section id="hero" className="h-screen">
      <div
        className="p-6 flex flex-col items-center h-full justify-center
                      md:flex md:flex-row md:align-middle md:justify-around"
      >
        <div className="m-14 full flex flex-col justify-center items-center text-5xl font-semibold text-white">
          <p className="m-4">Hey, I'm Torreser</p>
          <p className="m-3">Video Editing</p>
        </div>
        <div className="mt-14 md:w-1/3 flex  justify-center items-center">
          <img
            src={heroImage}
            alt="Video Editing Services"
            className="h-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </section>
  );
}
