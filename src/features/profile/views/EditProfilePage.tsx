"use client";

import { tv } from "tailwind-variants";
import EditProfileForm from "../ui/EditProfileForm";

const editProfilePageStyles = tv({
  slots: {
    main: "flex flex-col gap-5",
  },
});

const slots = editProfilePageStyles();

const EditProfilePage = () => {
  return (
    <main className={slots.main()}>
      <EditProfileForm />
    </main>
  );
};

export default EditProfilePage;
