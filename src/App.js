import React, { useState, useEffect } from 'react';
import ApplicationForm from './components/ApplicationForm';
import ApplicationsList from './components/ApplicationsList';
import './assets/App.css';

function App() {
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    const res = await fetch('http://localhost:5000/api/applications');
    const data = await res.json();
    setApplications(data);
  };

  useEffect(() => {
    fetchApplications();
    const interval = setInterval(fetchApplications, 3000); // auto-refresh
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cyber Insurance Application</h1>
      </header>
      <main className="App-main">
        <ApplicationForm onSubmitted={fetchApplications} />
        <ApplicationsList applications={applications} />
      </main>
      <footer className="App-footer">
        <p>Built by Nick Weston, 2025 &reg;</p>
      </footer>
    </div>
  );
}

export default App;