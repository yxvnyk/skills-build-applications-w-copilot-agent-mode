import './App.css'

function App() {
  return (
    <main className="container py-5">
      <section className="row align-items-center g-4">
        <div className="col-lg-7">
          <span className="badge text-bg-primary mb-3">OctoFit Tracker</span>
          <h1 className="display-5 fw-bold">Track workouts, lead teams, and grow stronger.</h1>
          <p className="lead text-muted">
            A modern multi-tier fitness experience with a React frontend, Express API,
            and MongoDB-backed data layer.
          </p>
          <div className="d-flex gap-3 mt-4">
            <a className="btn btn-primary" href="http://localhost:8000/api/health">
              Check API
            </a>
            <a className="btn btn-outline-secondary" href="https://vite.dev/" target="_blank" rel="noreferrer">
              Vite Docs
            </a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h2 className="h4">Application stack</h2>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">Frontend: React 19 + Vite on port 5173</li>
                <li className="list-group-item">Backend: Express + TypeScript on port 8000</li>
                <li className="list-group-item">Database: MongoDB via Mongoose on port 27017</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
