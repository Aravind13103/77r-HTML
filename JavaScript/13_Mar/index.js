// let cont = document.createElement("div")
// document.body.appendChild(cont)
// let arr = ["raju", "ranveer", "swathi", "gopi", "thanmay", "yamuna"]

// // for Each
// arr.forEach(element => {
//     let p = document.createElement("p")
//     cont.appendChild(p)
//     p.innerText = element
//     console.log(element);
// });


// //for_of
// for (const element of arr) {
//     let p = document.createElement("p")
//     cont.appendChild(p)
//     p.innerText = element
//     console.log(element);
// }


// //for_in
// for (const data in arr) {
//     let p = document.createElement("p")
//     cont.appendChild(p)
//     p.innerText = arr[data]
// }


const students = [
    {
        id: 10,
        name: "Meena",
        age: 21,
        course: "Full Stack",
        marks: 87
    }
]


let container = document.createElement("div")
container.id = "main"
document.body.append(container)
students.forEach(obj => {
    let p =document.createElement("p")
    container.appendChild(p)
    p.innerHTML = `
    <h3> ID: ${obj.id}</h3>
    <h4> Name: ${obj.name}</h4>
    <h3> Course: ${obj.course}</h3>
    `
    container.append(p)
});
