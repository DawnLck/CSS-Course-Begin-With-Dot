import { useState } from "react";
import { Button } from "antd";
import { default as Course } from "./pages/DotCourse";
import "./App.css";

function App() {
  const [ready, setReady] = useState(false);
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
