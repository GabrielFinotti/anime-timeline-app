import Image from "next/image";
import { tv, VariantProps } from "tailwind-variants";

const previewUserDataStyles = tv({
  slots: {
    container:
      "border-accent-600 shadow-glow-primary flex gap-3 overflow-hidden rounded-lg border p-2.5",
    imageProfile: "h-28 w-28 rounded-full object-cover",
    alternativeText:
      "bg-dark-600 flex h-28 w-28 max-w-28 items-center justify-center rounded-full text-center text-sm text-neutral-300",
    userInfo: "flex flex-1 flex-col items-center gap-2.5",
    usename: "text-center font-semibold text-neutral-200",
    bio: "line-clamp-3 text-justify text-sm text-wrap text-neutral-300",
  },
});

const styles = previewUserDataStyles();

type PreviewUserDataProps = VariantProps<typeof previewUserDataStyles> & {
  imageUrl?: string;
  username?: string;
  bio?: string;
};

const PreviewUserData = (props: PreviewUserDataProps) => {
  return (
    <div className={styles.container()}>
      {props.imageUrl ? (
        <Image
          src={props.imageUrl}
          alt="Preview da imagem de perfil"
          width={112}
          height={112}
          className={styles.imageProfile()}
        />
      ) : (
        <p className={styles.alternativeText()}>Preview</p>
      )}
      <div className={styles.userInfo()}>
        <p className={styles.usename()}>{props.username || "Nome de Usuário"}</p>
        <p className={styles.bio()}>
          {props.bio || "Sou um otaku apaixonado por animes e mangás..."}
        </p>
      </div>
    </div>
  );
};

export default PreviewUserData;
