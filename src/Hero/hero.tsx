import "./Hero.scss";

export default function Hero() {
  return (
    <section id="hero" className="h-screen">
      <div className="p-6 flex w-full h-full  align-middle justify-around">
        <div className="w-1/3 flex justify-center items-center">
            <p>Hola</p>
        </div>
        <div className="w-1/3 flex justify-center items-center">
            <img src="" alt="Video Editing Services"/>
        </div>
      </div>
    </section>
  );
}
