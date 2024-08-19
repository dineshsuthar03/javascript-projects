const password = document.getElementById('password');

const eyeicon = document.getElementById('eyeicon');


// eyeicon.addEventListener('click', () => {
//     if (password.type === 'password') {
//         password.type = 'text';
//         eyeicon.classList.remove('fa-eye');
//         eyeicon.classList.add('fa-eye-slash');
//     }else if(password.type === 'text') {
//         password.type = 'password';
//         eyeicon.classList.remove('fa-eye-slash');
//         eyeicon.classList.add('fa-eye');
//     }
// })


eyeicon.onclick = function(){
    if (password.type==='password'){
        password.type = 'text';
        eyeicon.classList.remove('fa-eye-slash');
        eyeicon.classList.add('fa-eye');
    }else{
        password.type = 'password';
        eyeicon.classList.remove('fa-eye');
        eyeicon.classList.add('fa-eye-slash');
    }

};