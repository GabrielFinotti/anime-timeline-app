import { useState } from "react";
import { tv } from "tailwind-variants";

const fileInputStyles = tv({
  slots: {
    label:
      "bg-primary-500 hover:bg-primary-400 active:bg-primary-600 shadow-dark-md hover:shadow-glow-primary block cursor-pointer rounded-xl p-3 text-center font-semibold text-neutral-50 transition-all duration-300",
    input: "hidden",
  },
});

const slots = fileInputStyles();

type FileInputProps = React.ComponentPropsWithRef<"input"> & {
  type: "file";
  label: string;
};

const FileInput = (props: FileInputProps) => {
  const [label, setLabel] = useState(props.label);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setLabel("Foto Selecionada");
    } else {
      setLabel(props.label);
    }
  };

  return (
    <>
      <label className={slots.label()} htmlFor={props.id}>
        {label}
      </label>
      <input {...props} className={slots.input()} onChange={handleChange} />
    </>
  );
};

export default FileInput;
