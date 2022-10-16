import axios from "axios";
import { useEffect } from "react";
import "./App.css";

function App() {
  const hello = async () => {
    const data = await axios
      .get("http://localhost:8080/")
      .then((resp) => resp.data)
      .then((resp) => <p>resp{resp}</p>);

    return data;
  };

  return (
    <div className="App">
      <button onClick={<p>{hello}</p>}>Hello</button>
    </div>
  );
}

export default App;
