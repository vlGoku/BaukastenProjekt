import { Food } from "./foodAbstract";
import { Pizza } from "./pizza";
import { Drink } from "./drink";
import { createTag, createMultiTags } from "./functions";
class Cart {
  order: (Food | Drink)[];
  totalPrice: number;
  constructor() {
    this.order = [];
    this.totalPrice = this.getTotal();
  }
  getTotal(): number {
    let current = 0;
    this.order.forEach((element) => {
      current += element.getPrice();
    });
    return current;
  }
  addToCart(item: Food | Drink) {
    this.order.push(item);
  }
  removeFromCart(item: Food | Drink) {
    let id: string = item.getId();
    this.order.forEach((element) => {
      if (element.getId() === id) {
        this.order.splice(this.order.indexOf(element), 1);
      }
    });
  }
  createCartItems(parent: HTMLElement) {
    this.order.forEach((element) => {
      const card = createTag(parent, "div", null, null, null);
      if (element instanceof Pizza) {
        const elementDiv = createTag(
          card,
          "h3",
          null,
          null,
          `${element.type} with the following ingredients:`
        );
        const ingredientList = createTag(elementDiv, "ul", null, null, null);
        const ingredients = createMultiTags(
          ingredientList,
          "li",
          element.getAllComponents().length,
          element.getAllComponents(),
          false,
          false
        );
      }
      if (element instanceof Drink) {
        const elementDiv = createTag(card, "h3", null, null, `${element.type}`);
      }
      const price = createTag(
        card,
        "h3",
        null,
        null,
        `price: ${element.getPrice()}`
      );
      const button = createTag(
        card,
        "button",
        "removeBtn",
        null,
        `<i class="fa-solid fa-minus"></i>`
      );
      button.addEventListener("click", () => {
        this.removeFromCart(element);
        this.totalPrice = this.getTotal();
        this.createCart();
      });
    });
  }

  createCartOverlay() {
    const overlay = createTag(null, "div", "cartOverlay", null, null);
    const closeButton = createTag(overlay, "button", "closeBtn", null, "X");
    closeButton.addEventListener("click", () => {
      document.body.removeChild(overlay);
    });

    const cartItems = createTag(overlay, "div", null, "cardDisplay", null);

    return overlay;
  }

  createCart() {
    const overlay = this.createCartOverlay();
    document.body.appendChild(overlay);

    const cartItems = createTag(overlay, "div", null, "cardDisplay", null);
    createTag(cartItems, "h2", null, null, "Your Order:");
    this.createCartItems(cartItems);
    createTag(cartItems, "h2", null, null, `Total: ${this.totalPrice}`);
  }
}
export { Cart };
