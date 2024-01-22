import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('query') || '');

  const query = searchParams.get('query') || '*';

  const onFormSubmit = e => {
    e.preventDefault();
    if (!value.trim()) {
      return alert(
        'Sorry, but we cannot find an empty string. You should write something.'
      );
    }

    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!query || query === '*') {
      return;
    }

    fetchSearchMovie(query)
      .then(info => {
        if (!info.total_results) {
          return alert(`Sorry, we didn't find any results for ${query}.`);
        }
        setFilms(info.results);
      })
      .catch(error => console.log(error));
  }, [query]);

  const fetchSearchMovie = async searchQuery => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=6275ff62c216e0d575843f8efbbe5c76&query=${searchQuery}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </div>
      <h2>Search Movies</h2>
      <form onSubmit={onFormSubmit}>
        <input type="text" value={value} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {films.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
