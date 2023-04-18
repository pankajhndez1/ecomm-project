import React from 'react';
import { addToCart, clearCart, removeFromCart } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/ProductActions';
import hellCatImg from './hellCat.jpg'

const Main = () => {
    const dispatch = useDispatch();

    const myState = useSelector((state) => state)
    console.log(myState, 'myState');

    const products = {
        name: 'i phone',
        category: 'mobile',
        price: 10000,
        color: 'red',
    }
    return (
        <div>
           
            <button onClick={() => { dispatch(productList({ name: 'pankaj', age: 27 })) }}>get product list</button>


            {myState && myState.productData && myState.productData.productList.map((ele, i, arr) => {
                return (
                    <div key={ele+i} >
                        <h4>{i + 1}</h4>
                        <p>phone : {ele.phone}</p>
                        <p>color : {ele.color}</p>
                        <p>battery : {ele.battery}</p>
                        <p>model : {ele.model}</p>
                        <p>price : {Math.round(ele.price)}</p>
                        <img src={hellCatImg} alt="hellCat" width="170" height="150"></img>
                        <div>
                            <button onClick={() => { dispatch(addToCart(ele)) }}>Add to cart</button> <br />
                            <button onClick={() => { dispatch(removeFromCart(ele)) }}>remove from cart</button> <br />
                            <button onClick={() => { dispatch(clearCart()) }}>clear cart</button><br />
                            <hr/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Main;