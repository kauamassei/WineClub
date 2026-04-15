import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center bg-[#f8f5f2]">
        
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            
            <h2 className="text-2xl font-bold text-gray-900 md:text-4xl leading-tight">
              Descubra vinhos que transformam momentos em experiências únicas
            </h2>

            <p className="hidden text-gray-600 md:mt-4 md:block font-light">
              Explore uma curadoria exclusiva de vinhos selecionados para todos os gostos e ocasiões. Do clássico ao sofisticado, encontre o rótulo perfeito para cada momento.
            </p>

            <div className="mt-6 md:mt-8">
              <a
                href="#"
                className="inline-block rounded-md bg-[#800020] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#5a0016] focus:outline-none"
              >
                Explorar vinhos
              </a>
            </div>

          </div>
        </div>

        <img
          alt="vinhos"
          src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=1200&auto=format&fit=crop"
          className="h-full w-full object-cover sm:h-[calc(100%-2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%-4rem)] md:rounded-ss-[60px]"
        />

      </section>
    </div>
  );
};

export default Banner;