import Image from "next/image";
import { useState } from "react";
import { tv, VariantProps } from "tailwind-variants";
import searchIcon from "@/public/icons/search.svg";

const searchInputStyles = tv({
  slots: {
    inputGroup:
      "m-auto flex w-3/6 items-center gap-1 rounded-xl border p-1 py-1.5 transition-all duration-400 ease-in-out",
    searchIcon: "transition-all duration-400 ease-in-out",
    input: "w-full text-sm outline-none",
  },
  variants: {
    display: {
      mobile: {
        searchIcon: "h-7 w-7",
      },
    },
    focus: {
      true: {
        inputGroup: "w-full",
        searchIcon: "rotate-360",
      },
    },
  },
});

const slots = searchInputStyles();

type SearchInputProps = VariantProps<typeof searchInputStyles>;

const SearchInput = (props: SearchInputProps) => {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <div className={slots.inputGroup({ ...props, focus: inputFocus })}>
      <Image
        src={searchIcon}
        alt="Ícone de lupa representando pesquisa"
        className={slots.searchIcon({ ...props, focus: inputFocus })}
      />
      <input
        type="search"
        name="Anime Search"
        placeholder="Digite o nome do anime..."
        className={slots.input(props)}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      />
    </div>
  );
};

export default SearchInput;
