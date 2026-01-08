import { memo, ChangeEvent } from "react";
import { tv } from "tailwind-variants";
import AddIcon from "@/public/icons/add.svg";
import Input from "@/src/components/ui/Input";

const seasonFormStyles = tv({
  slots: {
    inputGroup: "grid grid-cols-1 gap-3 md:grid-cols-3",
    addButton:
      "from-primary-500/20 to-accent-500/20 border-primary-500/40 hover:from-primary-500/30 hover:to-accent-500/30 hover:border-primary-400 hover:shadow-glow-primary/50 text-primary-300 flex items-center justify-center gap-2 rounded-lg border bg-linear-to-r px-4 py-2.5 text-xs font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
    addIcon: "h-4 w-4",
  },
});

const slots = seasonFormStyles();

type SeasonFormProps = {
  seasonNumber: string;
  seasonReleaseDate: string;
  seasonTotalEpisodes: string;
  onSeasonNumberChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSeasonReleaseDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSeasonTotalEpisodesChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddSeason: () => void;
};

const SeasonForm = ({
  seasonNumber,
  seasonReleaseDate,
  seasonTotalEpisodes,
  onSeasonNumberChange,
  onSeasonReleaseDateChange,
  onSeasonTotalEpisodesChange,
  onAddSeason,
}: SeasonFormProps) => {
  return (
    <>
      <div className={slots.inputGroup()}>
        <Input
          type="number"
          placeholder="Número da temporada"
          name="seasonNumber"
          value={seasonNumber}
          onChange={onSeasonNumberChange}
        />
        <Input
          type="date"
          placeholder="Data de lançamento"
          name="seasonReleaseDate"
          value={seasonReleaseDate}
          onChange={onSeasonReleaseDateChange}
        />
        <Input
          type="number"
          placeholder="Total de episódios"
          name="seasonTotalEpisodes"
          value={seasonTotalEpisodes}
          onChange={onSeasonTotalEpisodesChange}
        />
      </div>
      <button type="button" className={slots.addButton()} onClick={onAddSeason}>
        <AddIcon className={slots.addIcon()} />
        Adicionar Temporada
      </button>
    </>
  );
};

export default memo(SeasonForm);
