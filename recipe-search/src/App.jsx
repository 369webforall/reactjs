import { useState, useEffect } from 'react';

const apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
const App = () => {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');

  const fetchMeal = async () => {
    const URL = apiURL + search;
    const res = await fetch(URL);
    const data = await res.json();
    setRecipe(data.meals);
    console.log(data.meals);
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMeal();
  };

  return (
    <div>
      <div className="container mx-auto mt-5 text-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="...search recipe"
            onChange={handleChange}
            className="px-2 py-1"
          />
          <button type="submit" className="bg-purple-600 text-white px-2 py-1">
            search
          </button>
        </form>

        <hr />

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {recipe.map((item, index) => (
            <div key={index} className="border border-gray-600 p-2">
              <img src={item.strMealThumb} alt="" className="w-[150px]" />
              <h2>Category:{item.strCategory}</h2>
              <h2>Meal:{item.strMeal}</h2>
              <a href={item.strSource} className='border-b border-red-600'>Check for Source</a>
              <br />
              <a href={item.strYoutube} className='bg-purple-600 p-2 text-white mt-1 block'>You Tube</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
