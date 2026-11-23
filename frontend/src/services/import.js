const API_URL = 'http://165.245.241.134:7070/api/v1';

export async function importCar(registrationNumber, token) {
  const response = await fetch(
    `${API_URL}/service-records/import/${encodeURIComponent(registrationNumber)}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  );

  const responseText = await response.text();

  if (!response.ok) {
    console.error('Backend fejl:', responseText);
    throw new Error(`Import fejlede (${response.status}): ${responseText}`);
  }

  return responseText ? JSON.parse(responseText) : null;
}
