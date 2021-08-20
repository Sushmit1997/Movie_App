import React, { useState, useEffect } from 'react'
import { Container, Spinner } from 'reactstrap'
import './MoviePage.css'
import MovieCard from '../../components/MovieCard/MovieCard'
import movieData from '../../utils/dummyData'
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'
import Fade from '@material-ui/core/Fade'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { makeStyles } from '@material-ui/core/styles'

interface Props {
	data?: any
}

const useStyles = makeStyles((theme) => ({
	root: {
		height: 180,
	},
	container: {
		display: 'flex',
	},
	paper: {
		margin: theme.spacing(1),
		backgroundColor: '#d1ccc0;',
		border: 'none',
		boxShadow: 'none',
	},
	svg: {
		width: 100,
		height: 100,
	},
	polygon: {
		fill: theme.palette.common.white,
		stroke: theme.palette.divider,
		strokeWidth: 1,
	},
}))

const MoviePage = (props: Props) => {
	const classes = useStyles()
	let [movieListLoading, setMovieListLoading] = useState(true)

	setTimeout(() => {
		setMovieListLoading(false)
	}, 1500)

	return (
		<div className='moviePageContainer'>
			<div className='moviePageInnerContainer'>
				{movieListLoading ? (
					<CircularProgress color='primary' />
				) : (
					<div>
						<Fade in={!movieListLoading}>
							<Paper className={classes.paper}>
								<h2>Movie Page</h2>
								{movieData.map((data, index) => {
									return <MovieCard key={index} movieInfo={data} />
								})}
							</Paper>
						</Fade>
					</div>
				)}
			</div>
		</div>
	)
}

export default MoviePage
