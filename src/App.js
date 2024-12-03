import logo from "./logo.svg";
import "./App.css";
import Fragmento from "./pages/Fragmento";
import Anexo from "./pages/Anexo";

function App() {
  const n = 10;

  return (
    <div className="App">

    <Anexo/>

    <Fragmento />

      <h1>Segunda Feira</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
        tenetur, sapiente ab eos, perferendis est cum esse placeat maxime velit,
        veniam odio possimus. Eius nostrum ea quod ut velit quisquam?
      </p>

      <h2
        style={{
          color: "DarkMagenta",
          backgroundColor: "coral",
          padding: "20px",
        }}
      >
        Terça Feira
      </h2>

      <h2>quarta feira</h2>

      <h3
        style={
          n >= 10
            ? { color: "SeaShell", backgroundColor: "SeaGreen" }
            : { color: "SkyBlue", backgroundColor: "SpringGreen" }
        }
      >
        quinta feira
      </h3>
      <h3   style={
          n < 10
            ? { color: "SeaShell", backgroundColor: "SeaGreen" }
            : { color: "SteelBlue", backgroundColor: "SpringGreen" }
        }>sexta feira</h3>
    </div>
  );
}

export default App;
