const animationElements = document.querySelectorAll(".show-on-scroll");
console.log(animationElements);
const tongleAnimation = (animationElement) => {
  const rect = animationElement.getClientRects()[0];
  const heighScreen = window.innerHeight;
  if (!(rect.bottom < 0 || rect.top > heighScreen)) {
    animationElement.classList.add("start");
  } else {
    animationElement.classList.remove("start");
  }
};

const checkAnimation = () => {
  animationElements.forEach((animationElement, index) => {
    tongleAnimation(animationElement);
  });
};

window.onscroll = checkAnimation;

checkAnimation();
