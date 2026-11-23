import './CarCard.css';

function CarCard({ car }) {
  return (
    <div className="car-card">
      <h3>{car.brand} {car.model}</h3>

      <p>
        <strong>Registreringsnummer:</strong>
        {' '}{car.registrationNumber}
      </p>

      <p>
        <strong>Årgang:</strong>
        {' '}{car.year}
      </p>

        <p>
        <strong>Kilometer::</strong>
        {' '}{car.mileage}
      </p>

      <p>
        <strong>Farve:</strong>
        {' '}{car.color}
      </p>
     {/* <div><pre>{JSON.stringify(car, null, 2)}</pre></div> */}
    </div>
  );
}

export default CarCard;
