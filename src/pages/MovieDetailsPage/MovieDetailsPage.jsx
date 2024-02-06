import css from './movie-details-page.module.css';
import DitailesPost from '../../components/PostDitailes/DitailesPost';
import { NavLink, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const from = location.state?.from || '/';

  return (
    <>
      <DitailesPost />
      <main>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast" state={{ from }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={{ from }}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />{' '}
      </main>
    </>
  );
};
export default MovieDetails;
