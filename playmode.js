let generateBtn = document.querySelector('#generate')
generateBtn.addEventListener('click',generateAns)
let showAns = document.querySelector('#playAns')
showAns.addEventListener('click',()=>{
    document.querySelector("#ansImg").src = `./${A}.jpg`
});

let A = 0

function generateAns(){
    let ans = getRandom(1,24)
    document.querySelector(`#m${ans}`).play();
    A = ans
}

function getRandom(min,max){
    return Math.floor(Math.random()*max)+min;
};