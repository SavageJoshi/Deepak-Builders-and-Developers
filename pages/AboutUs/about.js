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




//   Our History



  const historyTexts = document.querySelectorAll(".history-text");

  historyTexts.forEach((text) => {
      gsap.to(text.querySelector("h1"), {
          x: 0,
          opacity: 1,
          scrollTrigger: {
              trigger: text,
              start: "top 70%",
              end: "top 50%",
              scrub: 1,
          },
      });
  
      gsap.to(text.querySelector("p"), {
          y: 0,
          opacity: 1,
        //   lineHeight: 1,
          scrollTrigger: {
              trigger: text,
              start: "top 70%",
              end: "top 50%",
              scrub: 1,
          },
      });
  });

gsap.to(".history-left", {
    scrollTrigger: {
      trigger: ".history-left",
      start: "top",
      end: "bottom bottom",
      pin: true,
    //   pinSpacing: true,
    },
}); 

// Animation for the vertical line
gsap.to(".history-left-line", {
    height: "600px", // Set height to the container's height
    scrollTrigger: {
        trigger: ".history-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
    },
});




// Logo Ticker Starts

jQuery(document).ready(function($){
    $('.ticker-row').slick({
        slidesToShow: 6,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed:3000,
        cssEase: 'linear',
        pauseOnHover: true,
        // rtl: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
            }
        }]
    })
})
jQuery(document).ready(function($){
    $('.ticker-row-2').slick({
        slidesToShow: 6,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed:3000,
        cssEase: 'linear',
        pauseOnHover: true,
        rtl: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
            }
        }]
    })
})





//accordion Box

// document.addEventListener("DOMContentLoaded", function () {
//     const accordionBoxes = document.querySelectorAll(".accordion-box");
  
//     accordionBoxes.forEach((box) => {
//       const text = box.querySelector(".accordion-text");
//       const toggleBtn = box.querySelector(".toggle-btn");
  
//       toggleBtn.addEventListener("click", function () {
//         text.classList.toggle("open");
//         toggleBtn.style.transform = text.classList.contains("open") ? "rotate(45deg)" : "rotate(0deg)";
//       });
//     });
//   });

  document.addEventListener("DOMContentLoaded", function () {
    const accordionBoxes = document.querySelectorAll(".accordion-box");
  
    accordionBoxes.forEach((box) => {
        const text = box.querySelector(".accordion-text");
        const toggleBtn = box.querySelector(".toggle-btn");
  
        toggleBtn.addEventListener("click", function () {
            text.classList.toggle("open");
            toggleBtn.style.transform = text.classList.contains("open") ? "rotate(45deg)" : "rotate(0deg)";
            
            // Toggle the -webkit-line-clamp property
            text.style.webkitLineClamp = text.classList.contains("open") ? "unset" : "5"; // Set to 'unset' to show all lines
            box.style.minHeight = text.classList.contains("open") ? "auto" : "20rem";
        });
    });
});
  