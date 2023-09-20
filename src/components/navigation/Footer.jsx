/* eslint-disable no-unused-vars */
import apple from "../../assets/apple.svg";
import arrow from "../../assets/arrow.svg";
import bigCure from "../../assets/bigCure.png";
import playStore from "../../assets/playstore.svg";
import social1 from "../../assets/social1.svg";
import pillar from "../../assets/pillar.png";
import social2 from "../../assets/social2.svg";
import social3 from "../../assets/social3.svg";
import Button from "../ui/Button";
import { socialMedia } from "../../utils/data";

const Footer = () => {
  const handleBtnAndroid = () => {
    window.location.href = 'https://play.google.com/';
  }

  const handleBtnIOS = () => {
    window.location.href = 'https://www.apple.com/in/app-store/';
  }

  return (
    <div>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-5 py-3">
        <div className="z-10 flex items-center justify-between gap-5 lg:hidden">
          <Button img={apple} text="APP STORE" onClick={handleBtnIOS} />
          <Button img={playStore} text="GOOGLE PLAY" onClick={handleBtnAndroid} />
        </div>
      </div>
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center px-3 py-5 lg:justify-between">
        <div className="z-10 hidden items-center justify-between gap-5 lg:flex">
          <Button img={apple} text="APP STORE" onClick={handleBtnIOS} />
          <Button img={playStore} text="GOOGLE PLAY" onClick={handleBtnAndroid} />
        </div>
        <img
          src={bigCure}
          alt="bigCure"
          className="absolute bottom-56 right-10 h-24 sm:bottom-36 sm:left-10 sm:h-36 lg:bottom-[3.3rem] lg:left-28"
        />
        <img
          src={pillar}
          alt="pillar"
          className="absolute -bottom-4 right-1 h-[110px] sm:right-5 sm:h-[329.878px] lg:right-36"
        />
        <img
          src={arrow}
          alt="arrow"
          className="absolute animate-bounce bottom-72 left-[50%] right-[50%] cursor-pointer sm:bottom-60 lg:bottom-10"
        />

        <div className="flex flex-col items-center justify-center gap-7 px-5 md:flex-row">
          <p className="relative z-20 w-full text-center text-[10px] leading-[13px] text-[#B6B6B6] md:w-[500px] md:text-left lg:w-[363px]">
            lBrokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money.
            Bitcoin trading offered by Cash App. Cash App Investing does not
            trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
            App facilitates banking services through Sutton Bank and Lincoln
            Savings Bank, Members FDIC.
          </p>
          <div className="flex items-center justify-center gap-5">
            {socialMedia.map((item, index) => (
              <div key={index}>
                <a href={item.link}>
                  <img 
                    src={item.image}
                    alt={`social${index + 1}`}
                    className="cursor-pointer"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
