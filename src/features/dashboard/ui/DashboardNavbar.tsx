"use client";

import Link from "next/link";
import AnimeIcon from "../../../../public/icons/play.svg";
import UsersIcon from "../../../../public/icons/users.svg";
import { tv } from "tailwind-variants";
import { usePathname } from "next/navigation";

const dashboardNavbarStyles = tv({
  slots: {
    nav: "bg-dark-800/50 border-dark-600/60 sticky top-4 z-10000 mx-auto flex w-fit flex-row gap-2 rounded-full border p-1 shadow-lg shadow-black/20 backdrop-blur-md",
    linksContainer: "relative flex flex-row gap-1",
    toggleIndicator:
      "bg-primary-500/25 border-primary-500/60 shadow-primary-500/20 absolute h-full rounded-full border shadow-lg transition-all duration-300 ease-in-out",
    link: "relative z-10 flex min-w-[100px] cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-neutral-300 transition-all duration-200",
    icon: "h-5 w-5 shrink-0 transition-all duration-200",
  },
  variants: {
    active: {
      true: {
        link: "text-neutral-50",
        icon: "text-primary-500 scale-110",
      },
      false: {
        link: "text-neutral-400 hover:text-neutral-300",
        icon: "scale-100 opacity-60 hover:opacity-80",
      },
    },
  },
});

const slots = dashboardNavbarStyles();

const DashboardNavbar = () => {
  const pathname = usePathname();
  const detailPagePattern = /^\/dashboard\/(animes|users)\/[^/]+/;
  const isAnimesActive = pathname === "/dashboard/animes";
  const isUsersActive = pathname === "/dashboard/users";

  if (detailPagePattern.test(pathname)) {
    return null;
  }

  return (
    <nav className={slots.nav()}>
      <div className={slots.linksContainer()}>
        <div
          className={slots.toggleIndicator()}
          style={{
            width: "calc(50% - 6px)",
            left: isUsersActive ? "calc(50% + 2px)" : "4px",
          }}
        />
        <Link href="/dashboard/animes" className={slots.link({ active: isAnimesActive })}>
          <AnimeIcon className={slots.icon({ active: isAnimesActive })} />
          <span>Animes</span>
        </Link>
        <Link href="/dashboard/users" className={slots.link({ active: isUsersActive })}>
          <UsersIcon className={slots.icon({ active: isUsersActive })} />
          <span>Usuários</span>
        </Link>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
