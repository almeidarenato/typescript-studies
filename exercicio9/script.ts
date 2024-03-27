const buttonMenu = document.getElementById("btn-mobile");
const nav = document.querySelector("nav");

function handleClickBtn(event: MouseEvent) {
  if (nav?.classList.contains("active")) {
    buttonMenu?.setAttribute("aria-expanded", "false");
    buttonMenu?.setAttribute("aria-label", "Abrir Menu");
    nav.setAttribute("class", "");
  } else {
    buttonMenu?.setAttribute("aria-expanded", "true");
    buttonMenu?.setAttribute("aria-label", "Fechar Menu");
    nav?.setAttribute("class", "active");
    }
}

buttonMenu?.addEventListener("click", handleClickBtn);
