"use client";

import Image from "next/image";
import { tv, VariantProps } from "tailwind-variants";
import { SocialLinks } from "./SocialLinks";

const footerStyles = tv({
  slots: {
    container:
      "bg-dark-950/50 flex flex-col items-center gap-5 px-4 py-6 shadow-[0_-4px_20px_rgba(0,0,0,0.2)] backdrop-blur-xl",
    logoSection: "flex flex-col items-center gap-3",
    logo: "h-14 w-14 cursor-pointer drop-shadow-[0_0_12px_rgba(239,68,68,0.4)] transition-all duration-300 hover:drop-shadow-[0_0_18px_rgba(239,68,68,0.6)]",
    appName:
      "text-lg font-semibold tracking-wide text-neutral-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]",
    copyright: "text-center text-sm font-medium text-neutral-400",
    message:
      "hover:text-primary-400 cursor-default text-xs text-neutral-500 italic transition-colors duration-300",
  },
});

const slots = footerStyles();

type FooterProps = VariantProps<typeof footerStyles>;

const Footer = (props: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={slots.container(props)}>
      <div className={slots.logoSection(props)}>
        <Image
          src="/logo/logo-infinite.svg"
          alt="Anime Timeline Logo"
          width={24}
          height={24}
          className={slots.logo(props)}
          priority
        />
        <p className={slots.appName(props)}>Anime Timeline</p>
      </div>
      <SocialLinks />
      <p className={slots.copyright(props)}>
        © {currentYear} Gabriel Finotti. All rights reserved.
      </p>
      <p className={slots.message(props)}>Feito por um dev fã, para fãs de anime ☕</p>
    </footer>
  );
};

export default Footer;
