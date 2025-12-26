import { tv, VariantProps } from "tailwind-variants";

const profileCardSkeletonStyles = tv({
  slots: {
    container: "animate-pulse",
    groupOne: "",
    imageProfile: "",
    editButton: "",
    infoProfile: "",
    username: "",
    biographyGroup: "",
    biography: "",
    groupTwo: "",
    totalInLists: "",
    membershipDate: "",
  },
  variants: {
    display: {
      mobile: {
        container: "flex flex-col gap-5",
        groupOne:
          "border-accent-600 shadow-glow-primary relative flex gap-2 rounded-lg border p-2.5",
        imageProfile: "h-28 w-28 rounded-full bg-gray-400",
        editButton: "absolute -top-4 -right-1 h-8 w-8 rounded-full bg-gray-400",
        infoProfile: "flex flex-1 flex-col gap-5 py-2",
        username: "mx-auto h-4 w-32 rounded-2xl bg-gray-400",
        biographyGroup: "flex flex-wrap gap-3.5",
        biography: "h-2 w-full rounded-lg bg-gray-400",
        groupTwo: "flex justify-around rounded-lg border border-neutral-600 p-2.5",
        totalInLists: "h-12 w-32 rounded-lg bg-gray-400",
        membershipDate: "h-12 w-32 rounded-lg bg-gray-400",
      },
      desktop: {},
    },
  },
  defaultVariants: {
    display: "mobile",
  },
});

const slots = profileCardSkeletonStyles();

type ProfileCardSkeletonProps = VariantProps<typeof profileCardSkeletonStyles>;

const ProfileCardSkeleton = (props: ProfileCardSkeletonProps) => {
  return (
    <div className={slots.container()}>
      <div className={slots.groupOne()}>
        <div className={slots.imageProfile()}></div>
        <div className={slots.editButton()}></div>
        <div className={slots.infoProfile()}>
          <div className={slots.username()}></div>
          <div className={slots.biographyGroup()}>
            <span className={slots.biography({ ...props, className: "basis-2/6" })}></span>
            <span className={slots.biography({ ...props, className: "basis-3/6" })}></span>
            <span className={slots.biography({ ...props, className: "basis-4/7" })}></span>
            <span className={slots.biography({ ...props, className: "basis-1/3" })}></span>
            <span className={slots.biography({ ...props, className: "basis-full" })}></span>
          </div>
        </div>
      </div>
      <div className={slots.groupTwo()}>
        <div className={slots.totalInLists()}></div>
        <div className={slots.membershipDate()}></div>
      </div>
    </div>
  );
};

export default ProfileCardSkeleton;
