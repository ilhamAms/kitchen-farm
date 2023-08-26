import React from 'react'

import {BiSearchAlt2 } from 'react-icons/bi'
import {MdOutlineLocalGroceryStore } from 'react-icons/md'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="container">
           <nav className="nav">
            <div className="nav-logo">
                <a href="" className="home">
                    THE LOCAL LIFE
                </a>
            </div>
            <div className="nav-link">
                <ul>
                    <li><a href="
                    " className="items-link">Home</a>
                    </li>
                    <li><a href="" className="items-link">About</a>
                    </li>
                    <li><a href="" className="items-link">Shop</a></li>
                    <li><a href="" className="items-link">Contacts</a></li>
                </ul>
            </div>
            <div className="nav-store">
                <BiSearchAlt2 className='icon' />
                <MdOutlineLocalGroceryStore 
                 className='icon'
                 />
            </div>
           </nav>
        </div>
    </div>
  )
}

export default Navbar