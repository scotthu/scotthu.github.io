
for(let i = 1;i<=24;i++){
    document.querySelector(`#p${i}`).addEventListener("click",()=>{document.querySelector(`#m${i}`).play();});
}


