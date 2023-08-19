import React, { useEffect }  from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Style
import styles from "./ProductDetails.module.css";
// redux
import { fetchProductDetails } from '../redux/productDetails/productDetailsAction';
// Functions
import { isInCart, quantityCount } from '../helper/functions';
// Actions
import { addItem, removeItem, increase, decrease } from '../redux/cart/cartAction';
// Component
import ImageSlider from './features/ImageSlider';


const ProductDetails = () => {

    const {id} = useParams();
    const state = useSelector(state => state.cartState);
    const data = useSelector(state => state.productsState.products);
    const details = data[id - 1];
    const {image, title, description, price, category} = details;
    const dispatch = useDispatch();

    useEffect(() => {
        if (!data.length) dispatch(fetchProductDetails(id))
    }, []);

    return (
        <div className={styles.container}>
            <ImageSlider image={image}/>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category:</span> {category}</p>
                <p className={styles.price}>{price} $</p>
                <div className={styles.buttonContainer}>
                    {quantityCount(state, details.id) < 1 ? 
                        <button disabled className={styles.disabledButton} onClick={() => dispatch(decrease(details))}>-</button> :
                        
                        quantityCount(state, details.id) === 1 ?
                            <button className={styles.smallButton} onClick={() => dispatch(removeItem(details))}>-</button> :
                            <button className={styles.smallButton} onClick={() => dispatch(decrease(details))}>-</button> 

                        
                    }
                    {quantityCount(state, details.id) > 0 ? 
                        <span className={styles.counter}>{quantityCount(state, details.id)}</span>:
                        <span className={styles.counter}>0</span>
                    }
                    {
                        isInCart(state, details.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch(increase(details))}>+</button> :
                        <button className={styles.smallButton} onClick={() => dispatch(addItem(details))}>+</button> 

                    }
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;