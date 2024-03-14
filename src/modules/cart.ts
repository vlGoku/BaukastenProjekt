import { Food } from "./foodAbstract";
import { Pizza } from "./pizza";
import { Pasta } from "./pasta";
import { Salad } from "./salad";
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
  emptyCart() {
    const orderDiv = document.getElementById("orderDiv");
    const totalPrice = document.getElementById("totalPrice");
    while (orderDiv?.firstChild) {
      orderDiv.removeChild(orderDiv.firstChild);
    }
    this.order = [];
    if (totalPrice instanceof HTMLElement) {
      totalPrice.innerHTML = `Total: ${this.getTotal().toFixed(2).toString()}€`;
    }
    const cartButton = document.getElementById("btn_cartHead");
    cartButton?.classList.remove("notEmpty");
  }

  //small change to the createCartItems => create Items on click once, not for the whole this.order array
  /*   createCartItems(parent: HTMLElement) {
    this.order.forEach((element) => {
      const card = createTag(parent, "div", null, null, null);
      if (element instanceof Pizza) {
        const elementDiv = createTag(
          card,
          "h3",
          "elementTypeHeader",
          null,
          `${element.type}`
        );
        const ingredientList = createTag(
          elementDiv,
          "ul",
          "ingredList",
          null,
          null
        );
        createMultiTags(
          ingredientList,
          "li",
          element.getAllComponents().length,
          element.getAllComponents(),
          false,
          false
        );
      }
    });
  } */
  createCartItems(parent: HTMLElement, element: Food | Drink) {
    const card = createTag(parent, "div", "card", null, null);
    createTag(
      card,
      "button",
      null,
      "buttonDeleteItem",
      `<i class="fa-solid fa-minus"></i>`
    );
    //cart usability
    const cartButton = document.getElementById("btn_cartHead");
    if (this.order.length !== 0) {
      cartButton?.classList.add("notEmpty");
    }

    //TODO: Du musst querySelectorAll benutzen, um alle Buttons zu bekommen. Das ist auch der Grund weshalb der zweite Buttoen nicht funktioniert.
    //TODO: Du musst dann mit einer Schleife durch die Buttons iterieren und jedem Button ein EventListener hinzufügen.
    //TODO: Danach löscht du einerseits dein eintrag aus dem Array order (zum Beispiel mit splice oder filter) und andererseits aus dem DOM.
    //TODO: Dein Element hasst du eh schon richtig im Console log ausgewählt du muss nur noch currentTarget.parentElement.delete() machen.
    const deleteItemFromCart = document.querySelectorAll(".buttonDeleteItem");
    const totalPrice = document.getElementById("totalPrice");
    deleteItemFromCart.forEach((buttonDelete, index) => {
      buttonDelete.addEventListener("click", (e) => {
        let targetElement = e.target as HTMLElement;
        let currentTarget = targetElement.parentElement;
        this.order.splice(index, 1);
        currentTarget?.remove();
        if (totalPrice instanceof HTMLElement) {
          totalPrice.innerHTML = `Total: ${this.getTotal()
            .toFixed(2)
            .toString()}€`;
        }
        if (this.order.length === 0) {
          cartButton?.classList.remove("notEmpty");
        }
      });
    });

    if (element instanceof Pizza) {
      const elementDiv = createTag(
        card,
        "h3",
        "elementTypeHeader",
        null,
        `${element.type + " " + element.getPrice().toFixed(2) + " €"}`
      );
      const ingredientList = createTag(
        elementDiv,
        "ul",
        "ingredList",
        null,
        null
      );
      createMultiTags(
        ingredientList,
        "li",
        element.getAllComponents().length,
        element.getAllComponents(),
        false,
        false
      );
    }
    if (element instanceof Pasta) {
      const elementDiv = createTag(
        card,
        "h3",
        "elementTypeHeader",
        null,
        `${element.type + " " + element.getPrice().toFixed(2) + " €"}`
      );
      const ingredientList = createTag(
        elementDiv,
        "ul",
        "ingredList",
        null,
        null
      );
      createMultiTags(
        ingredientList,
        "li",
        element.getAllComponents().length,
        element.getAllComponents(),
        false,
        false
      );
    }
    if (element instanceof Salad) {
      const elementDiv = createTag(
        card,
        "h3",
        "elementTypeHeader",
        null,
        `${element.type + " " + element.getPrice().toFixed(2) + " €"}`
      );
      const ingredientList = createTag(
        elementDiv,
        "ul",
        "ingredList",
        null,
        null
      );
      createMultiTags(
        ingredientList,
        "li",
        element.getAllComponents().length,
        element.getAllComponents(),
        false,
        false
      );
    }
    if (element instanceof Drink) {
      createTag(
        card,
        "h3",
        null,
        null,
        `${
          element.type +
          " " +
          element.size +
          "l" +
          " " +
          element.getPrice().toFixed(2) +
          " €"
        }`
      );
    }
  }

  /* createCartItems(parent: HTMLElement) {
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
  } */

  createCart() {
    const overlay = createTag(null, "div", "cartOverlay", null, null);
    overlay.classList.add("hidden");
    document.body.appendChild(overlay);

    const cardDisplay = createTag(overlay, "div", null, "cardDisplay", null);
    createTag(cardDisplay, "h2", null, "totalOrder", "Your Order:");
    createTag(cardDisplay, "div", "orderDiv", null, null);
    createTag(cardDisplay, "h2", "totalPrice", null, `Total: `);

    const closeButton = createTag(cardDisplay, "button", "closeBtn", null, "X");
    closeButton.addEventListener("click", () => {
      overlay.classList.add("hidden");
    });
    const deleteAllButton = createTag(
      cardDisplay,
      "button",
      "deleteAll",
      null,
      "Delete All"
    );
    deleteAllButton.addEventListener("click", () => {
      this.emptyCart();
    });
  }
}
export { Cart };
