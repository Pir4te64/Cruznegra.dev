import p3 from "../../assets/projects/p3.png";
import p4 from "../../assets/projects/p4.png";
import work from "../../assets/projects/work.svg";
import "./works.css";

const WorksRight = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-4 py-8 gap-4 md:gap-8 overflow-y-hidden">
      {/* Primer div - Icono "work" a la izquierda */}
      <div className="w-full flex items-center justify-start rounded-lg relative mt-28 md:mt-0 order-2 md:order-1">
        {/* Imagen centrada en el div para pantallas móviles */}
        <div className="w-full flex justify-center md:justify-start items-end ml-0 md:ml-5">
          <img
            src={work}
            alt="Icono"
            className="w-auto h-auto object-contain mb-4 md:mb-0"
          />
        </div>
      </div>

      {/* Segundo div - Imagen de proyectos a la derecha */}
      <div className="relative col-span-2 flex items-center justify-center order-1 md:order-2">
        {/* Imagen para pantallas grandes */}
        <img
          src={p3}
          alt="Vista previa de proyectos"
          className="w-full h-auto object-cover rounded-lg md:block hidden" // visible solo en pantallas grandes
        />

        {/* Imagen para pantallas móviles */}
        <img
          src={p4}
          alt="Vista previa de proyectos"
          className="w-full h-auto object-cover rounded-lg md:hidden block" // visible solo en móviles
        />

        {/* Contenedor de información */}
        <div className="w-1/2 absolute md:bottom-10 md:-left-40 boxProjecto1 bg-black bg-opacity-70 text-white p-0 md:p-4 rounded-lg backdrop-blur-sm px-4 border-t border-l border-r border-neutral_lighter rounded-t-lg">
          <h2 className="text-lg md:text-xl font-bold py-2">
            Project Name Here
          </h2>
          <p className="text-sm md:text-base md:mt-2 mt-0 md:py-2 py-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-wrap gap-2 mt-0 md:mt-3 py-0 md:py-2">
            <span className="px-2 py-1 text-sm md:text-base text-white border-t border-l border-r border-white rounded-t-lg bg-transparent">
              #Etiqueta1
            </span>
            <span className="px-2 py-1 text-sm md:text-base text-white border-t border-l border-r border-white rounded-t-lg bg-transparent">
              #Etiqueta2
            </span>
            <span className="px-2 py-1 text-sm md:text-base text-white border-t border-l border-r border-white rounded-t-lg bg-transparent">
              #Etiqueta3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksRight;
