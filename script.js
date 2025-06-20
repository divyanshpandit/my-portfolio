const typedText = "Welcome to my Pythonic Portfolio...";
let index = 0;
const speed = 100;

function type() {
  if(index < typedText.length){
    document.getElementById("typed").innerHTML += typedText.charAt(index);
    index++;
    setTimeout(type, speed);
  }
}
window.onload = type;

const sections = document.querySelectorAll("section");
function checkVisibility() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      section.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);
