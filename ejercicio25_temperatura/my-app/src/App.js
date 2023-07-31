import { useState } from "react";
import "./main.scss";
import ClimaCiudad from "./components/ClimaCiudad";

function App() {
  const [ciudad, setCiudad] = useState("");
  const [state, setState] = useState(false);

  function reiniciar() {
    setState(false);
    setCiudad("");
  }
  return (
    <div className="App">
      {state ? (
        <>
          <ClimaCiudad ciudad={ciudad} reiniciar={reiniciar}></ClimaCiudad>
        </>
      ) : (
        <>
          <input
            className="App-input"
            value={ciudad}
            onChange={(e) => setCiudad(e.currentTarget.value)}
            placeholder="Ingrese una ciudad"
          ></input>
          <button className="App-button" onClick={(e) => setState(true)}>
            Buscar clima
          </button>
        </>
      )}
    </div>
  );
}

export default App;
