import { useEffect} from "react";
import "./NavMobile.scss";

export default function NavMobile() {
  //Handle active link on scroll
  useEffect(() => {
    const changeActiveLink = () => {
      const scrollPadding: number = 80;
      const homeSection = document.getElementById("hero") as HTMLElement;
      const servicesSection = document.getElementById("services") as HTMLElement;
      const skillsSection = document.getElementById('skills') as HTMLElement;
      const workSection = document.getElementById('work') as HTMLElement;

      //Sections Height
      const homeHeight: number = Math.floor(homeSection.getBoundingClientRect().height);
      const servicesHeight: number = Math.floor(servicesSection.getBoundingClientRect().height);
      const skillsHeight : number = Math.floor(skillsSection.getBoundingClientRect().height);
      const workHeight : number = Math.floor(workSection.getBoundingClientRect().height);

      //Sections Top
      const homeTop: number = Math.floor(homeSection.getBoundingClientRect().top);
      const servicesTop: number = Math.floor(servicesSection.getBoundingClientRect().top);
      const skillsTop : number = Math.floor(skillsSection.getBoundingClientRect().top);
      const workTop : number = Math.floor(workSection.getBoundingClientRect().top);

      const linksList = document.querySelectorAll("#navMobile a");

      const linksObjectList = [
        { name: "home", element: linksList[0], height: homeHeight, top: homeTop },
        { name: "services", element: linksList[1], height: servicesHeight, top: servicesTop },
        { name: "skills", element: linksList[2], height : skillsHeight, top: skillsTop },
        { name: "work", element: linksList[3], height : workHeight, top: workTop},
      ];
      
      linksObjectList.forEach((link) => {
        if (link.top <= scrollPadding && Math.abs(link.top) < link.height - scrollPadding) {
          if (link.element.classList.contains("active")){
            return;
          } else{
            link.element.classList.add("active");
          }

        } else {
          link.element.classList.remove("active");
        }
      });
    };
    window.addEventListener("scroll", changeActiveLink);
  }, []);

  return (
    <div
      id="navMobile"
      className="p-5 fixed bottom-0 w-full flex justify-center items-center text-white z-50 shadow-3xl
                md:hidden"
    >
      <div className=" w-96 bg-sec rounded-full p-3 flex justify-evenly">
        <a href="#hero" className="active p-4">
          <i className="fa fa-home" aria-hidden="true"></i>
          <span className="ms-2">Home</span>
        </a>
        <a href="#services" className="p-4">
          <i className="fa fa-list" aria-hidden="true"></i>
          <span className="ms-2">Services</span>
        </a>
        <a href="#skills" className="p-4">
          <i className="fa fa-star" aria-hidden="true"></i>
          <span className="ms-2">Skills</span>
        </a>
        <a href="#work" className="p-4">
          <i className="fa fa-play" aria-hidden="true"></i>
          <span className="ms-2">Work</span>
        </a>
      </div>
    </div>
  );
}
