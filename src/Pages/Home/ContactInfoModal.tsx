import { Link } from "react-router-dom";
import { Modal } from "../../components";
import { MdClose } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";

type ContactInfoModalProps = {
  isOpen: boolean;
  toggle: (arg: string) => void;
};

export default function ContactInfoModal({
  isOpen,
  toggle,
}: ContactInfoModalProps) {
  return (
    <Modal isOpen={isOpen}>
      <section className="fixed z-[9999] w-full bg-[#141414B2] left-0 top-0 bottom-0 right-0 overflow-hidden text-[#172b56]">
        <div className="max-w-[470px] w-full px-[45px] py-[40px] bg-white overflow-auto flex flex-wrap items-center absolute top-0 right-0 bottom-0">
          <button
            className="absolute top-[40px] right-[40px] text-[30px] cursor-pointer "
            onClick={() => toggle("OpenContactInfoModal")}
          >
            <MdClose />
          </button>
          <div className="pb-[30px] mb-[50px] border-b-[1px] border-b-solid border-b-[#e7e7e7] w-full ">
            <Link to="">
              <img
                src="https://wp1.themevibrant.com/newwp/buildnox/wp-content/uploads/2023/03/logo.png"
                alt="logo"
              />
            </Link>
          </div>
          <div id="about" className="mb-[40px]">
            <h3 className="text-[28px] font-[700] mb-[28px] leading-[1.25em]">
              Finding The Best
              <br />
              Construction Service
            </h3>
            <div className="text-[16px] leading-[28px] font-[400] text-[#797979] mb-[15px]">
              We denounce with righteous indignation and dislike men who we are
              to beguiled demoralized by the charms of pleasures that moment, so
              we blinded desires, that they indignations.
            </div>
          </div>
          <div className="mb-[40px] ">
            <h4 className="mb-[20px] font-[500] text-[22px] leading-[1.25em]">
              Contact Us
            </h4>
            <ul>
              <li className="flex mb-[20px]">
                <div>
                  <img
                    src="https://wp1.themevibrant.com/newwp/buildnox/wp-content/themes/buildnox/assets/images/icons/icon-7__mapmarker.png"
                    alt="Awesome Image"
                  />
                </div>
                <p className="text-[18px] leading-[24px] font-[400] text-[#494949] ml-8">
                  54B, Tailstoi Town 5238 MT,
                  <br /> La city, IA 522364
                </p>
              </li>
              <li className="flex mb-[25px]">
                <div>
                  <img
                    src="https://wp1.themevibrant.com/newwp/buildnox/wp-content/themes/buildnox/assets/images/icons/icon-8__envelop.png"
                    alt="Awesome Image"
                  />
                </div>
                <p className="text-[18px] leading-[24px] font-[400] text-[#494949] ml-8">
                  <a href="mailto:info@example.com">info@example.com</a>
                </p>
              </li>
              <li className="flex mb-[25px]">
                <div>
                  <img
                    src="https://wp1.themevibrant.com/newwp/buildnox/wp-content/themes/buildnox/assets/images/icons/icon-9__phone.png"
                    alt="Awesome Image"
                  />
                </div>
                <p className="text-[18px] leading-[24px] font-[400] text-[#494949] ml-8">
                  <a href="tel:+1800-456-7890">+1800-456-7890</a>
                </p>
              </li>
              <li className="flex mb-[15px]">
                <div>
                  <img
                    src="https://wp1.themevibrant.com/newwp/buildnox/wp-content/themes/buildnox/assets/images/icons/icon-10__clock.png"
                    alt="Awesome Image"
                  />
                </div>
                <p className="text-[18px] leading-[24px] font-[400] text-[#494949] ml-8">
                  Working Hrs : 9.30am to 6.30pm
                </p>
              </li>
            </ul>
          </div>
          <div id="news-letter" className="w-full box-border mb-[40px]">
            <h4 className=" mb-[20px] font-[500] text-[22px] leading-[1.25em] ">
              Newsletter Subscription
            </h4>
            <div className="inline-flex w-full">
              <input
                placeholder="Enter your email address"
                className="border-[1px] border-[#e7e7e7] px-[20px] py-[23px] w-full mb-[10px] h-[60px] bg-white box-border rounded-l-md"
              />
              <button className="h-[60px] w-[80px] bg-red-500 rounded-r-md flex items-center justify-center text-[20px] text-white">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
}
