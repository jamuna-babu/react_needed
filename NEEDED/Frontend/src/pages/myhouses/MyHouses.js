import "./MyHouses.css"
import { Link } from "react-router-dom";
import Navbar from '../../Components/rightsidebar/SideBar';

const MyHouses = () => {
    return(
        <div>
            <Navbar/>
            <h1 className="amh">My Houses</h1>
        </div>
    )
}

export default MyHouses;