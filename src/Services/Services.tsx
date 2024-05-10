import "./Services.scss";
import showreelVideo from "../assets/Showreels/Showreel.mp4";
import graphicsShowreel from "../assets/Showreels/ShowreelTorreser.mp4";

export default function Services() {
  return (
    <section id="services" className="pt-10 pb-10 bg-white">
      <h1 className="text-center text-ter text-4xl font-semibold">Services</h1>
      <div className="flex flex-col-reverse mt-0 md:mt-14 md:flex-row w-full items-center md:justify-evenly">
        <div className="flex flex-row md:flex-column ">
          <video controls width={400}>
            <source src={showreelVideo} type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-row w-full md:w-auto md:flex-column p-14 text-center justify-center items-center text-2xl">
          <ul>
            <li>Proffesional Video Editing</li>
            <li>High Retention Videos</li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full md:justify-around items-center">
        <div className="flex flex-column p-14 text-center justify-center items-center text-2xl">
          <ul>
            <li>Accurrate Audio Design</li>
            <li>Motion Graphics Animations</li>
            <li></li>
          </ul>
        </div>
        <div className="flex flex-column md:p-14">
          <video controls width={200}>
            <source src={graphicsShowreel} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
