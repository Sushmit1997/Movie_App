const movieData = [
	{
		id: 'tt1375666',
		title: 'Inception',
		image:
			'https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg',
		director: 'Christopher Nolan',
		type: 'Sci-fi',
		description: '(2010)',
		directorInfo: {
			name: 'Christopher Nolan',
			image:
				'https://i.guim.co.uk/img/media/3dd6a16a246078fca8d2482d8b0a3d9d32b088ac/0_61_3712_2227/master/3712.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=04c6610d72402f802299dc74dabc39a9',
			description:
				'Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made. Best Known for The Prestige, Tenet, Interstellar, Inception ',
		},
	},

	{
		id: 'tt0111161',
		title: 'The Shawshank Redemption',
		image:
			'https://imdb-api.com/images/original/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.7273_AL_.jpg',
		director: 'Frank Darabont',
		type: 'Prison / Real Life Based',
		description: '(1994)',
		directorInfo: {
			name: 'Frank Darabont',
			image:
				'https://cps-static.rovicorp.com/2/Open/Getty/Frank%20Darabont/_derived_jpg_q90_310x470_m0/51402144.jpg',
			description:
				'Frank Árpád Darabont (born Ferenc Árpád Darabont, January 28, 1959) is a French-American film director, screenwriter and producer of Hungarian[2] descent. He has been nominated for three Academy Awards and a Golden Globe Award. In his early career, he was primarily a screenwriter for horror films such as A Nightmare on Elm Street 3: Dream Warriors (1987), The Blob (1988) and The Fly II (1989). As a director, he is known for his film adaptations of Stephen King novellas and novels such as The Shawshank Redemption (1994), The Green Mile (1999) and The Mist (2007).',
		},
	},
	{
		id: 'tt4154796',
		title: 'Avengers Endgame',
		image:
			'https://imdb-api.com/images/original/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_Ratio0.7273_AL_.jpg',
		director: 'Joe Russo, Anthony Russo',
		type: 'Superhero /Action',
		description: '(2019)',
		directorInfo: {
			name: 'Russo Brothers',
			image:
				'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spotlight-esq050119russobrothers-001-1555616092.jpg',
			description:
				'Anthony Russo (born February 3, 1970) and Joseph Russo (born July 18, 1971), collectively known as the Russo brothers (ROO-so), are American directors, producers, screenwriters, and actors. They direct most of their work together.They are best known for directing four films in the Marvel Cinematic Universe: Captain America: The Winter Soldier (2014), Captain America: Civil War (2016), Avengers: Infinity War (2018), and Avengers: Endgame (2019). Endgame grossed over $2.798 billion worldwide, becoming one of the highest-grossing films of all time (not adjusted for inflation). The brothers have also worked as directors and/or producers on the comedy series Arrested Development (2003–2005), Community (2009–2014), and Happy Endings (2011–2012). They won a Primetime Emmy Award for Arrested Development. ',
		},
	},
	{
		id: 'tt5034838',
		title: 'Kingkong Vs  Godzilla',
		image:
			'https://imdb-api.com/images/original/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.7273_AL_.jpg',
		director: 'Adam Wingard',
		type: 'Monsters / Sci-Fi',
		description: '(2021)',
		directorInfo: {
			name: 'Adam Wingard',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/f/f6/Adam_Wingard_by_Gage_Skidmore.jpg',
			description:
				'Adam Wingard ( born December 3, 1982) is an American filmmaker. He has served as a director, producer, screenwriter, editor, cinematographer, actor, and composer on numerous projects.Following an early career as a member of the mumblecore movement, he became notable for his works in the horror and action genres, especially the films Youre Next (2011), and The Guest (2014), and the bigger budget franchise films Blair Witch (2016), Death Note (2017), and Godzilla vs. Kong (2021).',
		},
	},
	{
		id: 'tt0111161',
		title: 'The Shawshank Redemption',
		image:
			'https://imdb-api.com/images/original/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.7273_AL_.jpg',
		director: 'Frank Darabont',
		type: 'Prison / Real Life Based',
		description: '(1994)',
		directorInfo: {
			name: 'Frank Darabont',
			image:
				'https://cps-static.rovicorp.com/2/Open/Getty/Frank%20Darabont/_derived_jpg_q90_310x470_m0/51402144.jpg',
			description:
				'Frank Árpád Darabont (born Ferenc Árpád Darabont, January 28, 1959) is a French-American film director, screenwriter and producer of Hungarian[2] descent. He has been nominated for three Academy Awards and a Golden Globe Award. In his early career, he was primarily a screenwriter for horror films such as A Nightmare on Elm Street 3: Dream Warriors (1987), The Blob (1988) and The Fly II (1989). As a director, he is known for his film adaptations of Stephen King novellas and novels such as The Shawshank Redemption (1994), The Green Mile (1999) and The Mist (2007).',
		},
	},
	{
		id: 'tt0120338',
		title: 'Titanic',
		image:
			'https://imdb-api.com/images/original/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.7273_AL_.jpg',
		director: 'Christopher Nolan',
		type: 'Romance / Real Story',
		description: '(1997)',
		directorInfo: {
			name: 'Christopher Nolan',
			image:
				'https://i.guim.co.uk/img/media/3dd6a16a246078fca8d2482d8b0a3d9d32b088ac/0_61_3712_2227/master/3712.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=04c6610d72402f802299dc74dabc39a9',
			description:
				'Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made. Best Known for The Prestige, Tenet, Interstellar, Inception ',
		},
	},
	{
		id: 'tt0816692',
		title: 'Interstellar',
		image:
			'https://imdb-api.com/images/original/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.7273_AL_.jpg',
		director: 'Christopher Nolan',
		type: 'Sci-Fi/ Adventure',
		description: '(2014)',
		directorInfo: {
			name: 'Christopher Nolan',
			image:
				'https://i.guim.co.uk/img/media/3dd6a16a246078fca8d2482d8b0a3d9d32b088ac/0_61_3712_2227/master/3712.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=04c6610d72402f802299dc74dabc39a9',
			description:
				'Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made. Best Known for The Prestige, Tenet, Interstellar, Inception ',
		},
	},
]

export default movieData
