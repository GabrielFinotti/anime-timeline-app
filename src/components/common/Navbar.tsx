"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { tv, VariantProps } from "tailwind-variants";
import { useState, useEffect } from "react";
import LogoIcon from "../../../public/logo/logo.svg";
import HomeIcon from "../../../public/icons/home.svg";
import ProfileIcon from "../../../public/icons/profile.svg";
import DashboardIcon from "../../../public/icons/dashboard.svg";

const navbarStyles = tv({
  slots: {
    container:
      "bg-dark-950/40 border-b border-neutral-700/30 p-3 shadow-lg shadow-black/10 backdrop-blur-lg",
    logoGroup: "",
    logoImage: "",
    logoText: "",
    linksContainer: "transition-all duration-500 ease-in-out",
    links: "transition-all duration-500 ease-in-out",
    linkImages: "text-neutral-400 transition-all duration-500 ease-in-out",
  },
  variants: {
    display: {
      mobile: {
        logoGroup: "flex items-center gap-4",
        logoImage:
          "h-14 w-14 drop-shadow-[0_0_12px_rgba(239,68,68,0.4)] transition-all duration-300 hover:drop-shadow-[0_0_16px_rgba(239,68,68,0.6)]",
        logoText:
          "text-xl font-semibold tracking-wide text-neutral-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]",
        linksContainer:
          "bg-dark-950/60 ring-primary-500/10 fixed right-2.5 bottom-2.5 left-2.5 z-100000 m-auto flex max-w-80 items-center justify-around rounded-full border border-neutral-600/40 p-1 shadow-2xl ring-1 shadow-black/30 backdrop-blur-xl",
        links: "rounded-full p-2 transition-all duration-300 hover:bg-neutral-700/30",
      },
      desktop: {},
    },
    activeLink: {
      true: {
        links: "bg-primary-500/90 shadow-glow-primary hover:bg-primary-500 scale-105",
        linkImages: "text-neutral-50",
      },
      false: {},
    },
    hidden: {
      true: {
        linksContainer: "pointer-events-none scale-x-0 opacity-0",
      },
    },
  },
  defaultVariants: {
    display: "mobile",
  },
});

const slots = navbarStyles();

type NavbarProps = VariantProps<typeof navbarStyles>;

const Navbar = (props: NavbarProps) => {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHidden(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector("footer");

    if (footer) {
      observer.observe(footer);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={slots.container(props)}>
        <div className={slots.logoGroup(props)}>
          <LogoIcon className={slots.logoImage(props)} />
          <h1 className={slots.logoText(props)}>Anime Timeline</h1>
        </div>
      </header>
      {pathname !== "/" && (
        <nav className={slots.linksContainer({ ...props, hidden: isHidden })}>
          <Link
            href="/my-timeline"
            className={slots.links({ ...props, activeLink: pathname === "/my-timeline" })}
          >
            <HomeIcon
              className={slots.linkImages({ ...props, activeLink: pathname === "/my-timeline" })}
            />
          </Link>
          <Link
            href="/dashboard"
            className={slots.links({ ...props, activeLink: pathname.startsWith("/dashboard") })}
          >
            <DashboardIcon
              className={slots.linkImages({
                ...props,
                activeLink: pathname.startsWith("/dashboard"),
              })}
            />
          </Link>
          <Link
            href="/profile"
            className={slots.links({ ...props, activeLink: pathname === "/profile" })}
          >
            <ProfileIcon
              className={slots.linkImages({ ...props, activeLink: pathname === "/profile" })}
            />
          </Link>
        </nav>
      )}
    </>
  );
};

export default Navbar;
