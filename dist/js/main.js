// DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Menu Toggle
let showMenu = false;
const openMenu = () => {
  menuBtn.classList.add("close");
  menuNav.classList.add("show");
  showMenu = true;
};
const closeMenu = () => {
  menuBtn.classList.remove("close");
  menuNav.classList.remove("show");
  showMenu = false;
};

const toggleMenu = () => {
  if (!showMenu) {
    openMenu();
  } else {
    closeMenu();
  }
};
menuBtn.addEventListener("click", toggleMenu);
navItems.forEach(item => item.addEventListener("click", closeMenu));

// Menu Navigation
var section = document.querySelectorAll(".anchor");
var sections = {};
var i = 0;

Array.prototype.forEach.call(section, function(e) {
  sections[e.id] = e.offsetTop;
});

window.onscroll = function() {
  var scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  for (i in sections) {
    if (sections[i] <= scrollPosition) {
      document.querySelector(".current").classList.remove("current");
      document.querySelector("a[href*=" + i + "]").classList.add("current");
    }
  }
};
// const changeSectionIndicator = e => {
//   navItems.forEach(item => item.classList.remove("current"));
//   e.currentTarget.classList.add("current");
// };

// navItems.forEach(item =>
//   item.addEventListener("click", changeSectionIndicator)
// );

// Show/Hide scroll arrow
function scrollArrow() {
  let scrollHeight = document.body.scrollHeight;
  let clientHeight = document.body.clientHeight;
  if (scrollHeight > clientHeight) {
    let windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height = scrollHeight - clientHeight;
    const arrow = document.getElementById("scroll-arrow");
    let opacity = 1 - windowScroll / height;
    if (opacity > 0.3) {
      arrow.style.opacity = opacity;
    } else {
      arrow.style.opacity = 0;
    }
  }
}

scrollArrow();
window.onscroll = function() {
  scrollArrow();
};
