gsap.registerPlugin(ScrollTrigger);


//navbar
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





//Image Gallery

document.addEventListener("DOMContentLoaded", function () {

    // Function to open modal
    function openModal(imgSrc) {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <img src="${imgSrc}" alt="Full-screen Image">
            </div>
        `;
        document.body.appendChild(modal);

        const closeBtn = modal.querySelector(".close-btn");
        closeBtn.addEventListener("click", closeModal);
        modal.addEventListener("click", closeModal);

        function closeModal() {
            // Check if the modal is a child of the body before removing
            if (document.body.contains(modal)) {
                document.body.removeChild(modal);
            }
        }
    }

    // Event listener for opening modal on image click
    document.querySelectorAll(".imageGallery-images img").forEach((img) => {
        img.addEventListener("click", () => openModal(img.src));
    });

    // Event listener for scroll animation
    // window.addEventListener("scroll", handleScrollAnimation);
});


// project Section 

let isDown = false;
let startX;
let scrollLeft;

const projectslider = document.querySelector('.projects');

projectslider.addEventListener('mouseenter', () => {
  document.body.style.overflow = 'hidden';
});

projectslider.addEventListener('mouseleave', () => {
  document.body.style.overflow = 'auto';
});

projectslider.addEventListener('wheel', function(e) {
  const maxScrollLeft = projectslider.scrollWidth - projectslider.clientWidth;

  // If scrolling down and we're at the end of the horizontal scroll
  if (e.deltaY > 0 && projectslider.scrollLeft >= maxScrollLeft - 2) {
      return; // allow default behavior
  }

  // If scrolling up and we're at the start of the horizontal scroll
  if (e.deltaY < 0 && projectslider.scrollLeft <= 0) {
      return; // allow default behavior
  }

  e.preventDefault();
  gsap.to(projectslider, {
      duration: 1,
      scrollTo: { x: projectslider.scrollLeft + e.deltaY * 3.7 }
  });

}, { passive: false });

projectslider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
  scrollLeft = projectslider.scrollLeft;
});

projectslider.addEventListener('mouseleave', () => {
  isDown = false;
});

projectslider.addEventListener('mouseup', () => {
  isDown = false;
});

projectslider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  const walk = x - startX;
  projectslider.scrollLeft = scrollLeft - walk;
});

// gsap.to(".projects-section-wrapper", {
//   scrollTrigger: {
//     trigger: ".projects-section-wrapper",
//     start: "top top", // Adjust the start position
//     end: "bottom", // Adjust the end position
//     pin: true,
//     pinSpacing: true, // Set to true if you want to maintain the spacing
//     // markers: true, 
//   },
// });





// projects end

  
