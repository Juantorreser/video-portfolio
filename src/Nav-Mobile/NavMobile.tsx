import { useEffect } from "react";
import "./NavMobile.scss";

export default function NavMobile() {
  //Handle click on links
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

  //Handle active link on scroll
  useEffect(() => {

    const changeActiveLink = () => {
      const scrollPadding: number = 80;
      const homeSection = document.getElementById("hero") as HTMLElement;
      const servicesSection = document.getElementById("services") as HTMLElement;
      // const skillsSection = document.getElementById('skills') as HTMLElement;
      // const workSection = document.getElementById('work') as HTMLElement;
      // const contactSection = document.getElementById('contactMe') as HTMLElement;

      const homeHeight: number = homeSection.getBoundingClientRect().bottom;
      const servicesHeight: number = servicesSection.getBoundingClientRect().bottom;
      // const skillsHeight : number = skillsSection.getBoundingClientRect().height;
      // const workHeight : number = workSection.getBoundingClientRect().height;
      
      const linksList = document.querySelectorAll("#navMobile a");

      const linksObjectList = [
        { name: "home", element: linksList[0], bottom: homeHeight },
        { name: "services", element: linksList[1], bottom: servicesHeight },
        // { name: "skills", element: linksList[2], height : skillsHeight},
        // { name: "work", element: linksList[3], height : workHeight},
      ];

      linksObjectList.forEach((link) => {
        if (link.bottom > 80 && link.bottom < screen.height + scrollPadding) {
          link.element.classList.add("active");
        } else {
          link.element.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", changeActiveLink)
  }, []);


  return (
    <div
      id="navMobile"
      className="p-5 fixed bottom-0 w-full flex justify-center items-center text-white z-50 shadow-3xl
                md:hidden"
    >
      <div className=" w-96 bg-sec rounded-full p-3 flex justify-evenly">
        <a href="#hero" className="active p-4">
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
