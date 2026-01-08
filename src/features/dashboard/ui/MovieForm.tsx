import { memo, ChangeEvent } from "react";
import { tv } from "tailwind-variants";
import AddIcon from "@/public/icons/add.svg";
import Input from "@/src/components/ui/Input";

const movieFormStyles = tv({
  slots: {
    inputGroup: "grid grid-cols-1 gap-3 md:grid-cols-2",
    addButton:
      "from-primary-500/20 to-accent-500/20 border-primary-500/40 hover:from-primary-500/30 hover:to-accent-500/30 hover:border-primary-400 hover:shadow-glow-primary/50 text-primary-300 flex items-center justify-center gap-2 rounded-lg border bg-linear-to-r px-4 py-2.5 text-xs font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
    addIcon: "h-4 w-4",
  },
});

const slots = movieFormStyles();

type MovieFormProps = {
  movieName: string;
  movieReleaseDate: string;
  onMovieNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onMovieReleaseDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddMovie: () => void;
};

const MovieForm = ({
  movieName,
  movieReleaseDate,
  onMovieNameChange,
  onMovieReleaseDateChange,
  onAddMovie,
}: MovieFormProps) => {
  return (
    <>
      <div className={slots.inputGroup()}>
        <Input
          type="text"
          placeholder="Nome do filme"
          name="movieName"
          value={movieName}
          onChange={onMovieNameChange}
        />
        <Input
          type="date"
          placeholder="Data de lançamento"
          name="movieReleaseDate"
          value={movieReleaseDate}
          onChange={onMovieReleaseDateChange}
        />
      </div>
      <button type="button" className={slots.addButton()} onClick={onAddMovie}>
        <AddIcon className={slots.addIcon()} />
        Adicionar Filme
      </button>
    </>
  );
};

export default memo(MovieForm);
