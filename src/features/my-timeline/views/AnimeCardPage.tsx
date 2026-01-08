"use client";

import { tv, VariantProps } from "tailwind-variants";
import SearchInput from "@/src/components/ui/SearchInput";
import SelectCustom from "@/src/components/ui/SelectCustom";
import AnimeCardSkeleton from "@/src/components/common/AnimeCardSkeleton";
import ButtonMenu from "@/src/components/ui/ButtonMenu";
import Dropdown from "@/src/components/ui/Dropdown";
import Pagination from "@/src/components/ui/Pagination";
import { usePaginationVisibility } from "../hooks/usePaginationVisibility";
import { useAdultContentFilter } from "../hooks/useAdultContentFilter";

const animeCardPageStyles = tv({
  slots: {
    main: "flex flex-col gap-5",
    filterSection: "flex flex-col gap-3",
    paginationSection: "origin-center scale-x-0 transition-all duration-500 ease-in-out",
    animeCardSection: "flex flex-col gap-5",
  },
  variants: {
    display: {
      mobile: {},
    },
    show: {
      true: {
        paginationSection: "scale-x-100",
      },
    },
  },
  defaultVariants: {
    display: "mobile",
    show: false,
  },
});

const slots = animeCardPageStyles();

type AnimeCardPageProps = VariantProps<typeof animeCardPageStyles>;

const AnimeCardPage = (props: AnimeCardPageProps) => {
  const loading = true;
  const { isAdult, handleAdultChange } = useAdultContentFilter();
  const showPagination = usePaginationVisibility(loading);

  return (
    <>
      <main className={slots.main(props)}>
        <section className={slots.filterSection(props)}>
          <SearchInput />
          <Dropdown label="Avançado">
            <SelectCustom
              label="Categorias"
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
            <SelectCustom label="Adulto" options={["Sim", "Não"]} onChange={handleAdultChange} />
            {isAdult && (
              <SelectCustom
                label="Gêneros +"
                options={["Hentai", "Incesto", "NTR"]}
                onChange={() => {}}
              />
            )}
          </Dropdown>
        </section>
        {loading ? null : (
          <section className={slots.paginationSection({ ...props, show: showPagination })}>
            <Pagination totalDocs={100} />
          </section>
        )}
        <section className={slots.animeCardSection(props)}>
          <AnimeCardSkeleton />
        </section>
        <ButtonMenu />
      </main>
    </>
  );
};

export default AnimeCardPage;
