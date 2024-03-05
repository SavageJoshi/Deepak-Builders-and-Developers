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




// Project Cards

// horizontal scroll
let isDown = false;
let startX;
let scrollLeft;

const projectSlider = document.querySelector('.projectscard-container');

projectSlider.addEventListener('mouseenter', () => {
  document.body.style.overflow = 'hidden';
});

projectSlider.addEventListener('mouseleave', () => {
  document.body.style.overflow = 'auto';
});

projectSlider.addEventListener('wheel', function (e) {
  e.preventDefault();
  gsap.to(projectSlider, {
    duration: 1,
    scrollTo: { x: projectSlider.scrollLeft + e.deltaY * 5 },
  });
}, { passive: false });

projectSlider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
  scrollLeft = projectSlider.scrollLeft;
});

projectSlider.addEventListener('mouseleave', () => {
  isDown = false;
});

projectSlider.addEventListener('mouseup', () => {
  isDown = false;
});

projectSlider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  const walk = x - startX;
  projectSlider.scrollLeft = scrollLeft - walk;
});

// card effects

// Function to roll numbers using GSAP
const rollingNumbers = (target, value) => {
  gsap.to(target, {
    duration: 0.8,
    innerHTML: value.toString(),
    roundProps: "innerHTML",
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const projectCard = document.querySelector(".projectCard");
  const card2 = document.querySelector(".card2");
  const overlayNumber = document.querySelector(".overlay-number");

  projectCard.addEventListener("mouseenter", function () {
    rollingNumbers("#prj1 h1", 98);
  });
  projectCard.addEventListener("mouseleave", function () {
    rollingNumbers("#prj1 h1", 0);
  });

  card2.addEventListener("mouseenter", function () {
    rollingNumbers("#prj2 h1", 120);
  });
  card2.addEventListener("mouseleave", function () {
    rollingNumbers("#prj2 h1", 0);
  });
});







