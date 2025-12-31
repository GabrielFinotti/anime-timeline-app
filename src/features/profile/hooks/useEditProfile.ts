import { useState, useCallback } from "react";
import { UpdateUserFormModel } from "../models/UpdateUserFormModel";

export const useEditProfile = () => {
  const [formData, setFormData] = useState<UpdateUserFormModel>({});

  const updateFormData = useCallback((field: keyof UpdateUserFormModel, value: unknown) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implementar chamada à API para salvar dados
  }, []);

  const resetForm = useCallback(() => {
    setFormData({});
  }, []);

  return {
    formData,
    updateFormData,
    handleSubmit,
    resetForm,
  };
};
