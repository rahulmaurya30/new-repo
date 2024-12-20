// var getHubergerIcon = document.getElementById("hamburger-menu");
//     var getHubergerCrossIcon = document.getElementById("hamburger-cross");
//     var getMobileMenu = document.getElementById("mobile-menu");

// import mixitup = require("mixitup");



//     getHubergerIcon.addEventListener("click", function () {
//         console.log("hello");
//         getMobileMenu.style.display = "flex";
//         setTimeout(function () {
//             getMobileMenu.style.transform = "translateX(0%)"; // Slide in the menu
//         }, 50); // Add a small delay for better transition effect
//     });

//     getHubergerCrossIcon.addEventListener("click", function () {
//         console.log("hello");
//         getMobileMenu.style.transform = "translateX(-100%)"; // Slide out the menu
//         setTimeout(function () {
//             getMobileMenu.style.display = "none";
//         }, 300); // Wait for the transition to end before hiding
//     });

//     // Check if screen size changes to desktop view and hide mobile menu
//     window.addEventListener("resize", function () {
//         if (window.innerWidth > 770) {
//             getMobileMenu.style.display = "none";
//         }
//     });

//COUNTER-SECTION IN-VIEW

//  var containerEl = document.querySelector(".portfolio-item");
//     // 2. Passing the configuration object inline
//     //https://www.kunkalabs.com/mixitup/docs/configuration-object/
//     var mixer = mixitup(containerEl, {
//       animation: {
//         effects: "fade translateZ(-100px)",
//         effectsIn: "fade translateY(-100%)",
//         easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
//       }
//     });
//     // fancybox insilaze & options //
//     $("[data-fancybox]").fancybox({
//       loop: true,
//       hash: true,
//       transitionEffect: "slide",
//       /* zoom VS next////////////////////
//       clickContent - i modify the deafult - now when you click on the image you go to the next image - i more like this approach than zoom on desktop (This idea was in the classNameic/first lightbox) */
//       clickContent: function(current, event) {
//         return current.type === "image" ? "next" : false;
//       }
//     });
    

