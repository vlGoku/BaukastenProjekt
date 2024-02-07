import { createTag, createMultiTags } from "./functions";

function createHeader() {
  const startpoint = createTag(null, "header", null, null, null);
  const logo = createTag(startpoint, "div", "header_logo", "logo", null);
  logo.innerHTML = `<i class="fa-solid fa-plate-wheat"></i>`; // TODO add png did not work
  createTag(
    startpoint,
    "h1",
    null,
    "heading",
    "Ristorante con Kit di Costruzione"
  );
  const button = createTag(
    startpoint,
    "button",
    "btn_cartHead",
    "btnCartHead",
    null
  );
  button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;

  // Buttons
  // TODO add cartpage
}

export { createHeader };
