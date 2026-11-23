import CarCard from '../../components/carCard';

import { useState } from 'react';
import { importCar } from '../../services/import';

function Import() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [message, setMessage] = useState('');
  const [car, setCar] = useState(null);
  const token = localStorage.getItem('token');

  async function handleImport(e) {
    e.preventDefault();
    setMessage('');
    setCar(null);

    try {

      const data = await importCar(registrationNumber, token);

      setCar(data);
      setMessage('Bilen blev importeret!');
      setRegistrationNumber('');
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <div>
      <h1>Importer bil</h1>

      <form onSubmit={handleImport}>
       <input
  type="text"
  placeholder="Indtast registreringsnummer"
  value={registrationNumber}
  onChange={e => setRegistrationNumber(e.target.value.toUpperCase().replace(/\s/g, ''))}
  required
/>

        <button type="submit">
          Importer bil
        </button>
      </form>

      <p>{message}</p>

      {car && (
        <div>
          <h3>Importeret bil</h3>
           <CarCard car={car} />
        </div>
      )}
    </div>
  );
}

export default Import;
