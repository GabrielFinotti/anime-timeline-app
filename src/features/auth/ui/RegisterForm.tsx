import Input from "@/src/components/ui/Input";
import { tv } from "tailwind-variants";

const registerFormStyle = tv({
  base: "border-dark-600/40 bg-dark-900/30 shadow-dark-xl ring-primary-500/10 m-auto flex w-full max-w-sm flex-col gap-6 rounded-2xl border p-8 ring-1 backdrop-blur-md",
});

const RegisterForm = () => {
  return (
    <form className={registerFormStyle()}>
      <Input type="text" id="username" label="Usuário" placeholder="Escolha um nome de usuário" />
      <Input type="email" id="email" label="Email" placeholder="Insira seu email" />
      <Input
        type="password"
        id="password"
        label="Senha"
        placeholder="Insira sua senha"
        input="password"
      />
      <Input type="submit" value="Registrar" input="submit" />
    </form>
  );
};

export default RegisterForm;
