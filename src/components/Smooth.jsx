import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/bundled/locomotive-scroll.css"; // Estilos necesarios

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true, // Habilita el scroll suave
      smoothMobile: true, // Opcional para móviles
      inertia: 0.9, // Controla la inercia del movimiento (0.1 a 1)
    });

    return () => scroll.destroy();
  }, []);

  return <div data-scroll-container>{children}</div>;
};

export default SmoothScroll;
