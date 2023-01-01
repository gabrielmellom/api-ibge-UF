import ConsumoApi from "../config/config_api";
import { createStore} from "redux";

const aplicacao = <ConsumoApi/>

function reducer( state = aplicacao , action){
    return state
}

export default createStore(reducer)



