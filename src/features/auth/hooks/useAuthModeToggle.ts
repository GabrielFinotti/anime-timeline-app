import { useState } from "react";

type AuthMode = "login" | "register";

export const useAuthModeToggle = () => {
  const [mode, setMode] = useState<AuthMode>("login");

  const handleModeChange = (newMode: AuthMode) => {
    setMode(newMode);
  };

  return {
    mode,
    handleModeChange,
  };
};
