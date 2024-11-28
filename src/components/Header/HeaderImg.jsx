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
        className="w-full object-cover md:object-contain h-64 lg:h-auto"
        initial={{ x: -300, opacity: 0 }} // Desde fuera de la pantalla
        animate={{ x: 0, opacity: 1 }} // Aparece y se centra
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
