// const value  = document.getElementById("value")

// const decrease = document.getElementById("decrease")

// const reset = document.getElementById("reset")

// const increase = document.getElementById("increase")

// value.textContent = 10


// reset.addEventListener("click", ()=>{
//     let currentValue = parseInt(value.textContent)  
//     value.textContent = 0
// })


// increase.addEventListener("click", ()=>{
//     let currentValue = parseInt(value.textContent)
//     value.textContent = currentValue + 1
// })


// decrease.addEventListener("click", ()=>{
//     let currentValue = parseInt(value.textContent)
//     if(currentValue > 0){
//         value.textContent = currentValue - 1
//     }
// })



console.log("hello")

let count = 0;

const value = document.getElementById("value");

const btns = document.querySelectorAll(".btn");

console.log(btns)

btns.forEach(btn => {
    console.log(btn.innerHTML);
    btn.addEventListener("click", e => {
        let elementId = e.target.id;
        console.log(elementId)
        if (elementId == 'decrease') {
            count--;

        } else if (elementId == 'reset') {
            count = 0;
        } else {
            count++;
        }


        value.textContent = count;
        value.style.color =count>0 ? "green" : count<0 ? "red " : "black";
    })
}
);

