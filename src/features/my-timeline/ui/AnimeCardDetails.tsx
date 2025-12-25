import { tv, VariantProps } from "tailwind-variants";

const animeCardDetailsStyles = tv({});

const slots = animeCardDetailsStyles();

type AnimeCardDetailsProps = VariantProps<typeof animeCardDetailsStyles>;

const AnimeCardDetails = (props: AnimeCardDetailsProps) => {
  return <div></div>;
};

export default AnimeCardDetails;
