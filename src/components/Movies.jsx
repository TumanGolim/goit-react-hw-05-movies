import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const API_KEY = '6275ff62c216e0d575843f8efbbe5c76';

const Movies = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [previousMovies, setPreviousMovies] = useState([]);

  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      );
      const newSearchResults = response.data.results;

      const params = new URLSearchParams(location.search);
      params.set('query', query);

      localStorage.setItem('previousPage', 'movies');
      localStorage.setItem('query', query);

      setPreviousMovies(newSearchResults);
      localStorage.setItem('previousMovies', JSON.stringify(newSearchResults));

      navigate(`?${params.toString()}`);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryParam = params.get('query') || '';
    setQuery(queryParam);

    localStorage.setItem('previousPage', 'movies');
    localStorage.setItem('query', queryParam);

    const storedPreviousMovies = localStorage.getItem('previousMovies');
    if (storedPreviousMovies) {
      setPreviousMovies(JSON.parse(storedPreviousMovies));
    }
  }, [location.search]);

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </div>
      <h2>Search Movies</h2>
      <input type="text" value={query} onChange={handleInputChange} />
      <button onClick={searchMovies}>Search</button>
      <ul>
        {previousMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;