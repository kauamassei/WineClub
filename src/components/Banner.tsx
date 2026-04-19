import React from "react";
import { motion } from "framer-motion";

const Banner = () => {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="bg-[#0f0f0f] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 items-center gap-12 bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/10"
        >

          {/* TEXTO */}
          <div className="p-8 md:p-12 lg:px-16 lg:py-20">
            <motion.div variants={item} className="max-w-xl">

              <motion.h2
                variants={item}
                className="text-3xl md:text-4xl font-bold text-white leading-tight"
              >
                Descubra vinhos{" "}
                <span className="text-[#800020]">
                  que transformam momentos
                </span>
              </motion.h2>

              <motion.p
                variants={item}
                className="text-gray-400 mt-4 font-light"
              >
                Explore uma curadoria exclusiva de vinhos selecionados
                para todos os gostos e ocasiões.
              </motion.p>

              <motion.div variants={item} className="mt-8">
                <a
                  href="/vinhos"
                  className="inline-block rounded-full bg-[#800020] px-10 py-3 text-sm font-semibold text-white
                  hover:bg-[#5a0016] hover:scale-[1.02]
                  transition-all duration-300"
                >
                  Explorar vinhos
                </a>
              </motion.div>

            </motion.div>
          </div>

          {/* IMAGEM */}
          <motion.div
            variants={item}
            className="relative h-full w-full"
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              alt="vinhos"
              src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=1200&auto=format&fit=crop"
              className="h-full w-full object-cover sm:h-[420px]"
            />

            {/* OVERLAY escuro igual hero */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* CARD GLASS */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 text-white shadow-xl"
            >
              <h3 className="text-sm font-bold">
                Rótulos selecionados
              </h3>
              <p className="text-xs text-gray-300">
                Experiência premium garantida
              </p>
              <span className="text-[#C9A227] text-xs font-semibold">
                Curadoria exclusiva
              </span>
            </motion.div>

          </motion.div>

        </motion.section>

      </div>
    </div>
  );
};

export default Banner;