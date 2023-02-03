import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LibraryLogo from '../assets/Library.svg'
import { Link } from "react-router-dom";

import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../Firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { setUserId } from '@firebase/analytics';


const Nav = ({numberOfItems}) => {
    const [value, setValue] = useState("");

    const [user] = useAuthState(auth);
    console.log(user);

    function openMenu() {
        document.body.classList += " menu--open";
    }

    function closeMenu() {
        document.body.classList.remove("menu--open")
    }

    
    const googleSignIn = async () => {
        const result =  await signInWithPopup(auth, provider)       
    }

    const googleSignOut = async () => {
        await signOut(auth);
    }

    useEffect(() => {
        setValue(localStorage.getItem("email"))
    })

    return(
    <nav>
        <div className='nav__container'>
            <Link to="/">
                <img src={LibraryLogo} alt="" className='logo'/>
            </Link>   
            <ul className='nav__links'>
                <li className='nav__list'>
                    <Link to="/" className='nav-link'>
                        Home
                    </Link>
                </li>
                <li className='nav__list'>
                    <Link to="/books" className='nav-link'>
                        Books
                    </Link>
                </li>
                <li className='nav__list'>
                    {!user ?
                        (<button to="/" className='nav-link google-auth' onClick={googleSignIn}>
                        Sign in
                    </button>
                    ) : (
                    <button to="/" className='nav-link google-auth' onClick={googleSignOut}>
                        Sign Out
                    </button>)
                    }
                </li>
                {user &&
                    <li className='nav__list email__name'>
                        <p>
                            <span className='welcome'>Hi,</span>{user.displayName.split(' ')[0]}
                        </p>
                    </li>     
                } 
                <button className='btn__menu' onClick={openMenu}>
                    <FontAwesomeIcon icon="bars"/>
                </button>
                <li className='nav__icon'>
                    <Link to="/cart" className='nav__link'>
                        <FontAwesomeIcon  icon="shopping-cart"/>
                    </Link>
                    {
                        numberOfItems > 0 && (<span className='cart__length'>{numberOfItems}</span>
                    )}
                </li>
            </ul>

            <div className='menu__backdrop'>
                <button className='btn__menu btn__menu--close' onClick={closeMenu}>
                    <FontAwesomeIcon  icon="times"/>
                </button>
                <ul className='menu__links'>
                    <li className='menu__list'>
                        <Link to="/" className='menu__link'>
                            Home
                        </Link>
                    </li>
                    <li className='menu__list'>
                        <Link to="/books" className='menu__link'>
                            Books
                        </Link>
                    </li>
                    <li className='menu__list'>
                        <Link to="/cart" className='menu__link'>
                            Cart
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Nav;
