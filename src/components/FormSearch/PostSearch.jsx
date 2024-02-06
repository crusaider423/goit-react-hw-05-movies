import { useEffect, useState } from 'react';
import FormSearch from './FormSearch';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { fetchMovieSearch } from '../../api/fetch';

const PostSearch = () => {
  const [search, setSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation()

  useEffect(() => {
    if (query === '') return;

    const getFormSearch = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchMovieSearch(query);
        setSearch(results);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching movies.');
      } finally {
        setIsLoading(false);
      }
    };
    if (query) getFormSearch();
  }, [query]);

  return (
    <>
      {isLoading && '...Loading'}
      {error && `Error: ${error}`}
      <FormSearch />
      <ul>
        {search.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{from:location}}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostSearch;
