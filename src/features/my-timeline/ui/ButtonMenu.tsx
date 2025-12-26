import { useState } from "react";
import EditIcon from "@/public/icons/edit.svg";
import AddIcon from "@/public/icons/add.svg";
import DeleteIcon from "@/public/icons/delete.svg";
import { tv, VariantProps } from "tailwind-variants";

const buttonMenuStyles = tv({
  slots: {
    container: "fixed right-5 bottom-18 z-50 flex w-fit flex-col items-center gap-3",
    buttonGroup:
      "bg-dark-800/90 border-dark-700 shadow-dark-md flex max-h-0 flex-col items-center gap-2.5 overflow-hidden rounded-2xl backdrop-blur-lg transition-all duration-600 ease-in-out",
    buttonOptions:
      "bg-dark-900/80 border-dark-600 hover:bg-dark-700 hover:border-primary-500 m-2 cursor-pointer rounded-full border p-2 transition-all duration-300",
    imagesOptions: "text-primary-400 hover:text-primary-300 h-5 w-5 transition-colors duration-300",
    buttonMenu:
      "bg-primary-500 shadow-glow-primary hover:bg-primary-400 hover:shadow-glow-primary cursor-pointer rounded-full pt-2 pr-2 pb-1 pl-1 transition-all duration-300 hover:scale-110",
    imageMenu: "relative text-neutral-50",
  },
  variants: {
    display: {
      mobile: {},
      desktop: {},
    },
    opened: {
      true: {
        buttonGroup: "max-h-[1000px]",
        buttonMenu: "rotate-45",
      },
    },
  },
  defaultVariants: {
    display: "mobile",
  },
});

const slots = buttonMenuStyles();

type ButtonMenuProps = VariantProps<typeof buttonMenuStyles>;

const ButtonMenu = (props: ButtonMenuProps) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className={slots.container(props)}>
      <div className={slots.buttonGroup({ ...props, opened })}>
        <button className={slots.buttonOptions(props)}>
          <AddIcon className={slots.imagesOptions(props)} />
        </button>
        <button className={slots.buttonOptions(props)}>
          <DeleteIcon className={slots.imagesOptions(props)} />
        </button>
      </div>
      <button className={slots.buttonMenu({ ...props, opened })} onClick={() => setOpened(!opened)}>
        <EditIcon className={slots.imageMenu(props)} />
      </button>
    </div>
  );
};

export default ButtonMenu;
