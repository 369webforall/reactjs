import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';

const APIURL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const SEARCHAPI =
  'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const getMovie = async () => {
    try {
      let response = await axios.get(APIURL);
      console.log(response);
      setMovies(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const searchMovie = async () => {
    try {
      let response = await axios.get(SEARCHAPI + search);
      console.log(response);
      setMovies(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //   setSearch('');
  //   if(search === ''){
  //     getMovie();
  //   }else {
  //     searchMovie();
  //   }

  // }, [search]);

  useEffect(() => {
    getMovie();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovie();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="container mx-auto">
      <div className="text-center mb-4 mt-4">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="search...." onChange={handleChange} />
          <button type="submit" className='bg-purple-600 text-white p-2'>Search Movie</button>
        </form>
      </div>
      <div className="flex gap-3 flex-wrap">
        {movies.map((movie, index) => (
          <MovieList key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
