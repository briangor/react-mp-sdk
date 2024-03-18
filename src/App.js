import logo from './logo.svg';
import './App.css';
import { setupSdk } from '@matterport/sdk'

function App() {
  const main = async () => {
    const mpSdk = await setupSdk('yourSdkKey')
    await mpSdk.App.state.waitUntil(state => state.phase === mpSdk.App.Phase.PLAYING)
    mpSdk.Camera.rotate(35, 0)
  }
  main().catch(err => console.error('Error:', err))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
