import "./Header.scss";

export default function Header() {
  return (
    <nav
      className="p-4  hidden justify-center 
                    lg:flex lg:fixed lg:top-0 lg:w-full"
    >
      <ul id="links" className="p-0 flex justify-center align-middle text-white m-auto relative left-14">
        <li>
          <span className="icon">
            <i className="fa fa-home" aria-hidden="true"></i>
          </span>
          <span className="text">Home</span>
        </li>
        <li>
        <span className="icon">
            <i className="fa fa-list" aria-hidden="true"></i>   
          </span>
          <span className="text">Services</span>
        </li>
        <li>
        <span className="icon">
            <i className="fa fa-star" aria-hidden="true"></i>
          </span>
          <span className="text">Skills</span>
        </li>
        <li>
        <span className="icon">
            <i className="fa fa-play" aria-hidden="true"></i>
          </span>
          <span className="text">Work</span>
        </li>
      </ul>
      <a href="#contactMe" className="btn">
        Contact Me
      </a>
    </nav>
  );
}
