import "./NavMobile.scss";

export default function NavMobile() {
  const toogleActive = (event: any) => {
    const currentElement = event.target;
    const parentElement = currentElement.parentElement;
    const linkList = document.querySelectorAll("#navMobile a");

    linkList.forEach((link) => {
      //Remove current active
      if (link.classList.contains("active")) {
        link.classList.remove("active");
        link.classList.add("p-4");
      }
    });
    
    parentElement.classList.add("active");
  };

  return (
    <div
      id="navMobile"
      className="p-5 fixed bottom-0 w-full flex justify-center items-center text-white
                md:hidden"
    >
      <div className=" w-96 bg-sec rounded-full p-3 flex justify-evenly">
        <a href="#hero" className="active">
          <i
            className="fa fa-home"
            aria-hidden="true"
            onClick={toogleActive}
          ></i>
          <span className="ms-2">Home</span>
        </a>
        <a href="#services" className="p-4">
          <i
            className="fa fa-list"
            aria-hidden="true"
            onClick={toogleActive}
          ></i>
          <span className="ms-2">Services</span>
        </a>
        <a href="#skills" className="p-4">
          <i
            className="fa fa-star"
            aria-hidden="true"
            onClick={toogleActive}
          ></i>
          <span className="ms-2">Skills</span>
        </a>
        <a href="#work" className="p-4">
          <i
            className="fa fa-play"
            aria-hidden="true"
            onClick={toogleActive}
          ></i>
          <span className="ms-2">Work</span>
        </a>
      </div>
    </div>
  );
}
