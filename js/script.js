const humberger = document.querySelector(".humberger");
const navMenu = document.querySelector(".menu");

humberger.addEventListener("click", () =>{
humberger.classList.toggle("active");
navMenu.classList.toggle("active");
});

document.querySelectorAll(".list-item").forEach(n => n.addEventListener("click", () =>{
    humberger.classList.remove("active");
    navMenu.classList.remove("active");
}))