import { useCallback, useState } from "react";

export type Movie = {
  id: string;
  name: string;
  releaseDate: string;
};

export type Season = {
  id: string;
  number: number;
  releaseDate: string;
  totalEpisodes: number;
};

const useAnimeCreateModal = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [movieName, setMovieName] = useState("");
  const [movieReleaseDate, setMovieReleaseDate] = useState("");
  const [seasonNumber, setSeasonNumber] = useState("");
  const [seasonReleaseDate, setSeasonReleaseDate] = useState("");
  const [seasonTotalEpisodes, setSeasonTotalEpisodes] = useState("");

  const handleAddMovie = useCallback(() => {
    if (movieName && movieReleaseDate) {
      setMovies((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          name: movieName,
          releaseDate: movieReleaseDate,
        },
      ]);
      setMovieName("");
      setMovieReleaseDate("");
    }
  }, [movieName, movieReleaseDate]);

  const handleRemoveMovie = useCallback((id: string) => {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  }, []);

  const handleAddSeason = useCallback(() => {
    if (seasonNumber && seasonReleaseDate && seasonTotalEpisodes) {
      setSeasons((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          number: parseInt(seasonNumber),
          releaseDate: seasonReleaseDate,
          totalEpisodes: parseInt(seasonTotalEpisodes),
        },
      ]);
      setSeasonNumber("");
      setSeasonReleaseDate("");
      setSeasonTotalEpisodes("");
    }
  }, [seasonNumber, seasonReleaseDate, seasonTotalEpisodes]);

  const handleRemoveSeason = useCallback((id: string) => {
    setSeasons((prev) => prev.filter((season) => season.id !== id));
  }, []);

  return {
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
  };
};

export default useAnimeCreateModal;
