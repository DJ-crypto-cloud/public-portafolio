window.onload = function () {
window.scrollTo(0,0);
};

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar a");
const themeBtn = document.getElementById("theme-btn");

/* THEME MODE */

// comprobar tema guardado
if(localStorage.getItem("theme") === "light"){
document.body.classList.add("light-mode");
themeBtn.textContent = "☀️";
}else{
themeBtn.textContent = "🌙";
}

// cambiar tema
themeBtn.addEventListener("click", () => {

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
localStorage.setItem("theme","light");
themeBtn.textContent = "☀️";
}else{
localStorage.setItem("theme","dark");
themeBtn.textContent = "🌙";
}

});


/* NAV ACTIVE SCROLL */

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;
const sectionHeight = section.offsetHeight;

if (pageYOffset >= sectionTop - 200 && pageYOffset < sectionTop + sectionHeight - 200) {
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});