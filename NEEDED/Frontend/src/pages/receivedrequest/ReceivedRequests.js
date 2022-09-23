import "./ReceivedRequests.css"
import { Link } from "react-router-dom";
import Navbar from '../../Components/rightsidebar/SideBar';

const ReceivedRequest = () => {
    return(
        <div>
            <Navbar/>
            <h1 className="amh">Received Requests</h1>
        </div>
    )
}

export default ReceivedRequest;