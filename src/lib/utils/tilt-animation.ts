import VanillaTilt from "vanilla-tilt";

export function initTiltAnimation() {
  const elements = window.document.querySelectorAll(".tilt") as any;
  VanillaTilt.init(elements);
}
