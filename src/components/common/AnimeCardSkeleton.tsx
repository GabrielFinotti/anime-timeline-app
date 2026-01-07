import { tv, VariantProps } from "tailwind-variants";

const animeCardSkeletonStyle = tv({
  slots: {
    container: "",
    image: "",
    title: "",
    liked: "",
    category: "",
    synopse: "",
    genre: "",
    groupInfo: "",
    primaryInfo: "",
    synopseGroup: "",
    genreGroup: "",
  },
  variants: {
    display: {
      mobile: {
        container: "flex gap-3",
        image: "h-32 w-28 animate-pulse rounded-xl bg-gray-400",
        title: "h-4 w-full max-w-30 rounded-2xl bg-gray-400",
        liked: "h-5 w-5 rounded-full bg-gray-400",
        category: "h-3.5 w-10 rounded-full bg-gray-400",
        synopse: "h-2.5 w-full rounded-lg bg-gray-400",
        genre: "h-3 w-10 rounded-full bg-gray-400",
        groupInfo: "flex flex-1 animate-pulse flex-col gap-3",
        primaryInfo: "flex w-full items-center justify-between gap-3",
        synopseGroup: "flex flex-wrap gap-2",
        genreGroup: "flex gap-2",
      },
      desktop: {},
    },
    isMyTimeline: {
      true: {},
      false: {
        liked: "hidden",
      },
    },
  },
  defaultVariants: {
    display: "mobile",
    isMyTimeline: true,
  },
});

const slots = animeCardSkeletonStyle();

type AnimeCardSkeletonProps = VariantProps<typeof animeCardSkeletonStyle> & {
  cardsNumber?: number;
};

const AnimeCardSkeleton = (props: AnimeCardSkeletonProps) => {
  return (
    <>
      {Array.from({ length: props.cardsNumber || 6 }).map((_, index) => (
        <div key={index} className={slots.container(props)}>
          <span className={slots.image(props)}></span>
          <div className={slots.groupInfo(props)}>
            <div className={slots.primaryInfo(props)}>
              <span className={slots.title(props)}></span>
              <span className={slots.liked(props)}></span>
            </div>
            <span className={slots.category(props)}></span>
            <div className={slots.synopseGroup(props)}>
              <span className={slots.synopse({ ...props, className: "basis-1/2" })}></span>
              <span className={slots.synopse({ ...props, className: "basis-1/3" })}></span>
              <span className={slots.synopse({ ...props, className: "w-full" })}></span>
            </div>
            <div className={slots.genreGroup(props)}>
              <span className={slots.genre(props)}></span>
              <span className={slots.genre(props)}></span>
              <span className={slots.genre(props)}></span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnimeCardSkeleton;
