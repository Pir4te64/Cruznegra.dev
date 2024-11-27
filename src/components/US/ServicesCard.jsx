const ServiceCard = ({ image, title, description, techStack, direccion }) => {
  return (
    <div className="px-4 py-4 sm:px-6 sm:py-8 rounded-lg shadow-md flex-1 min-w-[350px]">
      {/* Contenedor de la imagen y el título */}
      <div
        className={`flex items-center gap-6 mb-5 ${
          direccion === "right" ? "flex-row-reverse sm:flex-row" : "flex-row"
        }`}
      >
        {/* Imagen */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        {/* Título */}
        <div className="flex-1">
          <h3
            className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-white ${
              direccion === "right" ? "text-right sm:text-left" : "text-left"
            }`}
          >
            {title}
          </h3>
        </div>
      </div>

      {/* Descripción y TechStack */}
      <div className="px-4 pt-4 sm:pt-6 border-2 border-white w-full rounded-md flex flex-col justify-between items-center">
        <div className="mt-4 mx-6">
          <p className="text-white text-center font-medium text-sm sm:text-xl h-[100px]">
            {description}
          </p>
        </div>
        <div className="mt-4 bg-white rounded-t-lg">
          <p className="text-black_cruznegra p-2 text-center font-extrabold text-xs sm:text-sm">
            {techStack}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
