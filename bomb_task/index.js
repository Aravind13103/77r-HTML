let contaniner = document.getElementById("block")
let text = document.getElementById("text")
let image = document.getElementById("image")

let count = 10
let interval = setInterval(() => {

    text.innerText = `Bomb timer left: ${count}`;
    if(count <= 3){
        text.style.color = "red"
    }
    if(count == 0){
        clearInterval(interval);
        image.src = "https://i1.sndcdn.com/artworks-000445354188-550x3o-t500x500.jpg"
    }
    count--;
}, 1000);
