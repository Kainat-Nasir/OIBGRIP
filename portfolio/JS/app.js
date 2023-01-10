//Responsive Navbar Code Starts

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
    menu.classList.toggle("fa-bars");
    menu.classList.toggle("fa-times");
    nav.classList.toggle("active");
});

window.addEventListener("click", (e) => {
    if(e.target.id != "nav" && e.target.id != "menu"){
        menu.classList.add("fa-bars");
        menu.classList.remove("fa-times");
        nav.classList.remove("active");
    }
});
window.addEventListener("scroll", () => {
    menu.classList.add("fa-bars");
    menu.classList.remove("fa-times");
    nav.classList.remove("active");
});

//Responsive Navbar Code Ends


//Form Validation Code Starts

//Selectors
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const submitError = document.getElementById("submitError"); 


function validateName(){
    var uname = document.getElementById("name").value;
    
    if(uname.length == 0){
        nameError.innerHTML = "Field Is Required*";
        return false;
    }
    else{
        nameError.innerHTML = "";
        return true;
    }    
    
}

function validateEmail(){
    var email = document.getElementById("email").value;
    
    if(email.length == 0){
        emailError.innerHTML = "Field Is Required*";
        return false;
    }
    else if(!email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/)){
        emailError.innerHTML = "Invalid Email*";
        return false;
    }
    else{
        emailError.innerHTML = "";
        return true;
    }  

}

function validatePhone(){
    const phone = document.getElementById("phone").value;
    
    if(phone.length == 0){
        phoneError.innerHTML = "Field Is Required*";
        return false;
    }
    else if(phone.length < 9){
        phoneError.innerHTML = "Number should be greater than 9 digits*";
        return false;
    }
    else{
        phoneError.innerHTML = "";
        return true;
    }
    
}

function validateForm(event){
    var submit = document.getElementById("submit");

    if(!validateName() || !validateEmail() || !validatePhone() ){

        submitError.style.display = "block";
        submitError.innerHTML = "Fix All Errors to continue";
        setTimeout(() => {
            submitError.style.display = "none"
        }, 3500);
        event.preventDefault();
        return false;

        
    }

}





//Form Validation Code Ends