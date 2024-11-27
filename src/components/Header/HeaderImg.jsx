import Header from "../../assets/header.jpg";
import Header2 from "../../assets/header2.png";
const HeaderImg = () => {
  return (
    <div className="relative w-full">
      <img
        src={Header}
        alt="Header"
        className="w-full object-contain h-64 lg:h-auto"
      />

      {/* Segunda imagen centrada */}
      <div className="absolute inset-0 flex justify-center items-center ">
        <img
          src={Header2} // Aquí va la URL de tu segunda imagen
          alt="Centered Image"
          className="w-full object-contain h-64 sm:h-96 lg:h-auto"
        />
      </div>
    </div>
  );
};

export default HeaderImg;
