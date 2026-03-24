let table = document.createElement("table")
document.body.appendChild(table)
table.style.border = "2px white solid"
table.style.textAlign = "center"
table.style.margin = "40px auto"
table.style.color = "white"
// table.style.fontWeight = "bold"


//Row 1
let tr1 = document.createElement("tr")

//Row 1 Data
let tr1d1 = document.createElement("td")
tr1d1.innerText = " IN ఇండియా 🏆"
tr1d1.colSpan = 3



let tr1d2 = document.createElement("td")
tr1d2.innerText = "NZ న్యూజీలాండ్"
tr1d2.colSpan = 3

tr1.append(tr1d1, tr1d2)

//Row 2
let tr2 = document.createElement("tr");

let tr2d1 = document.createElement("td")
tr2d1.innerHTML = "నరేంద్ర మోడీ స్టేడియమ్, అహ్మదాబాద్"
tr2d1.colSpan = 6
tr2d1.style.color = "white"
tr2d1.style.backgroundColor = "darkblue"
tr2.appendChild(tr2d1)

//Row 3
let tr3 = document.createElement("tr")

let tr3d1 = document.createElement("td")
let tr3d2 = document.createElement("td")
tr3d1.innerHTML = "🏏 255-5"
tr3d2.innerHTML = "159 🏏"
tr3d1.colSpan = 3
tr3d2.colSpan = 3
tr3d1.style.backgroundColor = "hotpink"
tr3d2.style.backgroundColor = "hotpink"
tr3.append(tr3d1, tr3d2)


//Row 4
let tr4 = document.createElement("tr")

let data4 = ["శాంసన్", 89, 46, "సీఫర్ట్", 46, 46]
data4.forEach(element => {
    let data = document.createElement("td")
    data.innerText = element
    tr4.appendChild(data)
    // tr4.style.backgroundColor = "white"
});

// let tr4d1 = document.createElement("td")
// let tr4d2 = document.createElement("td")
// let tr4d3 = document.createElement("td")
// let tr4d4 = document.createElement("td")
// let tr4d5 = document.createElement("td")
// let tr4d6 = document.createElement("td")
// tr4d1.innerHTML = "శాంసన్"
// tr4d2.innerHTML = "89"
// tr4d3.innerHTML = "46"
// tr4d4.innerHTML = "సీఫర్ట్"
// tr4d5.innerHTML = "46"
// tr4d6.innerHTML = "46"

// tr4.append(tr4d1,tr4d2,tr4d3,tr4d4,tr4d5,tr4d6)

//Row 5
let tr5 = document.createElement("tr")

let data5 = ["కిషన్", 54, 25, "శాంట్నర్", 43, 35]
data5.forEach(element => {
    let data = document.createElement("td")
    data.innerText = element
    tr5.appendChild(data)
});

// let tr5d1 = document.createElement("td")
// let tr5d2 = document.createElement("td")
// let tr5d3 = document.createElement("td")
// let tr5d4 = document.createElement("td")
// let tr5d5 = document.createElement("td")
// let tr5d6 = document.createElement("td")

// tr5d1.innerHTML = "కిషన్"
// tr5d2.innerHTML = "54"
// tr5d3.innerHTML = "46"
// tr5d4.innerHTML = "శాంట్నర్"
// tr5d5.innerHTML = "46"
// tr5d6.innerHTML = "46"


// tr5.append(tr5d1,tr5d2,tr5d3,tr5d4,tr5d5,tr5d6)

//Row 6

let tr6 = document.createElement("tr")

let data6 = ["అభిషేక్", 52, 22, "మిచెల్", 17, 7]
data6.forEach(element => {
    let data = document.createElement("td")
    data.innerText = element
    tr6.appendChild(data)
});

// let tr6d1 = document.createElement("td")
// let tr6d2 = document.createElement("td")
// let tr6d3 = document.createElement("td")
// let tr6d4 = document.createElement("td")
// let tr6d5 = document.createElement("td")
// let tr6d6 = document.createElement("td")

// tr6d1.innerHTML = "అభిషేక్"
// tr6d2.innerHTML = "54"
// tr6d3.innerHTML = "46"
// tr6d4.innerHTML = "మిచెల్"
// tr6d5.innerHTML = "46"
// tr6d6.innerHTML = "46"

// tr6.append(tr6d1,tr6d2,tr6d3,tr6d4,tr6d5,tr6d6)

//Row 7
let tr7 = document.createElement("tr")

let data7 = ["దూబే", "26*", 8, "అలెన్", 9, 7]
data7.forEach(element => {
    let data = document.createElement("td")
    data.innerText = element
    tr7.appendChild(data)
});

// let tr7d1 = document.createElement("td")
// let tr7d2 = document.createElement("td")
// let tr7d3 = document.createElement("td")
// let tr7d4 = document.createElement("td")
// let tr7d5 = document.createElement("td")
// let tr7d6 = document.createElement("td")

// tr7d1.innerHTML = "దూబే"
// tr7d2.innerHTML = "54"
// tr7d3.innerHTML = "46"
// tr7d4.innerHTML = "అలెన్"
// tr7d5.innerHTML = "46"
// tr7d6.innerHTML = "46"

