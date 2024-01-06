import "./style.css"
import Search from "./Search/Search"
import Selector from "./Selector/Selector"

function Form(){
    return(
        <form>
            <Search/>
            <Selector/>
        </form>
    )
}

export default Form