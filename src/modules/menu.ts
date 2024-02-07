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
    Every other adds an charge of 1,50 to price</br>After that you get to choose what type of sauce/condiment you would like.</br>
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
  const buttonPizza = createTag(
    choice,
    "button",
    `pizzaToCartBtn"`,
    null,
    "Add to cart"
  );

  btnPizza.addEventListener("click", () => {
    // toDo and hidden to cart button did not work...

    if (wrapPizza.classList.contains("hidden")) {
      wrapPizza.classList.add("ingredientsPizza");
      wrapPizza.classList.remove("hidden");
    } else {
      wrapPizza.classList.add("hidden");
      wrapPizza.classList.remove("ingredientsPizza");
    }
  });

  buttonPizza!.addEventListener("click", () => {
    const display = document.querySelector(".displayItem");
    display?.remove();
    console.log("zest");
    cart.addToCart(pizza);
    pizza.allComponents = [];
    console.log(cart.order);
    pizza.createItems(wrapPizza);
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
  const buttonPasta = createTag(
    choice,
    "button",
    `pastaToCartBtn"`,
    null,
    "Add to cart"
  );
  buttonPasta!.addEventListener("click", () => {
    const display = document.querySelector(".displayItem");
    display?.remove();
    console.log("zest");
    cart.addToCart(pasta);
    pasta.allComponents = [];
    console.log(cart.order);
    pasta.createItems(wrapPasta);
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
  btnSalad.addEventListener("click", () => {
    if (wrapSalad.classList.contains("hidden")) {
      wrapSalad.classList.add("ingredientsSalad");
      wrapSalad.classList.remove("hidden");
    } else {
      wrapSalad.classList.add("hidden");
      wrapSalad.classList.remove("ingredientsSalad");
    }
  });
  const buttonSalad = createTag(
    choice,
    "button",
    `saladToCartBtn"`,
    null,
    "Add to cart"
  );
  buttonSalad!.addEventListener("click", () => {
    const display = document.querySelector(".displayItem");
    display?.remove();
    console.log("zest");
    cart.addToCart(pasta);
    salad.allComponents = [];
    console.log(cart.order);
    salad.createItems(wrapSalad);
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
    item.renderDrink(wrapDrink);
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
  wrapDrink.addEventListener("click", (e) => {
    // todo rework
    let currentTarget = e.target as HTMLButtonElement;
    if (currentTarget!.matches(".addBeer05")) {
      cart.addToCart(drinks[0] as Drink);
    }
    if (currentTarget!.matches(".removeBeer05")) {
      cart.removeFromCart(drinks[0] as Drink);
    }
    if (currentTarget!.matches(".addBeer033")) {
      cart.addToCart(drinks[1] as Drink);
    }
    if (currentTarget!.matches(".removeBeer033")) {
      cart.removeFromCart(drinks[1] as Drink);
    }
    if (currentTarget!.matches(".addCocaCola05")) {
      cart.addToCart(drinks[2] as Drink);
    }
    if (currentTarget!.matches(".removeCocaCola05")) {
      cart.removeFromCart(drinks[2] as Drink);
    }
    if (currentTarget!.matches(".addCocaCola033")) {
      cart.addToCart(drinks[3] as Drink);
    }
    if (currentTarget!.matches(".removeCocaCola033")) {
      cart.removeFromCart(drinks[3] as Drink);
    }
    if (currentTarget!.matches(".addSprite05")) {
      cart.addToCart(drinks[4] as Drink);
    }
    if (currentTarget!.matches(".removeSprite05")) {
      cart.removeFromCart(drinks[4] as Drink);
    }
    if (currentTarget!.matches(".addSprite033")) {
      cart.addToCart(drinks[5] as Drink);
    }
    if (currentTarget!.matches(".removeSprite033")) {
      cart.removeFromCart(drinks[5] as Drink);
    }
    if (currentTarget!.matches(".addAppleJuice05")) {
      cart.addToCart(drinks[6] as Drink);
    }
    if (currentTarget!.matches(".removeAppleJuice05")) {
      cart.removeFromCart(drinks[6] as Drink);
    }
    if (currentTarget!.matches(".addAppleJuice033")) {
      cart.addToCart(drinks[7] as Drink);
    }
    if (currentTarget!.matches(".removeAppleJuice033")) {
      cart.removeFromCart(drinks[7] as Drink);
    }
    if (currentTarget!.matches(".addMineralWater05")) {
      cart.addToCart(drinks[8] as Drink);
    }
    if (currentTarget!.matches(".removeMineralWater05")) {
      cart.removeFromCart(drinks[8] as Drink);
    }
  });
  // todo addCart and Warning to the right spaces
}
export { createMenu };
