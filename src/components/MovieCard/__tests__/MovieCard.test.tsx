import MovieCard from '../MovieCard'
import { render, screen, cleanup } from '@testing-library/react'
import movieData from '../../../utils/dummyData'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { SnackbarProvider } from 'notistack'
import renderer from 'react-test-renderer'

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

test('Should render Avengers Text', () => {
	render(
		<SnackbarProvider maxSnack={3}>
			{' '}
			<MovieCard key={1} movieInfo={movieData[3]} />{' '}
		</SnackbarProvider>
	)
	const movieCardElement = screen.getByTestId('movieCard')
	expect(movieCardElement).toHaveTextContent('Avengers')
})

test('<MovieCard/> renderes with correct text', () => {
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
