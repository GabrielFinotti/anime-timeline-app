import FileInput from "@/src/components/ui/FileInput";
import Input from "@/src/components/ui/Input";
import Textarea from "@/src/components/ui/Textarea";
import { useState } from "react";
import { tv } from "tailwind-variants";

const updateFormStyle = tv({
  slots: {
    form: "border-dark-600 bg-dark-800/50 shadow-dark-lg m-auto flex w-full max-w-lg flex-col gap-6 rounded-2xl border p-8 backdrop-blur-sm",
    profileSection: "border-dark-600 flex flex-col gap-4 border-b pb-6",
    sectionTitle: "text-xs font-semibold tracking-wider text-neutral-400 uppercase",
    fieldsGroup: "flex flex-col gap-4",
    formActions: "",
  },
});

const styles = updateFormStyle();

type FormData = {
  imageProfile?: File;
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  bio?: string;
};

const UpdateUserForm = () => {
  const [formData, setFormData] = useState<FormData>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newFormData = new FormData(event.currentTarget);

    const data = Object.fromEntries(newFormData.entries()) as FormData;

    setFormData(data);

    console.log("Form Update:", formData);
  };

  return (
    <form className={styles.form()} onSubmit={handleSubmit}>
      <div className={styles.profileSection()}>
        <h3 className={styles.sectionTitle()}>Foto do Perfil</h3>
        <FileInput type="file" id="imageProfile" name="imageProfile" label="Enviar Imagem" />
      </div>
      <div className={styles.fieldsGroup()}>
        <h3 className={styles.sectionTitle()}>Informações Pessoais</h3>
        <Input
          label="Usuário"
          id="username"
          name="username"
          type="text"
          placeholder="Novo nome de usuário"
        />
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="novo.email@example.com"
        />
        <Input
          label="Senha"
          id="password"
          name="password"
          type="password"
          input="password"
          placeholder="Nova senha"
        />
        <Input
          label="Confirmar Senha"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          input="password"
          placeholder="Confirme a nova senha"
        />
      </div>
      <div className={styles.fieldsGroup()}>
        <h3 className={styles.sectionTitle()}>Sobre Você</h3>
        <Textarea label="Biografia" id="bio" name="bio" placeholder="Conte-nos sobre você..." />
      </div>
      <div className={styles.formActions()}>
        <Input type="submit" value="Atualizar Perfil" input="submit" />
      </div>
    </form>
  );
};

export default UpdateUserForm;
