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



  
