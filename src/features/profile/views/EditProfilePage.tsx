"use client";

import { tv } from "tailwind-variants";
import PreviewUserData from "../ui/PreviewUserData";
import UpdateUserForm from "../ui/UpdateUserForm";

const editProfilePageStyles = tv({
  slots: {
    main: "flex flex-col gap-5",
  },
});

const slots = editProfilePageStyles();

const EditProfilePage = () => {
  return (
    <main className={slots.main()}>
      <section>
        <PreviewUserData />
      </section>
      <section>
        <UpdateUserForm />
      </section>
    </main>
  );
};

export default EditProfilePage;
