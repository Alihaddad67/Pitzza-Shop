import React, { useContext } from 'react';
import { useAuth } from './../Hooks/useAuth.jsx'
import { Products } from '../../Data/Product.js';
import { ShopContext } from '../../context/shopContext.js';
import { ProductList } from '../Shop/ProductList.js';

export const WerbKorb = () => {
    const { cartItems } = useContext(ShopContext) 
    
    const {user} = useAuth()
    console.log(user);
    return <React.Fragment>
    <div>This is WerbKorb for: {user.firstName}</div>
        <div className='row'>
            {Products.map((p) =>{
                if (cartItems.some((i) => i.id === p.id && i.count > 0))
                return <ProductList data={p} />}
            )}
    </div>
    </React.Fragment>
}