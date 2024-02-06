import css from './not-found-page.module.css';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <div>
      <h1>Cannot found this page</h1>
      <Link to="/">Go Home Page</Link>
    </div>
  );
};
export default NotFoundPage;
