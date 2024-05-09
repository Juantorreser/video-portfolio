import { useEffect } from "react";
import "./Header.scss";

export default function Header() {
  //Scroll Listener
  useEffect(() => {
    const changeHeaderBg = () => {
      const header = document.getElementById("header") as HTMLElement;
      const staticHeaderStyle = () => {
        header.style.transition = "background-color 0.2s ease";
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
      };

      const onScrollHeaderStyle = () => {
        header.style.transition = "background-color 0.2s ease";
        header.style.backgroundColor = "#3A2425";
        header.style.boxShadow = "0 10px 30px  rgba(0,0,0,0.5)";
      };

      window.scrollY > 1 ? onScrollHeaderStyle() : staticHeaderStyle();
    };

    const changeActiveLink = () => {
      const scrollPadding: number = 80;
      const homeSection = document.getElementById("hero") as HTMLElement;
      const servicesSection = document.getElementById("services") as HTMLElement;
      const skillsSection = document.getElementById('skills') as HTMLElement;
      const workSection = document.getElementById('work') as HTMLElement;


      const homeHeight: number = homeSection.getBoundingClientRect().bottom;
      const servicesHeight: number =
        servicesSection.getBoundingClientRect().bottom;
      const skillsHeight : number = skillsSection.getBoundingClientRect().bottom;
      const workHeight : number = workSection.getBoundingClientRect().bottom;

      const linksList = document.querySelectorAll("#header ul a");

      const linksObjectList = [
        { name: "home", element: linksList[0], bottom: homeHeight },
        { name: "services", element: linksList[1], bottom: servicesHeight },
        { name: "skills", element: linksList[2], bottom : skillsHeight},
        { name: "work", element: linksList[3], bottom : workHeight},
      ];

      linksObjectList.forEach((link) => {
        if (link.bottom > 80 && link.bottom < screen.height + scrollPadding) {
          link.element.classList.add("active");
        } else {
          link.element.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", () => {
      changeHeaderBg();
      changeActiveLink();
    });
  }, []);

  return (
    <nav
      id="header"
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
