"use client";

import Dropdown from "@/src/components/ui/Dropdown";
import SearchInput from "@/src/components/ui/SearchInput";
import SelectCustom from "@/src/components/ui/SelectCustom";
import { tv } from "tailwind-variants";

const dashboardAnimePageStyles = tv({
  slots: {},
});

const DashboardAnimePage = () => {
  return (
    <>
      <section>
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
      <section>{/* Conteúdo da página de dashboard de animes */}</section>
    </>
  );
};

export default DashboardAnimePage;
