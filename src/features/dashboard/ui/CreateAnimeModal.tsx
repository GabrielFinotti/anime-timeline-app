import { useCallback, useEffect, useMemo, useState } from "react";
import { tv, VariantProps } from "tailwind-variants";
import CloseIcon from "@/public/icons/add.svg";
import Input from "@/src/components/ui/Input";
import Textarea from "@/src/components/ui/Textarea";
import SelectCustom from "@/src/components/ui/SelectCustom";
import MultiSelect from "@/src/components/ui/MultiSelect";
import MovieItem from "./MovieItem";
import SeasonItem from "./SeasonItem";
import MovieForm from "./MovieForm";
import SeasonForm from "./SeasonForm";
import useAnimeCreateModal from "../hooks/useAnimeCreateModal";

const createAnimeModalStyles = tv({
  slots: {
    container:
      "fixed inset-0 z-100000 flex items-center justify-center overflow-auto bg-black/70 p-4 backdrop-blur-sm transition-all duration-300",
    modal:
      "bg-dark-900/95 border-dark-600/40 shadow-dark-2xl relative w-full max-w-3xl overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-300",
    header:
      "border-dark-600/40 from-dark-800/50 to-dark-900/50 flex items-center justify-between border-b bg-linear-to-b px-6 py-4",
    title: "text-xl font-bold text-neutral-100",
    closeButton:
      "hover:bg-dark-700/50 rotate-45 rounded-full p-2 text-neutral-400 transition-all duration-300 hover:text-neutral-100",
    closeIcon: "h-7 w-7",
    content: "max-h-[calc(100vh-12rem)] overflow-y-auto p-6",
    scrapperForm: "mb-6 flex flex-col gap-3",
    divider: "border-dark-600/40 my-6 border-t",
    manualForm: "flex flex-col gap-4",
    formSection: "flex flex-col gap-4",
    sectionTitle: "text-base font-semibold text-neutral-200",
    selectGroupOne: "grid grid-cols-2 gap-4",
    selectGroupTwo: "grid grid-cols-2 gap-4 md:grid-cols-4",
    moviesGroup: "flex flex-col gap-4",
    seasonsGroup: "flex flex-col gap-4",
    previewList: "flex flex-col gap-2.5",
    footer: "border-dark-600/40 bg-dark-800/30 border-t px-6 py-4",
  },
  variants: {
    isVisible: {
      true: {
        container: "opacity-100",
        modal: "scale-100 opacity-100",
      },
      false: {
        container: "opacity-0",
        modal: "scale-95 opacity-0",
      },
    },
  },
  defaultVariants: {
    isVisible: false,
  },
});

const slots = createAnimeModalStyles();

type CreateAnimeModalProps = VariantProps<typeof createAnimeModalStyles> & {
  onClose?: () => void;
};

