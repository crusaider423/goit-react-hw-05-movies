import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../api/fetch';
import css from './post-reviews.module.css';

const PostReviews = () => {
  const [review, setReview] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReview = async () => {
      try {
        const arr = await fetchMovieReviews(movieId);
        setReview(arr);
      } catch (error) {
        setError(error);
      }
    };
    getMovieReview();
  }, [movieId]);
  const isReview =
    review.length === 0 ? (
      <p>we don't have any reviews for this movie</p>
    ) : null;
  return (
    <>
      {error}

      <main>
        {isReview}
        <ul>
          {review.map(({ id, author, content }) => (
            <li key={id}>
              <p style={{ fontWeight: '500' }}>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default PostReviews;
