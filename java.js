let box1=document.querySelector(".box1");
let box2=document.querySelector(".box2");
let box3=document.querySelector(".box3");

// let count=0;
// let count1=0;

// function sum(count,count1){
//     box2.innerText=count1-count;
// }

box1.addEventListener("click",()=>{
    // count++;
    // sum(count,count1);
    let value=parseInt(box2.innerText);
    value=value-1;
    box2.innerText=value;
})

box3.addEventListener("click",()=>{
    // count1++;
    // sum(count,count1);

    let value=parseInt(box2.innerText);
    value=value+1;
    box2.innerText=value;
})

