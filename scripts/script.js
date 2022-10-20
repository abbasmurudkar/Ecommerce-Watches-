
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
  const form = document.getElementById('form')
  const email= document.querySelector('#gmail').value
  const password = document.querySelector('#password').value
  const cspassword = document.querySelector('#cs-password').value
      form = form.addEventListener('submit',(e)=>{
        let message = []
       if(email === '' || email == null){
        message.push("Error Mail Cannot Be Blank")
       }
       if(password != cspassword){
        message.push("Error Confirm Passowrd and Password should be same")
       }
       if(password<=4)
       {
        message.push("Password should be Greater than length of 6")
       }
       if(message.length > 0){
        e.preventDefault()
        document.getElementById('Message').innerHTML = message.join(',<br> ')
       }
      })
}
function Register(){
 const name = document.querySelector('#name').value;

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


