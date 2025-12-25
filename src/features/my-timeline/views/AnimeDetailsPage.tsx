"use client";

import AnimeCardDetailsSkeleton from "@/src/components/common/AnimeCardDetailsSkeleton";
import { tv, VariantProps } from "tailwind-variants";

const animeDetailsPageStyles = tv({
  slots: {
    main: "p-2.5",
  },
});

const slots = animeDetailsPageStyles();

type AnimeDetailsPageProps = VariantProps<typeof animeDetailsPageStyles>;

const AnimeDetailsPage = (props: AnimeDetailsPageProps) => {
  return (
    <main className={slots.main(props)}>
      <AnimeCardDetailsSkeleton />
    </main>
  );
};

export default AnimeDetailsPage;
