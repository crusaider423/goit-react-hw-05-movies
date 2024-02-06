import css from './ditailes-post.module.css';

const MarkupDitailesPost = ({
  getGenres,
  title,
  vote_average,
  year,
  overview,
  poster_path,
  imagePath,
  defaultImage,
  navigate,
  location,
}) => {
 
  const from = location.state?.from || '/';
  return (
    <main>
      <button
        onClick={() => {
          navigate(from);
        }}
      >
        Go back
      </button>
      <div className={css.cover}>
        <img
          src={poster_path ? imagePath : defaultImage}
          alt={title}
          width={250}
        />
        <ul className={css.list}>
          <li>
            <h3>{title && `${title}(${year})`}</h3>
            <p>vote_average: {vote_average}</p>
          </li>
          <li>
            <h4>Overview</h4> <p> {overview}</p>
          </li>
          <li>
            <h4>Genres</h4>
            <ul className={`${css.genres} `}>{getGenres}</ul>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default MarkupDitailesPost;
