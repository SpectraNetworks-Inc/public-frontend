import axios from 'axios';
var token = null

export const API = axios.create({
  baseURL: `https://api-heroku.spectranetworks.ca/`
})




export const AUTH = axios.create({
  baseURL: `https://spectranetworks.us.auth0.com/`,
  headers: {'Authorization': 'Bearer '+token}
})