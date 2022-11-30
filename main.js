let form = document.querySelector("form")
let input = document.querySelector("input")

form.addEventListener("submit" , saveTo)

function saveTo(e){


    e.preventDefault()
    let newLi = document.createElement("li")
    newLi.innerText = input.value

    newLi.className = "list-group-item mt-2 border rounded-0"
    let ul = document.querySelector("ul")
    ul.appendChild(newLi)


    form.reset()
}

saveTo()