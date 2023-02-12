import CartWidget from "../CartWidget/CartWidget";
import Categorias from "../Categorias/Categorias";
import carrito from "../../imagenes/carrito.svg"
import "./navbar.css";

const Navbar = () => {
    return (
        <div className = "nav-container">
            <nav className = "navbar">
                <h1 className = "navbar-logo">Lole Sier</h1>
                <Categorias />
                <CartWidget>
                    <img src = {carrito} alt = "" className="imgCarrito"></img>
                    <h2 className="seeTexto">0</h2>
                </CartWidget>
            </nav>
        </div>
    );
};

export default Navbar;