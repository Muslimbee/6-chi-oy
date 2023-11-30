import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";


function Navbar() {
    const {login , setLogin,user} = useGlobalContext()

    return (
        <div className="  container border p-3">
            <ul className="nav d-flex justify-content-around m-3  ">
                <li>
                    <Link className="  text-black text-decoration-none " to='/' >
                    Home
                    </Link>
                </li>
                <li>
                    <Link className="  text-black text-decoration-none " to='products' >
                    Products
                    </Link>
                </li>
                <div className="navBTN" >
                    <Link to={'login'} >
                    {!user.name ? <button className="btn btn-danger " onClick={()=> setLogin(!login)}>
                        Sign in
                     </button> : <button className="btn btn-danger "> {user.name}</button>}
                    </Link>
                </div>
                
            </ul>
        </div>
    );
}

export default Navbar;