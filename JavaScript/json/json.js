async function f1(){
    let a = await fetch("https://dummyjson.com/quotes")
    let data1 = await a.json();
    console.log(data1);
}
async function f2() {
    let b = await fetch("https://dummyjson.com/todos")
    let data2 = await b.json();
    console.log(data2);
}
async function f3() {
    let c = await fetch("https://jsonplaceholder.typicode.com/photos")
    let data3 = await c.json();
    console.log(data3);
}
async function f4() {
    let d = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    let data4 = await d.json();
    console.log(data4);
}
console.log(f1());
console.log(f2());
console.log(f3());
console.log(f4());