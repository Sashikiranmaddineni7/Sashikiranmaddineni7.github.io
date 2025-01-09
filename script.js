// Smooth scrolling functionality for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Check if the clicked link is the home icon
    if (this.getAttribute('href') === '#home') {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Scroll to the other sections
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Make the floating navigation draggable
const floatingNav = document.getElementById("floating-nav");

let isDragging = false;
let offsetX, offsetY;

floatingNav.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - floatingNav.getBoundingClientRect().left;
  offsetY = e.clientY - floatingNav.getBoundingClientRect().top;
  floatingNav.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;
    floatingNav.style.left = `${newX}px`;
    floatingNav.style.top = `${newY}px`;
    floatingNav.style.transform = "none"; // Disable transform to prevent repositioning
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  floatingNav.style.cursor = "grab";
});
