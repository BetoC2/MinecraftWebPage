import tippy from "tippy.js";

export function initializeTippy() {
  tippy("#button", {
    trigger: "click",
    content: "copiado!",
    placement: "bottom",
  });

  const button = document.getElementById("button");
  button.onclick = async () => {
    let linkText = document.querySelector(".server-address");
    await navigator.clipboard.writeText(linkText.innerText);
  };
}
