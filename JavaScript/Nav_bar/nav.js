let container = document.createElement("div")
document.body.append(container)
container.id = "main"
let table = document.createElement("table")
container.appendChild(table)
table.setAttribute('border','10px')
table.setAttribute('gap','10px')
let tr = document.createElement("tr")
table.appendChild(tr)
let nav = ["Home", "About", "Projects", "Contacts"]

nav.forEach(ele => {
    let td = document.createElement("td")
    tr.appendChild(td)
    td.innerHTML = ele
})
