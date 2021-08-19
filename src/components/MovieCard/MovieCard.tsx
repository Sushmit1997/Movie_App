import React, { useState, useEffect } from 'react'
import './MovieCard.scss'
import { IMovieData } from '../../interfaces/IMovieData'
import { useSnackbar } from 'notistack'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

import { get } from '../../utils/http'

const accordionData = {
	title: 'More',
	content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
}

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
	},
}))

const MovieCard = (props: Props) => {
	const { movieInfo } = props

	const { title, content } = accordionData

	const { enqueueSnackbar, closeSnackbar } = useSnackbar()

	const [movieFav, setMovieFav] = useState(false)
	const [isActive, setIsActive] = useState(false)
	const [movieDetail, setMovieDetail] = useState(null)
	const [modal, setModal] = useState(false)

	const toggle = (e) => {
		e.stopPropagation()
		setModal(!modal)
	}

	const handleFavMovie = (e) => {
		e.stopPropagation()
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
	}

	const fetchMovieDetails = () => {
		setIsActive(!isActive)
		// get(
		// 	`https://imdb-api.com/en/API/Title/k_patmt9tu/${movieInfo.id}/FullActor,Posters,Ratings,`
		// ).then((response) => {
		// 	setMovieDetail(response.data)
		// })
	}

	const handleDirectorClick = (e) => {
		e.stopPropagation()
		toggle(e)
	}

	const classes = useStyles()

	return (
		<div className='movieCardMainContainer' onClick={fetchMovieDetails}>
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
						<span>{movieInfo.type}</span>
						<span
							className='movieDirectorSpan'
							onClick={(e) => handleDirectorClick(e)}
						>
							{movieInfo.director}
						</span>
					</div>
				</div>
			</div>
			<div className='movieAccordionContainer'>
				<div className='accordion'>
					<div className='accordion-item'>
						<div
							className='accordion-title'
							onClick={() => setIsActive(!isActive)}
						>
							<div>More Info</div>
							<div>{isActive ? '-' : '+'}</div>
						</div>
						{isActive && <div className='accordion-content'>{content}</div>}
					</div>
				</div>
			</div>
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
						<h2 id='transition-modal-title'>Director Info</h2>
						<p id='transition-modal-description'>
							react-transition-group animates me.
						</p>
					</div>
				</Fade>
			</Modal>
		</div>
	)
}

export default MovieCard
