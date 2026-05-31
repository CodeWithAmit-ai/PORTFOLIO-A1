new Typed("#typing", {

    strings: [
        "Frontend Developer",
        "CSE Student",
        "Web Designer",
        "Programmer"
    ],

    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 1500,
    loop: true

});
particlesJS("particles-js", {

    particles: {

        number: {
            value: 80
        },

        color: {
            value: "#38bdf8"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#38bdf8",

            opacity: 0.3,

            width: 1
        },

        move: {

            enable: true,

            speed: 2
        }
    }
});
const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

hamburger.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});
const cursor =
document.querySelector(".cursor");

document.addEventListener(
"mousemove",

(e)=>{

cursor.style.left =
e.clientX + "px";

cursor.style.top =
e.clientY + "px";

});
ScrollReveal().reveal(

'.hero-left',

{
    delay:300,
    distance:'80px',
    origin:'left',
    duration:1500
}

);

ScrollReveal().reveal(

'.hero-right',

{
    delay:500,
    distance:'80px',
    origin:'right',
    duration:1500
}

);

ScrollReveal().reveal(

'.section-title',

{
    delay:200,
    distance:'50px',
    origin:'top'
}

);
const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter = ()=>{

const target =
+counter.getAttribute(
"data-target"
);

const current =
+counter.innerText;

const increment =
target / 100;

if(current < target){

counter.innerText =
Math.ceil(
current + increment
);

setTimeout(
updateCounter,
20
);

}

else{

counter.innerText =
target;

}

};

updateCounter();

});
ScrollReveal().reveal(

'.about-container',

{
    delay:300,
    distance:'60px',
    origin:'bottom'
}

);

ScrollReveal().reveal(

'.skill',

{
    interval:200,
    distance:'40px',
    origin:'left'
}

);

ScrollReveal().reveal(

'.project-card',

{
    interval:200,
    distance:'50px',
    origin:'bottom'
}

);
const topBtn =
document.getElementById("topBtn");

window.addEventListener(
"scroll",

()=>{

if(window.scrollY > 300){

topBtn.style.display =
"block";

}

else{

topBtn.style.display =
"none";

}

});

topBtn.addEventListener(
"click",

()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});
const toggle =
document.getElementById(
"themeToggle"
);

toggle.addEventListener(
"click",

()=>{

document.body.classList.toggle(
"light-mode"
);

});
window.addEventListener(

"load",

()=>{

document.getElementById(
"loader"
).style.display = "none";

});
const sections =
document.querySelectorAll(
"section"
);

const navItems =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener(
"scroll",

()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop;

if(scrollY >= sectionTop - 200){

current = section.id;

}

});

navItems.forEach(link=>{

link.classList.remove(
"active"
);

if(

link.getAttribute(
"href"
) === "#" + current

){

link.classList.add(
"active"
);

}

});

});
const filterBtns =
document.querySelectorAll(
".filter-btn"
);

const cards =
document.querySelectorAll(
".project-card"
);

filterBtns.forEach(btn=>{

btn.addEventListener(
"click",

()=>{

const filter =
btn.dataset.filter;

cards.forEach(card=>{

if(
filter === "all" ||

card.dataset.category === filter
){

card.style.display =
"block";

}

else{

card.style.display =
"none";

}

});

});

});
AOS.init({
duration:1200
});
document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height / 2) / 15;
        const rotateY = (x - rect.width / 2) / 15;

        card.style.transform =
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});
emailjs.init("Pqs-eshVgXWXnKZX-");

const form =
document.getElementById("contact-form");

const status =
document.getElementById("form-status");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    status.innerText = "Sending...";

    emailjs.sendForm(
        "service_vo8nq9y",
        "template_u2lh7gt",
        form
    )

    .then(()=>{

        status.innerText =
        "✅ Message Sent Successfully";

        status.style.color =
        "#38bdf8";

        form.reset();

    })

    .catch(()=>{

        status.innerText =
        "❌ Failed To Send";

        status.style.color =
        "red";

    });

});