import React, { useState } from "react";
import Links, { LinksMobile } from "./Links";
import HeaderText from "./HeaderText";
import HeaderImg from "./HeaderImg";
import Logo from "../../assets/CruzNegra.svg";
const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className="text-white border-2 border-white lg:m-8 m-4 rounded-xl">
      {/* Main Container */}
      <div className="lg:flex lg:items-center lg:justify-between flex-col">
        {/* Navbar (left side) */}
        <div className="w-full mb-4">
          {/* Contenedor de navbar y texto con botón */}
          <div className="flex items-center w-full">
            {/* Logo y menú desplegable en pantallas grandes */}
            <div
              className="relative flex items-center justify-start w-1/2 cursor-pointer lg:mx-6 p-2 lg:p-0" // Añadido padding en móvil
              onMouseEnter={() => setMenuVisible(true)}
              onMouseLeave={() => setMenuVisible(false)}
            >
              <img
                src={Logo} // URL de tu imagen
                alt="Logo"
                className="img-rotate w-12 h-12" // Más pequeño en móviles
              />
              {/* Menú desplegable en pantallas grandes */}
              <div className="hidden lg:block">{menuVisible && <Links />}</div>
              <div className="lg:hidden flex items-center w-full ml-4 ">
                <LinksMobile />
              </div>
            </div>

            {/* Texto con botón en pantallas grandes */}
            <div className="hidden lg:flex lg:items-center lg:justify-end w-1/2 px-8 py-8">
              <HeaderText />
            </div>
          </div>
        </div>

        {/* Menú horizontal para pantallas pequeñas (dentro del contenedor del logo) */}

        <HeaderImg />
        <div className="lg:hidden flex flex-col items-center w-full">
          <HeaderText />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
