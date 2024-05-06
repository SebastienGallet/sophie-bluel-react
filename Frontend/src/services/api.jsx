const API_BASE_URL = 'http://localhost:5678/api';

export function getWorks() {
  return fetch(`${API_BASE_URL}/works`)
    .then(response => response.json())
}
