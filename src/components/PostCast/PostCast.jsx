import { useEffect, useState } from 'react';
import { fetchMovieCast } from 'api/fetch';
import css from './post-cast.module.css';
import { useParams } from 'react-router-dom';
import MarkupPostCast from './MarkupPostCast';

const PostCast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(error);
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <>
      {error && { error }}
      <MarkupPostCast cast={cast} />
    </>
  );
};

export default PostCast;

// <h2>Movie Cast</h2>
//         <ul>
//           {Object.keys(cast).map(actorId => (
//             <li key={actorId}>
//               <div>{cast[actorId].name}</div>
//               <div>{cast[actorId].character}</div>
//             </li>
//           ))}
//         </ul>
