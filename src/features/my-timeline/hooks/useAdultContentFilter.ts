import { useState } from "react";

export const useAdultContentFilter = () => {
  const [isAdult, setIsAdult] = useState<boolean>(false);

  const handleAdultChange = (value: string) => {
    setIsAdult(value === "Sim");
  };

  return {
    isAdult,
    handleAdultChange,
  };
};
