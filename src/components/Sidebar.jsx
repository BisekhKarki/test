import React from 'react'
import logo from "../assets/Images/Logo.png"
import { sidebar } from '../Sidebar'
import "../Css/Sidebar.css"
import { Link, useLocation } from 'react-router-dom'


const Sidebar = () => {

    const loc = useLocation()


  return (
    <div className='sidemenu'>
      <img src={logo} alt='logo' />
      <div>
        <ul className='sideBar'>
           {
            sidebar.map((s)=>{
                return(
                    <Link className={ loc.pathname === s.path ? "sideactive" : s.className  }  >{s.icon}{s.name}</Link>
                )
            })
           }
        </ul>
      </div>

    </div>
  )
}

export default Sidebar
