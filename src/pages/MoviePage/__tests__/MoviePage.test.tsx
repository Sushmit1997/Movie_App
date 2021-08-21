import React from 'react'
import MoviePage from '../MoviePage'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

test('Movie page to be in the document', () => {
	render(<MoviePage />)
	const moviePage = screen.getByTestId('moviePage')
	expect(moviePage).toBeInTheDocument()
})
