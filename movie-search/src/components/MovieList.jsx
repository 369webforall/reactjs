import React from 'react'

const MovieList = (props) => {
    console.log(props)
 const {poster_path, title, release_date } = props.movie
 const image = `https://image.tmdb.org/t/p/original/${poster_path}`
  return (
    <div>
      <div className='border border-purple-600 p-2'>
        <img src={image} alt={title} className='w-[150px]'/>
        <p>{title}</p>
        <p>{release_date}</p>
      </div>
    </div>
  )
}

export default MovieList
