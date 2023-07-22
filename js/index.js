const regex = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);


const email = document.getElementById("email");
const form = document.querySelector("form");
const error = document.querySelector(".error");
const input = document.querySelector("input");
const mainContainer = document.querySelector(".container");
const container = document.querySelector('.inner_container');
const successContainer = document.querySelector('.success_container');
const dismissBtn = document.querySelector('.dismissBtn');
const userEmail = document.querySelector('.userEmail');
const footer = document.querySelector('.attribution');
function onSubmit(e) {
    e.preventDefault();
    if(regex.test(email.value)){
        error.style.display = "none"
        container.style.display = "none";
        successContainer.style.display = "block"
        userEmail.innerHTML = input.value;
        mainContainer.classList.add("extra_container")
        footer.classList.add("extra_footer");
        input.value = ""
        input.classList.remove("errorInput")
    }else{
        error.style.display = "block"
        input.classList.add("errorInput")
       
    }
}

form.addEventListener('submit', onSubmit);


function onDismiss() {
    container.style.display = "flex";        
    successContainer.style.display = "none"
     mainContainer.classList.remove("extra_container")
     footer.classList.remove("extra_footer");
}
dismissBtn.addEventListener('click', onDismiss)


