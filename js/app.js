
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections= document.querySelectorAll('section');

const navbar = document.querySelector('#navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createNavItemHTML(id, name){
    const itemHTML = `<a class ="menu__link" data-id="${id}">${name}</a>`;
    return itemHTML;
}
//using the getBounding method to return DOMreact to keep the position
//The Formula of short hand arrow function I attribute it to a repository on getHub
//after vewing so many codes to find the cleanest form of this code
//realative to the View port
function isInViewport (element) {
    const bounding = elemment.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
//creating the navBar with creatElement method linking it with id provided in the HTML file
//and using the appendChild method to add the newelly add sections to the navbar dynammically
//Using the For..Of Method to loop over any Sections added or would be added
// build the nav
function buildNavBar(){
    for(let sec of sections){
    let section = document.createElement('li');
    section.className = 'menu__link';
        section.dataset.nav = sec.id;
        section.innerText = sec.dataset.nav;
        navbar.appendChild(section);
};
};

//I attribute this function the repo of mr-FED landing page master due to the easy and clear code 
// Add class 'active' to section when near top of viewport
function setActiveClass(){
    for (let i=0; i < sections.length; i++){
        if (isInViewport(sections[i])){
            sections[i].classList.add("your-active-class");
        }else{
            sections[i].classList.remove("your-active-class");
        }
    }
}
//to trigger the scroll function used the eventlistener "click" to target 
//the navBar elements and make it scroll by using the .scrollintoview method
// Scroll to anchor ID using scrollTO event
function scrollToSection() {
    navbar.addEventListener('click', function (event) {
        const clicked = document.querySelector('#' + event.target.dataset.nav)
        clicked.scrollIntoView();
    });
};

/**
 * End Main Functions
 * Begin Events
 * 
*/
document.addEventListener('scroll', function(){
    setActiveClass();
});
const navBarList = document.getElementById('navbar__list')
navBarList.addEventListener('click', function(event){
    scrollToElement(event)
})
// Build menu 
buildNavBar()
// Scroll to section on link click
scrollToSection();
// Set sections as active


