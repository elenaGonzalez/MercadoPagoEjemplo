import {useState } from 'react'
import './Checkout.css'
import Checkout from './Checkout';

export default function Direccion() {
  const [state, setState] = useState({
        provincia: "",
        localidad: "",
        direccion: ""
  })

  
  function handleSubmit(e){
        e.preventDefault()
        console.log(state)
        // acciòn para hacer put en la orden del usuario

  }

  function handleChange(e){
     setState({
        ...state,
        [e.target.name]:  e.target.value
     })
  }   
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
                <label>Provincia:</label>
                <input type="text" name="provincia" onChange={handleChange}/>
                <label>Localidad:</label>
                <input type="text" name="localidad" onChange={handleChange}/>
                <label>Direccion:</label>
                <input type="text" name="direccion" onChange={handleChange}/>
                <button type="submit">Enviar</button>
        </form>
        <Checkout />
    </div>
  );
}