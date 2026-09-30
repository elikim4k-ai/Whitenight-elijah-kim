document.getElementById("year").textContent = new Date().getFullYear();

const colorLens = document.querySelector(".color-lens");
if (colorLens && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  let frame;
  window.addEventListener("pointermove", event => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      colorLens.style.left = `${event.clientX}px`;
      colorLens.style.top = `${event.clientY}px`;
      document.body.classList.add("cursor-active");
    });
  }, { passive: true });
  window.addEventListener("pointerleave", () => document.body.classList.remove("cursor-active"));
  document.querySelectorAll("a, button").forEach(item => {
    item.addEventListener("pointerenter", () => document.body.classList.add("cursor-link"));
    item.addEventListener("pointerleave", () => document.body.classList.remove("cursor-link"));
  });
}

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");

menu?.addEventListener("click", () => {
  const open = nav.style.display === "flex";
  nav.style.display = open ? "" : "flex";
  if (!open) {
    nav.style.position = "absolute";
    nav.style.top = "76px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "20px 5vw";
    nav.style.flexDirection = "column";
    nav.style.background = "rgba(9,9,9,.97)";
    nav.style.borderBottom = "1px solid #282828";
  }
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 800) nav.style.display = "";
  });
});
