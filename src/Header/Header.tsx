import "./Header.scss";

export default function Header() {
  return (
    <nav
      className="p-5  justify-between 
                    flex fixed top-0 w-full"
    >
      <a href="#hero" className="text-white text-2xl relative top-2">
        Torreser
      </a>
      <ul
        id="links"
        className="p-0 hidden md:flex justify-center align-middle text-white"
      >
        <a href="#hero">
          <span className="icon">
            <i className="fa fa-home" aria-hidden="true"></i>
          </span>
          <span className="text">Home</span>
        </a>
        <a href="#services">
          <span className="icon">
            <i className="fa fa-list" aria-hidden="true"></i>
          </span>
          <span className="text">Services</span>
        </a>
        <a href="#skills">
          <span className="icon">
            <i className="fa fa-star" aria-hidden="true"></i>
          </span>
          <span className="text">Skills</span>
        </a>
        <a href="#work">
          <span className="icon">
            <i className="fa fa-play" aria-hidden="true"></i>
          </span>
          <span className="text">Work</span>
        </a>
      </ul>
      <a href="#contactMe" className="btn ">
        Contact Me
      </a>
    </nav>
  );
}
