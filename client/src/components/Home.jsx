import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Home() {
  const direcciones = {nombre:"mi casa 1323",ciudad:"Ctes"}
  let history = useHistory();
  function handleClick() {
    history.push(`/direccion/${direcciones}`);
  }
  return (
    <div>
       <h1>Prueba Mercado Pago</h1>
       <button onClick={() => handleClick()}>
      Go to Homepage
    </button>    
    </div>
  );
}