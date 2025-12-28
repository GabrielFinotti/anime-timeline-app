"use client";

import { tv } from "tailwind-variants";
import ProfileCardSkeleton from "@/src/components/common/ProfileCardSkeleton";
import AnimeCardSkeleton from "@/src/components/common/AnimeCardSkeleton";

const profilePageStyles = tv({
  slots: {
    main: "flex flex-col gap-10",
    favoritesSection: "flex flex-col gap-5",
    h2: "decoration-accent-700 text-xl font-medium underline underline-offset-4",
  },
  variants: {
    display: {
      mobile: {},
      desktop: {},
    },
  },
  defaultVariants: {
    display: "mobile",
  },
});

const slots = profilePageStyles();

const ProfilePage = () => {
  return (
    <main className={slots.main()}>
      <section>
        <ProfileCardSkeleton />
      </section>
      <section className={slots.favoritesSection()}>
        <h2 className={slots.h2()}>Favoritos</h2>
        <AnimeCardSkeleton cardsNumber={4} />
      </section>
    </main>
  );
};

export default ProfilePage;
