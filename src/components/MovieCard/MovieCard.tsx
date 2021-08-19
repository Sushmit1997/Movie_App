import React, { useState, useEffect } from 'react'
import './MovieCard.scss'

interface Props {
	movieInfo?: any
}

const MovieCard = (props: Props) => {
	const { movieInfo } = props

	return (
		<div className='movieCardMainContainer'>
			<div className='movieCardImageDiv'>
				<img className='movieCardImage' src={movieInfo.image}></img>
			</div>
			<div className='movieCardInfoSection'>
				<span>{movieInfo.title}</span>
				<span>{movieInfo.type}</span>
				<span>{movieInfo.director}</span>
			</div>
		</div>
	)
}

export default MovieCard
