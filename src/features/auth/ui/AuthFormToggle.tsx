import { useState } from "react";
import { tv } from "tailwind-variants";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const authFormToggleStyles = tv({
  slots: {
    container: "flex flex-col gap-6",
    toggleGroup:
      "border-dark-600 bg-dark-800/40 relative flex items-center rounded-full border p-1 backdrop-blur-xs",
    toggleLabel:
      "relative z-10 flex-1 cursor-pointer px-4 py-2 text-center text-sm font-medium text-neutral-300 transition-colors duration-300",
    toggleIndicator:
      "bg-primary-500/20 border-primary-500 absolute h-[calc(100%-8px)] rounded-full border transition-all duration-300 ease-in-out",
    formContainer: "",
  },
  variants: {
    isActive: {
      true: {
        toggleLabel: "text-neutral-50",
      },
      false: {
        toggleLabel: "text-neutral-400 hover:text-neutral-300",
      },
    },
  },
});

const slots = authFormToggleStyles();

type AuthMode = "login" | "register";

const AuthFormToggle = () => {
  const [mode, setMode] = useState<AuthMode>("login");

  return (
    <div className={slots.container()}>
      <div className={slots.toggleGroup()}>
        <div
          className={slots.toggleIndicator()}
          style={{
            width: "calc(50% - 4px)",
            left: mode === "login" ? "4px" : "calc(50% + 4px)",
          }}
        ></div>
        <span
          onClick={() => setMode("login")}
          className={slots.toggleLabel({ isActive: mode === "login" })}
        >
          Entrar
        </span>
        <span
          onClick={() => setMode("register")}
          className={slots.toggleLabel({ isActive: mode === "register" })}
        >
          Registrar
        </span>
      </div>
      <div className={slots.formContainer()}>
        {mode === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default AuthFormToggle;
