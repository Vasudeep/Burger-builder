import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-121e0-default-rtdb.firebaseio.com/'

});
export default instance;