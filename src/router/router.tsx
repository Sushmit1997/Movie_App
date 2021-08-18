import * as React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
	useHistory,
	Switch,
} from 'react-router-dom'

import MoviePage from '../pages/MoviePage/MoviePage'

interface Props {
	title: string
}

const RouterComponent: React.FC<Props> = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='' component={MoviePage}></Route>
			</Switch>
		</Router>
	)
}
export default RouterComponent
