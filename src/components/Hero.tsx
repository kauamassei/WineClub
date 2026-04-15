import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="w-full max-w-[1400px] mx-auto bg-white rounded-xl overflow-hidden ">
        {/* <!-- Nav --> */}
        <header className="flex items-center justify-between px-4 sm:px-10 py-4 sm:py-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#800020] grid place-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-white"
              >
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
            </div>
            <span className="text-lg sm:text-xl font-bold text-[#800020]">
              WineClub
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-10 text-sm font-medium">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              Vinhos Premium
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              Ofertas
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              Avaliacões
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              Coleções
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              Clientes
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="lg:hidden p-2 text-gray-600">
              ☰
            </button>
            <a
              href="#"
              className="rounded-full bg-[#800020] text-white px-4 sm:px-8 py-2 sm:py-3 text-sm font-semibold shadow-lg hover:bg-[#5a0016] transition-colors"
            >
              Login
            </a>
          </div>
        </header>

        {/* <!-- Hero --> */}
        <section className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-10 py-8 sm:py-12">

          {/* Avaliações */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-6 sm:mb-8">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#800020] border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs font-bold">+50K</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[#C9A227] text-sm">★★★★★</span>
              <span className="text-xs sm:text-sm text-gray-600 ml-1">
                Amado por milhares de clientes
              </span>
            </div>
          </div>

          <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black mb-4 sm:mb-6">
            Descubra vinhos{" "}
            <span className="text-[#800020]">
              exclusivos
            </span>{" "}
            para todos os momentos
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed px-4">
            Explore uma seleção premium de vinhos nacionais e importados.
            Qualidade, sabor e sofisticação entregues diretamente até você.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 w-full sm:w-auto">
            <a
              href="#"
              className="rounded-full bg-[#800020] text-white px-8 sm:px-10 py-3 sm:py-4 text-base font-semibold shadow-lg hover:bg-[#5a0016] transition-colors"
            >
              Explorar Vinhos
            </a>

            <a
              href="#"
              className="rounded-full bg-white border-2 border-[#C9A227] text-[#800020] px-8 sm:px-10 py-3 sm:py-4 text-base font-semibold hover:bg-[#faf7ef] transition-colors"
            >
              Ver Ofertas
            </a>
          </div>

          {/* Imagem */}
          <div className="relative w-full">
            <img
              src="https://images.unsplash.com/photo-1510627498534-cf7e9002facc"
              className="w-full max-w-5xl rounded-xl object-cover h-[250px] sm:h-[350px] lg:h-[400px] mx-auto shadow-2xl"
              alt="Vinhos premium"
            />

            {/* Card */}
            <div className="absolute left-4 top-10 bg-white border border-gray-200 rounded-xl p-4 shadow-xl">
              <h3 className="text-sm font-bold text-black">
                Assinatura Premium
              </h3>
              <p className="text-xs text-gray-500">
                Receba vinhos selecionados todo mês
              </p>
              <span className="text-[#800020] text-xs font-semibold">
                Economize até 25%
              </span>
            </div>

            {/* Busca */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 sm:bottom-12 w-[90%] sm:w-[380px]">
              <div className="flex items-center bg-white shadow-2xl rounded-xl px-4 py-3 border border-[#C9A227]">
                <input
                  type="text"
                  placeholder="Buscar vinhos..."
                  className="w-full text-sm bg-transparent outline-none"
                />
                <button className="bg-[#800020] text-white p-2 rounded-lg hover:bg-[#5a0016]">
                  →
                </button>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;