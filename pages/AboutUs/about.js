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
    height: "550px", // Set height to the container's height
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
        speed:1200,
        cssEase: 'linear',
        pauseOnHover: false,
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
        speed:1200,
        cssEase: 'linear',
        pauseOnHover: false,
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

//   document.addEventListener("DOMContentLoaded", function () {
//     const accordionBoxes = document.querySelectorAll(".accordion-box");
  
//     accordionBoxes.forEach((box) => {
//         const text = box.querySelector(".accordion-text");
//         const toggleBtn = box.querySelector(".toggle-btn");
  
//         toggleBtn.addEventListener("click", function () {
//             text.classList.toggle("open");
//             toggleBtn.style.transform = text.classList.contains("open") ? "rotate(45deg)" : "rotate(0deg)";
            
//             // Toggle the -webkit-line-clamp property
//             text.style.webkitLineClamp = text.classList.contains("open") ? "unset" : "5"; // Set to 'unset' to show all lines

//             if (window.innerWidth > 768){
//                 box.style.minHeight = text.classList.contains("open") ? "auto" : "20rem";
//             }else{
//                 box.style.minHeight = "auto";
//             }
//         });
//     });
// });
  



// Proud Moment Start

document.addEventListener("DOMContentLoaded", function () {
    const proudMomentsImages = document.querySelector(".proudMoments-images");
    const showMoreButton = document.querySelector(".proudMoments-button");

    // Set the number of initially visible rows
    const initialRows = 2;
    let totalRows = Math.ceil(proudMomentsImages.children.length / 3); // Assuming each row has 3 columns

    // Hide additional rows initially
    for (let i = initialRows; i < totalRows; i++) {
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            if (proudMomentsImages.children[index]) {
                proudMomentsImages.children[index].style.display = "none";
            }
        }
    }

    showMoreButton.addEventListener("click", function () {
        const additionalRows = totalRows - initialRows;

        // Toggle visibility of additional rows
        for (let i = initialRows; i < totalRows; i++) {
            for (let j = 0; j < 3; j++) {
                const index = i * 3 + j;
                if (proudMomentsImages.children[index]) {
                    proudMomentsImages.children[index].style.display =
                        proudMomentsImages.children[index].style.display === "none" ? "grid" : "none";
                }
            }
        }

        // Toggle button text
        showMoreButton.textContent =
            showMoreButton.textContent === "Show More" ? "Show Less" : "Show More";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const proudMomentsImages = document.querySelector(".proudMoments-images-2");
    const showMoreButton = document.querySelector(".proudMoments-button-2");

    // Set the number of initially visible rows
    const initialRows = 2;
    let totalRows = Math.ceil(proudMomentsImages.children.length / 3); // Assuming each row has 3 columns

    // Hide additional rows initially
    for (let i = initialRows; i < totalRows; i++) {
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            if (proudMomentsImages.children[index]) {
                proudMomentsImages.children[index].style.display = "none";
            }
        }
    }

    showMoreButton.addEventListener("click", function () {
        const additionalRows = totalRows - initialRows;

        // Toggle visibility of additional rows
        for (let i = initialRows; i < totalRows; i++) {
            for (let j = 0; j < 3; j++) {
                const index = i * 3 + j;
                if (proudMomentsImages.children[index]) {
                    proudMomentsImages.children[index].style.display =
                        proudMomentsImages.children[index].style.display === "none" ? "grid" : "none";
                }
            }
        }

        // Toggle button text
        showMoreButton.textContent =
            showMoreButton.textContent === "Show More" ? "Show Less" : "Show More";
    });
});



// members section

gsap.to(".members-title",{
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".members-title",
      start: "top 80%", // adjust as needed
      end: "top 50%", // adjust as needed
      scrub: 1,
    }
  })

gsap.to(".member-card",{
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".member-card",
      start: "top 80%", // adjust as needed
      end: "top 50%", // adjust as needed
      scrub: 1,
    }
  })

  //services

  gsap.to(".services-title h1",{
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".services-title",
      start: "top 80%", // adjust as needed
      end: "top 60%", // adjust as needed
      scrub: 1,
    }
  })

gsap.to(".services-container",{
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".services-container",
      start: "top 80%", // adjust as needed
      end: "top 60%", // adjust as needed
      scrub: 1,
    }
  })