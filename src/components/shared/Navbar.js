import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Components
import Burger from '../features/Burger';
// Styles
import styles from './Navbar.module.css'
// Icons
import cartIcons from '../../assets/icons/shop.svg';

const Navbar = () => {
    
    const state = useSelector(state => state.cartState);

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <Link to='/' className={styles.navBrand}>Shopping Center</Link>
                <div className={styles.navLinks}>
                    <Burger/>
                    <div className={styles.iconContainer}>
                        <Link to='/cart'><img src={cartIcons} alt='cart'/></Link>
                        <span>{state.itemsCounter}</span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;