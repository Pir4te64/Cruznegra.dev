import { useState } from "react";
import WorksLeft from "./Works";
import WorksRight from "./Works2";
import p1 from "../../assets/projects/p1.png";
import p2 from "../../assets/projects/p2.png";
import p5 from "../../assets/projects/p5.png";
import p6 from "../../assets/projects/p6.png";

const Projects = () => {
  const [showExtraProjects, setShowExtraProjects] = useState(false); // Estado para mostrar/ocultar proyectos adicionales

  const toggleViewMore = () => {
    setShowExtraProjects((prev) => !prev); // Alternar el estado
  };

  return (
    <div id="project">
      {/* Proyectos iniciales */}
      <div>
        <WorksLeft
          imageDesktop={p1}
          imageMobile={p2}
          projectName="Project Name Here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          tags={["Etiqueta1", "Etiqueta2", "Etiqueta3"]}
        />
        <WorksRight />
        <WorksLeft
          imageDesktop={p5}
          imageMobile={p6}
          projectName="Project Name Here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          tags={["Etiqueta1", "Etiqueta2", "Etiqueta3"]}
        />
      </div>

      {/* Mostrar/ocultar proyectos adicionales */}
      {showExtraProjects && (
        <div>
          <WorksLeft
            imageDesktop={p1}
            imageMobile={p2}
            projectName="Project Name Here"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            tags={["Etiqueta1", "Etiqueta2", "Etiqueta3"]}
          />
          <WorksRight />
          <WorksLeft
            imageDesktop={p5}
            imageMobile={p6}
            projectName="Project Name Here"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            tags={["Etiqueta1", "Etiqueta2", "Etiqueta3"]}
          />
        </div>
      )}

      {/* Botón para alternar la visibilidad */}
      <div className="flex justify-center items-center mt-5 md:mt-8 mb-8">
        <button
          onClick={toggleViewMore}
          className="px-6 py-2 bg-transparent text-white border rounded-lg shadow-md hover:bg-white hover:text-black_cruznegra focus:outline-none transition-all"
        >
          {showExtraProjects ? "Hide Projects" : "View All"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
