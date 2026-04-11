// ==============================
// EVC SLIDES NAVIGATION JS
// ==============================

const TOTAL_SLIDES = 15;
const container = document.getElementById("presentationContainer");
const indicatorContainer = document.getElementById("slideIndicator");
const keyHint = document.getElementById("keyHint");

// ===== Build indicator dots =====
for (let i = 1; i <= TOTAL_SLIDES; i++) {
  const dot = document.createElement("button");
  dot.className = "indicator-dot";
  dot.title = "Slide " + i;
  dot.addEventListener("click", () => goToSlide(i));
  indicatorContainer.appendChild(dot);
}

// ===== Go to slide =====
function goToSlide(n) {
  const target = document.getElementById("slide-" + n);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

// ===== Update active indicator on scroll =====
let currentSlide = 1;

function updateIndicator() {
  const slideHeight = window.innerHeight;
  const scrollTop = container.scrollTop;
  const newSlide = Math.round(scrollTop / slideHeight) + 1;
  if (newSlide !== currentSlide) {
    currentSlide = Math.max(1, Math.min(TOTAL_SLIDES, newSlide));
    document.querySelectorAll(".indicator-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i + 1 === currentSlide);
    });
  }
}

container.addEventListener("scroll", updateIndicator, { passive: true });

// ===== Keyboard navigation =====
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown") {
    if (currentSlide < TOTAL_SLIDES) goToSlide(currentSlide + 1);
  } else if (
    e.key === "ArrowUp" ||
    e.key === "ArrowLeft" ||
    e.key === "PageUp"
  ) {
    if (currentSlide > 1) goToSlide(currentSlide - 1);
  } else if (e.key === "Home") {
    goToSlide(1);
  } else if (e.key === "End") {
    goToSlide(TOTAL_SLIDES);
  }
});

// ===== Page load animation =====
setTimeout(() => {
  document.body.classList.add("page-loaded");
}, 10);

// ===== Init indicator =====
updateIndicator();
document.querySelectorAll(".indicator-dot")[0].classList.add("active");

// ===== Hide key hint after 4s =====
setTimeout(() => {
  if (keyHint) keyHint.style.opacity = "0";
}, 4000);
