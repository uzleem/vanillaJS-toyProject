const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let current = 1;

// btn event : next
next.addEventListener("click", () => {
  current++;

  if (current > circles.length) {
    current = circles.length;
  }

  updateProgress();
});

// btn event : prev
prev.addEventListener("click", () => {
  current--;

  if (current < 1) {
    current = 1;
  }

  updateProgress();
});

// update
function updateProgress() {
  circles.forEach((circle, i) => {
    if (current > i) {
      circle.classList.add("active");
      progress.style.width = ((current - 1) / (circles.length - 1)) * 100 + "%";
    } else {
      circle.classList.remove("active");
    }
  });

  //   bnt disable
  if (current === 1) {
    prev.disabled = true;
  } else if (current === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
