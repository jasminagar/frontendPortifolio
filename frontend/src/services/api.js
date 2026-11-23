const API_URL = 'http://165.245.241.134:7070/api/v1';

export async function login(username, password){
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });

      if (!response.ok) {
    throw new Error(`Login fejlede: ${response.status}`);
  }

  return response.json();
}

export async function register(username, password){
    const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
      'Content-Type': 'application/json'
    },
        body: JSON.stringify({
            username, 
            password
        })
    });

    if(response.ok){
        console.log('Register succes: ' + username);
    }

    if (!response.ok) {
    throw new Error(`Login fejlede: ${response.status}`);
  } 

  return response.json();

}

export async function getCarsForUser(username, token) {
    const response = await fetch(
        `${API_URL}/cars/user/${encodeURIComponent(username)}`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            }
        }
    );

    if (!response.ok) {
        throw new Error('Kunne ikke hente biler');
    }

    return await response.json();
}