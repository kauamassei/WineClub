import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animação container (mais suave)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // Animação itens (mais leve e lenta)
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="bg-[#0f0f0f] min-h-screen">
      <div className="w-full bg-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          {/* NAV */}
          <header
            className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-10 py-4 flex items-center justify-between transition-all duration-500 ${
              scrolled
                ? "bg-[#0f0f0f]/80 backdrop-blur-md border-b border-[#ffffff10]"
                : "bg-transparent"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-white">WineClub</span>
            </div>

            <nav className="hidden lg:flex items-center gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">
                Vinhos
              </a>
              <a href="#" className="hover:text-white transition">
                Ofertas
              </a>
              <a href="#" className="hover:text-white transition">
                Avaliações
              </a>
              <a href="#" className="hover:text-white transition">
                Coleções
              </a>
            </nav>

            <a
              href="/login"
              className="bg-[#800020] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#5a0016] hover:scale-[1.02] transition"
            >
              Login
            </a>
          </header>

          {/* HERO */}
          <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center text-center px-6 pt-28 pb-12"
          >
            {/* Avaliações */}
            <motion.div
              variants={item}
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-[#C9A227]">★★★★★</span>
              <span className="text-gray-400 text-sm">
                +50 mil clientes satisfeitos
              </span>
            </motion.div>

            {/* Título */}
            <motion.h1
              variants={item}
              className="max-w-4xl text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Descubra vinhos <span className="text-[#800020]">exclusivos</span>
            </motion.h1>

            <motion.p variants={item} className="max-w-2xl text-gray-400 mb-10">
              Uma seleção premium de vinhos nacionais e importados, entregue com
              elegância até você.
            </motion.p>

            {/* BOTÕES */}
            <motion.div variants={item} className="flex gap-4 mb-12">
              <a
                href="/vinhos"
                className="bg-[#800020] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#5a0016] hover:scale-[1.02] transition"
              >
                Explorar
              </a>

              <a
                href="#"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-full hover:bg-gray-800 hover:scale-[1.02] transition"
              >
                Ver Ofertas
              </a>
            </motion.div>

            {/* IMAGEM */}
            <motion.div variants={item} className="relative w-full">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1600&auto=format&fit=crop"
                className="w-full max-w-5xl rounded-xl object-cover h-[300px] mx-auto shadow-2xl"
                alt="Uvas vinho"
              />

              <div className="absolute inset-0 bg-black/40 rounded-xl max-w-5xl mx-auto"></div>

              {/* CARD */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="absolute left-4 top-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-xl text-white"
              >
                <h3 className="text-sm font-bold">Assinatura Premium</h3>
                <p className="text-xs text-gray-300">
                  Vinhos selecionados todo mês
                </p>
                <span className="text-[#C9A227] text-xs font-semibold">
                  Economize até 25%
                </span>
              </motion.div>

              {/* BUSCA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-[90%] sm:w-[380px]"
              >
                <div className="flex items-center bg-white/10 backdrop-blur-lg shadow-xl rounded-xl px-4 py-3 border border-white/20">
                  <input
                    type="text"
                    placeholder="Buscar vinhos..."
                    className="w-full text-sm bg-transparent text-white outline-none placeholder:text-gray-400"
                  />
                  <button className="bg-[#800020] text-white p-2 rounded-lg hover:bg-[#5a0016] hover:scale-[1.05] transition">
                    →
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
