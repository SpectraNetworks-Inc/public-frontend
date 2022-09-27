import axios from 'axios';
var token = null

const API = axios.create({
  baseURL: `https://api-heroku.spectranetworks.ca/`
})

const AUTH = axios.create({
  baseURL: `https://spectranetworks.us.auth0.com/`,
  headers: {'Authorization': 'Bearer '+token}
})


module.exports = {
  API,
  AUTH
}