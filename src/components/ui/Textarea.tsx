import { useState } from "react";
import { tv, VariantProps } from "tailwind-variants";

const textareaStyle = tv({
  slots: {
    container: "flex flex-col gap-2",
    headerGroup: "flex items-center justify-between",
    label: "text-sm font-semibold text-neutral-100 transition-colors duration-300",
    charCounter: "text-xs text-neutral-400 transition-colors duration-300",
    textarea:
      "border-dark-600/40 bg-dark-900/40 shadow-dark-sm hover:border-dark-500/60 hover:bg-dark-900/50 w-full resize-none rounded-xl border p-3 text-sm text-neutral-100 backdrop-blur-sm transition-all duration-300 ease-in-out outline-none placeholder:text-neutral-500",
  },
  variants: {
    focus: {
      true: {
        textarea:
          "border-primary-500/60 bg-dark-900/60 shadow-glow-primary ring-primary-500/20 ring-1 placeholder:text-neutral-400",
        label: "text-neutral-50",
      },
    },
    isOverLimit: {
      true: {
        charCounter: "text-red-500",
      },
    },
  },
});

const slots = textareaStyle();

type TextareaProps = VariantProps<typeof textareaStyle> &
  React.ComponentPropsWithRef<"textarea"> & {
    label?: string;
    onCharCountChange?: (count: number) => void;
  };

const Textarea = (props: TextareaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const maxLength = 500;
  const isOverLimit = charCount >= maxLength;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const count = value.length;

    setCharCount(count);

    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <div className={slots.container(props)}>
      <div className={slots.headerGroup(props)}>
        {props.label && (
          <label htmlFor={props.id} className={slots.label({ ...props, focus: isFocused })}>
            {props.label}
          </label>
        )}
        <span
          className={slots.charCounter({
            ...props,
            isOverLimit: isOverLimit,
          })}
        >
          {charCount}/{maxLength}
        </span>
      </div>
      <textarea
        {...props}
        className={slots.textarea({ ...props, focus: isFocused })}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
        rows={5}
        maxLength={maxLength}
      />
    </div>
  );
};

export default Textarea;
