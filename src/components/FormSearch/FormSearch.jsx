import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const FormSearch = () => {
  const [state, setState] = useState('');
  const [, setSearchParams] = useSearchParams();
  const handleValue = ({ target: { value } }) => setState(value);
  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: state });
    setState('');
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" style={{ display: 'none' }}>
          Username:
        </label>
        <input
          id="username"
          type="text"
          placeholder="search"
          onChange={handleValue}
          value={state}
          aria-label="Search Input"
        />
        <button type="submit" aria-label="Submit Search">
          Search
        </button>
      </form>
    </main>
  );
};

export default FormSearch;
