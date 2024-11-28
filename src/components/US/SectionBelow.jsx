const SectionBellow = () => {
  return (
    <div className="w-full px-4 py-8 md:pt-5 " id="">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Primer Div */}
        <div className="p-4 rounded-lg shadow-md">
          <p className="text-white font-bold text-xl md:text-3xl mb-0 md:mb-4">
            We are a forward-thinking company specializing in custom software
            development. Our multidisciplinary team excels in technologies like
            React, Node.js, Python, Django, and more, delivering tailored
            digital solutions.
          </p>
        </div>

        {/* Segundo Div */}
        <div className="p-4 rounded-lg shadow-md  flex flex-col justify-between">
          <div className="">
            <p className="text-white font-bold text-lg md:text-2xl ">
              We are driven by passion, ethics, and commitment, prioritizing
              continuous innovation and personalized attention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBellow;
