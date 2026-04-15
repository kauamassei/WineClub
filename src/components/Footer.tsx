import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="pt-24 bg-[#1a0a0f]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Newsletter */}
          <div className="flex justify-between items-center gap-12 md:flex-row flex-col">
            <div className="flex-1 max-w-lg">
              <h3 className="text-white text-2xl font-bold">
                Receba novidades e ofertas exclusivas de vinhos 🍷
              </h3>
            </div>

            <div className="flex items-center mt-6 md:mt-0 gap-4">
              <div className="relative w-full md:w-64">
                
                <input
                  type="email"
                  placeholder="Seu email"
                  className="w-full px-4 py-2 text-gray-300 bg-[#2a0f17] border border-[#3a1a22] rounded-lg outline-none focus:border-[#800020]"
                />
              </div>

              <button className="py-3 px-4 font-medium text-sm text-white bg-[#800020] hover:bg-[#5a0016] rounded-lg transition">
                Assinar
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="flex-1 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            
            <ul className="space-y-4 text-gray-400">
              <h4 className="text-white font-semibold">Atendimento</h4>
              <li><a href="#" className="hover:text-[#C9A227] transition">Contato</a></li>
              <li><a href="#" className="hover:text-[#C9A227] transition">Suporte</a></li>
              <li><a href="#" className="hover:text-[#C9A227] transition">Entrega</a></li>
              <li><a href="#" className="hover:text-[#C9A227] transition">Pagamentos</a></li>
            </ul>

            <ul className="space-y-4 text-gray-400">
              <h4 className="text-white font-semibold">Sobre</h4>
              <li><a href="#" className="hover:text-[#C9A227] transition">Nossa história</a></li>
              <li><a href="#" className="hover:text-[#C9A227] transition">Termos</a></li>
              <li><a href="#" className="hover:text-[#C9A227] transition">Privacidade</a></li>
            </ul>

            <ul className="space-y-4 text-gray-400">
              <h4 className="text-white font-semibold">Explorar</h4>
              <li><a href="#" className="hover:text-[#C9A227] transition">Vinhos</a></li>
              <li><a href="#" className="hover:text-[#C9A227] transition">Ofertas</a></li>
              <li><a href="#" className="hover:text-[#C9A227] transition">Blog</a></li>
            </ul>

            <ul className="space-y-4 text-gray-400">
              <h4 className="text-white font-semibold">Empresa</h4>
              <li><a href="#" className="hover:text-[#C9A227] transition">Parceiros</a></li>
              <li><a href="#" className="hover:text-[#C9A227] transition">Equipe</a></li>
              <li><a href="#" className="hover:text-[#C9A227] transition">Carreiras</a></li>
            </ul>

          </div>

          {/* Bottom */}
          <div className="mt-10 py-10 border-t border-[#3a1a22] flex items-center justify-between sm:flex-row flex-col">
            
            <p className="text-gray-400">
              © 2026 WineStore. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-x-6 text-gray-500 mt-6 sm:mt-0">
              <a href="#" className="hover:text-[#C9A227] transition">Instagram</a>
              <a href="#" className="hover:text-[#C9A227] transition">Facebook</a>
              <a href="#" className="hover:text-[#C9A227] transition">Twitter</a>
            </div>

          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;