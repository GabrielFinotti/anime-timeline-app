import FileInput from "@/src/components/ui/FileInput";
import Input from "@/src/components/ui/Input";
import Textarea from "@/src/components/ui/Textarea";
import { tv } from "tailwind-variants";
import { UpdateUserFormModel } from "../models/UpdateUserFormModel";

const updateFormStyle = tv({
  slots: {
    form: "border-dark-600/40 bg-dark-900/30 shadow-dark-xl ring-primary-500/10 m-auto flex w-full max-w-lg flex-col gap-6 rounded-2xl border p-8 ring-1 backdrop-blur-md",
    profileSection: "border-dark-600/30 flex flex-col gap-4 border-b pb-6",
    sectionTitle: "text-xs font-semibold tracking-wider text-neutral-400 uppercase",
    fieldsGroup: "flex flex-col gap-4",
    formActions: "",
  },
});

const styles = updateFormStyle();

interface UpdateUserFormProps {
  formData: UpdateUserFormModel;
  onChange: (field: keyof UpdateUserFormModel, value: unknown) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const UpdateUserForm = ({ formData, onChange, onSubmit }: UpdateUserFormProps) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        onChange("imageUrl", e.target?.result);
      };

      reader.readAsDataURL(file);

      onChange("imageProfile", file);
    } else {
      onChange("imageUrl", undefined);
      onChange("imageProfile", undefined);
    }
  };

  const handleInputChange = (field: keyof UpdateUserFormModel, value: string) => {
    onChange(field, value);
  };

  return (
    <form className={styles.form()} onSubmit={onSubmit}>
      <div className={styles.profileSection()}>
        <h3 className={styles.sectionTitle()}>Foto do Perfil</h3>
        <FileInput
          type="file"
          id="imageProfile"
          name="imageProfile"
          label="Enviar Imagem"
          onChange={handleImageChange}
        />
      </div>
      <div className={styles.fieldsGroup()}>
        <h3 className={styles.sectionTitle()}>Informações Pessoais</h3>
        <Input
          label="Usuário"
          id="username"
          name="username"
          type="text"
          placeholder="Novo nome de usuário"
          value={formData.username || ""}
          onChange={(e) => handleInputChange("username", e.target.value)}
        />
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="novo.email@example.com"
          value={formData.email || ""}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        <Input
          label="Senha"
          id="password"
          name="password"
          type="password"
          input="password"
          placeholder="Nova senha"
          value={formData.password || ""}
          onChange={(e) => handleInputChange("password", e.target.value)}
        />
        <Input
          label="Confirmar Senha"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          input="password"
          placeholder="Confirme a nova senha"
          value={formData.confirmPassword || ""}
          onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
        />
      </div>
      <div className={styles.fieldsGroup()}>
        <h3 className={styles.sectionTitle()}>Sobre Você</h3>
        <Textarea
          label="Biografia"
          id="bio"
          name="bio"
          placeholder="Conte-nos sobre você..."
          value={formData.bio || ""}
          onChange={(e) => handleInputChange("bio", e.target.value)}
        />
      </div>
      <div className={styles.formActions()}>
        <Input type="submit" value="Atualizar Perfil" input="submit" />
      </div>
    </form>
  );
};

export default UpdateUserForm;
