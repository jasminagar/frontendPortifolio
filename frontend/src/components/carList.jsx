import CarCard from "./CarCard";

export function CarList({cars}){
return(
    <div>
        {cars.map(car => (
            <CarCard 
            key={car.id} car={car} />
            ))}
    </div>
);
}

