import React from "react";

const Pricing = () => {
  return (
    <div>
      <section className="bg-[#f8f5f2] my-16">
        <div className="py-8 px-4 mx-auto max-w-7xl lg:py-16 lg:px-6">
          
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Escolha sua experiência com vinhos
            </h2>
            <p className="mb-5 font-light text-gray-600 sm:text-xl">
              Assine e receba vinhos selecionados, recomendações exclusivas e benefícios únicos todos os meses.
            </p>
          </div>

          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

            {/* Card 1 */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-xl border border-gray-200 shadow-sm xl:p-8 hover:shadow-xl transition-all">
              
              <h3 className="mb-4 text-2xl font-semibold">Essencial</h3>
              <p className="font-light text-gray-500 sm:text-lg">
                Ideal para quem está começando a explorar vinhos.
              </p>

              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">R$59</span>
                <span className="text-gray-500">/mês</span>
              </div>

              <ul className="mb-8 space-y-4 text-left">
                {["1 vinho selecionado", "Sem taxas extras", "Acesso a recomendações", "Suporte básico"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#800020]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#" className="text-white bg-[#800020] hover:bg-[#5a0016] rounded-md px-5 py-2.5 transition">
                Assinar plano
              </a>
            </div>

            {/* Card 2 (destaque) */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-[#800020] rounded-xl shadow-xl xl:p-8 scale-105">
              
              <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
              <p className="font-light text-gray-200 sm:text-lg">
                A melhor experiência para apreciadores exigentes.
              </p>

              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">R$129</span>
                <span className="text-gray-300">/mês</span>
              </div>

              <ul className="mb-8 space-y-4 text-left">
                {["2 vinhos premium", "Frete grátis", "Conteúdo exclusivo", "Suporte prioritário"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#C9A227]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#" className="bg-[#C9A227] text-black hover:opacity-90 rounded-md px-5 py-2.5 transition">
                Assinar agora
              </a>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-xl border border-gray-200 shadow-sm xl:p-8 hover:shadow-xl transition-all">
              
              <h3 className="mb-4 text-2xl font-semibold">Reserva</h3>
              <p className="font-light text-gray-500 sm:text-lg">
                Para quem busca rótulos exclusivos e raros.
              </p>

              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">R$249</span>
                <span className="text-gray-500">/mês</span>
              </div>

              <ul className="mb-8 space-y-4 text-left">
                {["3 vinhos selecionados", "Rótulos premium", "Acesso antecipado", "Experiência VIP"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#800020]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#" className="text-white bg-[#800020] hover:bg-[#5a0016] rounded-md px-5 py-2.5 transition">
                Assinar plano
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;