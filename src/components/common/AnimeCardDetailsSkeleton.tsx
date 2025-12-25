import { tv, VariantProps } from "tailwind-variants";

const animeCardDetailsSkeletonStyles = tv({
  slots: {
    container: "flex animate-pulse flex-col gap-2.5",
    groupOne: "relative m-auto w-fit pt-1",
    image: "h-60 w-54 rounded-xl bg-gray-400",
    liked: "absolute top-0 -right-2.5 h-7 w-7 rounded-full bg-gray-300",
    groupInfo: "flex flex-col gap-3 p-2.5",
    title: "m-auto h-4 w-44 rounded-lg bg-gray-400",
    synopsiGroup: "flex flex-wrap gap-2",
    synopsis: "h-2.5 w-full rounded-lg bg-gray-400",
    groupTwo: "flex justify-between pt-3",
    groupPrimaryInfo: "flex gap-2",
    category: "h-3 w-14 rounded-full bg-gray-400",
    type: "h-3 w-14 rounded-full bg-gray-400",
    groupSecondaryInfo: "flex gap-2",
    productionType: "h-3 w-14 rounded-full bg-gray-400",
    status: "h-3 w-14 rounded-full bg-gray-400",
    groupGenres: "flex gap-2 py-1",
    genres: "h-3 w-10 rounded-full bg-gray-400",
    originalMaterial: "h-3 w-12 rounded-full bg-gray-400",
    movies: "h-3 w-full rounded-full bg-gray-400",
    seasons: "h-3 w-full rounded-full bg-gray-400",
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

const slots = animeCardDetailsSkeletonStyles();

type AnimeCardDetailsSkeletonProps = VariantProps<typeof animeCardDetailsSkeletonStyles>;

const AnimeCardDetailsSkeleton = (props: AnimeCardDetailsSkeletonProps) => {
  return (
    <div className={slots.container(props)}>
      <div className={slots.groupOne(props)}>
        <div className={slots.image(props)}></div>
        <span className={slots.liked(props)}></span>
      </div>
      <div className={slots.groupInfo(props)}>
        <div className={slots.title(props)}></div>
        <div className={slots.synopsiGroup(props)}>
          <span className={slots.synopsis({ ...props, className: "basis-full" })}></span>
          <span className={slots.synopsis({ ...props, className: "basis-2/5" })}></span>
          <span className={slots.synopsis({ ...props, className: "basis-2/5" })}></span>
          <span className={slots.synopsis({ ...props, className: "basis-2/3" })}></span>
          <span className={slots.synopsis({ ...props, className: "basis-1/4" })}></span>
        </div>
        <div className={slots.groupTwo(props)}>
          <div className={slots.groupPrimaryInfo(props)}>
            <span className={slots.category(props)}></span>
            <span className={slots.type(props)}></span>
          </div>
          <div className={slots.groupSecondaryInfo(props)}>
            <span className={slots.productionType(props)}></span>
            <span className={slots.status(props)}></span>
          </div>
        </div>
        <div className={slots.groupGenres(props)}>
          <span className={slots.genres(props)}></span>
          <span className={slots.genres(props)}></span>
          <span className={slots.genres(props)}></span>
          <span className={slots.genres(props)}></span>
        </div>
        <div className={slots.originalMaterial(props)}></div>
        <div className={slots.movies(props)}></div>
        <div className={slots.seasons(props)}></div>
      </div>
    </div>
  );
};

export default AnimeCardDetailsSkeleton;
