import { Button } from "antd";
import { useState } from "react";
import "./App.css";
import { default as Course } from "./pages/DotCourse";

function App() {
  const [ready, setReady] = useState(true);
  return (
    <div className="App">
      {/* Welcome */}
      <div hidden={ready}>
        <h1>CSS: Begin With A Dot</h1>
        <h2>Relax! This is just for fun!</h2>
        <Button
          type="primary"
          onClick={() => {
            setReady(true);
          }}
        >
          Start
        </Button>
      </div>

      {/* Content */}
      <div hidden={!ready}>
        <Course></Course>
      </div>
    </div>
  );
}

export default App;
