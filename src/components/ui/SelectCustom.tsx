import { useState } from "react";
import { tv, VariantProps } from "tailwind-variants";

const selectCustomStyle = tv({
  slots: {
    container: "relative mx-auto h-fit w-full cursor-pointer text-center text-sm",
    selectBox:
      "absolute z-50 max-h-0 w-full overflow-hidden transition-all duration-300 ease-in-out",
    label: "p-2.5",
    option: "p-2.5",
  },
  variants: {
    display: {
      mobile: {},
      desktop: {},
    },
    opened: {
      true: {
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
