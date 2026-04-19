import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

interface Vinho {
  id: number;
  name: string;
  safra: number;
  teor_alcoolico: number;
  tipo: string;
  uva: string;
  vinicola: string;
}

const Vinhos: React.FC = () => {
  const [vinhos, setVinhos] = useState<Vinho[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVinhos = async () => {
      try {
        const response = await axios.get("http://localhost:8080/vinhos");
        setVinhos(response.data);
      } catch (error) {
        console.error("Req falhou:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVinhos();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f0f0f] text-white gap-4">
        <span className="w-14 h-14 border-4 border-[#800020] border-t-transparent rounded-full animate-spin" />
        <p className="text-lg font-medium">
          Carregando nossa seleção de vinhos 🍷
        </p>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#0f0f0f] py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 🔙 BOTÃO VOLTAR */}
        <div className="mb-10">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
          >
            ← Voltar para início
          </a>
        </div>

        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Nossa Seleção de Vinhos
        </h1>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {vinhos.map((vinho) => (
            <div
              key={vinho.id}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-xl text-white transition duration-300 hover:scale-[1.02] hover:border-[#800020]/40 hover:shadow-[0_0_25px_rgba(128,0,32,0.2)]"
            >
              <h2 className="text-xl font-bold mb-1">
                {vinho.name}
              </h2>

              <p className="text-sm text-gray-400 mb-4">
                {vinho.vinicola}
              </p>

              <div className="space-y-1 text-sm text-gray-300">
                <p>
                  <span className="text-gray-500">Safra:</span> {vinho.safra}
                </p>
                <p>
                  <span className="text-gray-500">Tipo:</span> {vinho.tipo}
                </p>
                <p>
                  <span className="text-gray-500">Uva:</span> {vinho.uva}
                </p>
                <p>
                  <span className="text-gray-500">Teor:</span> {vinho.teor_alcoolico}%
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Vinhos;