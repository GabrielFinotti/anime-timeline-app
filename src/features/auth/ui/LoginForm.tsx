import Input from "@/src/components/ui/Input";
import { tv } from "tailwind-variants";

const loginFormStyle = tv({
  base: "border-dark-600/40 bg-dark-900/30 shadow-dark-xl ring-primary-500/10 m-auto flex w-full max-w-sm flex-col gap-6 rounded-2xl border p-8 ring-1 backdrop-blur-md",
});

const LoginForm = () => {
  return (
    <form className={loginFormStyle()}>
      <Input type="email" id="email" label="Email" placeholder="Insira seu email" />
      <Input
        type="password"
        id="password"
        label="Senha"
        placeholder="Insira sua senha"
        input="password"
      />
      <Input type="submit" value="Entrar" input="submit" />
    </form>
  );
};

export default LoginForm;
