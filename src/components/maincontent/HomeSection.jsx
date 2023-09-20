import phone from "../../assets/phone.png";

const HomeSection = () => {
  return (
    <div className="relative mx-auto max-w-7xl">
      <h2 className="text-center text-[95px] font-extrabold uppercase leading-none tracking-wider sm:text-[150px] sm:leading-[150px] lg:text-[180px]">
        <span className="mr-">CA</span>
        <span className="ml-6 sm:ml-12 lg:ml-16">SH</span>
      </h2>
      <img
        src={phone}
        alt="phone"
        className="absolute -top-4 right-[4.3rem] h-[220px] w-[180px] sm:-top-10 sm:right-[8rem] sm:h-[370px] sm:w-[300px] lg:right-[9.7rem] lg:h-[413px] lg:w-[355px]"
      />
      <h2 className="relative z-50 text-center text-[95px] font-extrabold uppercase leading-none tracking-wider sm:text-[150px] sm:leading-[150px] lg:text-[180px]">
        APP
      </h2>
    </div>
  );
};

export default HomeSection;
