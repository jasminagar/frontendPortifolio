import CarCard from "./carCard";

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

