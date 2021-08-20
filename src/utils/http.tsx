import axios from 'axios'

export const get = async (url: string): Promise<any> => {
	return axios.get(url)
}
