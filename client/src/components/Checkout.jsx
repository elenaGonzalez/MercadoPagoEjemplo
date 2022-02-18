import { useEffect, useState } from 'react'
import Comprar from './Comprar'
import axios from 'axios'
import './Checkout.css'

export default function Checkout() {
  const [datos, setDatos] = useState("")
  const BASE_BACK = process.env.NODE_BASE_BACK ? process.env.NODE_BASE_BACK : 'http://localhost:3001' 
  useEffect(()=>{
    axios
    .get(`${BASE_BACK}/mercadopago`)
    .then((data)=>{
      setDatos(data.data)
      console.info('Contenido de data:', data)
    }).catch(err => console.error(err)) 
  },[])

  //puedo mostrar los productos de mi carrito u orden detalle
  const productos = [
    {title: "Producto 1", quantity: 5, price: 10.52},
    {title: "Producto 2", quantity: 15, price: 100.52},
    {title: "Producto 3", quantity: 6, price: 200}
  ]
  return (
    <div>
      { !datos
        ? <p>Aguarde un momento....</p> 
        : 
       <>
        <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>

          </tr>
        </thead>
        <tbody>
        {
        productos.map((producto, i) => {
            return(
              <tr key={producto.title}>
                <td>{producto.title}</td>
                  <td>{producto.price}</td>
                  <td>{producto.quantity}</td> 
              </tr>
            )
        })} 
        </tbody>  
        </table>
        <Comprar data={datos}/>
        </>
      }
    </div>
  );
}