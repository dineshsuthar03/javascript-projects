const passwordBox =document.getElementById("password")
const button = document.getElementById("btn")
const copyButton = document.getElementById("copy")

const generatePassword  = ()=>{
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

    let password = "";
    const lengthofPassword = 8;
    for(let i=0;i<lengthofPassword;i++){
        password+= chars.charAt(Math.floor(Math.random()*chars.length))   //5
        // console.log(password)
    }
    passwordBox.value = password;


}

button.addEventListener("click", generatePassword);

copyButton.addEventListener("click",()=>{
    const passwordCopy = passwordBox.value.trim();
    if (!passwordCopy){
        alert("No password to copy! Please generate a password first !")
        return;
    }

    navigator.clipboard.writeText(passwordCopy)
    .then(()=>{
        alert("Passowrd copied to clipboard!")
    })
})

// copyButton.addEventListener("click", ()=>{
//         navigator.clipboard.writeText(passwordBox.value.trim())
//        .then(()=> {
//         alert   ("Passowrd copied to clipboard!")
//     })
// })