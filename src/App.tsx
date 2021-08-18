import React from 'react'
import RouterComponent from './router/router'
import { title } from 'process'

const App = () => {
	return (
		<div className='App'>
			<RouterComponent title={title} />
		</div>
	)
}

export default App
