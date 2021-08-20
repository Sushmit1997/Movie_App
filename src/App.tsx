import React from 'react'
import RouterComponent from './router/router'
import { title } from 'process'
import '../src/components/MovieCard/MovieCard.scss'

const App = () => {
	return (
		<div className='App'>
			<RouterComponent title={title} />
		</div>
	)
}

export default App
