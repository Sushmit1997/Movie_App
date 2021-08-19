import React, { useState, useEffect } from 'react'
import { Container, Spinner } from 'reactstrap'
import './MoviePage.css'
import MovieCard from '../../components/MovieCard/MovieCard'
import { get } from '../../utils/http'
import movieData from '../../utils/dummyData'

interface Props {
	data?: any
}

const MoviePage = (props: Props) => {
	let [movieList, setMovieList] = useState([])
	let [movieListLoading, setMovieListLoading] = useState(false)
	let [movieSearchWord, setMovieSearchWord] = useState('inception')

	// useEffect(() => {
	// 	get(`https://imdb-api.com/en/API/SearchAll/k_patmt9tu/${movieSearchWord}`)
	// 		.then((response) => {
	// 			console.log(response.data)
	// 			setMovieList(response.data)
	// 			setMovieListLoading(false)
	// 		})
	// 		.catch((error) => {
	// 			console.log(error)
	// 		})
	// }, [])

	return (
		<div className='moviePageContainer'>
			<div className='moviePageInnerContainer'>
				{movieListLoading ? (
					<Spinner color='primary' />
				) : (
					<div>
						<h2>Movie Page</h2>
						{movieData.map((data, index) => {
							return <MovieCard key={data.id} movieInfo={data} />
						})}
					</div>
				)}
			</div>
		</div>
	)
}

export default MoviePage
