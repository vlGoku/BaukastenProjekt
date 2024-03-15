import { Cart } from "./cart";
import { Drink } from "./drink";
import { Food } from "./foodAbstract";
import { Pasta } from "./pasta";
import { Pizza } from "./pizza";
import { Salad } from "./salad";
import { createMultiTags, createTag } from "./functions";

function createMenu() {
  //create Cart for Order
  const cart = new Cart();
  cart.createCart();

  //create Drinks
  const drinks: object[] = [
    new Drink("Beer", 0.5, false, 3),
    new Drink("Beer", 0.33, false, 2.7),
    new Drink("Coca Cola", 0.5, false, 2.2),
    new Drink("Coca Cola", 0.33, false, 1.8),
    new Drink("Sprite", 0.5, false, 2.2),
    new Drink("Sprite", 0.33, false, 1.8),
    new Drink("Apple Juice", 0.5, false, 1.9),
    new Drink("Apple Juice", 0.33, false, 1.6),
    new Drink("Mineral Water", 0.5, false, 1.7),
  ];

  //create Foods
  const pizza = new Pizza();
  const pasta = new Pasta();
  const salad = new Salad();

  //create HTML
  const menu = createTag(null, "div", null, "menu", null);
  createTag(
    menu,
    "h2",
    null,
    "menuDescription",
    `Welcome to Ristorante con Kit di Costruzione!</br> Where you can pick and choose your ingredients.</br>
    At first you choose one base, then you can add your ingredients of choice.</br>Up to five Ingredients are included in the base price</br>
    Every other adds a charge of 1,50 to price</br>After that you get to choose what type of sauce/condiment you would like.</br>
    Enjoy and happy ordering!`
  );
  const choice = createTag(menu, "div", null, null, null);
  // Pizza
  const pizzaHeading = createTag(choice, "div", null, "pizzaHeading", null);
  const pizzaDiv = createTag(pizzaHeading, "h3", null, null, "Pizza");
  const btnPizza = createTag(
    pizzaHeading,
    "button",
    null,
    "btnPizza",
    `<i class="fa-solid fa-sort-down"></i>`
  );
  const wrapPizza = createTag(choice, "div", null, "ingredientsPizza", null);
  pizza.createItems(wrapPizza);
  //button pizza
  const addPizzaToCart = createTag(
    choice,
    "button",
    "pizzaToCartBtn",
    null,
    "Add to cart"
  );
  addPizzaToCart.classList.add("hidden");

  btnPizza.addEventListener("click", () => {
    //ToDo: and hidden to cart button did not work...
    //TODO: (cm) versuche es einmal mit warpPizza.classList.toggle("hidden"); oder wrapPizza.className = 'hidden'
    if (wrapPizza.classList.contains("hidden")) {
      wrapPizza.classList.add("ingredientsPizza");
      wrapPizza.classList.remove("hidden");
    } else {
      wrapPizza.classList.add("hidden");
      wrapPizza.classList.remove("ingredientsPizza");
    }
  });

  //create const for cartDisplay
  const orderDiv = document.getElementById("orderDiv");
  const totalPrice = document.getElementById("totalPrice");

  //Problem gelöst
  addPizzaToCart!.addEventListener("click", () => {
    const display = document.querySelector(".displayItem");
    const pizzaAddOns = document.getElementById("pizzaAddOns");
    display?.remove();
    const newPizza = new Pizza();
    newPizza.allComponents = pizza.allComponents;
    newPizza.setPrice(newPizza.calculatePrice());
    cart.addToCart(newPizza);
    pizzaAddOns?.classList.add("hidden");
    console.log(cart.order);
    pizza.resetPizza();
    pizza.createItems(wrapPizza);
    addPizzaToCart.classList.add("hidden");
    cart.createCartItems(orderDiv as HTMLElement, newPizza);
    if (totalPrice instanceof HTMLElement) {
      totalPrice.innerHTML = `Total: ${cart.getTotal().toFixed(2).toString()}€`;
    }
  });

  // Pasta
  const pastaHeading = createTag(choice, "div", null, "pastaHeading", null);
  const pastDiv = createTag(pastaHeading, "h3", null, null, "Pasta");
  const btnPasta = createTag(
    pastaHeading,
    "button",
    null,
    "btnPasta",
    `<i class="fa-solid fa-sort-down"></i>`
  );
  const wrapPasta = createTag(choice, "div", null, "ingredientsPasta", null);
  pasta.createItems(wrapPasta);
  //button pasta
  const addPastaToCart = createTag(
    choice,
    "button",
    "pastaToCartBtn",
    null,
    "Add to cart"
  );
  addPastaToCart.classList.add("hidden");

  wrapPasta.classList.add("hidden");
  wrapPasta.classList.remove("ingredientsPasta");
  //button Pasta
  btnPasta.addEventListener("click", () => {
    if (wrapPasta.classList.contains("hidden")) {
      wrapPasta.classList.add("ingredientsPasta");
      wrapPasta.classList.remove("hidden");
    } else {
      wrapPasta.classList.add("hidden");
      wrapPasta.classList.remove("ingredientsPasta");
    }
  });

  addPastaToCart!.addEventListener("click", () => {
    const display = document.querySelector(".displayItem");
    const pastaAddOns = document.getElementById("pastaAddOns");
    display?.remove();
    const newPasta = new Pasta();
    newPasta.allComponents = pasta.allComponents;
    newPasta.setPrice(newPasta.calculatePrice());
    cart.addToCart(newPasta);
    pastaAddOns?.classList.add("hidden");
    console.log(cart.order);
    pasta.resetPasta();
    pasta.createItems(wrapPasta);
    addPastaToCart.classList.add("hidden");
    cart.createCartItems(orderDiv as HTMLElement, newPasta);
    if (totalPrice instanceof HTMLElement) {
      totalPrice.innerHTML = `Total: ${cart.getTotal().toFixed(2).toString()}€`;
    }
  });

  // Salad
  const saladHeading = createTag(choice, "div", null, "saladHeading", null);
  const saladDiv = createTag(saladHeading, "h3", null, null, "Salad");
  const btnSalad = createTag(
    saladHeading,
    "button",
    null,
    "btnSalad",
    `<i class="fa-solid fa-sort-down"></i>`
  );
  const wrapSalad = createTag(choice, "div", null, "ingredientsSalad", null);
  wrapSalad.classList.add("hidden");
  wrapSalad.classList.remove("ingredientsSalad");
  salad.createItems(wrapSalad);
  //button Salad
  const addSaladToCart = createTag(
    choice,
    "button",
    "saladToCartBtn",
    null,
    "Add to cart"
  );
  addSaladToCart.classList.add("hidden");

  btnSalad.addEventListener("click", () => {
    if (wrapSalad.classList.contains("hidden")) {
      wrapSalad.classList.add("ingredientsSalad");
      wrapSalad.classList.remove("hidden");
    } else {
      wrapSalad.classList.add("hidden");
      wrapSalad.classList.remove("ingredientsSalad");
    }
  });

  addSaladToCart!.addEventListener("click", () => {
    const display = document.querySelector(".displayItem");
    const saladAddOns = document.getElementById("saladAddOns");
    display?.remove();
    const newSalad = new Salad();
    newSalad.allComponents = salad.allComponents;
    newSalad.setPrice(newSalad.calculatePrice());
    cart.addToCart(newSalad);
    saladAddOns?.classList.add("hidden");
    console.log(cart.order);
    salad.resetSalad();
    salad.createItems(wrapSalad);
    addSaladToCart.classList.add("hidden");
    cart.createCartItems(orderDiv as HTMLElement, newSalad);
    if (totalPrice instanceof HTMLElement) {
      totalPrice.innerHTML = `Total: ${cart.getTotal().toFixed(2).toString()}€`;
    }
  });
  // Drinks
  const drinkHeading = createTag(choice, "div", null, "drinkHeading", null);
  const drinkDiv = createTag(drinkHeading, "h3", null, null, "Drink");
  const btnDrink = createTag(
    drinkHeading,
    "button",
    null,
    "btnDrink",
    `<i class="fa-solid fa-sort-down"></i>`
  );
  const wrapDrink = createTag(choice, "div", null, "drinksList", null);
  wrapDrink.classList.add("hidden");
  wrapDrink.classList.remove("drinksList");

  for (let i = 0; i < drinks.length; i++) {
    let item: Drink = drinks[i] as Drink;
    item.renderDrink(wrapDrink, cart);
  }

  // button Drink
  btnDrink.addEventListener("click", () => {
    if (wrapDrink.classList.contains("hidden")) {
      wrapDrink.classList.add("drinksList");
      wrapDrink.classList.remove("hidden");
    } else {
      wrapDrink.classList.add("hidden");
      wrapDrink.classList.remove("drinksList");
    }
  });

  // todo addCart and Warning to the right spaces
}
export { createMenu };
