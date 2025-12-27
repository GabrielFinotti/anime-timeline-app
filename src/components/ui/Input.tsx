import { useState } from "react";
import { tv, VariantProps } from "tailwind-variants";
import EyeOpen from "../../../public/icons/eye-open.svg";
import EyeClosed from "../../../public/icons/eye-closed.svg";

const inputStyles = tv({
  slots: {
    container: "flex flex-col gap-2",
    label: "text-sm font-semibold text-neutral-100 transition-colors duration-300",
    inputGroup: "relative flex items-center",
    input:
      "border-dark-600 bg-dark-800/60 shadow-dark-sm hover:border-dark-500 w-full rounded-xl border p-3 text-sm text-neutral-100 transition-all duration-300 ease-in-out outline-none placeholder:text-neutral-500",
    togglePassword:
      "absolute right-3 cursor-pointer text-neutral-500 transition-colors duration-300 ease-in-out hover:text-neutral-300",
    imageButton: "w-4",
  },
  variants: {
    style: {
      password: {
        input: "pr-9",
      },
      submit: {
        input:
          "from-primary-500 to-accent-500 shadow-dark-md hover:shadow-glow-primary hover:from-primary-400 hover:to-accent-400 active:shadow-dark-sm active:from-primary-600 active:to-accent-600 cursor-pointer rounded-xl border-0 bg-linear-to-r text-base font-semibold text-neutral-50 transition-all duration-300 ease-in-out",
      },
    },
    focus: {
      true: {
        input: "border-primary-500 bg-dark-800/80 shadow-glow-primary placeholder:text-neutral-400",
        label: "text-neutral-50",
      },
    },
  },
});

const slots = inputStyles();

type InputProps = VariantProps<typeof inputStyles> &
  React.ComponentPropsWithRef<"input"> & {
    label?: string;
  };

const Input = (props: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={slots.container(props)}>
      {props.label && (
        <label htmlFor={props.id} className={slots.label({ ...props, focus: isFocused })}>
          {props.label}
        </label>
      )}
      <div className={slots.inputGroup(props)}>
        <input
          id={props.id}
          className={slots.input({ ...props, focus: isFocused })}
          type={showPassword ? "text" : props.type}
          placeholder={props.placeholder}
          value={props.value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {props.style === "password" && (
          <button
            type="button"
            className={slots.togglePassword(props)}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOpen className={slots.imageButton(props)} />
            ) : (
              <EyeClosed className={slots.imageButton(props)} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
