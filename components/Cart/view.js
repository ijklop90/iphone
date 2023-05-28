export default ({id, name, img}) => {
    return document.getElementById("amount")
            .insertAdjacentHTML("beforeend", 
            `<div style="display:none" class="cart-wrapper color-${id}">
            <div>
                <p>name: ${name}</p>
                <p>count: <span id="count-${id}" class="counts-shop">${0}</span></p>
            </div>
            <div><img class="shop-img" src="img/${img}"></div>
            </div>`)
    }