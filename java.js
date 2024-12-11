let box1=document.querySelector(".box1");
let box2=document.querySelector(".box2");
let box3=document.querySelector(".box3");

box1.addEventListener("click",()=>{
    let value=parseInt(box2.innerText);
    value=value-1;
    box2.innerText=value;
})

box3.addEventListener("click",()=>{
    let value=parseInt(box2.innerText);
    value=value+1;
    box2.innerText=value;
})

