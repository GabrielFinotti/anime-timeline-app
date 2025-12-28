"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { tv, VariantProps } from "tailwind-variants";
import { useState, useEffect } from "react";
import LogoIcon from "../../../public/logo/logo.svg";
import HomeIcon from "../../../public/icons/home.svg";
import ProfileIcon from "../../../public/icons/profile.svg";

const navbarStyles = tv({
  slots: {
    container: "p-2.5",
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
        logoGroup: "flex items-center gap-5",
        logoImage: "h-20 w-20 drop-shadow-[0_0_8px_rgba(239,68,68,0.3)]",
        logoText: "text-2xl font-medium text-neutral-50",
        linksContainer:
          "border-dark-700 bg-dark-900/80 shadow-dark-lg fixed right-2.5 bottom-2.5 left-2.5 z-100000 flex items-center justify-around rounded-full border p-1 backdrop-blur-xs",
        links: "rounded-full p-2",
      },
      desktop: {},
    },
    activeLink: {
      true: {
        links: "bg-primary-500 shadow-glow-primary",
        linkImages: "text-neutral-50",
      },
      false: {},
    },
    hidden: {
      true: {
        linksContainer: "pointer-events-none scale-x-0",
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
    <nav className={slots.container(props)}>
      <div className={slots.logoGroup(props)}>
        <LogoIcon className={slots.logoImage(props)} />
        <h1 className={slots.logoText(props)}>Anime Timeline</h1>
      </div>
      {pathname !== "/" && (
        <div className={slots.linksContainer({ ...props, hidden: isHidden })}>
          <Link
            href="/my-timeline"
            className={slots.links({ ...props, activeLink: pathname === "/my-timeline" })}
          >
            <HomeIcon
              className={slots.linkImages({ ...props, activeLink: pathname === "/my-timeline" })}
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
