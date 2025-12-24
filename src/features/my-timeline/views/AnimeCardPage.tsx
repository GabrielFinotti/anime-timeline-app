"use client";

import Image from "next/image";
import dropdownIcon from "@/public/icons/chevron-down.svg";
import { tv, VariantProps } from "tailwind-variants";
import { useState } from "react";
import SearchInput from "@/src/components/ui/SearchInput";
import SelectCustom from "@/src/components/ui/SelectCustom";
import AnimeCardSkeleton from "@/src/components/common/AnimeCardSkeleton";

const animeCardPageStyles = tv({
  slots: {
    main: "flex flex-col gap-5 p-2.5",
    filterSection: "flex flex-col gap-3",
    dropdownGroup: "flex flex-col gap-1",
    dropdownButton: "flex w-fit cursor-pointer items-center gap-1",
    imageDropdown: "h-6 w-5 transition-all duration-300 ease-in-out",
    filterAvancedGroup:
      "grid max-h-0 grid-cols-3 gap-2.5 overflow-hidden border-l-2 text-sm transition-all duration-500 ease-in-out",
    filterContainer: "flex flex-col gap-1",
    filterItems: "cursor-pointer",
    anineCardSection: "flex flex-col gap-2.5",
  },
  variants: {
    display: {
      mobile: {},
    },
    activated: {
      true: {
        imageDropdown: "rotate-90",
        filterAvancedGroup: "max-h-screen overflow-visible",
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

  return (
    <>
      <main className={slots.main(props)}>
        <section className={slots.filterSection(props)}>
          <SearchInput />
          <div className={slots.dropdownGroup(props)}>
            <div
              className={slots.dropdownButton(props)}
              onClick={() => setActiveFilters(!activeFilters)}
            >
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
              })}
            >
              <SelectCustom label="Categoria" options={["Seinen", "Shoujo", "Shounen", "Josei"]} />
              <SelectCustom label="Gêneros" options={["Ecchi", "Harem", "Drama"]} />
              <SelectCustom label="Status" options={["Assistindo", "Completo", "Cancelado"]} />
              <SelectCustom label="Tipo" options={["Série", "Filme", "Mix"]} />
              <SelectCustom label="Adulto" options={["Sim", "Não"]} />
              <SelectCustom label="Gêneros +" options={["Hentai", "Incesto", "NTR"]} />
            </div>
          </div>
        </section>
        <section className={slots.anineCardSection(props)}>
          <AnimeCardSkeleton />
        </section>
      </main>
    </>
  );
};

export default AnimeCardPage;
