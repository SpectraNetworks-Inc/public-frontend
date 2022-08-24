import axios from 'axios';
var token = null

export const API = axios.create({
  baseURL: `https://api-heroku.spectranetworks.ca/`
})



// Auth Endpoint
Object.entries(localStorage).map(
  x => x[0]
  ).filter(
    x => x.endsWith('idToken')).map(
      x => {
        const value = localStorage.getItem(x);
        token = value
      }
  ) 

export const AUTH = axios.create({
  baseURL: `https://auth.spectranetworks.ca/`,
  headers: {'Authorization': 'Bearer '+token}
})