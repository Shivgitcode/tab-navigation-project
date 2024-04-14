const items = document.querySelector("ul")
const sidebar = document.querySelector(".sidebar")

const links = [...items.children]
console.log(links)

const collapse = document.querySelector("#collapse")
const collapse2 = document.querySelector("#collapse2")
const main = document.querySelector(".main")
const dash = document.querySelector(".dash")

const hideItems = () => {
    links.forEach(el => {



        if (el.children[1].className.split(" ").includes("hide")) {
            el.children[1].classList.add("unhide")
            el.children[1].classList.remove("hide")
            // el.children[1].classList.remove("hidden")
            // el.classList.remove("tt")
        }
        else {
            el.children[1].classList.add("hide")
            el.children[1].classList.remove("unhide")
            // el.classList.toggle("tt")

        }




    })

    if (collapse.children[1].className.split(" ").includes("hide")) {
        collapse.children[1].classList.add("unhide")
        collapse.children[1].classList.remove("hide")
        console.log(collapse2.children[0])
        // collapse2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-justify"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>'
        collapse2.innerHTML = '<svg svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke - width="2" stroke - linecap="round" stroke - linejoin="round" class="feather feather-align-right" ><line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line></svg >'






    }
    else {
        collapse.children[1].classList.add("hide")
        collapse.children[1].classList.remove("unhide")

        collapse2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-justify"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>'




    }









}

collapse2.addEventListener("click", hideItems)

collapse.addEventListener("click", () => {
    main.classList.toggle("bg-dark")
    dash.classList.toggle("text-white")

})