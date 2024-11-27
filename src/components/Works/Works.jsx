import React from "react";
import p1 from "../../assets/projects/p1.png";
import work from "../../assets/projects/work.svg";
const Works = () => {
  return (
    <div className="flex px-4 py-8 gap-4">
      {/* Primer div - Imagen de proyectos */}
      <div className="relative w-2/3 flex items-center justify-center">
        {/* Imagen */}
        <img
          src={p1}
          alt="Vista previa de proyectos"
          className="w-full h-auto object-cover rounded-lg"
        />
        {/* Contenedor de información */}
        <div className="w-1/2 absolute md:bottom-10 md:-right-40 bottom-0 left-0  bg-black bg-opacity-70 text-white p-4 rounded-lg backdrop-blur-sm px-4  border-t border-l border-r border-neutral_lighter rounded-t-lg ">
          <h2 className="text-xl font-bold py-2">Project Name Here</h2>
          <p className="text-sm mt-2 py-2">
            Breve descripción del proyecto que proporciona información clave.
          </p>
          <div className="flex flex-wrap gap-2 mt-3 py-2">
            <span className="px-3 py-2 text-white border-t border-l border-r border-white rounded-t-lg bg-transparent ">
              #Etiqueta1
            </span>
            <span className="px-3 py-2 text-white border-t border-l border-r border-white rounded-t-lg bg-transparent">
              #Etiqueta2
            </span>
            <span className="px-3 py-2 text-white border-t border-l border-r border-white rounded-t-lg bg-transparent">
              #Etiqueta3
            </span>
          </div>
        </div>
      </div>

      {/* Segundo div - Texto "work" */}
      <div className="w-1/3 flex items-center justify-center rounded-lg relative">
        {/* Imagen en la esquina inferior derecha */}
        <div className="absolute bottom-32 right-2">
          <img
            src={work}
            alt="Icono"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
