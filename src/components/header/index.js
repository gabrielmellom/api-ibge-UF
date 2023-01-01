 import { Link } from "react-router-dom"
import "./index.css"
 export default function Header (){
    return(
        <>



            <header className="header">
                <div className="logo">
                        <h1>Header fixo</h1>
                </div> 
                <div className="links">
                    <Link className="li" to="/" > Home</Link>
                    <Link className="li" to="/Consulta" > Consulta</Link>
                </div>       
              

            </header>
        </>
    )
}