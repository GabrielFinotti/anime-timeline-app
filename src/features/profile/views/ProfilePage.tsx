"use client";

import ProfileCardSkeleton from "@/src/components/common/ProfileCardSkeleton";
import { tv } from "tailwind-variants";

const profilePageStyles = tv({
  slots: {
    main: "p-2.5",
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
      <ProfileCardSkeleton />
    </main>
  );
};

export default ProfilePage;
