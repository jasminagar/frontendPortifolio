import { CarList } from '../../components/carList';
import { useState } from 'react';
import { getCarsForUser } from '../../services/api';

function ShowCars({username, cars, isLoading, error }) {
     const token = localStorage.getItem('token');
     const [message, setMessage] = useState('');
     const [car, setCar] = useState(null);

      async function handleShowCars(e) {
         e.preventDefault();
         setMessage('');
         setCar(null);
     
         try {
     
           const data = await getCarsForUser(username, token);
     
           setCar(data);
         } catch (error) {
           setMessage(error.message);
         }
       }

  return (
    <main>
      <h2>Mine biler</h2>
      {isLoading ? (
        <p>Henter biler...</p>
      ) : error ? (
        <p>{error}</p>
      ) : cars.length > 0 ? (
        <CarList cars={cars} />
      ) : (
        <p>Du har ingen biler endnu.</p>
      )}
    </main>
  );
}


export default ShowCars;