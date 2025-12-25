import { useState } from "react";
import Image from "next/image";
import editIcon from "@/public/icons/edit.svg";
import addIcon from "@/public/icons/add.svg";
import deleteIcon from "@/public/icons/delete.svg";
import { tv, VariantProps } from "tailwind-variants";

const buttonMenuStyles = tv({
  slots: {
    container: "fixed right-5 bottom-8 z-50 flex w-fit flex-col items-center gap-3",
    buttonGroup:
      "flex max-h-0 flex-col items-center gap-2.5 overflow-hidden transition-all duration-600 ease-in-out",
    buttonOptions: "cursor-pointer rounded-full border border-red-400 p-2",
    imagesOptions: "h-5 w-5",
    buttonMenu: "cursor-pointer rounded-full border p-1.5",
    images: "relative top-1 right-0.5 h-8 w-8",
  },
  variants: {
    display: {
      mobile: {},
      desktop: {},
    },
    opened: {
      true: {
        buttonGroup: "max-h-[1000px]",
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
          <Image src={addIcon} alt="Add Icon" className={slots.imagesOptions(props)} />
        </button>
        <button className={slots.buttonOptions(props)}>
          <Image src={deleteIcon} alt="Delete Icon" className={slots.imagesOptions(props)} />
        </button>
      </div>
      <button className={slots.buttonMenu()} onClick={() => setOpened(!opened)}>
        <Image src={editIcon} alt="Edit Icon" className={slots.images(props)} />
      </button>
    </div>
  );
};

export default ButtonMenu;
