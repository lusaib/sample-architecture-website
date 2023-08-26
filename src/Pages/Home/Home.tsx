import { Link } from "react-router-dom";
import backgroundImage from "../../assets/banner-1.jpg";
import subBuildingImage from "../../assets/building-removebg-preview.png";
import {
  // MdOutlineExpandLess,
  MdOutlineExpandMore,
} from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import "./home.css";
import ContactInfoModal from "./ContactInfoModal";
import { useToggle } from "../../hooks";

export default function Home() {
  const { isOpen, toggle } = useToggle();
  return (
    <>
      <header className="absolute top-0 left-0 right-0 clear-both z-[100] flex justify-between w-full bg-none px-[50px] items-center">
        <Link to="" className="py-[20px] ">
          <img
            src="https://wp1.themevibrant.com/newwp/buildnox/wp-content/uploads/2023/03/logo-light.png"
            alt="logo"
          />
        </Link>
        <ul className="ml-[50px] flex flex-wrap items-center relative">
          {[
            "Home",
            "About",
            "Services",
            "Projects",
            "Pages",
            "Blog",
            "Contact",
          ].map((e) => (
            <li className="py-[37px] mr-[25px] " key={`header-list-${e}`}>
              <Link
                to=""
                className="text-[18px] font-[500] text-white py-[3px] flex items-center"
              >
                <span className="mr-1">{e}</span>
                <MdOutlineExpandMore />
              </Link>
            </li>
          ))}
          <li
            className="rounded-full w-[45px] h-[45px] flex justify-center items-center leading-[42px] cursor-pointer text-white border-[1px] border-solid border-white hover:bg-[#ff6900] transition-colors duration-[1s]"
            onClick={() => toggle("OpenContactInfoModal")}
          >
            <img
              src="https://wp1.themevibrant.com/newwp/buildnox/wp-content/themes/buildnox/assets/images/icons/menu.svg"
              alt="Awesome Image"
            />
          </li>
        </ul>
      </header>
      <section
        id="home-section"
        className="relative w-[100%] h-[99vh] bg-primary bg-cover box-border pb-[120px] pt-[330px] overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute left-[50%] bottom-[-16px] z-10">
          <img
            className="h-[90vh] border-none "
            decoding="async"
            src={
              "https://wp1.themevibrant.com/newwp/buildnox/wp-content/uploads/2023/03/image-1.png"
            }
            alt="Awesome Image"
          />
        </div>
        <div className="box-border absolute right-0 bottom-0 z-[9]">
          <img decoding="async" src={subBuildingImage} alt="Awesome Image" />
        </div>
        <div className="static w-full px-[15px] max-w-[1200px] mx-auto">
          <div className="relative ml-[60px]">
            <h6 className="font-[600] tracking-[13px] uppercase text-white leading-[1.25rem]">
              Vision In
            </h6>
            <h1 className="text-[176px] mb-[30px] relative font-[900] uppercase left-[-9px] leading-[1] text-white">
              Buil
              <span className="text_stroke relative">ding</span>
            </h1>
            <p className="mb-[40px] text-[20px] text-white">
              The point of using Lorem Ipsum is that it <br />
              has a more-or-less normal distribution of <br />
              letters, as opposed to using content here
              <br />
              normal distribution
            </p>
            <Link
              to=""
              className="text-[14px] uppercase font-[700] text-white inline-flex items-center "
            >
              discover more
              <span className="ml-3 font-[700]">
                <BsArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <ContactInfoModal
          isOpen={isOpen("OpenContactInfoModal")}
          toggle={toggle}
        />
      </section>
    </>
  );
}
