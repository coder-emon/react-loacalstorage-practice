// use localStorage to manage cart data 
const addedToDb = (id) =>{
    // added shopping cart
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)

    }

    // added quantity
    const quantity = shoppingCart[id]
    if(quantity){
        console.log("Already Exists")
        const newQuantity = quantity +1;
        shoppingCart[id] = newQuantity;

        // localStorage.setItem('id', newQuantity)
    }else{
        shoppingCart[id] = 1;

        // console.log('New Item')
        // localStorage.setItem('id', 1)
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}
const deleteItem = (id)=>{
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
       const shoppingCart = JSON.parse(storedCart)
    if(id in shoppingCart){
        delete shoppingCart[id]
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    } 
    }
    
}
// const allItemDelete = ()=> {
//     localStorage.clear
// }
export {
 addedToDb,
 deleteItem
}