const buttonMenu = document.getElementById("btn-mobile");
const nav = document.querySelector("nav");

function toggleMenu(event: PointerEvent) {
  const active = nav?.classList.contains("active");
  const button = event.currentTarget;
  if (button instanceof HTMLElement && nav) {
    if (active) {
      if (event.currentTarget instanceof HTMLElement) {
        button.setAttribute("aria-expanded", "true");
        button.setAttribute("aria-label", "Fechar Menu");
      }
    } else {
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Abrir Menu");
    }
    nav?.classList.toggle("active");
  }
}

buttonMenu?.addEventListener("pointerdown", toggleMenu);
