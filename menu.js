document.getElementById("burger").addEventListener("click", function(){
    toggleMenu(document.getElementById("burger"))
    toggleMenu(document.getElementById("links"))
    toggleMenu(document.getElementById("roll"))
    toggleMenu(document.getElementById("boden"))
})

function toggleMenu(burger){

    if(burger.classList.contains("open")){
        burger.classList.remove("open")
    } else {
        burger.classList.add("open")
    }
}