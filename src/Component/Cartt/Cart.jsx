import PropTypes from 'prop-types'
import './Cart.css'

const Cart = ({cart , handleRemoveFromCart}) => {
    return (
        <div>
            <h3>Cart : {cart.length}</h3>
            {
                cart.map(bottle => {
                    return   <div key={bottle.id}>
                    <img className="b-img"  src={bottle.img}></img>
                    <button onClick={()=>handleRemoveFromCart(bottle.id)}>Remove</button>
                </div>
                }
             )
            }
        </div>
    );
};


Cart.prototype = {
    cart : PropTypes.array.isRequired,
    handleRemoveFromCart : PropTypes.func.isRequired
}

export default Cart;