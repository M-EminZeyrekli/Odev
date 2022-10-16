import axios from "axios";
import { useEffect } from "react";
import "./App.css";

function App() {
  const hello = async () => {
    const data = await axios
      .get("http://localhost:8080/")
      .then((resp) => resp.data)
      .then((resp) => console.log(resp))

    return data;
  };

  return (
    <div className="App">
      <button onClick={hello}>Hello World!</button>
    </div>
  );
}

export default App;
