import "./style.css"
function Header(){
    return(<header class="header">
    <div className="container">
       <div className="header__content">
        <div className="header-left">
            <h2>Where in the world?</h2>
        </div>
        <div className="header-right">
            <p>Dark Mode</p>
        </div>
       </div>
    </div>
   </header>
    )
}

export default Header