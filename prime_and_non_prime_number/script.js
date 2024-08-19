// const numberInput = document.getElementById("numberInput")

// const button = document.getElementById("checkButton")


// const resultMessage = document.getElementById("resultMessage")



// function check_prime(number) {
//     let prime_flag = true
//     let result = ""
//     for (let i = 2; i < number - 1; i++) {
//         if (number % i === 0) {
//             prime_flag = false
//             break

//         }
//     }
//     if (prime_flag === true) {
//         result = "The number is prime number " + number
//     }
//     else if (prime_flag === false) {

//         result = "The number is not a prime number " + number
//     }
//     return result
// }





// button.addEventListener("click", function() {
//     let number = parseInt(numberInput.value)
//     result =check_prime(number)
//     resultMessage.textContent = result
// })






















document.addEventListener("DOMContentLoaded", function () {
    const numberInput = document.getElementById("numberInput")
    const checkButton = document.getElementById("checkButton")
    const resultMessage = document.getElementById("resultMessage")

    checkButton.addEventListener("click", function () {
        const number = parseInt(numberInput.value)
        // console.log(number)
        let result
        if (isNaN(number)) {
            resultMessage.textContent = "Please enter a valid number";
            resultMessage.style.color = "red";
            return;
        }


        if (isPrime(number)) {
            resultMessage.textContent = `${number} is a prime number`;
            resultMessage.style.color = "green";

        }else{
            resultMessage.textContent = `${number} is not a prime number`;
            resultMessage.style.color = "red";
        }

    })


    function isPrime(number){
        
        if(number <= 1) return false;
        if(number <= 3) return true;

        if(number%2===0 || number%3===0) return false;

        return true;
    }

})

    
