"use client";

import Image from "next/image";
import { tv, VariantProps } from "tailwind-variants";
import { SocialLinks } from "./SocialLinks";

const footerStyles = tv({
  slots: {
    container:
      "bg-dark-900/20 flex flex-col items-center gap-4 border-t border-neutral-600/40 p-2.5 backdrop-blur-sm",
    logoSection: "flex flex-col items-center gap-2",
    logo: "h-16 w-16 drop-shadow-[0_0_8px_rgba(239,68,68,0.3)]",
    appName: "text-lg font-semibold text-neutral-100",
    copyright: "text-center text-sm text-neutral-500",
    message: "text-xs text-neutral-600",
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
