import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import header from '../../images/header2.png';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
                <div>
                    <img className='w-100' src={header} alt="headerImage" />
                </div>
            <div className="header">   
                <div className="header-inner">
                    <nav style={{backgroundColor:'#003254'}} className="navbar navbar-expand-lg navbar-dark ms-auto">
                        <div className="container">
                            <NavLink className="navbar-brand fw-bold fs-3 text-warning" to="/home">Travel<span className="text-danger">Talk</span></NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                
                                <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })} className="nav-link active mx-1  " aria-current="page" to="/home">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })} className="nav-link active mx-1  " href="#contact" to="/contact">Contact</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })} className="nav-link active mx-1  " to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })} className="nav-link active mx-1  " to="/myCompare">Compare</NavLink>
                                        </li>
                                        {
                                            user?.email && <li className="nav-item">
                                            <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' , backgroundColor: isActive ? 'white' : ''})} className="nav-link active mx-1  " to="/dashboard">Dashboard</NavLink>
                                        </li>
                                        }
                                        {
                                            user?.email ? 
                                            <li className="nav-item">
                                            <p onClick={logOut} className='nav-link active mx-1 text-danger'>LogOut</p>
                                        </li> 
                                        : 
                                        <li className="nav-item">
                                                <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })} className="nav-link active mx-1" to="/login">Sign In<span><i className="fas fa-user"></i></span> </NavLink>
                                            </li>
                                        }  
                                         <li className="nav-item">
                                                <div className="nav-link text-end">
                                                 <img className="img-fluid w-25 rounded-circle " src={user?.photoURL} alt="" />
                                                </div>
                                        </li>  
                                         <li className="nav-item">
                                               <p className="text-info nav-link active mx-1">{user?.displayName}</p>
                                        </li>  
                                    </ul>
                            
                               
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;