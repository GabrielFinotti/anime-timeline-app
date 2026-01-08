import { useState } from "react";
import { tv, VariantProps } from "tailwind-variants";
import CheckIcon from "@/public/icons/add.svg";

const multiSelectStyle = tv({
  slots: {
    container: "relative mx-auto h-fit w-full cursor-pointer text-center text-sm",
    label:
      "bg-dark-900/40 border-dark-600/40 hover:border-primary-500/60 rounded-lg border p-2.5 text-neutral-100 backdrop-blur-sm transition-colors duration-300",
    selectBox:
      "bg-dark-900/90 shadow-dark-xl border-dark-600/40 absolute z-50 mt-1 max-h-0 w-full overflow-hidden rounded-lg backdrop-blur-md transition-all duration-300 ease-in-out",
    option:
      "hover:bg-primary-500/20 hover:text-primary-300 flex items-center justify-between gap-2 p-2.5 text-neutral-200 transition-all duration-200",
    checkIcon: "text-primary-400 h-4 w-4 transition-opacity duration-200",
    selectedText: "text-primary-300",
  },
  variants: {
    display: {
      mobile: {},
      desktop: {},
    },
    opened: {
      true: {
        label: "border-primary-500",
        selectBox: "max-h-40 overflow-auto",
      },
    },
  },
  defaultVariants: {
    display: "mobile",
  },
});

const slots = multiSelectStyle();

type MultiSelectProps = VariantProps<typeof multiSelectStyle> & {
  label: string;
  options: string[];
  onChange: (selectedOptions: string[]) => void;
};

const MultiSelect = (props: MultiSelectProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleToggleOption = (option: string) => {
    const newSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(newSelectedOptions);
    props.onChange(newSelectedOptions);
  };

  const displayText =
    selectedOptions.length > 0 ? `${selectedOptions.length} selecionado(s)` : props.label;

  return (
    <div className={slots.container()}>
      <p className={slots.label()} onClick={() => setIsOpened(!isOpened)}>
        {displayText}
      </p>
      <div className={slots.selectBox({ opened: isOpened })}>
        {props.options.map((option, i) => {
          const isSelected = selectedOptions.includes(option);
          return (
            <div key={i} className={slots.option()} onClick={() => handleToggleOption(option)}>
              <span className={isSelected ? slots.selectedText() : ""}>{option}</span>
              {isSelected && <CheckIcon className={slots.checkIcon()} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultiSelect;
