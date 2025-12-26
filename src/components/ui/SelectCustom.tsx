import { useState } from "react";
import { tv, VariantProps } from "tailwind-variants";

const selectCustomStyle = tv({
  slots: {
    container: "relative mx-auto h-fit w-full cursor-pointer text-center text-sm",
    label:
      "bg-dark-800/80 border-dark-600 hover:border-primary-500 rounded-lg border p-2.5 text-neutral-100 transition-colors duration-300",
    selectBox:
      "bg-dark-800 shadow-dark-md absolute z-50 mt-1 max-h-0 w-full overflow-hidden rounded-lg transition-all duration-300 ease-in-out",
    option:
      "hover:bg-primary-500/20 hover:text-primary-300 p-2.5 text-neutral-200 transition-all duration-200",
  },
  variants: {
    display: {
      mobile: {},
      desktop: {},
    },
    opened: {
      true: {
        label: "border-primary-500",
        selectBox: "max-h-20 overflow-auto",
      },
    },
  },
  defaultVariants: {
    display: "mobile",
  },
});

const slots = selectCustomStyle();

type SelectCustomProps = VariantProps<typeof selectCustomStyle> & {
  label: string;
  options: string[];
  onChange: (option: string) => void;
};

const SelectCustom = (props: SelectCustomProps) => {
  const [options] = useState<string[]>([props.label, ...props.options]);
  const [actualOption, setActualOption] = useState<string>(props.label);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleValueChange = (option: string) => {
    setActualOption(option);
    setIsOpened(false);
    props.onChange(option);
  };

  return (
    <div className={slots.container()}>
      <p className={slots.label()} onClick={() => setIsOpened(!isOpened)}>
        {actualOption}
      </p>
      <div className={slots.selectBox({ opened: isOpened })}>
        {options
          .filter((option) => option !== actualOption)
          .map((option, i) => (
            <p key={i} className={slots.option()} onClick={() => handleValueChange(option)}>
              {option}
            </p>
          ))}
      </div>
    </div>
  );
};

export default SelectCustom;
