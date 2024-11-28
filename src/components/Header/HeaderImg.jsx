import { motion } from "framer-motion";
import Header from "../../assets/header.jpg";
import Header2 from "../../assets/header2.png";

const HeaderImg = () => {
  return (
    <div className="relative w-full">
      {/* Primera imagen con animación */}
      <motion.img
        src={Header}
        alt="Header"
        className="w-full h-96 md:h-auto object-cover sm:object-fill" // Añadir object-fill en pantallas móviles
        initial={{ opacity: 0, scale: 1.2 }} // Empieza opaca y un poco más grande
        animate={{ opacity: 1, scale: 1 }} // Se hace visible y en tamaño normal
        transition={{ duration: 1.2 }} // Duración de la animación
      />

      {/* Segunda imagen centrada con animación */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center"
        initial={{ scale: 0.5, opacity: 0 }} // Empieza pequeña y opaca
        animate={{ scale: 1, opacity: 1 }} // Se hace grande y visible
        transition={{ duration: 1.5, delay: 0.5 }} // Retardo y duración
        whileHover={{ scale: 1.1 }} // Crece al pasar el cursor
      >
        <img
          src={Header2}
          alt="Centered Image"
          className="w-full object-cover md:object-contain h-64 sm:h-96 lg:h-auto"
        />
      </motion.div>
    </div>
  );
};

export default HeaderImg;
