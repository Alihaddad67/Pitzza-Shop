import React, { useContext } from 'react';
import { useAuth } from './../Hooks/useAuth.jsx'
import { Products } from '../../Data/Product.js';
import { ShopContext } from '../../context/shopContext.js';
import { ProductList } from '../Shop/ProductList.js';

export const WerbKorb = () => {
    const { cartItems } = useContext(ShopContext)

    const { user } = useAuth()
    console.log(user);

    const totalPrice = cartItems.reduce((total, item) => {
        const product = Products.find(product  => product.id === item.id);
        return total + (product ? product.price * item.count : 0);
    }, 0);

    return (
        <React.Fragment>
            {/* <div>This is WerbKorb for: {user.firstName}</div> */}
            <div className='row'>
                {Products.map((product) => {
                    const cartItem = cartItems.find((item) => item.id === product.id && item.count > 0);
                    if (cartItem) {
                        return (
                            <div key={product.id} className=" ontainer mt-5 pt-5 col-12 mb-3  my-5  text-center">
                                <p>Name: {product.productName}</p>
                                <p>Quantity: {cartItem.count}</p>
                                <p>Price: {product.price} x {cartItem.count} = {product.price * cartItem.count}</p>
                            </div>
                        );
                    }
                    return null;
                })}
                <div className="col-12 text-center">
                    <p>Total: {totalPrice}</p>
                </div>
            </div>
        </React.Fragment>
    );
};