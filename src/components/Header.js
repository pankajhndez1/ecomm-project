import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { productSearch } from '../redux/ProductActions';


const Header = () => {
  const myState = useSelector((state) => state.cardData);
  const dispatch = useDispatch();
    console.log(myState,'myState after reducer');
    return (
      <div>
        <Link to={"/"}><h1>E comm</h1></Link>
        <input type='text' onChange={(event) => { dispatch (productSearch(event.target.value)) }} />
        <Link to={"/cart"}>
          <div>
          <span>{myState.compoData.length}</span>
          <h2>cart</h2>
        </div>
      </Link>
      </div>
  )
}

export default Header;