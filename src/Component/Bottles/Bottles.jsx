import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLocalStorage, getStoredCart, removeFromLocalStorage } from "../../Utilitis/localStorage";
import Cart from "../Cartt/Cart";

const Bottles = () => {

    const [bottles , setBottles] = useState([]);
    const [cart , setCart] = useState([]);

    
    useEffect(()=>
    {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])


    // Load cart from local storage
    useEffect(()=>{
        if(bottles.length > 0)
        {
            const storedCart = getStoredCart();

            const saveCart = [];
            for (const id of storedCart) {
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle)
                {
                    saveCart.push(bottle);
                }
            }
            setCart(saveCart);
        }
    },[bottles])
    // Load cart from local storage end



    // handle add to cart
    const handleAddToCart = (bottle)=>
    {
        const newCart = [...cart , bottle];
        setCart(newCart);
        addToLocalStorage(bottle.id)
    }
    // handle add to cart end

    
    // handle remove to cart 
    const handleRemoveFromCart = (id)=>
    {
        const remainingCart = cart.filter(bottle => {
            return bottle.id !== id;
        });
        setCart(remainingCart);
        removeFromLocalStorage(id);
    }
    // handle remove to cart end


    return (
        <div>
            <h3>Bottles Available: {bottles.length}</h3>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="grid">
                {
                    bottles.map(bottle => <Bottle bottle={bottle} key={bottle.id} handleAddToCart={handleAddToCart}></Bottle>)
                }
                
            </div> 
        </div>  
    );
};

export default Bottles;