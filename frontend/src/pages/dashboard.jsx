
function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>MyGarage</h1>
        <button>Log ud</button>
      </header>

      <nav className="dashboard-nav">
        <a href="#">Dashboard</a>
        <a href="#">Mine biler</a>
        <a href="#">Service</a>
        <a href="#">Indstillinger</a>
      </nav>

      <main>
        <h2>Dashboard</h2>
        <p>Velkommen til MyGarage!</p>

        <section className="dashboard-cards">
          <div className="card">
            <h3>Mine biler</h3>
            <p>Se dine registrerede biler</p>
            <button>Se biler</button>
          </div>

          <div className="card">
            <h3>Service</h3>
            <p>Hold styr på dine serviceeftersyn</p>
            <button>Se service</button>
          </div>

          <div className="card">
            <h3>Tilføj bil</h3>
            <p>Registrer en ny bil i din garage</p>
            <button>Tilføj bil</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
