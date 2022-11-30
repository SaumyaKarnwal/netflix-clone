import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

// when we use instance.get ('xyz')
// ->then xyz will get appended tp https://api.themoviedb.org/3

export default instance
