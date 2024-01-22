import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <p>Choose where you want to go:</p>
      <ul>
        <li>
          <Link to="/">Go to Home</Link>
        </li>
        <li>
          <Link to="/movies">Go to Movies</Link>
        </li>
      </ul>
    </div>
  );
};

export default NotFound;
