import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Product from './shared/Product';
import Loading from './shared/Loading';

// redux
import { fetchProducts } from '../redux/products/productsAction';

// Style
import styles from "./Store.module.css";

// Picture
import errorPicture from '../assets/pictures/error.svg';

const Store = () => {

    const dispatch = useDispatch();
    const productsState = useSelector(state => state.productsState)

    useEffect(() => {
        if (!productsState.products.length) dispatch(fetchProducts())
    }, []);


    return (
        <div className={productsState.error ? styles.isError : styles.container} >
            {
                productsState.loading ? 
                <Loading /> :
                productsState.error ?
                    <div className={styles.error}>
                        <img src={errorPicture} alt='error'/>
                        <p>sorry something went wrong</p>
                        <p>please try later</p>
                    </div>
                    :
                    productsState.products.map(product => <Product key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Store;