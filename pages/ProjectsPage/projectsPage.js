gsap.registerPlugin(ScrollTrigger);





// Navbar


const app = (() => {
    let navContainer;
    let menu;
    let menuItems;
  
    const init = () => {
        navContainer = document.querySelector('.nav-container');
        menu = document.querySelector('.menu-icon');
        menuItems = document.querySelectorAll('.nav__list-item');
  
        applyListeners();
    }
  
    const applyListeners = () => {
        menu.addEventListener('click', () => toggleClass(navContainer, 'nav-active'));
    }
  
    const toggleClass = (element, stringClass) => {
        if(element.classList.contains(stringClass))
            element.classList.remove(stringClass);
        else
            element.classList.add(stringClass);
    }
  
    init();
  })();




//   Location Button

const dropdown = document.querySelector('.location-dropdown');
const button = dropdown.querySelector('button');

dropdown.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    button.textContent = event.target.textContent;
    button.setAttribute('selected', ''); // Add the attribute
  }
});