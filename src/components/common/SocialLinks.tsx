import { tv, VariantProps } from "tailwind-variants";
import GitHubIcon from "@/public/icons/github.svg";
import InstagramIcon from "@/public/icons/instagram.svg";
import LinkedInIcon from "@/public/icons/linkedin.svg";

const socialLinksStyles = tv({
  slots: {
    container: "flex justify-center gap-4",
    link: "hover:text-primary-500 text-dark-300 transition-colors duration-200",
    icon: "h-6 w-6",
  },
});

const slots = socialLinksStyles();

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/GabrielFinotti",
    icon: GitHubIcon,
    ariaLabel: "GitHub",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: InstagramIcon,
    ariaLabel: "Instagram",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/gabrielfinotti",
    icon: LinkedInIcon,
    ariaLabel: "LinkedIn",
  },
];

type SocialLinksProps = VariantProps<typeof socialLinksStyles>;

export const SocialLinks = (props: SocialLinksProps) => {
  return (
    <div className={slots.container(props)}>
      {SOCIAL_LINKS.map((link) => {
        const IconComponent = link.icon;

        return (
          <a
            key={link.name}
            href={link.href}
            aria-label={link.ariaLabel}
            target="_blank"
            rel="noopener noreferrer"
            className={slots.link(props)}
          >
            <IconComponent className={slots.icon(props)} />
          </a>
        );
      })}
    </div>
  );
};
