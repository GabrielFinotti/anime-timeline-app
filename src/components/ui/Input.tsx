import { useState } from "react";
import { tv, VariantProps } from "tailwind-variants";
import EyeOpen from "../../../public/icons/eye-open.svg";
import EyeClosed from "../../../public/icons/eye-closed.svg";

const inputStyles = tv({
  slots: {
    container: "flex flex-col gap-2",
    label: "w-fit text-sm font-semibold text-neutral-100 transition-colors duration-300",
    inputGroup: "relative flex items-center",
    input:
      "border-dark-600/40 bg-dark-900/40 shadow-dark-sm hover:border-dark-500/60 hover:bg-dark-900/50 w-full rounded-xl border p-3 text-sm text-neutral-100 backdrop-blur-sm transition-all duration-300 ease-in-out outline-none placeholder:text-neutral-500",
    togglePassword:
      "absolute right-3 cursor-pointer text-neutral-500 transition-colors duration-300 ease-in-out hover:text-neutral-300",
    imageButton: "w-4",
  },
  variants: {
    input: {
      password: {
        input: "pr-9",
      },
      submit: {
        input:
          "from-primary-500 to-accent-500 shadow-dark-md hover:shadow-glow-primary hover:from-primary-400 hover:to-accent-400 active:shadow-dark-sm active:from-primary-600 active:to-accent-600 ring-primary-400/30 cursor-pointer rounded-xl border-0 bg-linear-to-r text-base font-semibold text-neutral-50 ring-1 transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98]",
      },
    },
    focus: {
      true: {
        input:
          "border-primary-500/60 bg-dark-900/60 shadow-glow-primary ring-primary-500/20 ring-1 placeholder:text-neutral-400",
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
          {...props}
          className={slots.input({ ...props, focus: isFocused })}
          type={showPassword ? "text" : props.type}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {props.input === "password" && (
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
