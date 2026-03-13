// // 1.Create a List and Append to the Body
// //  Create an unordered list (<ul>) with five list items (<li>), 
// // each containing unique text. Append the <ul> to the <body>.

// let table = document.createElement("table")
// document.body.appendChild(table)


// // Hard-Coded
// // let row1 = document.createElement("tr")
// // let row2 = document.createElement("tr")
// // let row3 = document.createElement("tr")

// // table.appendChild(row1)
// // table.appendChild(row2)
// // table.appendChild(row3)

// // // row1
// // let row1data1 = document.createElement("td")
// // let row1data2 = document.createElement("td")
// // let row1data3 = document.createElement("td")

// // row1.appendChild(row1data1)
// // row1.appendChild(row1data2)
// // row1.appendChild(row1data3)

// // row1data1.innerText = 10
// // row1data2.innerText = 9
// // row1data3.innerText = 8

// // // row2
// // let row2data1 = document.createElement("td")
// // let row2data2 = document.createElement("td")
// // let row2data3 = document.createElement("td")

// // row2.appendChild(row2data1)
// // row2.appendChild(row2data2)
// // row2.appendChild(row2data3)

// // row2data1.innerText = 11
// // row2data2.innerText = 12
// // row2data3.innerText = 13

// // // row3
// // let row3data1 = document.createElement("td")
// // let row3data2 = document.createElement("td")
// // let row3data3 = document.createElement("td")

// // row3.appendChild(row3data1)
// // row3.appendChild(row3data2)
// // row3.appendChild(row3data3)

// // row3data1.innerText = 69
// // row3data2.innerText = 69
// // row3data3.innerText = 69

// // console.log(table);


// // Optimal
// let count = 0
// for (let i = 0; i < 3; i++) {
//     let row = document.createElement("tr")
//     table.appendChild(row)
//     for (let j = 0; j < 3; j++) {
//         let data = document.createElement("td")
//         row.appendChild(data)
//         data.innerText = i + j
//         // count++
//     }
// }

// let div = document.createElement("div")
// document.body.appendChild(div)

// //Hard-Coded
// // let buttons = document.createElement("button")
// // div.appendChild(buttons)
// // buttons.innerText = "buttons"
// // console.log(div);


// // Optimal
// for (let i = 0; i <= 4; i++) {
//     let buttons = document.createElement("button")
//     div.appendChild(buttons)
//     buttons.innerText = "buttons"
// }
// console.log(div);


// // 2. Create a Paragraph Inside a Div and Append to the Body
// //  Create a <div> element, and inside it, add a <p> element with some 
// //  descriptive text. Append the <div> to the <body>.

// let conatiner = document.createElement("div")
// document.body.appendChild(conatiner)

// let para = document.createElement("p")
// conatiner.appendChild(para)

// para.innerText = "Hello Java Script!! Shall we meet tonight??🥹"

// // 3. Build a Nested Structure and Append to the Body
// // Create a <div> containing a <h1> heading and a <p> paragraph, 
// // both with distinct text. Append the <div> to the <body>.

// let div_ele = document.createElement("div")
// document.body.appendChild(div_ele)

// let heading = document.createElement("h1")
// let par = document.createElement("p")

// div_ele.appendChild(heading)
// div_ele.appendChild(par)

// heading.innerText = "I am a Bit Busyy being Upgrading!"
// par.innerText = "You cannot lie to me!!😭 Your last upgrade was in june 2025!!"

// let tab = document.createElement("table")
// document.body.appendChild(tab)

// let cont = document.createElement("div")
// div.setAttribute = "name"


