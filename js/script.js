window.onload = function() {
    let preloader = document.getElementById("preload")
    preloader.classList.add('hide-preload')
    setInterval(function() {
        preloader.classList.add('hidden-preload')
    }, 900)
}
const btn = document.querySelector(".menu-button")
const nav = document.querySelector(".nav")

export default btn.addEventListener("click", ()=>{
    nav.classList.toggle("menu-open")
})

if(document.getElementById('count-ico').innerText == "0") {
    document.getElementById('count-ico').style.display = 'none'
}else {
    document.getElementById('count-ico').style.display = 'inherit'
}