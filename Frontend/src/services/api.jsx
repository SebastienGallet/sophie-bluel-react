const API_BASE_URL = 'http://localhost:5678/api';

export function getWorks() {
  return fetch(`${API_BASE_URL}/works`)
    .then(response => response.json())
}

export function getCategories() {
  return fetch(`${API_BASE_URL}/categories`)
    .then(response => response.json())
}

export const apiLogin = (email, password) => {
  return fetch(`${API_BASE_URL}/users/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
          'Content-Type': 'application/json'
      },
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Email or password is incorrect');
      }
      return response.json();
  });
};

export const deleteWork = async (id, token) => {
  try {
    const response = await fetch(`http://localhost:5678/api/works/${id}`, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`, // Assurez-vous que le token est inclus correctement
      },
    });
    if (!response.ok) {
      throw new Error('Failed to delete the work.');
    }
    return true;
  } catch (error) {
    console.error('Error deleting work:', error);
    return false;
  }
};



export const postWork = async (formData, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/works`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    if (!response.ok) {
      throw new Error('Failed to post the new work.');
    }
    return response.json();  // Retourne la réponse du serveur après l'ajout
  } catch (error) {
    console.error('Error posting new work:', error);
    return null;  // Indique un problème lors de la création
  }
};