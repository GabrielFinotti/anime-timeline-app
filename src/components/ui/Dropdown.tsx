import { useState } from "react";
import Image from "next/image";
import { tv, VariantProps } from "tailwind-variants";
import dropdownIcon from "@/public/icons/chevron-down.svg";

const dropdownStyles = tv({
  slots: {
    container: "flex flex-col gap-2",
    button: "flex w-fit cursor-pointer items-center gap-1",
    image: "h-6 w-5 transition-all duration-300 ease-in-out",
    menu: "grid max-h-0 grid-cols-3 gap-2.5 overflow-hidden border-l-2 transition-all duration-500 ease-in-out",
  },
  variants: {
    display: {
      mobile: {},
      desktop: {},
    },
    activated: {
      true: {
        image: "rotate-90",
        menu: "max-h-screen overflow-visible",
      },
    },
  },
});

const slots = dropdownStyles();

type DropdownProps = VariantProps<typeof dropdownStyles> & {
  label?: string;
  children: React.ReactNode;
};

const Dropdown = (props: DropdownProps) => {
  const [activated, setActivated] = useState(false);

  return (
    <div className={slots.container(props)}>
      <button className={slots.button(props)} onClick={() => setActivated(!activated)}>
        {props.label && <p>{props.label}</p>}
        <Image
          src={dropdownIcon}
          alt="Ícone de seta para baixo representando expansão"
          className={slots.image({ ...props, activated })}
        />
      </button>
      <div className={slots.menu({ ...props, activated })}>{props.children}</div>
    </div>
  );
};

export default Dropdown;
