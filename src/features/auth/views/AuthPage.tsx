"use client";

import { tv, VariantProps } from "tailwind-variants";
import LoginForm from "../ui/LoginForm";

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
      <LoginForm />
    </main>
  );
};

export default AuthPage;
