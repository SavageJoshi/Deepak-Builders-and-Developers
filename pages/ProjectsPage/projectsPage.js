console.log(
  `%cDesigned, Developed & Tested with ♥ by`,
  'background-color: #000022; padding: 5px; color: #ffffff;'
);
console.log(
  `%cSarvesh Joshi - https://www.linkedin.com/in/sarvesh-joshi-95644022a/`,
  'background-color: #000022; padding: 5px; color: #ffffff; text-decoration: underline;'
);
console.log(
  `%cChirag Nikumbh - https://www.linkedin.com/in/work-chiragnikumbh1/`,
  'background-color: #000022; padding: 5px; color: #ffffff; text-decoration: underline;'
);
console.log(
  `%cAjinkya Pawar - https://www.linkedin.com/in/-ajinkya-pawar-/`,
  'background-color: #000022; padding: 5px; color: #ffffff; text-decoration: underline;'
);


gsap.registerPlugin(ScrollTrigger);

const circleElement = document.querySelector('.circle');

const mouse = { x: 0, y: 0 },
      circle = { x: 0, y: 0 };

window.addEventListener('mousemove', e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

// Speed factor
const speed = 0.15;

const tick = () => {
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;

  circleElement.style.transform = `translate(${circle.x}px, ${circle.y}px)`;

  window.requestAnimationFrame(tick);
}

tick();

const app = (() => {
    let navContainer;
    let menu;
    let menuItems;
    const filterButton = document.querySelector('.location-dropdown');

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
        if(element.classList.contains(stringClass)) {
            element.classList.remove(stringClass);
            filterButton.style.display = 'block';
        } else {
            element.classList.add(stringClass);
            filterButton.style.display = 'none';
        }
    }

    init();
})();

const dropdown = document.querySelector('.location-dropdown');
const button = dropdown.querySelector('button');
let projectCards;

if (window.matchMedia("(min-width: 768px)").matches){
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
}

const rollingNumbers = (target, value) => {
  gsap.to(target, {
    duration: 0.6,
    innerHTML: value.toString(),
    roundProps: "innerHTML",
  });
};

const filterProjectCards = (selectedLocation) => {
  projectCards.forEach((card) => {
    card.classList.remove('show-card');
  });

  projectCards.forEach((card) => {
    const cardLocation = card.getAttribute('data-location');
    if (selectedLocation === 'Show all' || selectedLocation === cardLocation || selectedLocation === 'LOCATION') {
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
  const card12 = document.querySelector(".card12");
  const card13 = document.querySelector(".card13");
  const card14 = document.querySelector(".card14");

  card1.addEventListener("mouseenter", function () {
    rollingNumbers("#prj1 h1", 99);
  });
  card1.addEventListener("mouseleave", function () {
    rollingNumbers("#prj1 h1", 0);
  });

  card2.addEventListener("mouseenter", function () {
    rollingNumbers("#prj2 h1", 640);
  });
  card2.addEventListener("mouseleave", function () {
    rollingNumbers("#prj2 h1", 0);
  });

  card3.addEventListener("mouseenter", function () {
    rollingNumbers("#prj3 h1", 493);
  });
  card3.addEventListener("mouseleave", function () {
    rollingNumbers("#prj3 h1", 0);
  });

  card4.addEventListener("mouseenter", function () {
    rollingNumbers("#prj4 h1", 500);
  });
  card4.addEventListener("mouseleave", function () {
    rollingNumbers("#prj4 h1", 0);
  });

  card5.addEventListener("mouseenter", function () {
    rollingNumbers("#prj5 h1", 306);
  });
  card5.addEventListener("mouseleave", function () {
    rollingNumbers("#prj5 h1", 0);
  });

  card6.addEventListener("mouseenter", function () {
    rollingNumbers("#prj6 h1", 214);
  });
  card6.addEventListener("mouseleave", function () {
    rollingNumbers("#prj6 h1", 0);
  });

  card7.addEventListener("mouseenter", function () {
    rollingNumbers("#prj7 h1", 267);
  });
  card7.addEventListener("mouseleave", function () {
    rollingNumbers("#prj7 h1", 0);
  });

  card8.addEventListener("mouseenter", function () {
    rollingNumbers("#prj8 h1", 306);
  });
  card8.addEventListener("mouseleave", function () {
    rollingNumbers("#prj8 h1", 0);
  });

  card9.addEventListener("mouseenter", function () {
    rollingNumbers("#prj9 h1", 156);
  });
  card9.addEventListener("mouseleave", function () {
    rollingNumbers("#prj9 h1", 0);
  });

  card10.addEventListener("mouseenter", function () {
    rollingNumbers("#prj10 h1", 34);
  });
  card10.addEventListener("mouseleave", function () {
    rollingNumbers("#prj10 h1", 0);
  });

  card11.addEventListener("mouseenter", function () {
    rollingNumbers("#prj11 h1", 201);
  });
  card11.addEventListener("mouseleave", function () {
    rollingNumbers("#prj11 h1", 0);
  });

  card12.addEventListener("mouseenter", function () {
    rollingNumbers("#prj12 h1", 103);
  });
  card12.addEventListener("mouseleave", function () {
    rollingNumbers("#prj12 h1", 0);
  });

  card13.addEventListener("mouseenter", function () {
    rollingNumbers("#prj13 h1", 0);
  });
  card13.addEventListener("mouseleave", function () {
    rollingNumbers("#prj13 h1", 0);
  });

  card14.addEventListener("mouseenter", function () {
    rollingNumbers("#prj14 h1", 115);
  });
  card14.addEventListener("mouseleave", function () {
    rollingNumbers("#prj14 h1", 0);
  });

  dropdown.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      filterProjectCards(event.target.textContent);
    }
  });
});
