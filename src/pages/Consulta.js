
import { useSelector } from "react-redux"
import "../pages/consulta.css"







function Consulta (){
//ESTOU IMPORTANDO O STATE PELO STORE
   const estado = useSelector( state => state)
   
   return(
       <>  
       {estado}
       </>
    )
  
 }
 export default Consulta