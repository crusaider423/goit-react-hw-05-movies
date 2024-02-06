import { NavLink } from 'react-router-dom';
import css from './main-menu.module.css';

const Home = () => {
  return (
   <header className={css.header}>
      <nav>
        <ul className={css.ul}>
          <li className={css.li}>
            <NavLink to="/" className={css.navlink}>
              Home
            </NavLink>
          </li>
          <li className={css.li}>
            <NavLink to="/movies" className={css.navlink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
   </header>
  );
};

export default Home;
