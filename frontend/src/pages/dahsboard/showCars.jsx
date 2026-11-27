import { useEffect, useState } from 'react';
import facade from '../../services/apiFacade';
import { CarList } from '../../components/carList';

function ShowCars({ username }) {
const [cars, setCars] = useState([]);
const [error, setError] = useState('');
const [isLoading, setIsLoading] = useState(false);

useEffect(() =>{
  if (!username) return;

  setIsLoading(true);
  setError('');
  facade.fetchData(`/cars/user/${encodeURIComponent(username)}`)
    .then(data => setCars(data))
    .catch(error => {
      setError(error.message);
      console.error('Kunne ikke hente biler:', error);
    })
    .finally(() => setIsLoading(false));
}, [username]);

  return (
    <div>
      <h2>Mine biler</h2>
      {isLoading && <p>Henter biler...</p>}
      {error && <p>{error}</p>}

      {!isLoading && !error && cars.length === 0 && <p>Du har ingen biler endnu.</p>}

      {!isLoading && !error && cars.length > 0 && <CarList cars={cars} />}
    </div>
  );
}

export default ShowCars;