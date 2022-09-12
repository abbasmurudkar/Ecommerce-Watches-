
const password = document.getElementById('Password')
const Confirm = document.getElementById('C-Password')
function showHide(){
if(password.type === 'password'){
password.setAttribute("type","text")
document.getElementById('icons').className="fa-solid fa-unlock"
}
else{
password.setAttribute("type","password")
document.getElementById('icons').className="fa-solid fa-lock"

}
}
function ConfirmPassword(){
    if(Confirm.type==="password"){
        Confirm.setAttribute("type","text")
        document.getElementById('icon').className="fa-solid fa-unlock"
    }
    else{
        Confirm.setAttribute("type","password")
        document.getElementById('icon').className="fa-solid fa-lock"
        }
}
function login(){
    alert("Successfully login");
}
function Register(){
    alert("Successfully Register")
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
