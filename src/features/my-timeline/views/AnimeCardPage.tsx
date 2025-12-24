"use client";

import Image from "next/image";
import dropdownIcon from "@/public/icons/chevron-down.svg";
import { tv, VariantProps } from "tailwind-variants";
import { useState } from "react";
import SearchInput from "@/src/components/ui/SearchInput";
import SelectCustom from "@/src/components/ui/SelectCustom";

const animeCardPageStyles = tv({
  slots: {
    main: "p-2.5",
    filterSection: "flex flex-col gap-3",
    dropdownGroup: "flex flex-col gap-1",
    dropdownButton: "flex w-fit cursor-pointer items-center gap-1",
    imageDropdown: "h-6 w-5 transition-all duration-300 ease-in-out",
    filterAvancedGroup:
      "grid max-h-0 grid-cols-3 gap-2.5 overflow-hidden text-sm transition-all duration-500 ease-in-out",
    filterContainer: "flex flex-col gap-1",
    filterItems: "cursor-pointer",
  },
  variants: {
    display: {
      mobile: {},
    },
    activated: {
      true: {
        imageDropdown: "rotate-90",
        filterAvancedGroup: "max-h-screen",
      },
    },
    focus: {
      true: {},
    },
  },
  defaultVariants: {
    display: "mobile",
  },
});

const slots = animeCardPageStyles();

type AnimeCardPageProps = VariantProps<typeof animeCardPageStyles>;

const AnimeCardPage = (props: AnimeCardPageProps) => {
  const [activeFilters, setActiveFilters] = useState(false);
  const [overflowActive, setOverflowActive] = useState(false);

  const handleActiveFilters = () => {
    setActiveFilters(!activeFilters);

    if (!activeFilters) {
      setTimeout(() => {
        setOverflowActive(true);
      }, 500);
    } else {
      setOverflowActive(false);
    }
  };

  return (
    <>
      <main className={slots.main(props)}>
        <section className={slots.filterSection(props)}>
          <SearchInput />
          <div className={slots.dropdownGroup(props)}>
            <div className={slots.dropdownButton(props)} onClick={handleActiveFilters}>
              <p>Avançado</p>
              <Image
                src={dropdownIcon}
                alt="Ícone de seta para baixo representando expansão"
                className={slots.imageDropdown({ ...props, activated: activeFilters })}
              />
            </div>
            <div
              className={slots.filterAvancedGroup({
                ...props,
                activated: activeFilters,
                className: overflowActive ? "overflow-visible" : "",
              })}
            >
              <SelectCustom label="Categoria" options={["Seinen", "Shoujo", "Shounen", "Josei"]} />
              <div className={slots.filterContainer(props)}>
                <p className={slots.filterItems(props)}>Gêneros</p>
                <p className={slots.filterItems(props)}>Ecchi</p>
                <p className={slots.filterItems(props)}>Harem</p>
                <p className={slots.filterItems(props)}>Drama</p>
              </div>
              <SelectCustom label="Status" options={["Assistindo", "Completo", "Cancelado"]} />
              <SelectCustom label="Tipo" options={["Série", "Filme", "Mix"]} />
              <SelectCustom label="Adulto" options={["Sim", "Não"]} />
              <div className={slots.filterContainer(props)}>
                <p className={slots.filterItems(props)}>Gêneros +</p>
                <p className={slots.filterItems(props)}>Hentai</p>
                <p className={slots.filterItems(props)}>Incesto</p>
                <p className={slots.filterItems(props)}>NTR</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AnimeCardPage;
