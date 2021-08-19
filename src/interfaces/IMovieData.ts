export interface IMovieData {
	id: string
	title: string
	image: string
	director: string
	type: string
	description: string
	directorInfo: {
		name: string
		description: string
	}
}
