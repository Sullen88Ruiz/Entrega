const hamburguer = document.querySelector(".hamburguer")
const menu = document.querySelector(".menu-navegacion")

//console.log(menu)
//console.log(hamburguer)
menu.addEventListener("click",()=>{
    menu.classList.toggle(spread)
})


window.addEventListener("click", e=>{
    if(menu.classList.contains("spread")
    && e.target != menu &&  e.target != menu ){
       
        

    }
})

