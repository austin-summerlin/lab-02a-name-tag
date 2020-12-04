const button = document.getElementById("button");
const input = document.getElementById("input");
const inner = document.getElementById("Inner");
const pink = document.getElementById("pink");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const outer = document.getElementById("Outer");
const cats = document.getElementById("cats")
const body = document.getElementById("body")

button.addEventListener('click', () => {
    // whatever code i put in the cool zone will happen on click
    inner.textContent = input.value;
    input.value = '';
});
pink.addEventListener('click', () => {
    // whatever code i put in the cool zone will happen on click
    outer.style.backgroundColor = "pink"
});

blue.addEventListener('click', () => {
    // whatever code i put in the cool zone will happen on click
    outer.style.backgroundColor = "lightblue"
});
green.addEventListener('click', () => {
    // whatever code i put in the cool zone will happen on click
    outer.style.backgroundColor = "lightgreen"
});
cats.addEventListener('click', () => {
    // whatever code i put in the cool zone will happen on click
    body.style.backgroundImage = URL;"http://www.placekitten.com/2000/2000"
});