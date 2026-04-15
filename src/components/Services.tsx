import React from "react";

const Services = () => {
  return (
    <div className="my-14">
      <section className="py-24 bg-[#f8f5f2] transition-colors duration-300">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-black">
              <span className="text-black">Experiências premium</span> para amantes de vinho
            </h2>
            <p className="text-gray-700 text-xl max-w-2xl mx-auto font-extralight">
              Tudo o que você precisa para descobrir, escolher e apreciar vinhos com sofisticação.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="p-8 rounded-xl border transition-all group 
              border-gray-200 hover:border-[#800020]/40 hover:scale-105 hover:shadow-xl bg-white text-black">
              
              <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-6 
                bg-[#800020]/10 group-hover:bg-[#800020]/20 transition-all">
                
                <svg className="h-6 w-6 text-[#800020]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Seleção Premium
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Curadoria exclusiva com os melhores vinhos nacionais e importados.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-xl border transition-all group 
              border-gray-200 hover:border-[#800020]/40 hover:scale-105 hover:shadow-xl bg-white text-black">
              
              <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-6 
                bg-[#C9A227]/10 group-hover:bg-[#C9A227]/20 transition-all">
                
                <svg className="h-6 w-6 text-[#C9A227]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Ofertas Exclusivas
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Aproveite promoções especiais e preços diferenciados em rótulos selecionados.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-xl border transition-all group 
              border-gray-200 hover:border-[#800020]/40 hover:scale-105 hover:shadow-xl bg-white text-black">
              
              <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-6 
                bg-[#800020]/10 group-hover:bg-[#800020]/20 transition-all">
                
                <svg className="h-6 w-6 text-[#800020]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10"></path>
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Recomendações Inteligentes
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Descubra vinhos ideais com base no seu gosto e ocasiões especiais.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-xl border transition-all group 
              border-gray-200 hover:border-[#800020]/40 hover:scale-105 hover:shadow-xl bg-white text-black">
              
              <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-6 
                bg-[#800020]/10 group-hover:bg-[#800020]/20 transition-all">
                
                <svg className="h-6 w-6 text-[#800020]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2"></path>
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Compra Segura
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Seus dados protegidos com tecnologia de segurança avançada.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-8 rounded-xl border transition-all group 
              border-gray-200 hover:border-[#800020]/40 hover:scale-105 hover:shadow-xl bg-white text-black">
              
              <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-6 
                bg-[#C9A227]/10 group-hover:bg-[#C9A227]/20 transition-all">
                
                <svg className="h-6 w-6 text-[#C9A227]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20H7"></path>
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Experiência Social
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Compartilhe avaliações e descubra recomendações da comunidade.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-8 rounded-xl border transition-all group 
              border-gray-200 hover:border-[#800020]/40 hover:scale-105 hover:shadow-xl bg-white text-black">
              
              <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-6 
                bg-[#C9A227]/10 group-hover:bg-[#C9A227]/20 transition-all">
                
                <svg className="h-6 w-6 text-[#C9A227]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16"></path>
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Entrega Rápida
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Receba seus vinhos com rapidez e segurança diretamente em casa.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <button className="bg-linear-to-r from-[#800020] to-[#5a0016] text-white font-light rounded-md px-8 py-3 hover:opacity-90 transition-all">
              Explorar todos os vinhos
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;