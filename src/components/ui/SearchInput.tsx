import { useState } from "react";
import { tv, VariantProps } from "tailwind-variants";
import SearchIcon from "@/public/icons/search.svg";

const searchInputStyles = tv({
  slots: {
    inputGroup:
      "border-dark-600/40 bg-dark-900/30 shadow-dark-md ring-dark-600/20 m-auto flex h-9.5 w-3/6 items-center gap-2 rounded-xl border p-1 py-1.5 ring-1 backdrop-blur-md transition-all duration-400 ease-in-out",
    searchIcon: "text-neutral-400 transition-all duration-400 ease-in-out",
    input:
      "w-full bg-transparent text-sm text-neutral-100 outline-none placeholder:text-neutral-500 [&::-webkit-search-cancel-button]:hidden",
  },
  variants: {
    display: {
      mobile: {},
    },
    focus: {
      true: {
        inputGroup: "border-primary-500/60 shadow-glow-primary ring-primary-500/20 w-full",
        searchIcon: "text-primary-400 rotate-360",
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
      <SearchIcon className={slots.searchIcon({ ...props, focus: inputFocus })} />
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
