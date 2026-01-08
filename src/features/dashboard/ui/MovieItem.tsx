import { memo } from "react";
import { tv } from "tailwind-variants";
import TrashIcon from "@/public/icons/delete.svg";
import { Movie } from "../hooks/useAnimeCreateModal";

const movieItemStyles = tv({
  slots: {
    previewItem:
      "bg-dark-800/60 border-dark-600/50 hover:border-primary-500/30 hover:bg-dark-800/80 group flex items-center justify-between gap-3 rounded-xl border p-3.5 shadow-sm transition-all duration-300",
    previewItemContent: "flex flex-1 flex-col gap-1.5",
    previewItemTitle: "text-xs font-semibold text-neutral-100",
    previewItemMeta: "text-[10px] text-neutral-400",
    deleteButton:
      "flex h-8 w-8 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/10 text-red-400 transition-all duration-300 hover:scale-110 hover:border-red-500/50 hover:bg-red-500/20 hover:text-red-300 active:scale-95",
    deleteIcon: "h-4 w-4",
  },
});

const slots = movieItemStyles();

type MovieItemProps = {
  movie: Movie;
  onRemove: (id: string) => void;
};

const MovieItem = ({ movie, onRemove }: MovieItemProps) => {
  return (
    <div className={slots.previewItem()}>
      <div className={slots.previewItemContent()}>
        <p className={slots.previewItemTitle()}>{movie.name}</p>
        <p className={slots.previewItemMeta()}>
          Lançamento: {new Date(movie.releaseDate).toLocaleDateString("pt-BR")}
        </p>
      </div>
      <button
        type="button"
        className={slots.deleteButton()}
        onClick={() => onRemove(movie.id)}
        title="Excluir filme"
      >
        <TrashIcon className={slots.deleteIcon()} />
      </button>
    </div>
  );
};

export default memo(MovieItem);
