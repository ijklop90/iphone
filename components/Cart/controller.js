import view from "./view.js";
import { id } from "../../global.js"
import { Shop } from "./model.js"

const styleCart = id("amount").style
const urlData = '/iphone/components/cart.json'

//Toggle cart phones
id("cart").addEventListener("click", ()=> {
    if(styleCart.display == "none"){
        styleCart.display = "inherit"
    }else{
        styleCart.display = "none"
    }
})

//get cart phones
export const cartData = async () => {
    await fetch(urlData)
    .then(res=>res.json())
    .then(cart=>
        cart.forEach(el => {
            let shop = new Shop(el)
            view(shop.getPhone())
            // console.log(shop.getPhone())
        })
        )
}
