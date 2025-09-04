// //Simple Countdown Script
// function countdownTimer() {
//   const eventDate = new Date("2025-12-03T00:00:00").getTime();
//   const now = new Date().getTime();
//   const distance = eventDate - now;

//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.getElementById("countdown").innerHTML = `${days}days:${hours}hrs:${minutes}mins:${seconds}secs`;
// }
// setInterval(countdownTimer, 1000);

// // Footer Date section
// let dates = new Date();
// document.getElementById('years').innerHTML = dates.getFullYear();


// script.js

// Countdown Timer
function startCountdown() {
  const countdownEl = document.getElementById("countdown");
  const targetDate = new Date("2025-12-31T23:59:59").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      countdownEl.innerText = "00:00:00:00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((distance / (1000 * 60)) % 60);
    const secs = Math.floor((distance / 1000) % 60);

    countdownEl.innerText = 
      `${days.toString().padStart(2, '0')}:` +
      `${hours.toString().padStart(2, '0')}:` +
      `${mins.toString().padStart(2, '0')}:` +
      `${secs.toString().padStart(2, '0')}`;
  }

  setInterval(updateCountdown, 1000);
}
startCountdown();


// Animate on Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll("section, .gallery img, .bff-gallery img, .footer-top, .footer-links, .socials").forEach(el => {
  observer.observe(el);
});


// Page Load Animations (Hero content)
window.addEventListener("load", () => {
  document.querySelector(".hero-content").classList.add("fade-in");
});


// Footer year auto update
document.getElementById("years").textContent = new Date().getFullYear();
