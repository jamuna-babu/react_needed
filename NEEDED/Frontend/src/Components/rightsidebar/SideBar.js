import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';
import * as FiIcons from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './SideBar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const SidebarData = [
    // {
    //   title: 'My Reservations',
    //   path: '/Home/MyReservations',
    //   icon: <AiIcons.AiFillHome />,
    //   cName: 'nav-text'
    // },
    {
      title: 'Received Requests',
      path: '/Home/ReceivedRequests',
      // icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
     }//,
    // {
    //   title: 'My House(s)',
    //   path: '/Home/MyHouses',
    //   icon: <AiIcons.AiFillHome />,
    //   cName: 'nav-text'
    // }
  
  ];
  return (
      <IconContext.Provider value={{ color: '#6b3914', size: '1.2em' }}>

        <div className='navbar'>
          <Link to="/" style={{marginLeft:"-10px"}}><p className='title'>Needed</p></Link>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaUserCircle onClick={showSidebar} />
          </Link>
        </div>
        {/* <nav className='nav-menu active'> */}
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <div className='profile'>
              <center>
                <IconContext.Provider value={{ color: '#6b3914', size: '5em'}}>
                  <FaIcons.FaUserCircle/>
                </IconContext.Provider>
              </center>
              <div className='profile2'>
                <center>
                  <p>Admin</p> <br/>
                  <p style={{marginTop:"-18px"}}>
                    {/* <ImIcons.ImPhone/> 6543238965 */}
                  </p>
                </center>
              </div>
            </div>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <p>{item.title}</p>
                  </Link>
                </li>
              );
            })}

            <div className='logout'>
              
              <Link to="/">
                <div class="licon">
                  <IconContext.Provider value={{ color: '#6b3914', size: '2em'}}>
                    <FiIcons.FiLogOut/>
                  </IconContext.Provider>
                </div>
                <p className='logout1' style={{textDecoration : "none"}}>Logout</p>
              </Link>
              
            </div>
          </ul>
        </nav>
        
      </IconContext.Provider>
  );
}

export default Navbar;
