import React, { useState, useEffect } from 'react'
import { Container, Spinner } from 'reactstrap'
import './MoviePage.css'

interface Props {
	data?: any
}

const MoviePage = (props: Props) => {
	return (
		<div className='moviePageContainer'>
			<div className='moviePageInnerContainer'>
				<h2>Movie Page</h2>
			</div>
		</div>
	)
}

export default MoviePage
