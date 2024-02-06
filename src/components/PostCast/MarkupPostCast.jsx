import css from './post-cast.module.css';

const MarkupPostCast = ({ cast }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <main>
      <h4>Movie Cast</h4>
      <ul>
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id} className={css.item}>
            <img
              src={
                profile_path
                  ? `http://image.tmdb.org/t/p/w500${profile_path}`
                  : defaultImg
              }
              alt={name}
              width={150}
            />
            <p>{name}</p>
            <p>
              <span style={{ fontWeight: '500' }}>Character</span>: {character}{' '}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default MarkupPostCast;
