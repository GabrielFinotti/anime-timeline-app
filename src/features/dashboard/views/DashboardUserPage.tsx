"use client";

import { tv } from "tailwind-variants";
import { usePaginationVisibility } from "../hooks/usePaginationVisibility";
import Dropdown from "@/src/components/ui/Dropdown";
import SearchInput from "@/src/components/ui/SearchInput";
import SelectCustom from "@/src/components/ui/SelectCustom";
import Pagination from "@/src/components/ui/Pagination";
import UserCardSkeleton from "@/src/components/common/UserCardSkeleton";

const dashboardUserPageStyles = tv({
  slots: {
    filterSection: "flex flex-col gap-3",
    userSection: "flex flex-col gap-5",
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

const slots = dashboardUserPageStyles();

const DashboardUserPage = () => {
  const loading = true;
  const showPagination = usePaginationVisibility(loading);

  return (
    <>
      <section className={slots.filterSection()}>
        <SearchInput />
        <Dropdown label="Avançado">
          <SelectCustom label="Data" options={["Recente", "Antigo"]} onChange={() => {}} />
        </Dropdown>
      </section>
      <section className={slots.userSection()}>
        {loading ? null : (
          <div className={slots.pagination({ show: showPagination })}>
            <Pagination totalDocs={20} />
          </div>
        )}
        <UserCardSkeleton />
      </section>
    </>
  );
};

export default DashboardUserPage;
