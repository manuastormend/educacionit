import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate()
    function onclick(){
        navigate("/carrito")
    }
    return <>
     <div className="header">
        <img onClick={(e)=>onclick()}src="/img/carrito.png"></img>
     </div>
    </>
}

export default Header;