import logo from "../assets/img/logo.png"
import CartIcon from "../assets/icon/CartIcon"
import style from "../layout/header.module.css"
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className={style.header}>
            <div className={style.header__imgBlock}>
                <Link to="/">
                <img className={style.img__blockImg} src={logo} alt="Logo" />
                </Link>
            </div>
            <div className={style.header__buttons}>
                <span className={style.button_cart__icon}><CartIcon/></span>
                <button className={style.button_cart__btn}> View Cart</button>
            </div>
            
        </div>
        
    );
}

export default Header;