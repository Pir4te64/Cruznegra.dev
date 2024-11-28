import React from "react";
import section from "../../assets/section.png";

const ContacSection = () => {
  return (
    <div className="relative w-full py-6 px-4 h-[284px] md:h-[500px] flex items-center justify-center">
      {/* Imagen */}
      <img
        src={section}
        alt="Sección de contacto"
        className="absolute w-full h-full object-cover md:object-contain"
      />

      {/* Contenedor de texto */}
      <div className="relative z-10 text-center  bg-opacity-70 text-white p-6 md:p-4 px-8 md:px-6 rounded-lg backdrop-blur-md hover:border-l hover:border-r transition-all border-neutral_lighter rounded-t-lg">
        <h1 className="text-lg md:text-4xl font-bold mb-0 md:mb-6">
          You deserve the success
        </h1>
        <p className="text-sm md:text-xl my-1 md:mb-8">
          let us help you achieve it
        </p>
        <button className="bg-white text-black_cruznegra px-2 py-1 md:px-4 md:py-2 text-sm rounded-md border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all">
          Let's Talk
        </button>
      </div>
    </div>
  );
};

export default ContacSection;
