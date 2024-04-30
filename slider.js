const holderTag = document.querySelector(".holder");
const holderDiv = document.querySelectorAll(".holder div");
const stepsTag = document.querySelector(".steps");

const nextTag = document.querySelector(".next");
const backTag = document.querySelector(".prev");

const bodyTag = document.querySelector("body");

let counter = 0;
let totalSlide = holderDiv.length;

const slide = counter + 1;
stepsTag.innerHTML = slide + "/" + totalSlide;

const nextMover = (nextSlide) => {
  const leftPosition = -100 * nextSlide + "vw";
  holderTag.style.left = leftPosition;

  const slide = nextSlide + 1;
  stepsTag.textContent = slide + "/" + totalSlide;
};

const next = () => {
  counter = counter + 1;
  if (counter >= totalSlide) {
    counter = 0;
  }
  nextMover(counter);
};

const backMover = (backSlide) => {
  const leftPosition = -100 * backSlide + "vw";
  holderTag.style.left = leftPosition;

  const slide = backSlide + 1;
  stepsTag.textContent = slide + "/" + totalSlide;
};

const back = () => {
  counter = counter - 1;
  if (counter < 0) {
    counter = totalSlide - 1;
  }
  backMover(counter);
};

const auto = setInterval(() => {
  next();
}, 3000);

nextTag.addEventListener("click", () => {
  clearInterval(auto);
  next();
});

backTag.addEventListener("click", () => {
  clearInterval(auto);
  back();
});

bodyTag.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    clearInterval(auto);
    back();
  }

  if (event.key === "ArrowRight") {
    clearInterval(auto);
    next();
  }
});
