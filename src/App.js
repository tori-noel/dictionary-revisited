import banner from "./banner.png";
import "./App.css";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <header>
        <img src={banner} className="App-logo img-fluid shadow" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
    </div>
  );
}

export default App;
