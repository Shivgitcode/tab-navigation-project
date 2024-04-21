const items = document.querySelector("ul")
const sidebar = document.querySelector(".sidebar")

const links = [...items.children]
console.log(links)

const collapse = document.querySelector("#collapse")
const collapse2 = document.querySelector("#collapse2")
const main = document.querySelector(".main")
const dash = document.querySelector(".dash")


links.forEach((link) => {
    console.log(link)
    link.addEventListener("click", (e) => {
        links.map((link) => {
            if (link.children[0].classList[1] === e.currentTarget.children[0].classList[1]) {
                link.classList.add("active")
                link.children[0].classList.add("icons")
            }
            else {
                link.classList.remove("active")
                link.children[0].classList.remove("icons")
            }
        })
        console.log(link.children[0].classList[1])



        console.log(e.currentTarget.children[0].classList[1])
    })
})




collapse.addEventListener("click", () => {
    main.classList.toggle("bg-dark")
    dash.classList.toggle("text-white")

})