import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import "./styles/global.css";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />

      <main>
        <Portfolio />
      </main>

      <footer> {/* Footer stays at the bottom */} </footer>
    </div>
  );
}

export default App;
