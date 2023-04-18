import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import hellCatImg from './hellCat.jpg';


function Cart() {
    const myState = useSelector((state) => { return state.cardData.compoData })
    console.log(myState, 'myState');
    let amount = 0;
    return (
        <div >
            <Link to={"/"}>Product List</Link>
            <h1>Cart Page</h1>
            {myState.map((ele, i, arr) => {
                amount = amount + ele.price;
                return (
                    <div key={ele + i} >
                        {i === (myState.length - 1) ? <h1>total price : {Math.round(amount)}</h1> : <p></p>}
                    </div>
                )
            })}
            {myState.map((ele, i, arr) => {
                return (
                    <div key={ele + i} >
                        <h4>{i + 1}</h4>
                        <p>phone : {ele.phone}</p>
                        <p>color : {ele.color}</p>
                        <p>battery : {ele.battery}</p>
                        <p>model : {ele.model}</p>
                        <p>price : {Math.round(ele.price)}</p>
                        <img src={hellCatImg} alt="hellCat" width="170" height="150"></img>
                    </div>
                )
            })}

          
        </div>
    );
}

export default Cart;
