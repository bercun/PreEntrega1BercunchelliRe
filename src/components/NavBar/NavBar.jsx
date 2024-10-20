

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 ">
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
                    <li className="nav-item style = display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F2F2F2;
  width: 90vw;
  height: 80vh;
  max-width: 600px;
  max-height: 600px;
  border: 1px solid black;
  border-radius: 25px;
  margin: auto;
  padding: 15px;
  overflow: auto;">
                            <a className="nav-link" href="#" ><i className="fa-solid fa-cart-shopping"></i> <span className="badge bg-danger rounded-pill " id="carrito-box">0</span></a>
                        </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar