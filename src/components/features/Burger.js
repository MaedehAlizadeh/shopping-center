import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './Burger.module.css';

const Burger = () => {

    const [isOpen, setIsOpen] = useState(false);

    const changeHandler = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div open={isOpen} onClick={changeHandler} className={styles.burgerContainer}>
                <div className={isOpen && styles.line1}></div>
                <div className={isOpen && styles.line2}></div>
                <div className={isOpen && styles.line3}></div>
            </div>
            <ul className={isOpen ? styles.openMenu : styles.navbarNav}>
                <li className={styles.navItem}><Link to='/' className={styles.navLink}>Home</Link></li> 
                <li className={styles.navItem}><Link to='/products' className={styles.navLink}>Products</Link></li> 
            </ul>
        </div>
    );
};

export default Burger;