const CreateAnimeModal = ({ onClose }: CreateAnimeModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    movies,
    seasons,
    movieName,
    setMovieName,
    movieReleaseDate,
    setMovieReleaseDate,
    seasonNumber,
    setSeasonNumber,
    seasonReleaseDate,
    setSeasonReleaseDate,
    seasonTotalEpisodes,
    setSeasonTotalEpisodes,
    handleAddMovie,
    handleRemoveMovie,
    handleAddSeason,
    handleRemoveSeason,
  } = useAnimeCreateModal();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Trigger animation after mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    },
    [onClose]
  );

  const movieItems = useMemo(
    () =>
      movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} onRemove={handleRemoveMovie} />
      )),
    [movies, handleRemoveMovie]
  );

  const seasonItems = useMemo(
    () =>
      seasons.map((season) => (
        <SeasonItem key={season.id} season={season} onRemove={handleRemoveSeason} />
      )),
    [seasons, handleRemoveSeason]
  );

  return (
    <div className={slots.container({ isVisible })} onClick={onClose} onKeyDown={handleKeyDown}>
      <div className={slots.modal({ isVisible })} onClick={(e) => e.stopPropagation()}>
        <div className={slots.header()}>
          <h2 className={slots.title()}>Criar Anime</h2>
          <button type="button" className={slots.closeButton()} onClick={onClose}>
            <CloseIcon className={slots.closeIcon()} />
          </button>
        </div>
        <div className={slots.content()}>
          <form className={slots.scrapperForm()}>
            <Input type="text" placeholder="Digite o título do anime" name="title" />
            <Input type="submit" value="Buscar dados" input="submit" />
          </form>
          <div className={slots.divider()} />
          <form className={slots.manualForm()}>
            <div className={slots.formSection()}>
              <Input
                type="url"
                label="URL da Capa"
                placeholder="https://exemplo.com/capa.jpg"
                name="coverImageUrl"
                id="coverImageUrl"
              />
              <Input
                type="text"
                label="Título"
                placeholder="Nome do anime"
                name="title"
                id="title"
              />
              <Textarea
                label="Sinopse"
                placeholder="Descreva o anime..."
                name="synopsis"
                id="synopsis"
              />
            </div>
            <div className={slots.formSection()}>
              <h3 className={slots.sectionTitle()}>Informações Gerais</h3>
              <div className={slots.selectGroupOne()}>
                <SelectCustom
                  label="Categoria"
                  options={["Shonen", "Seinen", "Shojo", "Kodomo", "Josei"]}
                  onChange={() => {}}
                />
                <MultiSelect
                  label="Gêneros"
                  options={[
                    "Ação",
                    "Aventura",
                    "Comédia",
                    "Drama",
                    "Fantasia",
                    "Romance",
                    "Slice of Life",
                    "Mistério",
                    "Terror",
                    "Ficção Científica",
                  ]}
                  onChange={() => {}}
                />
              </div>
            </div>
            <div className={slots.formSection()}>
              <h3 className={slots.sectionTitle()}>Detalhes de Produção</h3>
              <div className={slots.selectGroupTwo()}>
                <SelectCustom
                  label="Tipo"
                  options={["Serie", "Filme", "Mix"]}
                  onChange={() => {}}
                />
                <SelectCustom
                  label="Produção"
                  options={["TV", "Cinema", "OVA", "ONA"]}
                  onChange={() => {}}
                />
                <SelectCustom
                  label="Material"
                  options={["Manga", "Light Novel", "Original", "Visual Novel"]}
                  onChange={() => {}}
                />
                <SelectCustom label="Adulto" options={["Sim", "Não"]} onChange={() => {}} />
              </div>
            </div>
            <div className={slots.formSection()}>
              <h3 className={slots.sectionTitle()}>Filmes</h3>
              <div className={slots.moviesGroup()}>
                {movies.length > 0 && <div className={slots.previewList()}>{movieItems}</div>}
                <MovieForm
                  movieName={movieName}
                  movieReleaseDate={movieReleaseDate}
                  onMovieNameChange={(e) => setMovieName(e.target.value)}
                  onMovieReleaseDateChange={(e) => setMovieReleaseDate(e.target.value)}
                  onAddMovie={handleAddMovie}
                />
              </div>
            </div>
            <div className={slots.formSection()}>
              <h3 className={slots.sectionTitle()}>Temporadas</h3>
              <div className={slots.seasonsGroup()}>
                {seasons.length > 0 && <div className={slots.previewList()}>{seasonItems}</div>}
                <SeasonForm
                  seasonNumber={seasonNumber}
                  seasonReleaseDate={seasonReleaseDate}
                  seasonTotalEpisodes={seasonTotalEpisodes}
                  onSeasonNumberChange={(e) => setSeasonNumber(e.target.value)}
                  onSeasonReleaseDateChange={(e) => setSeasonReleaseDate(e.target.value)}
                  onSeasonTotalEpisodesChange={(e) => setSeasonTotalEpisodes(e.target.value)}
                  onAddSeason={handleAddSeason}
                />
              </div>
            </div>
          </form>
        </div>
        <div className={slots.footer()}>
          <Input type="submit" value="Criar Anime" input="submit" />
        </div>
      </div>
    </div>
  );
};

export default CreateAnimeModal;
