import { useEffect, useState } from 'react';
import { fetchMovieDitailed } from 'api/fetch';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import MarkupDitailesPost from './MarkupDitailesPost';

const DitailesPost = () => {
  const [movieDitailes, setMovieDitailes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [defaultImage, setDefaultImage] = useState('');
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    const getMovie = async () => {
      if (!movieId) return;
      try {
        setIsLoading(true);
        const results = await fetchMovieDitailed(movieId);
        setMovieDitailes(results);
        setDefaultImage(defaultImg);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching movies.');
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [movieId]);
  const { genres, title, vote_average, release_date, poster_path, overview } =
    movieDitailes;

  const imagePath = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const year = new Date(release_date).getFullYear();

  const getGenres =
    genres &&
    genres.map(({ id, name }) => (
      <li key={id}>
        <p>{name}</p>
      </li>
    ));

  return (
    <>
      {isLoading && '...Loading'}
      {error && error}

      <MarkupDitailesPost
        getGenres={getGenres}
        title={title}
        vote_average={vote_average}
        year={year}
        overview={overview}
        poster_path={poster_path}
        imagePath={imagePath}
        defaultImage={defaultImage}
        navigate={navigate}
        location={location}
      />
    </>
  );
};

export default DitailesPost;
