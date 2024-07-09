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
// Between 0 and 1 (0 = smoother, 1 = instant)
const speed = 0.15;

const tick = () => {
  // (mouse.x - circle.x) calculates the difference between the current x-coordinate of the mouse and the current x-coordinate of the circle.
  // (mouse.x - circle.x) * speed multiplies the difference by the speed factor, which determines how quickly the circle should move towards the mouse position
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;

  // Update circle element's position
  circleElement.style.transform = `translate(${circle.x}px, ${circle.y}px)`;

  // Call function on next frame
  window.requestAnimationFrame(tick);
}

tick();

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
  // navbar ends






// hero section and below
gsap.to(".project-textCard", {
  scaleY: "100%",
  delay: 1.2
})

gsap.to(".specificProject-heroImage", {
  x: 0,
  // ease: "power4.out"
})

// gsap.to(".descriptionBox-white h1", {
//   translateY: 0,
//   opacity: 1,
//   scrollTrigger:{
//     trigger: ".descriptionBox-white h1",
//     start: "top 90%",
//     end: "top 70%",
//     scrub: 0,
//   }
// })
gsap.to(".descriptionBox-white p", {
  translateY: 0,
  opacity: 1,
  scrollTrigger:{
    trigger: ".descriptionBox-white p",
    start: "top 90%",
    end: "top 70%",
    scrub: 0,
  }
})
gsap.to(".descriptionBox-red h3", {
  translateY: 0,
  opacity: 1,
  scrollTrigger:{
    trigger: ".descriptionBox-red-infoBox h3",
    start: "top 90%",
    end: "top 60%",
    scrub: 0,
  }
})
gsap.to(".descriptionBox-red p", {
  translateY: 0,
  opacity: 1,
  scrollTrigger:{
    trigger: ".descriptionBox-red-infoBox p",
    start: "top 90%",
    end: "top 70%",
    scrub: 0,
  }
})

// image description

gsap.to(".imageDescription-left", {
  translateX: 0,
  opacity: 1,
  scrollTrigger:{
    trigger: ".imageDescription-left",
    start: "top 90%",
    end: "top 20%",
    scrub: 0,
  }
})
gsap.to(".imageDescription-right img", {
  translateX: 0,
  opacity: 1,
  scrollTrigger:{
    trigger: ".imageDescription-right img",
    start: "top 90%",
    end: "top 20%",
    scrub: 0,
  }
})
// gsap.to(".imageDescription-right-text h3", {
//   translateX: 0,
//   opacity: 1,
//   scrollTrigger:{
//     trigger: ".imageDescription-right-text h3",
//     start: "top 90%",
//     end: "top 60%",
//     scrub: 0,
//   }
// })
// gsap.to(".imageDescription-right-text p", {
//   translateX: 0,
//   opacity: 1,
//   scrollTrigger:{
//     trigger: ".imageDescription-right-text p",
//     start: "top 90%",
//     end: "top 60%",
//     scrub: 0,
//   }
// })




















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



// Amenities


document.addEventListener("DOMContentLoaded", function () {
  const amenityContainers = document.querySelectorAll(".amenities-list");

  amenityContainers.forEach((container) => {
      const amenities = container.querySelectorAll(".amenity");

      gsap.to(amenities, {
          y: 0,
          opacity: 1,
          scrollTrigger: {
              trigger: container,
              start: "top 70%",
              end: "top 50%",
              scrub: 1,
          },
          stagger: 0.2, // Adjust the stagger value as needed
      });
  });
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



// projects end

  
