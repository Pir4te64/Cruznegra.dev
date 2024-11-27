const SectionUs = () => {
  return (
    <div className="w-full px-4 py-10" id="about">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Primer Div */}
        <div className="p-4 rounded-lg shadow-md">
          <p className="text-white font-bold text-3xl md:text-4xl mb-4">
            Our philosophy is built on three core pillars: perfection, exclusive
            design, and custom development. We strive to create solutions that
            meet and exceed our clients' expectations.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-2 text-white border-t border-l border-r border-white rounded-t-lg bg-transparent">
              INNOVATE
            </button>
            <button className="px-6 py-2 text-white border-t border-l border-r border-white rounded-t-lg bg-transparent">
              CODE
            </button>
            <button className="px-6 py-2 text-white border-t border-l border-r border-white rounded-t-lg bg-transparent">
              TRANSFORM
            </button>
          </div>
        </div>

        {/* Segundo Div */}
        <div className="p-4  rounded-lg shadow-md min-h-[300px] flex flex-col justify-between">
          <div className="space-y-2">
            <p className="text-white font-bold text-3xl md:text-3xl ">
              We are driven by passion, ethics, and commitment, prioritizing
              continuous innovation and personalized attention.
            </p>
            <p className="text-white font-normal text-lg sm:text-xl md:text-2xl py-2 ">
              Our goal is to craft digital experiences that make a difference,
              always focusing on quality and excellence.
            </p>
          </div>
          <div className="mt-2 flex justify-start">
            <button className="bg-white text-black_cruznegra px-4 py-2 text-sm rounded-md border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionUs;
