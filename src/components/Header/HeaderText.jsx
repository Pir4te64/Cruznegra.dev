const HeaderText = () => {
  return (
    <div className="lg:text-left lg:m-0 m-5">
      <h1 className="text-sm font-normal mb-4 leading-5 lg:text-2xl lg:font-bold lg:leading-tight">
        At CruzNegra, we believe technology should solve problems and inspire
        trust, creativity, and exclusivity.
      </h1>
      <div className="text-left mt-4">
        {/* Contenedor para alinear el botón */}
        <button className="bg-white text-black_cruznegra px-4 py-2 text-sm rounded-md border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all">
          Let's Talk
        </button>
      </div>
    </div>
  );
};

export default HeaderText;
