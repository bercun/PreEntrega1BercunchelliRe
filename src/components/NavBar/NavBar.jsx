

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">El Obrador</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/category/1">Recetas 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/category/2">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/category/3">Un poco de nuestra historia</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar