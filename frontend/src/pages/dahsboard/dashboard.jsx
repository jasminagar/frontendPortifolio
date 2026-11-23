import { CarList } from "../../components/carList";
import { useState } from "react";

function Dashboard({ onImport, cars }) {
  const [showCars, setShowCars] = useState(false);

  return (
    <div className="dashboard">

      <main>
        <h2>Dashboard</h2>

        <section className="dashboard-cards">
          <div className="card">
            <h3>Mine biler</h3>
            <button onClick={() => setShowCars(!showCars)}>
              {showCars ? "Skjul biler" : "Se dine biler"}
            </button>
            {showCars && <CarList cars={cars} />}
          </div>

          <div className="card">
            <h3>Service</h3>
            <button>Se service</button>
          </div>

          <div className="card">
  <h3>Tilføj bil</h3>
  <button onClick={onImport}>Tilføj bil</button>
</div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
