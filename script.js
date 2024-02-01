gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);







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

//Hero
const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const headline = document.querySelector('.headline');
const logo = document.querySelector('.logo');
const menu = document.querySelector('.menu-icon')

const tl = new TimelineMax();
tl.fromTo(hero , 1 , {height: "0%"}, {height: "80%", ease: Power2.easeInOut })

// .fromTo(hero, 0.7 , {width: "100%"}, {width: "90%", ease: Power2.easeInOut})

.fromTo(slider, 0.7, 
    {x: "-100%"}, 
    {x: "0%", ease: Power2.easeInOut}
)
.to(slider, 0.7, 
    {scaleX: 0, ease: Power2.easeInOut}
)
tl.fromTo(headline , 0.5 , {opacity: 0, y: 30 }, {opacity: 1, y: 0}, "1.7")
.fromTo(logo, 0.5, {opacity: 0, y: 30}, {opacity: 1, y: 0}, "1.7")
.fromTo(menu, 0.5, {opacity: 0, y: 30}, {opacity: 1, y: 0}, "1.7");

tl.fromTo(hero , 1 , {height: "80%"}, {height: "100%", ease: Power2.easeInOut }, "2")
.fromTo(hero, 0.7 , {width: "90%"}, {width: "100%", ease: Power2.easeInOut}, "2")

//Hero End

//Goal


//Filler Start

//video
let videobox = document.querySelector(".video-conatainer");
let videoElement = document.querySelector(".video-scroll");

gsap.to(".video-container", {
  // width: "100vh" ,
  translateY: 0,
  scale: 1,
  scrollTrigger: {
    trigger: ".video-container",
    start: "top 130%",
    end: "top 65%",
    scrub: true,
    // pin: true,
    // markers: true,
  }
})



gsap.to(".video-scroll", {
    scrollTrigger: {
      trigger: ".video-scroll",
      start: "top 50%", 
      end: "top -10%", 
      scrub: true,
    //   markers: true,
      onEnter: function() {
        videoElement.play();
      },
      onLeaveBack: function() {
        videoElement.pause();
      },
      onLeave: function() {
        videoElement.pause();
      },
      onEnterBack: function() {
        videoElement.play();
      }
    }
  });





  //marquee1

  let currentScroll = 0;
  let isScrollingDown = true;
  let marquee = document.querySelector(".marquee");

  gsap.to(".marquee", {
    translateY: 0,
    scrollTrigger:{
      trigger: ".marquee",
      start: "top 80%",
      end: "top 20%",
      scrub: 4,
    }
  })

  let tween = gsap.to(".marquee__part", {
    xPercent: -100,
    repeat: -1,
    duration: 20,
    ease: "linear"
  }).totalProgress(0.5);

  gsap.set(".marquee__inner", {xPercent: -50})

  window.addEventListener("scroll", function() {
    if(window.pageYOffset > currentScroll) {
        isScrollingDown = true;
    } else {
        isScrollingDown = false;
    }

    gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
    });

    currentScroll = window.pageYOffset;

  })

//marquee2

let currentScroll2 = 0;
let isScrollingDown2 = false;  //direction to be opposite

let tween2 = gsap.to(".marquee__part2", {
    xPercent: 100,  // This will make it scroll in the opposite direction
    repeat: -1,
    duration: 20,
    ease: "linear"
}).totalProgress(0.5);

gsap.set(".marquee__inner2", {xPercent: -50})  // Setting this to start from middle

window.addEventListener("scroll", function() {
    if(window.pageYOffset > currentScroll2) {
        isScrollingDown2 = true;  // Changing this to the opposite of the original
    } else {
        isScrollingDown2 = false;  // Changing this to the opposite of the original
    }

    gsap.to(tween2, {
        timeScale: isScrollingDown2 ? 1 : -1,  // This will ensure the opposite direction effect
    });

    currentScroll2 = window.pageYOffset;
});





//Achiements

const rollingNumbers = (target, value) => {
  gsap.to(target, {
    duration: 1,
    scrollTrigger: {
      // trigger: "target",
      trigger: ".count1",
      start: "top 80%",
      end: "top 50%",
      scrub: true,
      // markers: true, 
    },
    innerHTML: value.toString(),
    roundProps: "innerHTML",
  });
};

document.addEventListener("DOMContentLoaded", function () {
  rollingNumbers(".count1 span", 98); 
  rollingNumbers(".count2 span", 15); 
  rollingNumbers(".count3 span", 5); 
  rollingNumbers(".count4 span", 98); 
  rollingNumbers(".count5 span", 98); 
  rollingNumbers(".count6 span", 98); 
  
});





