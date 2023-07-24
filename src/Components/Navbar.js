import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/Idioms-final" className="navbar-logo">
                        Idioms <i className='fab fa-typo3' />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'> 
                            <Link to='/Idioms-final' className='nav-links' onClick = {closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'> 
                            <Link to='/courses' className='nav-links' onClick = {closeMobileMenu}>
                                Courses
                            </Link>
                        </li>

                        <li className='nav-item'> 
                            <Link to='/communities' className='nav-links' onClick = {closeMobileMenu}>
                                Communities                             
                            </Link>
                        </li>

                        <li className='nav-item'> 
                            <Link to='/aboutus' className='nav-links' onClick = {closeMobileMenu}>
                                About Us                       
                            </Link>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle = 'btn--outline'>SignUp</Button>} */}
                </div>
            </nav>
        </>
  )
}

export default Navbar