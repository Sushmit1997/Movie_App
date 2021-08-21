import React, { useState, useEffect } from 'react'
import { IMovieData } from '../../interfaces/IMovieData'
import { useSnackbar } from 'notistack'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import CircularProgress from '@material-ui/core/CircularProgress'
import { get } from '../../utils/http'

interface Props {
	movieInfo: IMovieData
	key: number
}

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 4, 3),
		width: '60%',
	},
}))

const MovieCard: React.FC<Props> = (props: Props) => {
	const { movieInfo } = props

	const { enqueueSnackbar, closeSnackbar } = useSnackbar()

	const [movieFav, setMovieFav] = useState(false)
	const [isActive, setIsActive] = useState(false)
	const [movieDetail, setMovieDetail]: any = useState('')
	const [movieDetailLoading, setMovieDetailLoading] = useState(true)
	const [modal, setModal] = useState(false)

	const toggle = (e) => {
		e.stopPropagation()
		setModal(!modal)
	}

	const handleFakePromiseFav = () => {
		var randomBoolean = Math.random() < 0.5
		return new Promise((resolve, reject) => {
			{
				randomBoolean ? resolve(randomBoolean) : reject(randomBoolean)
			}
		})
	}

	const handleFavMovie = (e) => {
		e.stopPropagation()
		handleFakePromiseFav()
			.then((response) => {
				setTimeout(() => {
					setMovieFav(!movieFav)
					movieFav
						? enqueueSnackbar(`${movieInfo.title} removed from favourites.`, {
								variant: 'warning',
								anchorOrigin: {
									vertical: 'bottom',
									horizontal: 'right',
								},
						  })
						: enqueueSnackbar(`${movieInfo.title} added to favourites.`, {
								variant: 'success',
								anchorOrigin: {
									vertical: 'bottom',
									horizontal: 'right',
								},
						  })
				}, 500)
			})
			.catch((error) => {
				setTimeout(() => {
					enqueueSnackbar(`Something went wrong! Please try again.`, {
						variant: 'error',
						anchorOrigin: {
							vertical: 'bottom',
							horizontal: 'right',
						},
					})
				}, 500)
			})
	}

	const fetchMovieDetails = () => {
		setIsActive(!isActive)
		// {
		// 	!isActive &&
		// 		movieDetail === '' &&
		// 		get(
		// 			`https://imdb-api.com/en/API/Title/k_patmt9tu/${movieInfo.id}/FullActor,Ratings,`
		// 		).then((response: any) => {
		// 			setMovieDetail(response.data)
		// 			setMovieDetailLoading(false)
		// 		})
		// }
	}

	const handleDirectorClick = (e) => {
		e.stopPropagation()
		toggle(e)
	}

	const classes = useStyles()

	return (
		<div
			data-testid={`movieCard`}
			className='movieCardMainContainer'
			onClick={fetchMovieDetails}
		>
			<div className='movieCardInnerDiv'>
				<div className='movieCardImageDiv'>
					<img className='movieCardImage' src={movieInfo.image}></img>
				</div>
				<div className='movieCardInfoSectionContainer'>
					<div className='heartIconDiv' onClick={(e) => handleFavMovie(e)}>
						<i className={`fas fa-heart ${movieFav ? 'red' : ''} `}></i>
					</div>
					<div className='movieCardInfoSection'>
						<span>
							{movieInfo.title} {movieInfo.description}{' '}
						</span>
						<span> {movieInfo.type}</span>
						<span
							className='movieDirectorSpan'
							onClick={(e) => handleDirectorClick(e)}
							style={{ width: 'fit-content' }}
						>
							{movieInfo.director}
						</span>
					</div>
					<div
						className='accordion-title'
						onClick={() => setIsActive(!isActive)}
					>
						<div>{isActive ? '-' : '+'}</div>
					</div>
				</div>
			</div>
			{isActive && (
				<div className='movieAccordionContainer'>
					<div className='accordion'>
						<div className='accordion-item'>
							{isActive && (
								<div className='accordion-content'>
									{movieDetailLoading ? (
										<div className='movieDetailLoadingDiv'>
											<CircularProgress color='primary' />
										</div>
									) : (
										<ul className='accordion-ul'>
											{movieDetail.imDbRating === null && (
												<li>
													{' '}
													If you see no data, probably api limit is reached.
												</li>
											)}

											<li>
												{' '}
												<span>Awards:</span> {movieDetail.awards}
											</li>
											<li>
												{' '}
												<span>Budget:</span>{' '}
												{movieDetail.boxOffice !== null &&
													movieDetail.boxOffice}
											</li>
											<li>
												<span>Imdb Rating:</span> {movieDetail.imDbRating}{' '}
												<span>Voted by:</span> {movieDetail.imDbRatingVotes}
											</li>
											<li>
												<span>Plot:</span> {movieDetail.plot}
											</li>
											<li>
												<span>Released Date:</span> {movieDetail.releaseDate}
											</li>
										</ul>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
			)}

			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modal}
				open={modal}
				onClose={(e) => toggle(e)}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={modal}>
					<div className={classes.paper}>
						<h2 id='transition-modal-title'>{movieInfo.directorInfo.name}</h2>
						<div className='directorInfoInnerContainer'>
							<img
								className='directorImage'
								src={movieInfo.directorInfo.image}
								alt={`Picture of ${movieInfo.directorInfo.name}`}
							></img>
							<p id='transition-modal-description'>
								{movieInfo.directorInfo.description}
							</p>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	)
}

export default MovieCard
