import axios from 'axios'

const getHeaders = () => ({
	headers: {
		'Request-Date': new Date(),
		'CLIENT-AUTH': process.env.REACT_APP_CLIENT_ID,
		Authorization: `Bearer ${localStorage.getItem('token')}`,
	},
})

export const get = async (url: string): Promise<any> => {
	return axios.get(url, getHeaders())
}
