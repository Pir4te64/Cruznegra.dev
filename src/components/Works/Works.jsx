import work from "../../assets/projects/work.svg";
import "./works.css";
const WorksLeft = ({ imageDesktop, imageMobile, projectName, description }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:py-52 gap-4 md:gap-8 overflow-y-hidden">
      {/* Primer div - Imagen de proyectos */}
      <div className="relative col-span-2 flex items-center justify-center">
        {/* Imagen para pantallas grandes */}
        <img
          src={imageDesktop}
          alt="Vista previa de proyectos"
          className="w-full h-auto object-cover rounded-lg md:block hidden" // visible solo en pantallas grandes
        />

        {/* Imagen para pantallas móviles */}
        <img
          src={imageMobile}
          alt="Vista previa de proyectos"
          className="w-full h-auto object-cover rounded-lg md:hidden block" // visible solo en móviles
        />

        {/* Contenedor de información */}
        <div className="w-1/2 absolute md:bottom-10 md:-right-40 boxProjecto bg-black bg-opacity-70 text-white p-0 md:p-4 rounded-lg backdrop-blur-sm px-4 border-t border-l border-r border-neutral_lighter rounded-t-lg">
          <h2 className="text-lg md:text-xl font-bold py-2">{projectName}</h2>
          <p className="text-sm md:text-base md:mt-2 mt-0 md:py-2 py-1">
            {description}
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

      {/* Segundo div - Icono "work" */}
      <div className="w-full flex items-center  justify-end rounded-lg relative mt-28 md:mt-0">
        {/* Imagen centrada en el div para pantallas móviles */}
        <div className="w-full flex justify-center md:justify-end items-end mr-0 md:mr-5">
          <img
            src={work}
            alt="Icono"
            className="w-auto h-auto object-contain mb-4 md:mb-0"
          />
        </div>
      </div>
    </div>
  );
};

export default WorksLeft;
