const nav = document.querySelector ('.nav');
const navBtn = document.querySelector ('.burger-btn');
const allNavItems = document.querySelectorAll ('.nav__item')
const navBtnBars = document.querySelector ('.burger-btn__bars')
const allSections = document.querySelectorAll ('.section')
const footerYear = document.querySelector ('.footer__year')
 


const handleNav = () => {
    nav.classList.toggle('nav--active')

    navBtnBars.classList.remove('black-bars-color');

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })

    handleNavItemsAnimation ();
    // tak właśnie wywołujemy sobie funckje
}
// tutaj mamy fukcje, która odpowiada za przełączanie navigacji ( po kliknięciu burger ikony) i tak samo funkcje, która wyłącza widzenie  nawigacji, kiedy naciśniemy którykolwiek przycisk nav__item ( czyli wyspy, oferty, opinie, kontakt)
// toggle to taki przełącznik, coś włącza i wyłącza 

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
        // to item.style.animatioDelay powoduje opóźnienie odkrywania się linków przy wejściu w nav
        // a delay time powiększa opóźnienie tego wysuwania, żeby stworzyć efejt harmonijki  
    })
}

const handleObserver = () => {
    const currentSection = window.scrollY;

    allSections.forEach(section => {

        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.add('black-bars-color')
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.remove('black-bars-color')
        }
        // wykrzyknik po else if dodaje nam negacje na opisaną funkcje
    })
}



const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
    // i tą funkcją powodujemy to, że w naszym footerze JS sam zmienia nam date na aktualną  
}

handleCurrentYear ();
navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleObserver)