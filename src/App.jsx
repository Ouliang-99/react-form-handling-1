import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMsg, setGreetingMsg] = useState("");
  const [updateMsg, setUpdateMsg] = useState("");

  const handleUpdateMsg = () => {
    setUpdateMsg(greetingMsg);
    setGreetingMsg("");
  }
  return (
    <div className="App">
      <div className="greeting-container">{updateMsg}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" value={greetingMsg} onChange={(event) => {setGreetingMsg(event.target.value)}}/>
      </div>

      <div className="buttons">
        <button onClick={handleUpdateMsg}>Update text</button>
      </div>
    </div>
  );
}

export default App;
