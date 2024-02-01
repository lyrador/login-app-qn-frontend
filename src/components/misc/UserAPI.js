import axios from 'axios'
import { config } from '../../Constants'

export const userAPI = {
  authenticate
};

function authenticate(username, password) {
  return instance.post('/auth/authenticate', { username, password }, {
    headers: { 'Content-type': 'application/json' }
  });
}

const instance = axios.create({
  baseURL: config.url.API_BASE_URL
});