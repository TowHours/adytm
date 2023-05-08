const headerToggle = document.getElementById('header-toggle'),
    main = document.getElementById('main'),
    navClose = document.getElementById('navbar-close')

if(headerToggle){
    headerToggle.addEventListener('click', () =>{
        main.classList.add('show-menu')
    })
}

// To hide the menu
if(navClose){
    navClose.addEventListener('click', () =>{
        main.classList.remove('show-menu')
    })
}



// When we click on each navbar_link, the menu disappears
const navLink = document.querySelectorAll('.navbar_link')

function linkAction(){
    const main = document.getElementById('main')
    main.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

let CircularBar = document.querySelector(".circular-bar");
let PercentValue = document.querySelector(".percent");

let InitialValue = 0;
let finalValue = 70;
let speed = 10;

let timer = setInterval(() => {
    InitialValue += 1;

    CircularBar.style.background = `conic-gradient(var(--container-color-dark) ${InitialValue/100 * 360}deg, var(--container-color) 0deg)`;
    PercentValue.innerHTML = InitialValue+"%";

    if(InitialValue >= finalValue){
        clearInterval(timer);
    }
}, speed)