import FileInput from "@/src/components/ui/FileInput";
import Input from "@/src/components/ui/Input";
import Textarea from "@/src/components/ui/Textarea";
import { tv } from "tailwind-variants";

const updateFormStyle = tv({
  slots: {
    form: "flex w-full flex-col gap-6",
    profileSection: "border-dark-600 flex flex-col gap-4 border-b pb-6",
    sectionTitle: "text-xs font-semibold tracking-wider text-neutral-400 uppercase",
    fieldsGroup: "flex flex-col gap-4",
    formActions: "",
  },
});

const UpdateUserForm = () => {
  const styles = updateFormStyle();

  return (
    <form className={styles.form()}>
      <div className={styles.profileSection()}>
        <h3 className={styles.sectionTitle()}>Foto do Perfil</h3>
        <FileInput type="file" id="imageProfile" name="imageProfile" label="Enviar Imagem" />
      </div>
      <div className={styles.fieldsGroup()}>
        <h3 className={styles.sectionTitle()}>Informações Pessoais</h3>
        <Input label="Usuário" id="username" type="text" placeholder="Novo nome de usuário" />
        <Input label="Email" id="email" type="email" placeholder="novo.email@example.com" />
        <Input
          label="Senha"
          id="password"
          type="password"
          input="password"
          placeholder="Nova senha"
        />
        <Input
          label="Confirmar Senha"
          id="confirmPassword"
          type="password"
          input="password"
          placeholder="Confirme a nova senha"
        />
      </div>
      <div className={styles.fieldsGroup()}>
        <h3 className={styles.sectionTitle()}>Sobre Você</h3>
        <Textarea label="Biografia" id="bio" placeholder="Conte-nos sobre você..." />
      </div>
      <div className={styles.formActions()}>
        <Input type="submit" value="Atualizar Perfil" input="submit" />
      </div>
    </form>
  );
};

export default UpdateUserForm;
