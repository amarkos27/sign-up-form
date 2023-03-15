let inputs = document.querySelectorAll('input');
let submit = document.querySelector('button');

submit.addEventListener('click', () => {
    checkPasswords();
    for(input of inputs){
        if(!input.validity.valid){
            if(!input.classList.contains('invalid')){
                input.classList.add('invalid');
                input.value = '';
            }
        }else{
            input.classList.remove('invalid');
        }
    }
});

function checkPasswords(){
    let password = document.querySelector('#pwd');
    let confirm = document.querySelector('#confirm');

    if(password.value !== confirm.value){
        password.setCustomValidity("Passwords must match");
        password.reportValidity();
        confirm.setCustomValidity("false");
    }else{
        password.setCustomValidity("");
        confirm.setCustomValidity("");
    }
}