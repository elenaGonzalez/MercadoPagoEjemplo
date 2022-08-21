// import { useHistory } from "react-router-dom"


export default function PruebaComponente({ match }){
//    const history = useHistory()
   console.log(match.params.direcciones.nombre)
   return(
       <>
        <h1>Mi Componente</h1>
       </>
   )
}