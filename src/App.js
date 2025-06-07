import './assets/App.css';
import ServerButton from './components/ServerButton.js';
import FileUpload from './components/FileUpload.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's Build Something Cool</h1>
      </header>
      <main className="App-main">
        <section>
          <h2>REST API Example: Get message from backend Node.js server</h2>
          <ServerButton />
        </section>
        <section>
          <h2>Webhook & Cloud Example: Upload a File to an AWS S3 bucket</h2>
          <FileUpload />
        </section>
      </main>
      <footer className="App-footer">
        <p>Built by Nick Weston, 2025 &reg;</p>
      </footer>
    </div>
  );
}

export default App;