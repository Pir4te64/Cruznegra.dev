import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./seccion.css";

const ServiceCard = ({ image, title, description, techStack, direccion }) => {
  const cardRef = useRef(null); // Referencia para detectar si está en el viewport
  const isInView = useInView(cardRef, { once: true, amount: 0.3 }); // `once: true` para animar solo la primera vez

  return (
    <motion.div
      className="px-4 py-4 sm:px-6 sm:py-8 rounded-lg shadow-md flex-1 min-w-[350px]"
      ref={cardRef} // Asignamos la referencia
      initial={{ opacity: 0, y: 50 }} // Estado inicial (fuera de vista)
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Se anima solo cuando está visible
      transition={{ duration: 0.8, ease: "easeOut" }} // Animación suave
      whileHover={{ scale: 1.05 }} // Crece ligeramente al pasar el cursor
    >
      {/* Contenedor de la imagen y el título */}
      <motion.div
        className={`flex items-center gap-6 mb-5 ${
          direccion === "right" ? "flex-row-reverse sm:flex-row" : "flex-row"
        }`}
        initial={{ opacity: 0, x: direccion === "right" ? 50 : -50 }} // Desliza desde un lado dependiendo de la dirección
        animate={isInView ? { opacity: 1, x: 0 } : {}} // Se centra y se hace visible
        transition={{ duration: 0.6 }}
      >
        {/* Imagen */}
        <motion.div
          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0"
          initial={{ scale: 0.8, opacity: 0 }} // Comienza más pequeña y transparente
          animate={isInView ? { scale: 1, opacity: 1 } : {}} // Escala al tamaño completo y se hace visible
          transition={{ duration: 0.8, delay: 0.2 }} // Retraso para sincronizar con el título
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain rounded-lg"
          />
        </motion.div>

        {/* Título */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -20 }} // Comienza desplazado ligeramente
          animate={isInView ? { opacity: 1, x: 0 } : {}} // Se centra y se hace visible
          transition={{ duration: 0.8, delay: 0.4 }} // Retraso después de la imagen
        >
          <h3
            className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-white ${
              direccion === "right" ? "text-right sm:text-left" : "text-left"
            }`}
          >
            {title}
          </h3>
        </motion.div>
      </motion.div>

      {/* Descripción y TechStack */}
      <motion.div
        className="px-4 pt-4 sm:pt-6 border-2 border-white w-full rounded-md flex flex-col justify-between items-center"
        initial={{ opacity: 0, y: 20 }} // Comienza desplazado ligeramente hacia abajo
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Se centra y se hace visible
        transition={{ duration: 0.8, delay: 0.6 }} // Retraso para aparecer después del título
      >
        <div className="mt-4 mx-6">
          <p className="text-white text-center font-medium text-sm sm:text-xl h-[100px]">
            {description}
          </p>
        </div>
        <motion.div
          className="mt-4 bg-white trapezoid"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}} // Escala al tamaño completo y se hace visible
          transition={{ duration: 0.8, delay: 0.8 }} // Aparece al final
        >
          <p className="text-black_cruznegra px-4 text-center font-extrabold text-xs sm:text-sm md:text-base">
            {techStack}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
