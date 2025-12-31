"use client";

import { tv } from "tailwind-variants";
import ProfileCardSkeleton from "@/src/components/common/ProfileCardSkeleton";
import AnimeCardSkeleton from "@/src/components/common/AnimeCardSkeleton";
import Pagination from "@/src/components/ui/Pagination";
import { useProfilePaginationVisibility } from "../hooks/useProfilePaginationVisibility";

const profilePageStyles = tv({
  slots: {
    main: "flex flex-col gap-10",
    favoritesSection: "flex flex-col gap-5",
    h2: "decoration-accent-700 text-xl font-medium underline underline-offset-4",
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

const slots = profilePageStyles();

const ProfilePage = () => {
  const loading = true;
  const showPagination = useProfilePaginationVisibility(loading);

  return (
    <main className={slots.main()}>
      <section>
        <ProfileCardSkeleton />
      </section>
      <section className={slots.favoritesSection()}>
        <h2 className={slots.h2()}>Favoritos</h2>
        {loading ? null : (
          <div className={slots.pagination({ show: showPagination })}>
            <Pagination totalDocs={20} />
          </div>
        )}
        <AnimeCardSkeleton cardsNumber={4} />
      </section>
    </main>
  );
};

export default ProfilePage;
