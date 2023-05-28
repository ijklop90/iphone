export default ({id, name, img, count}) =>{
    return document.getElementById("phone")
        .insertAdjacentHTML('beforeend', 
            `<li id="phone-${id}" class="color-item">
                <img src="img/${img}" alt="">
                <h3>${name}</h3>
                <div class="counts" id="count-${id}">
                    <i id="plus-${id}"  class="fa-solid fa-plus"></i>
                    <span>${count}</span>
                    <i id="minus-${id}" class="fa-solid fa-minus"></i>
                </div>
            </li>`)
    }