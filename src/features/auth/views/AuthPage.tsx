"use client";

import { tv, VariantProps } from "tailwind-variants";
import AuthFormToggle from "../ui/AuthFormToggle";

const authPageStyles = tv({
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

const slots = authPageStyles();

type AuthPageProps = VariantProps<typeof authPageStyles>;

const AuthPage = (props: AuthPageProps) => {
  return (
    <main className={slots.main(props)}>
      <AuthFormToggle />
    </main>
  );
};

export default AuthPage;
