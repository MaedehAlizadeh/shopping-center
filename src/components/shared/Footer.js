import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './Footer.module.css';



const Footer = () => {

    const [email, setEmail] = useState('');

    const changeHandler = event => {
        setEmail(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();
    }

    return (
        <div className={styles.container}>
            <Link to='/' className={styles.brand}>Shopping Center</Link>
            <div className={styles.linkContainer}>
                <div className={styles.usefulLink}>
                    <Link className={styles.footerLink} to='/products'>Products</Link>
                    <Link className={styles.footerLink} to='/cart'>Cart</Link>
                    <a className={styles.footerLink} href='#'>About Us</a>
                    <a className={styles.footerLink} href='#'>Contact Us</a>
                </div>
                <div className={styles.subscribe}>
                    <p className={styles.title}>Get shopping center news</p>
                    <form className={styles.footerForm} onSubmit={submitHandler}>
                      <input className={styles.formInput} type='text' value={email} onChange={changeHandler} placeholder="Enter your email"/>
                      <button className={styles.formButton}>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;