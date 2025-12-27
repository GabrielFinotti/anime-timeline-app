import Input from "@/src/components/ui/Input";
import { tv } from "tailwind-variants";

const loginFormStyle = tv({
  base: "border-dark-600 bg-dark-800/50 shadow-dark-lg m-auto flex w-full max-w-sm flex-col gap-6 rounded-2xl border p-8 backdrop-blur-sm",
});

const LoginForm = () => {
  return (
    <form className={loginFormStyle()}>
      <Input type="email" id="email" label="Email" placeholder="Insira seu email" />
      <Input
        type="password"
        id="password"
        label="Password"
        placeholder="Insira sua senha"
        style="password"
      />
      <Input type="submit" value="Entrar" style="submit" />
    </form>
  );
};

export default LoginForm;
