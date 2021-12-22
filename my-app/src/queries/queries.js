import axios from 'axios'


// axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3000/';


const query = {
  getEmploy(){axios.get('getEmploye')}
}

export default query;