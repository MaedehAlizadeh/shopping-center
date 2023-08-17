import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Styles
import styles from './Navbar.module.css'
// Icons
import cartIcons from '../../assets/icons/shop.svg';

const Navbar = () => {
    
    const state = useSelector(state => state.cartState);

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <Link to='/' className={styles.brand}>Shopping Center</Link>
                <div className={styles.navLinks}>
                    <Link to='/' className={styles.navLink}>Home</Link>
                    <Link to='/products' className={styles.navLink}>Products</Link>
                    <div className={styles.iconContainer}>
                        <Link to='/cart'><img src={cartIcons} alt='cart'/></Link>
                        <span>{state.itemsCounter}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;