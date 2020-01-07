import axios from 'axios';

const axiosPosts = axios.create({
	baseURL: 'https://burger-builder-ulan-beltaev.firebaseio.com/'
});


export default axiosPosts;