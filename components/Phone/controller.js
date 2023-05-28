import {id} from '../../global.js'
import  { secondCount}  from "../../local-server/middlewares.js";
import {Phone} from './model.js'
import { wrapOperation } from '../../local-server/middlewares.js';
import view from './view.js';
import {data} from '../../local-server/data.js'

const urlData = '/components/cart.json'
const phoneList = ["Silver", "Deep Purple", "Gold", "Space Black"]

const addToCart = async () => {
    return await fetch(urlData).then(res=>res.json())
}

const increase = (data)=> {
    return data.innerText = Number(data.innerText)+1
}
const decrease = (data)=> {
    return data.innerText = Number(data.innerText)-1
}  

const render = async (template) => {
        const list = phoneList
        list.forEach((el, idx)=>{
            let phones = new Phone({id:idx, name:el, img:idx+1, count:0})
            template(phones.getInfo())
        })

}

const counts = () => {
    const c = document.getElementsByClassName("counts").length
    const arr =[]
    for(let i = 0; i<c; i++) {
        arr.push(document.getElementById(`count-${i}`)) 
    }
    return arr
}




export const counter = async ( html, func) => {
    render(html)
    const arr = counts()
        arr.forEach((el, idx)=> {
            wrapOperation(el, idx, func)
        })
}


export const calculate = async (operator, value, queue)=> {
    let popup = id("count-ico")
    await addToCart()
    let secondValue = secondCount()[queue]
    let secondPhone = Array.from(document.getElementsByClassName("cart-wrapper"))[queue]
    const allNumbers = [value, secondValue, popup]

    operator.addEventListener("click", ()=> {
        if(operator.className ==  "fa-solid fa-plus"){
            allNumbers.forEach(el=> {
                increase(el)
            })
            if(popup.innerText != "0"){
                popup.style.display = "inherit"
            }
        }else {
            if(value.innerText!="0"){
                allNumbers.forEach(el=> {
                    decrease(el)
                })
            }
            if(popup.innerText == "0"){
                popup.style.display = "none"
            }
        }
        if(secondValue.innerText=="0") {
            secondPhone.style.display = "none"
        }else{
            secondPhone.style.display = "flex"
        }
    })
}
