import { useState } from "react";
import { tv, VariantProps } from "tailwind-variants";
import DropdownIcon from "@/public/icons/chevron-down.svg";

const dropdownStyles = tv({
  slots: {
    container: "z-50 flex flex-col gap-2",
    button:
      "hover:text-primary-400 flex w-fit cursor-pointer items-center gap-1 text-neutral-100 transition-colors duration-300",
    image: "h-5 w-5 text-neutral-400 transition-all duration-300 ease-in-out",
    menu: "border-primary-500/50 grid max-h-0 origin-top scale-y-0 grid-cols-3 gap-2.5 border-l-2 pl-3 transition-all duration-400 ease-in-out",
  },
  variants: {
    display: {
      mobile: {},
      desktop: {},
    },
    activated: {
      true: {
        image: "text-primary-400 rotate-90",
        menu: "max-h-screen scale-y-100",
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
        <DropdownIcon className={slots.image({ ...props, activated })} />
      </button>
      <div className={slots.menu({ ...props, activated })}>{props.children}</div>
    </div>
  );
};

export default Dropdown;
