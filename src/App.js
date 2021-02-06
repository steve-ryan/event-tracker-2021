import { Router } from "@reach/router";
import About from "./About";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Router>
          {/* <Home path="/" /> */}
          <About path="/about" />
        </Router>
      </main>
    </div>
  );
}

export default App;
