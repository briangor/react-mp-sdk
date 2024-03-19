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
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          React MpSDK
        </a>
      </header>
    </div>
  );
}

export default App;
