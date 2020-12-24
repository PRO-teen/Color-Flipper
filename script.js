const colors = ["green", "red", "rgba(133,122.200)",
"#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
let nav = document.querySelector('nav');

btn.addEventListener("click", function (){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    r1 = Math.floor(Math.random()*255)
    r2 = Math.floor(Math.random()*255)
    r3 = Math.floor(Math.random()*255)
    Rcolors = 'rgba(' + r1 + ','+ r2 + ',' + r3 +')'
    Gcolors = 'rgba(' + r2+ ',' + r3 + ',' + r1 +')'

    nav.style.backgroundColor = Gcolors;
    document.body.style.backgroundColor = Rcolors;
    color.textContent = Rcolors;
    color.style.color = Rcolors;

});
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}