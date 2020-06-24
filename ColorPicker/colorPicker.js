const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//store the button to change color
const btn = document.getElementById('btn');
//stores the text color
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    //change color of body
    document.body.style.backgroundColor = colors[randomNumber];
    //change color text
    color.textContent = colors[randomNumber];
})

//returns a random number between 0-3
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}