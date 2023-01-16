const add = (first, second) =>{
    return parseInt(first) + parseInt(second);  
}
const multiply = (first, second) =>{
    return first * second; 
}
const getTotalPrice = shoes => {
    console.log(shoes)
    const total = shoes.reduce((previous, current) => previous + current.price, 0)
    console.log(total)
}
export  {add, multiply, getTotalPrice as getTotal};