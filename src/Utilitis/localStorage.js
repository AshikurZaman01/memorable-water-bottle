const getStoredCart =()=>
{
   const storedCartString = localStorage.getItem('cart');
   if(storedCartString)
   {
    return JSON.parse(storedCartString);
   }
   return [];
}

const saveCartToLocalStorage = (cart)=>
{
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart' , cartStringify);
}

const addToLocalStorage = (id)=>
{
    const cart = getStoredCart();
    cart.push(id);

    saveCartToLocalStorage(cart);
}

const removeFromLocalStorage = (id)=>
{
    const cart = getStoredCart();
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLocalStorage(remaining);
}

export{addToLocalStorage , getStoredCart , removeFromLocalStorage }