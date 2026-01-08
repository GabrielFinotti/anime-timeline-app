"use client";

import { useState } from "react";
import { tv } from "tailwind-variants";
import { usePaginationVisibility } from "../hooks/usePaginationVisibility";
import Dropdown from "@/src/components/ui/Dropdown";
import SearchInput from "@/src/components/ui/SearchInput";
import SelectCustom from "@/src/components/ui/SelectCustom";
import Pagination from "@/src/components/ui/Pagination";
import AnimeCardSkeleton from "@/src/components/common/AnimeCardSkeleton";
import ButtonMenu from "@/src/components/ui/ButtonMenu";
import CreateAnimeModal from "../ui/CreateAnimeModal";

const dashboardAnimePageStyles = tv({
  slots: {
    filterSection: "flex flex-col gap-3",
    animesSection: "flex flex-col gap-5",
    pagination: "origin-center scale-x-0 transition-all duration-500 ease-in-out",
  },
  variants: {
    display: {
      mobile: {},
      desktop: {},
    },
    show: {
      true: {
        pagination: "scale-x-100",
      },
    },
  },
  defaultVariants: {
    display: "mobile",
  },
});

const slots = dashboardAnimePageStyles();

const DashboardAnimePage = () => {
  const loading = true;
  const showPagination = usePaginationVisibility(loading);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className={slots.filterSection()}>
        <SearchInput />
        <Dropdown label="Avançado">
          <SelectCustom
            label="Categorias"
            options={["Shonen", "Seinen", "Shojo"]}
            onChange={() => {}}
          />
          <SelectCustom
            label="Gêneros"
            options={["Ação", "Comédia", "Drama"]}
            onChange={() => {}}
          />
          <SelectCustom
            label="Gêneros +"
            options={["Hentai", "Gore", "Incesto"]}
            onChange={() => {}}
          />
          <SelectCustom label="Tipo" options={["Série", "Filme", "Mix"]} onChange={() => {}} />
          <SelectCustom label="Imagens" options={["Sim", "Não"]} onChange={() => {}} />
          <SelectCustom label="Data" options={["Recente", "Antigo"]} onChange={() => {}} />
        </Dropdown>
      </section>
      <section className={slots.animesSection()}>
        {loading ? null : (
          <div className={slots.pagination({ show: showPagination })}>
            <Pagination totalDocs={20} />
          </div>
        )}
        <AnimeCardSkeleton isMyTimeline={false} />
      </section>
      <ButtonMenu isMyTimeline={false} onClickAdd={() => setIsOpen(true)} />
      {isOpen && <CreateAnimeModal onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default DashboardAnimePage;
