const navbar = document.getElementById("navbar")

export default navbar.insertAdjacentHTML('beforeend', 
`<nav class="nav">
    <button type="button" class="menu-button">
        <span class="button-line"></span>
        <span class="button-line"></span>
        <span class="button-line"></span>
        <span class="button-line"></span>
    </button>
    <ul class="menu">
        <li class="menu-item">
            <a href="#feature" class="menu-link">Что нового</a>
        </li>
        <li class="menu-item">
            <a href="#choise-color" class="menu-link">Цвет</a>
        </li>
        <li class="menu-item">
            <a href="#buy" class="menu-link">Заказать</a>
        </li>
    </ul>

    <a class="logo"> <img src="img/logo.svg" class="logo-img" alt=""></a>

    <a href="tel:+79999999999" class="phone">+7(999)-999-99-99</a>
    <div id="cart">
        <button id="btn-cart" href="/">
            <i class="fa-solid fa-cart-shopping" style="color: #cecece;"></i>
            <span style="display: none" id="count-ico">0</span>
        </button>
        <div id="amount" style="display: inherit;"></div>
    </div>
</nav>`)