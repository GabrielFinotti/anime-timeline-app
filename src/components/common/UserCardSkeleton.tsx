import { tv, VariantProps } from "tailwind-variants";

const userCardSkeletonStyles = tv({
  slots: {
    container: "",
    avatar: "",
    groupInfo: "",
    username: "",
    type: "",
    email: "",
    createdAt: "",
  },
  variants: {
    display: {
      mobile: {
        container: "flex gap-3",
        avatar: "h-24 w-24 animate-pulse rounded-full bg-gray-400",
        groupInfo: "flex flex-1 animate-pulse flex-col gap-3",
        username: "h-4 w-full max-w-30 rounded-2xl bg-gray-400",
        type: "h-3.5 w-10 rounded-full bg-gray-400",
        email: "h-3 w-1/2 max-w-32 rounded-lg bg-gray-400",
        createdAt: "h-2.5 w-1/3 rounded-lg bg-gray-400",
      },
      desktop: {},
    },
  },
  defaultVariants: {
    display: "mobile",
  },
});

const slots = userCardSkeletonStyles();

type UserCardSkeletonProps = VariantProps<typeof userCardSkeletonStyles> & {
  cardsNumber?: number;
};

const UserCardSkeleton = (props: UserCardSkeletonProps) => {
  return (
    <>
      {Array.from({ length: props.cardsNumber || 6 }).map((_, index) => (
        <div key={index} className={slots.container()}>
          <div className={slots.avatar()}></div>
          <div className={slots.groupInfo()}>
            <div className={slots.username()}></div>
            <div className={slots.type()}></div>
            <div className={slots.email()}></div>
            <div className={slots.createdAt()}></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserCardSkeleton;
