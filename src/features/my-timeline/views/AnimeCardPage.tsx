"use client";

import { tv, VariantProps } from "tailwind-variants";
import { useState } from "react";
import SearchInput from "@/src/components/ui/SearchInput";
import SelectCustom from "@/src/components/ui/SelectCustom";
import AnimeCardSkeleton from "@/src/components/common/AnimeCardSkeleton";
import ButtonMenu from "../ui/ButtonMenu";
import Dropdown from "@/src/components/ui/Dropdown";

const animeCardPageStyles = tv({
  slots: {
    main: "flex flex-col gap-5 p-2.5",
    filterSection: "flex flex-col gap-3",
    animeCardSection: "flex flex-col gap-5",
  },
  variants: {
    display: {
      mobile: {},
    },
  },
  defaultVariants: {
    display: "mobile",
  },
});

const slots = animeCardPageStyles();

type AnimeCardPageProps = VariantProps<typeof animeCardPageStyles>;

const AnimeCardPage = (props: AnimeCardPageProps) => {
  const [isAdult, setIsAdult] = useState<boolean>(false);

  return (
    <>
      <main className={slots.main(props)}>
        <section className={slots.filterSection(props)}>
          <SearchInput />
          <Dropdown label="Avançado">
            <SelectCustom
              label="Categoria"
              options={["Seinen", "Shoujo", "Shounen", "Josei"]}
              onChange={() => {}}
            />
            <SelectCustom
              label="Gêneros"
              options={["Ecchi", "Harem", "Drama"]}
              onChange={() => {}}
            />
            <SelectCustom
              label="Status"
              options={["Assistindo", "Completo", "Cancelado"]}
              onChange={() => {}}
            />
            <SelectCustom label="Tipo" options={["Série", "Filme", "Mix"]} onChange={() => {}} />
            <SelectCustom
              label="Adulto"
              options={["Sim", "Não"]}
              onChange={(value) => setIsAdult(value === "Sim")}
            />
            {isAdult && (
              <SelectCustom
                label="Gêneros +"
                options={["Hentai", "Incesto", "NTR"]}
                onChange={() => {}}
              />
            )}
          </Dropdown>
        </section>
        <section className={slots.animeCardSection(props)}>
          <AnimeCardSkeleton />
        </section>
        <ButtonMenu />
      </main>
    </>
  );
};

export default AnimeCardPage;
