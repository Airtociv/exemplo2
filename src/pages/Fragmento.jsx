import "./Fragmento.css"

function Fragmento() {

    const shift = false;

  return (
    <div>
      
      <h1 className = "titulo">domingo,interno</h1>

      <h2 className = {
        shift 
        ? "titulo-alterna"
        : "titulo-padrao"
      }> sabado de manhã </h2>

    </div>
  );
}

export default Fragmento;
