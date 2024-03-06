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
let projectCards;






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
    duration: 0.6,
    innerHTML: value.toString(),
    roundProps: "innerHTML",
  });
};

// Function to filter project cards based on location
const filterProjectCards = (selectedLocation) => {


  projectCards.forEach((card) => {
    card.classList.remove('show-card');
  });

  projectCards.forEach((card) => {
    const cardLocation = card.getAttribute('data-location');
    if (selectedLocation === 'All' || selectedLocation === cardLocation || selectedLocation === 'LOCATION') {
      card.classList.add('show-card');
    }
  });
};



document.addEventListener("DOMContentLoaded", function () {
  projectCards = document.querySelectorAll('.projectCard');
  const card1 = document.querySelector(".card1");
  const card2 = document.querySelector(".card2");
  const card3 = document.querySelector(".card3");
  const card4 = document.querySelector(".card4");
  const card5 = document.querySelector(".card5");
  const card6 = document.querySelector(".card6");
  const card7 = document.querySelector(".card7");
  const card8 = document.querySelector(".card8");
  const card9 = document.querySelector(".card9");
  const card10 = document.querySelector(".card10");
  const card11 = document.querySelector(".card11");

  card1.addEventListener("mouseenter", function () {
    rollingNumbers("#prj1 h1", 98);
  });
  card1.addEventListener("mouseleave", function () {
    rollingNumbers("#prj1 h1", 0);
  });

  card2.addEventListener("mouseenter", function () {
    rollingNumbers("#prj2 h1", 120);
  });
  card2.addEventListener("mouseleave", function () {
    rollingNumbers("#prj2 h1", 0);
  });
  

  card3.addEventListener("mouseenter", function () {
    rollingNumbers("#prj3 h1", 98);
  });
  card3.addEventListener("mouseleave", function () {
    rollingNumbers("#prj3 h1", 0);
  });

  card4.addEventListener("mouseenter", function () {
    rollingNumbers("#prj4 h1", 98);
  });
  card4.addEventListener("mouseleave", function () {
    rollingNumbers("#prj4 h1", 0);
  });

  card5.addEventListener("mouseenter", function () {
    rollingNumbers("#prj5 h1", 120);
  });
  card5.addEventListener("mouseleave", function () {
    rollingNumbers("#prj5 h1", 0);
  });

  card6.addEventListener("mouseenter", function () {
    rollingNumbers("#prj6 h1", 120);
  });
  card6.addEventListener("mouseleave", function () {
    rollingNumbers("#prj6 h1", 0);
  });

  card7.addEventListener("mouseenter", function () {
    rollingNumbers("#prj7 h1", 120);
  });
  card7.addEventListener("mouseleave", function () {
    rollingNumbers("#prj7 h1", 0);
  });

  card8.addEventListener("mouseenter", function () {
    rollingNumbers("#prj8 h1", 120);
  });
  card8.addEventListener("mouseleave", function () {
    rollingNumbers("#prj8 h1", 0);
  });

  card9.addEventListener("mouseenter", function () {
    rollingNumbers("#prj9 h1", 120);
  });
  card9.addEventListener("mouseleave", function () {
    rollingNumbers("#prj9 h1", 0);
  });

  card10.addEventListener("mouseenter", function () {
    rollingNumbers("#prj10 h1", 120);
  });
  card10.addEventListener("mouseleave", function () {
    rollingNumbers("#prj10 h1", 0);
  });

  card11.addEventListener("mouseenter", function () {
    rollingNumbers("#prj11 h1", 120);
  });
  card11.addEventListener("mouseleave", function () {
    rollingNumbers("#prj11 h1", 0);
  });

  dropdown.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      const selectedLocation = event.target.textContent;
      button.textContent = selectedLocation;
      button.setAttribute('selected', ''); // Add the attribute
      filterProjectCards(selectedLocation);
    }
  });

 

});








