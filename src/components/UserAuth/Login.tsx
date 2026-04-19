import { useState } from "react";
import useLoginForm from "../../hooks/useLoginForm";
import { useNavigate } from "react-router-dom";
import React from "react";

const LoginForm = () => {
  const { register, handleSubmit, errors } = useLoginForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <span className="w-12 h-12 border-4 border-[#800020] border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-300 text-lg font-medium">
              Acessando sua adega...
            </p>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit(() => {})}
          className="w-full max-w-sm bg-[#1a1a1a] border border-gray-800 p-8 rounded-2xl shadow-2xl flex flex-col gap-5 text-gray-200"
        >
          {/* Logo / título */}
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-wide text-white">
            <span className="text-[#c5c5c5]">WineStore</span>
            </h1>
            <p className="text-sm text-gray-400">Acesse sua conta</p>
          </div>

          {/* Email */}
          <label className="w-full text-sm">
            Email
            <input
              type="text"
              placeholder="seu@email.com"
              {...register("email")}
              className="mt-1 w-full h-10 px-3 rounded-md bg-[#0f0f0f] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#800020]"
            />
            {errors.email && (
              <small className="text-red-400">{errors.email.message}</small>
            )}
          </label>

          {/* Senha */}
          <label className="w-full text-sm">
            Senha
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
              className="mt-1 w-full h-10 px-3 rounded-md bg-[#0f0f0f] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#800020]"
            />
            {errors.password && (
              <small className="text-red-400">
                {errors.password.message}
              </small>
            )}
          </label>

          {/* Botão */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#800020] hover:bg-[#5a0016] text-white font-medium rounded-md py-3 w-full transition disabled:opacity-70 shadow-lg"
          >
            Entrar
          </button>

          {/* Link */}
          <p className="text-center text-sm text-gray-400">
            Não tem uma conta?{" "}
            <a
              href="/register"
              className="text-[#C9A227] hover:text-white transition"
            >
              Cadastre-se
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginForm;