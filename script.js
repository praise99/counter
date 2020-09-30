var counter=0

function countInc(){
    counter++;
    document.querySelector(".value").textContent=counter;
}
function countDesc(){
    counter--;
    document.querySelector(".value").textContent=counter;
}
function countreset(){
    counter= 0;
    document.querySelector(".value").textContent=counter;
}



document.querySelector(".btn-desc").addEventListener("click",countDesc)
document.querySelector(".btn-inc").addEventListener("click",countInc)
document.querySelector(".btn-reset").addEventListener("click",countreset)