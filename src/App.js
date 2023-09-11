import React from "react";
import "./App.css";
import ElectionList from "./components/ElectionList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Voting Application</h1>
      </header>
      <main>
        <h2>Ongoing Elections</h2>
        <ElectionList />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Voting Application</p>
      </footer>
    </div>
  );
}

export default App;
