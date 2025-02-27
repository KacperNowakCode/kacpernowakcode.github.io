function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function switchToPage(link) {
  const blackbox = document.querySelector(".blackbox");
  blackbox.style.opacity = "0"; // Ensure starting opacity is 0
  blackbox.style.transition = "opacity 0.5s ease"; // Transition opacity
  
  // Delay to allow the transition effect
  setTimeout(() => {
    blackbox.style.opacity = "1";
  }, 10); // Small delay to trigger transition

  setTimeout(() => {
    window.location.href = link;
  }, 500);

  console.log("Switching to Polish page...");
}
