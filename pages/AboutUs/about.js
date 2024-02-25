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
