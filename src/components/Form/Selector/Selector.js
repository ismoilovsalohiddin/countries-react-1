import "./style.css"
function Selector(){
    return(
        <select className="form__selector" name="select" id="select">
            <option value="filter" selected disabled>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="all">All countries</option>
        </select>
    )
}

export default Selector