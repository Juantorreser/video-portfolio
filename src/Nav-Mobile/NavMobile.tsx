import "./NavMobile.scss";

export default function NavMobile() {
  return (
    <div
      className="p-5 fixed bottom-0 w-full flex justify-center items-center
                md:hidden"
    >
      <div className=" w-80 bg-sec rounded-3xl p-3 flex justify-around">
        <a href="">
          <i className="fa fa-home" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-list" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-star" aria-hidden="true"></i>
        </a>
        <a href="">
          <i className="fa fa-play" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}
