import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("");
  const [display, setDisplay] = useState("Greeting Message");

  const handleGreeting = (event) => {
    setGreeting(event.target.value);
  }

  const handleDisplay = () => {
    setDisplay(greeting);
  }

  return (
    <div className="App">
      <div className="greeting-container">{display}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">Greeting Message</label>
        <input id="greeting-message" type="text" onChange={handleGreeting} />
      </div>

      <div className="buttons">
        <button onClick={handleDisplay}>Update text</button>
      </div>
    </div>
  );
}

export default App;
