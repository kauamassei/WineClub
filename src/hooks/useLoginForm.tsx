import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type LoginSchema, loginSchema } from "../schema/loginSchema";

const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });
  return { register, handleSubmit, errors };
};

export default useLoginForm;