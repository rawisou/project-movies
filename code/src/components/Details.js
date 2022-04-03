import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import "./Details.css"
import DetailsContainer from './styles/DetailsContainer.styled'
import DetailsWrapper from './styles/DetailsWrapper.styled'

import { DETAILS_URL } from "../utils/urls"

const Details = () => {
  const [details, setDetails] = useState([])
  const { movieId } = useParams() //access parameters from the URL
  const navigate = useNavigate();

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then(res => res.json())
      .then(data => setDetails(data))
  }, [movieId])
  console.log(details.poster_path)
  return (
    <DetailsContainer>
      <img className='backdrop' src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`} alt="backdrop" />
      <DetailsWrapper>
      <div className='backbutton' onClick={() => navigate(-1)}> <i className='arrow-left'></i></div>
        <img className="movie-img-details" src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.title} />
        <div className='details-info'>
          <div className='details-title-votes white'>
            <h2>{details.title}</h2> <span className='rating'> <img className='star' src="/star.png" alt="rating" />{details.vote_average}</span>
            <p className='overview white'>{details.overview}</p>
          </div>
        </div>
      </DetailsWrapper>
    </DetailsContainer>
  )
}

export default Details;