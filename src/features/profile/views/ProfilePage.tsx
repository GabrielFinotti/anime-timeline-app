"use client";

import { tv } from "tailwind-variants";
import ProfileCardSkeleton from "@/src/components/common/ProfileCardSkeleton";

const profilePageStyles = tv({
  slots: {
    main: "flex flex-col gap-10",
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
    </main>
  );
};

export default ProfilePage;
