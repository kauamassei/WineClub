import React from "react";
import { motion } from "framer-motion";

const Services = () => {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
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

  const services = [
    {
      title: "Seleção Premium",
      desc: "Curadoria exclusiva com os melhores vinhos nacionais e importados.",
      color: "#800020",
      icon: "→",
    },
    {
      title: "Ofertas Exclusivas",
      desc: "Aproveite promoções especiais em rótulos selecionados.",
      color: "#C9A227",
      icon: "⚡",
    },
    {
      title: "Recomendações Inteligentes",
      desc: "Descubra vinhos ideais com base no seu gosto.",
      color: "#800020",
      icon: "📊",
    },
    {
      title: "Compra Segura",
      desc: "Seus dados protegidos com tecnologia avançada.",
      color: "#800020",
      icon: "🔒",
    },
    {
      title: "Experiência Social",
      desc: "Compartilhe avaliações com a comunidade.",
      color: "#C9A227",
      icon: "👥",
    },
    {
      title: "Entrega Rápida",
      desc: "Receba seus vinhos com rapidez e segurança.",
      color: "#C9A227",
      icon: "🚚",
    },
  ];

  return (
    <div className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Experiências <span className="text-[#800020]">premium</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Tudo o que você precisa para descobrir, escolher e apreciar vinhos com sofisticação.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >

          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="group p-8 rounded-xl
              bg-white/5 backdrop-blur-lg
              border border-white/10
              text-white
              transition-all duration-500 ease-out
              hover:border-[#800020]/40 hover:shadow-2xl"
            >

              {/* ICON */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-lg mb-6 text-lg"
                style={{ backgroundColor: `${service.color}20` }}
              >
                <span style={{ color: service.color }}>
                  {service.icon}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 font-light leading-relaxed">
                {service.desc}
              </p>

            </motion.div>
          ))}

        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="bg-[#800020] text-white px-10 py-3 rounded-full font-semibold
          hover:bg-[#5a0016] hover:scale-[1.02]
          transition-all duration-300">
            Explorar todos os vinhos
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default Services;