// tr7.append(tr7d1,tr7d2,tr7d3,tr7d4,tr7d5,tr7d6)


//Row 8
let tr8 = document.createElement("tr")

//Row 8 data
let tr8d2 = document.createElement("td")
let tr8d1 = document.createElement("td")
tr8d1.innerHTML = "⚾ 20 ఓవర్లు"
tr8d2.innerHTML = "19 ఓవర్లు ⚾"
tr8d1.colSpan = 3
tr8d2.colSpan = 3
tr8d1.style.backgroundColor = "hotpink"
tr8d2.style.backgroundColor = "hotpink"

tr8.append(tr8d1, tr8d2)

// Row 9
let tr9 = document.createElement("tr")

let data9 = ["నీషం", "2-46", "4", "బుమ్రా", "4-15", "4"]
data9.forEach(element => {
    let data = document.createElement("td")
    data.innerText = element
    tr9.appendChild(data)
});

// let tr9d1 = document.createElement("td")
// let tr9d2 = document.createElement("td")
// let tr9d3 = document.createElement("td")
// let tr9d4 = document.createElement("td")
// let tr9d5 = document.createElement("td")
// let tr9d6 = document.createElement("td")

// tr9d1.innerHTML = "నీషం"
// tr9d2.innerHTML = "54"
// tr9d3.innerHTML = "46"
// tr9d4.innerHTML = "బుమ్రా"
// tr9d5.innerHTML = "46"
// tr9d6.innerHTML = "46"

// tr9.append(tr9d1,tr9d2,tr9d3,tr9d4,tr9d5,tr9d6)


// Row 10
let tr10 = document.createElement("tr")

let data10 = ["రవీంద్ర", "1-32", "2", "అక్షర్", "3-27", "3"]
data10.forEach(element => {
    let data = document.createElement("td")
    data.innerText = element
    tr10.appendChild(data)
})

// let tr10d1 = document.createElement("td")
// let tr10d2 = document.createElement("td")
// let tr10d3 = document.createElement("td")
// let tr10d4 = document.createElement("td")
// let tr10d5 = document.createElement("td")
// let tr10d6 = document.createElement("td")

// tr10d1.innerHTML = "రవీంద్ర"
// tr10d2.innerHTML = "54"
// tr10d3.innerHTML = "46"
// tr10d4.innerHTML = "అక్షర్"
// tr10d5.innerHTML = "46"
// tr10d6.innerHTML = "46"

// tr10.append(tr10d1,tr10d2,tr10d3,tr10d4,tr10d5,tr10d6)

// Row 11
let tr11 = document.createElement("tr")

let data11 = ["హెన్రీ", "1-49", "4", "అభిషేక్", "1-5", "1"]
data11.forEach(element => {
    let data = document.createElement("td")
    data.innerText = element
    tr11.appendChild(data)
})


// let tr11d1 = document.createElement("td")
// let tr11d2 = document.createElement("td")
// let tr11d3 = document.createElement("td")
// let tr11d4 = document.createElement("td")
// let tr11d5 = document.createElement("td")
// let tr11d6 = document.createElement("td")

// tr11d1.innerHTML = "హెన్రీ"
// tr11d2.innerHTML = "54"
// tr11d3.innerHTML = "46"
// tr11d4.innerHTML = "అభిషేక్"
// tr11d5.innerHTML = "46"
// tr11d6.innerHTML = "46"
// tr11.append(tr11d1,tr11d2,tr11d3,tr11d4,tr11d5,tr11d6)


// Row 12
let tr12 = document.createElement("tr")

let data12 = ["--", "--", "--", "హార్దిక్", "1-36", "4"]
data12.forEach(element => {
    let data = document.createElement("td")
    data.innerText = element
    tr12.appendChild(data)
})


// let tr12d1 = document.createElement("td")
// let tr12d2 = document.createElement("td")
// let tr12d3 = document.createElement("td")
// let tr12d4 = document.createElement("td")
// let tr12d5 = document.createElement("td")
// let tr12d6 = document.createElement("td")

// tr12d1.innerHTML = "--"
// tr12d2.innerHTML = "--"
// tr12d3.innerHTML = "--"
// tr12d4.innerHTML = "హార్దిక్"
// tr12d5.innerHTML = "46"
// tr12d6.innerHTML = "46"
// tr12.append(tr12d1,tr12d2,tr12d3,tr12d4,tr12d5,tr12d6)

//Row 13
let tr13 = document.createElement("tr");
let tr13d1 = document.createElement("td")
tr13d1.innerHTML = "నరేంద్ర మోడీ స్టేడియమ్, అహ్మదాబాద్"
tr13d1.colSpan = 6
tr13d1.style.backgroundColor = "blueviolet"


table.append(tr1, tr2, tr3, tr4, tr5, tr6, tr7, tr8, tr9, tr10, tr11, tr12, tr13)


// Table styling
table.style.borderCollapse = "collapse"

// Apply border and padding to every cell
let cells = table.querySelectorAll("td")

cells.forEach(cell => {
    cell.style.border = "1px solid white"
    cell.style.padding = "8px 12px"
})














