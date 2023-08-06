import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

//Functions
import { shorten } from '../../helper/functions';

// Actions
import { removeItem, decrease, increase } from '../../redux/cart/cartAction';

//Icons
import trashIcon from '../../assets/icons/trash.svg';

//Styles
import styles from './Cart.module.css';

const Cart = props => {

    const dispatch = useDispatch();
    const {image, title, price, quantity, id} = props.data;

    return (
        <div className={styles.container}>
            <Link to={`/products/${id}`}><img className={styles.productImage} src={image} alt='product'/></Link>
            <div className={styles.data}>   
                <h3>{shorten(title)}</h3>   
                <p>{price} $</p>
            </div>
            <div>
               <span className={styles.quantity}>{quantity}</span>
            </div>    
            <div className={styles.buttonContainer}>
                {quantity > 1 ? 
                    <button onClick={()=> dispatch(decrease(props.data))}>-</button> :
                    <button onClick={()=> dispatch(removeItem(props.data))}><img src={trashIcon} alt='trash'/></button>
                }
                {<button onClick={() => dispatch(increase(props.data))}>+</button>} 
            </div>     
        </div> 

    );
};

export default Cart;