//block

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true,
  });
});











//long image

gsap.to(".goals-text", {
  scrollTrigger: {
    trigger: ".goals-text",
    start: "top 10%", // Adjust the start position
    end: "bottom", // Adjust the end position
    pin: true,
    pinSpacing: false, // Set to true if you want to maintain the spacing
    // markers: true, 
  },
});

//image
gsap.to(".ver-img img", {
  y: "-40%",
  scrollTrigger: {
    trigger: ".ver-img",
    start: "top 50%",
    end: "top -80%",
    scrub: 1.5,
    // markers: true,
  }
});
//text
gsap.to(".long-title", {
  y: "150%",
  scrollTrigger: {
    trigger: ".long-title",
    start: "top 40%",
    end: "top -20%",
    scrub: 3,
    // markers: true,
  }
});

//goals-2
$(document).ready(function(){
  $('.goals-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true,
  });
});

gsap.to(".title-2", {
	y: 0, // Bring it to its natural position
	scrollTrigger: {
	  trigger: ".goals-2-text",
	  start: "top 80%", // adjust as needed
	  end: "top 50%", // adjust as needed
	  scrub: 1,
	}
  });

  gsap.to(".para-wrapper-2 .mask-2 span", {
    translateX: 0, // slide up into natural position
    stagger: 0.15, // delay between each line
    scrollTrigger: {
        trigger: ".para-wrapper-2",
        start: "top 80%",
        end: "top 50%",
        scrub: 1.5,
    },
  });








  // picFx
  class BeerSlider {
    constructor(element, { start = "50" } = {}) {
      this.start = parseInt(start)
        ? Math.min(100, Math.max(0, parseInt(start)))
        : 50;
      this.element = element;
      this.revealContainer = this.element.children[1];
      this.revealElement = this.revealContainer.children[0];
      this.range = this.addElement("input", {
        type: "range",
        class: `beer-range`,
        "aria-label": "Percent of revealed content",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": this.start,
        value: this.start,
        min: "0",
        max: "100"
      });
      this.handle = this.addElement("span", {
        class: `beer-handle`
      });
      this.onImagesLoad();
    }
    init() {
      this.element.classList.add(`beer-ready`);
      this.move();
      this.addListeners();
    }
    loadingImg(src) {
      return new Promise((resolve, reject) => {
        if (!src) {
          resolve();
        }
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = src;
      });
    }
    loadedBoth() {
      // const mainImageSrc =
      //   this.element.children[0].src ||
      //   this.element.children[0].getAttribute(`data-beer-src`);
      // const revealImageSrc =
      //   this.revealElement.src ||
      //   this.revealElement.getAttribute(`data-beer-src`);

      const mainImageSrc = 
    this.element.children[0].querySelector('image').getAttribute('xlink:href') ||
    this.element.children[0].getAttribute(`data-beer-src`);

const revealImageSrc = 
    this.revealElement.querySelector('image').getAttribute('xlink:href') ||
    this.revealElement.getAttribute(`data-beer-src`);


      return Promise.all([
        this.loadingImg(mainImageSrc),
        this.loadingImg(revealImageSrc)
      ]);
    }
    onImagesLoad() {
      if (!this.revealElement) {
        return;
      }
      this.loadedBoth().then(
        () => {
          this.init();
        },
        () => {
          console.error("Some errors occurred and images are not loaded.");
        }
      );
    }
    addElement(tag, attributes) {
      const el = document.createElement(tag);
      Object.keys(attributes).forEach((key) => {
        el.setAttribute(key, attributes[key]);
      });
      this.element.appendChild(el);
      return el;
    }
    addListeners() {
      const eventTypes = ["input", "change"];
      eventTypes.forEach((i) => {
        this.range.addEventListener(i, () => {
          this.move();
        });
      });
    }
    move() {
      this.revealContainer.style.setProperty("--width", `${this.range.value}%`);
      this.handle.style.left = `${this.range.value}%`;
      this.range.setAttribute("aria-valuenow", this.range.value);
      if (this.range.value > 55) {
        this.element.classList.add("more");
      } else {
        this.element.classList.remove("more");
        if (this.range.value < 45) {
          this.element.classList.add("less");
        } else {
          this.element.classList.remove("less");
        }
      }
    }
  }
  
  new BeerSlider(document.getElementById("picfx-slider"), { start: 30 });

  // picfx end


  //projects

//   

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

gsap.to(".projects", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 10%", // Adjust the start position
    end: "bottom", // Adjust the end position
    pin: true,
    pinSpacing: true, // Set to true if you want to maintain the spacing
    // markers: true, 
  },
});





// projects end


// footer




