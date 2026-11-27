import { Outlet } from 'react-router';

export function DashboardLayout() {
  return <Outlet />;
}

function Dashboard({ onImport, showCars }) {

  return (
    <div className="dashboard">

      <main>
        <h2>Dashboard</h2>

        <section className="dashboard-cards">
          <div className="card">
            <h3>Mine biler</h3>
            <button onClick={showCars}>Se alle mine biler</button>
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
