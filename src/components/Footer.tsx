import React from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut" as const,
    },
  },
};

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 bg-[#0f0f0f]">
      <div className="w-full bg-[#0f0f0f]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 md:px-8"
        >
          {/* Newsletter */}
          <motion.div
            variants={fadeUp}
            className="flex justify-between items-center gap-12 md:flex-row flex-col"
          >
            <div className="flex-1 max-w-lg">
              <h3 className="text-white text-2xl font-bold leading-snug">
                Receba novidades e ofertas exclusivas de vinhos 🍷
              </h3>
            </div>

            <div className="flex items-center mt-6 md:mt-0 gap-4 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="w-full px-4 py-2 text-gray-300 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg outline-none focus:border-[#800020] transition"
                />
              </div>

              <button className="py-3 px-5 font-medium text-sm text-white bg-[#800020] hover:bg-[#5a0016] rounded-lg transition duration-300 hover:scale-[1.03]">
                Assinar
              </button>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            variants={fadeUp}
            className="flex-1 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12"
          >
            {[
              {
                title: "Atendimento",
                items: ["Contato", "Suporte", "Entrega", "Pagamentos"],
              },
              {
                title: "Sobre",
                items: ["Nossa história", "Termos", "Privacidade"],
              },
              {
                title: "Explorar",
                items: ["Vinhos", "Ofertas", "Blog"],
              },
              {
                title: "Empresa",
                items: ["Parceiros", "Equipe", "Carreiras"],
              },
            ].map((section, i) => (
              <ul key={i} className="space-y-4 text-gray-400">
                <h4 className="text-white font-semibold">{section.title}</h4>

                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-[#C9A227] transition duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </motion.div>

          {/* Bottom */}
          <motion.div
            variants={fadeUp}
            className="mt-10 py-10 border-t border-[#2a2a2a] flex items-center justify-between sm:flex-row flex-col"
          >
            <p className="text-gray-500 text-sm">
              © 2026 WineStore. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-x-6 text-gray-500 mt-6 sm:mt-0">
              {["Instagram", "Facebook", "Twitter"].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-[#C9A227] transition duration-300 hover:scale-[1.05]"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
