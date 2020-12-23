import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';

function Navbar() {
    const[click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    
    const closedMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    };  

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar"> 
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <i className='fas fa-crown'/> 
                    </Link>
                    <div className='menu-icon' onClick= {handleClick}>
                        <i className={click ? 'fas fa-times ' :  ' fas fa-bars'} />
                    </div>
                    <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closedMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/aboutme' className='nav-links' onClick={closedMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/projects' className='nav-links' onClick={closedMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links-mobile' onClick={closedMobileMenu}>
                                Contact Me
                            </Link>
                        </li>

                    </ul>

                    {button && <Button buttonStyle='btn--outline'>Contact Me
                    </Button>}


                </div>

            </nav>
        </>
    )
}

export default Navbar
