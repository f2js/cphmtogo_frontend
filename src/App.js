import './styles/App.css';
import Menu from "./components/Menu"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          CPHMTOGO
      </header>

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <button id="sel-button">Click me!</button>

        <Menu/>

    </div>
  );
}

export default App;
