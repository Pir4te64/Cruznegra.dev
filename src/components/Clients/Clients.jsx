import clientsImage from "../../assets/bg.jpg"; // Asegúrate de que esta imagen exista en la ruta indicada.
import TestimonialCard from "./Card";

const Clients = () => {
  return (
    <div className="relative w-full h-[1268px] md:h-[649px] my-20 flex flex-col items-center justify-center">
      {/* Contenedor de la Imagen */}
      <img
        src={clientsImage}
        alt="Clientes"
        className="absolute w-full h-full object-cover rounded-lg shadow-md "
      />
      <div className="relative w-full h-3/4 flex flex-col items-center justify-center">
        <h1 className="relative z-10 pb-8 md:pb-0 text-2xl md:text-4xl font-bold text-center text-white ">
          Clients trust
        </h1>
        {/* Contenedor de las tarjetas */}
        <div className="relative z-10 flex flex-wrap gap-4 px-4 justify-center">
          <section className="">
            <div className="px-4 mx-auto">
              <div className="flex flex-col items-center">
                <div className="relative md:mt-24 md:order-2">
                  <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                    <div className="flex flex-col overflow-hidden shadow-xl">
                      <TestimonialCard
                        name="Leslie Alexander"
                        title="Freelance React Developer"
                        comment="You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change."
                        image="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                        rating={5}
                      />
                    </div>
                    <div className="flex flex-col overflow-hidden shadow-xl">
                      <TestimonialCard
                        name=" Jacob Jones"
                        title="Digital Marketer"
                        comment="Simply the best. Better than all the rest. I’d
                              recommend this product to beginners and advanced
                              users."
                        image="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
                        rating={5}
                      />
                    </div>
                    <div className="flex flex-col overflow-hidden shadow-xl">
                      <TestimonialCard
                        name="Jenny Wilson"
                        title="Graphic Designer"
                        comment="I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish."
                        image="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
                        rating={4}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Clients;
