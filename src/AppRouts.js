import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import MainMenu from 'components/Home/MainMenu';
const SharedLayout = lazy(() =>
  import('components/SharedLayout/SharedLayout.jsx')
);
const Home = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const Movies = lazy(() => import('./pages/MoviesPage/MoviesPage.jsx'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage.jsx'));
const MovieDetails = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage.jsx')
);
const ReviewsPage = lazy(() => import('pages/ReviewsPage/ReviewsPage.jsx'));
const CastPage = lazy(() => import('pages/CastPage/CastPage.jsx'));

const AppRouts = () => {
  return (
    <>
      {/* <MainMenu /> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="cast" element={<CastPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
export default AppRouts;
