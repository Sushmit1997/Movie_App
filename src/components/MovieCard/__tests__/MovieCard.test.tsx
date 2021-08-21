import MovieCard from '../MovieCard'
import { render, screen } from '@testing-library/react'
import movieData from '../../../utils/dummyData'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { SnackbarProvider } from 'notistack'
import renderer from 'react-test-renderer'

test('MovieCard component should be in the document', () => {
	render(
		<SnackbarProvider maxSnack={3}>
			{' '}
			<MovieCard key={1} movieInfo={movieData[0]} />{' '}
		</SnackbarProvider>
	)
	const movieCardElement = screen.getByTestId('movieCard')
	expect(movieCardElement).toBeInTheDocument()
})

test('Should render Inception text', () => {
	render(
		<SnackbarProvider maxSnack={3}>
			{' '}
			<MovieCard key={1} movieInfo={movieData[0]} />{' '}
		</SnackbarProvider>
	)
	const movieCardElement = screen.getByTestId('movieCard')
	expect(movieCardElement).toHaveTextContent('Inception')
})

test('Should render Kingkong Text', () => {
	render(
		<SnackbarProvider maxSnack={3}>
			{' '}
			<MovieCard key={1} movieInfo={movieData[3]} />{' '}
		</SnackbarProvider>
	)
	const movieCardElement = screen.getByTestId('movieCard')
	expect(movieCardElement).toHaveTextContent('Kingkong')
})

test('<MovieCard/> matches the snapshot', () => {
	const tree = renderer
		.create(
			<SnackbarProvider maxSnack={3}>
				{' '}
				<MovieCard key={1} movieInfo={movieData[2]} />{' '}
			</SnackbarProvider>
		)
		.toJSON()
	expect(tree).toMatchSnapshot()
})
