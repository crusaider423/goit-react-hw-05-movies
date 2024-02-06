import { fetchMovies } from '../../api/fetch';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchMovies();
        setMovieList(results);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching movies.');
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, []);

  return (
    <>
      {isLoading && '...Loading'}
      {error && `Error: ${error}`}
      <main>
        <ul>
          {movieList.map(({ title, id, original_name }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title || original_name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
export default Post;
