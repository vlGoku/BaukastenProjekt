import { Food } from "./foodAbstract";
import { createTag, createMultiTags } from "./functions";
import { Cart } from "./cart";

class Pizza extends Food {
  constructor() {
    super(
      "pizza",
      9.7,
      ["Wheat", "Whole Grain"],
      //Olives, Pumpkin, Broccoli added
      [
        "Onion",
        "Garlic",
        "Bell Pepper",
        "Pepperoni",
        "Corn",
        "Mushrooms",
        "Zucchini",
        "Fried Egg",
        "Spinach",
        "Pineapple",
        "Ham",
        "Salami",
        "Bacon",
        "Gouda Cheese",
        "Mozzarella",
        "Parmesan",
        "Blue Cheese",
        "Cheddar",
        "Olives",
        "Pumpkin",
        "Broccoli",
      ],
      ["Tomato Sauce", "White Sauce"]
    );
  }
  createBase(parent: HTMLElement) {
    const base = createTag(parent, "div", `${this.type}Base`, "base", null);
    const baseList = createTag(
      base,
      "ul",
      null,
      "IngredList",
      "Choose your base:"
    );
    createMultiTags(
      baseList,
      "li",
      this.getBase().length,
      this.getBase(),
      false,
      false
    );

    let nextSibling = baseList.firstChild?.nextSibling;
    let getNameIndex = 0;
    while (nextSibling !== null) {
      const tag = document.createElement("div");
      tag.innerHTML = `<button class="base${this.getBase()[
        getNameIndex
      ].replace(/ /g, "_")}"><i class="fa-solid fa-plus"></i></button>`;
      nextSibling?.appendChild(tag);
      nextSibling = nextSibling!.nextSibling;
      getNameIndex++;
    }

    // Buttons

    baseList.addEventListener("click", (e) => {
      let currentTarget = e.target as HTMLButtonElement;

      if (currentTarget!.matches(".baseWheat")) {
        this.addIngredients("Wheat");
        const next = document.getElementById("pizzaMustHaves");
        next?.classList.remove("hidden");
        base.remove();
      }
      if (currentTarget!.matches(".baseWhole_Grain")) {
        this.addIngredients("Whole Grain");
        const next = document.getElementById("pizzaMustHaves");
        next?.classList.remove("hidden");
        base.remove();
      }
      this.updateItem(parent);
    });
  }

  createMustHaves(parent: HTMLElement) {
    const basisNode = createTag(
      parent,
      "div",
      `${this.type}MustHaves`,
      "mustHave",
      null
    );
    basisNode.classList.add("hidden");

    const basisList = createTag(
      basisNode,
      "ul",
      null,
      "IngredList",
      "Pick a sauce:"
    );
    createMultiTags(
      basisList,
      "li",
      this.getMustHaves().length,
      this.getMustHaves(),
      false,
      false
    );

    basisList.addEventListener("click", (e) => {
      let currentTarget = e.target as HTMLButtonElement;

      if (currentTarget!.matches(".mustTomatoSauce")) {
        this.addIngredients("Tomato Sauce");
        const next = document.getElementById("pizzaAddOns");
        next?.classList.remove("hidden");
        basisNode.remove();
        const addPizzaToCart = document.getElementById("pizzaToCartBtn");
        if (addPizzaToCart) {
          addPizzaToCart.classList.remove("hidden");
        }
      }
      if (currentTarget!.matches(".mustWhiteSauce")) {
        this.addIngredients("White Sauce");
        const next = document.getElementById("pizzaAddOns");
        next?.classList.remove("hidden");
        basisNode.remove();
        const addPizzaToCart = document.getElementById("pizzaToCartBtn");
        console.log(addPizzaToCart);
        if (addPizzaToCart) {
          addPizzaToCart.classList.remove("hidden");
        }
      }
      this.updateItem(parent);

      //console.log(this.allComponents);
    });

    let nextSibling = basisList.firstChild?.nextSibling;
    let getNameIndex = 0;
    while (nextSibling !== null) {
      const tag = document.createElement("div");
      tag.innerHTML = `<button class="must${this.getMustHaves()[
        getNameIndex
      ].replace(/ /g, "")}"><i class="fa-solid fa-plus"></i></button>`;
      nextSibling?.appendChild(tag);
      nextSibling = nextSibling!.nextSibling;
      getNameIndex++;
    }

    // Buttons
  }

  createAddOns(parent: HTMLElement) {
    const basisNode = createTag(
      parent,
      "div",
      `${this.type}AddOns`,
      "addOns",
      null
    );

    const basisList = createTag(
      basisNode,
      "ul",
      null,
      "IngredList",
      "Choose your add-ons:"
    );
    createMultiTags(
      basisList,
      "li",
      this.getAddOns().length,
      this.getAddOns(),
      false,
      false
    );
    basisNode.classList.add("hidden");

    let nextSibling = basisList.firstChild?.nextSibling;
    let getNameIndex = 0;
    while (nextSibling !== null) {
      const tag = document.createElement("div");
      tag.innerHTML = `<button class="add${this.getAddOns()[
        getNameIndex
      ].replace(/ /g, "")}"><i class="fa-solid fa-plus"></i></button>`;
      nextSibling?.appendChild(tag);
      //console.log(nextSibling);
      nextSibling = nextSibling!.nextSibling;
      getNameIndex++;
    }
    // Buttons
    //Deleted Next button, not required anymore
    /*     const button = createTag(basisNode, "button", null, "next_button", "next");
    button.addEventListener("click", () => {
      const next = document.getElementById("pizzaMustHaves");
      next?.classList.remove("hidden");
      basisNode.remove();
    }); */

    basisList.addEventListener("click", (e) => {
      let currentTarget = e.target as HTMLButtonElement;
      //Onion
      if (currentTarget!.matches(".addOnion"))
        this.addIngredients(this.getAddOns()[0]);
      if (currentTarget!.matches(".removeOnion"))
        this.removeIngredients(this.getAddOns()[0]);
      //Garlic
      if (currentTarget!.matches(".addGarlic"))
        this.addIngredients(this.getAddOns()[1]);
      if (currentTarget!.matches(".removeGarlic"))
        this.removeIngredients(this.getAddOns()[1]);
      //Bell Pepper
      if (currentTarget!.matches(".addBellPepper"))
        this.addIngredients(this.getAddOns()[2]);
      if (currentTarget!.matches(".removeBellPepper"))
        this.removeIngredients(this.getAddOns()[2]);
      //Pepperoni
      if (currentTarget!.matches(".addPepperoni"))
        this.addIngredients(this.getAddOns()[3]);
      if (currentTarget!.matches(".removePepperoni"))
        this.removeIngredients(this.getAddOns()[3]);
      //Corn
      if (currentTarget!.matches(".addCorn"))
        this.addIngredients(this.getAddOns()[4]);
      if (currentTarget!.matches(".removeCorn"))
        this.removeIngredients(this.getAddOns()[4]);
      //Mushroom
      if (currentTarget!.matches(".addMushrooms"))
        this.addIngredients(this.getAddOns()[5]);
      if (currentTarget!.matches(".removeMushrooms"))
        this.removeIngredients(this.getAddOns()[5]);
      //Zucchini
      if (currentTarget!.matches(".addZucchini"))
        this.addIngredients(this.getAddOns()[6]);
      if (currentTarget!.matches(".removeZucchini"))
        this.removeIngredients(this.getAddOns()[6]);
      //Fried Egg
      if (currentTarget!.matches(".addFriedEgg"))
        this.addIngredients(this.getAddOns()[7]);
      if (currentTarget!.matches(".removeFriedEgg"))
        this.removeIngredients(this.getAddOns()[7]);
      //Spinach
      if (currentTarget!.matches(".addSpinach"))
        this.addIngredients(this.getAddOns()[8]);
      if (currentTarget!.matches(".removeSpinach"))
        this.removeIngredients(this.getAddOns()[8]);
      //Pineapple
      if (currentTarget!.matches(".addPineapple"))
        this.addIngredients(this.getAddOns()[9]);
      if (currentTarget!.matches(".removePineapple"))
        this.removeIngredients(this.getAddOns()[9]);
      //Ham
      if (currentTarget!.matches(".addHam"))
        this.addIngredients(this.getAddOns()[10]);
      if (currentTarget!.matches(".removeHam"))
        this.removeIngredients(this.getAddOns()[10]);
      //Salami
      if (currentTarget!.matches(".addSalami"))
        this.addIngredients(this.getAddOns()[11]);
      if (currentTarget!.matches(".removeSalami"))
        this.removeIngredients(this.getAddOns()[11]);
      //Bacon
      if (currentTarget!.matches(".addBacon"))
        this.addIngredients(this.getAddOns()[12]);
      if (currentTarget!.matches(".removeBacon"))
        this.removeIngredients(this.getAddOns()[12]);
      //Gouda Cheese
      if (currentTarget!.matches(".addGoudaCheese"))
        this.addIngredients(this.getAddOns()[13]);
      if (currentTarget!.matches(".removeGoudaCheese"))
        this.removeIngredients(this.getAddOns()[13]);
      //Mozzarella
      if (currentTarget!.matches(".addMozzarella"))
        this.addIngredients(this.getAddOns()[14]);
      if (currentTarget!.matches(".removeMozzarella"))
        this.removeIngredients(this.getAddOns()[14]);
      //Parmesan
      if (currentTarget!.matches(".addParmesan"))
        this.addIngredients(this.getAddOns()[15]);
      if (currentTarget!.matches(".removeParmesan"))
        this.removeIngredients(this.getAddOns()[15]);
      //Blue Cheese
      if (currentTarget!.matches(".addBlueCheese"))
        this.addIngredients(this.getAddOns()[16]);
      if (currentTarget!.matches(".removeBlueCheese"))
        this.removeIngredients(this.getAddOns()[16]);
      //Cheddar
      if (currentTarget!.matches(".addCheddar"))
        this.addIngredients(this.getAddOns()[17]);
      if (currentTarget!.matches(".removeCheddar"))
        this.removeIngredients(this.getAddOns()[17]);
      //Olives
      if (currentTarget!.matches(".addOlives"))
        this.addIngredients(this.getAddOns()[18]);
      if (currentTarget!.matches(".removeOlives"))
        this.removeIngredients(this.getAddOns()[18]);
      //Pumpkin
      if (currentTarget!.matches(".addPumpkin"))
        this.addIngredients(this.getAddOns()[19]);
      if (currentTarget!.matches(".removePumpkin"))
        this.removeIngredients(this.getAddOns()[19]);
      //Broccoli
      if (currentTarget!.matches(".addBroccoli"))
        this.addIngredients(this.getAddOns()[20]);
      if (currentTarget!.matches(".removeBroccoli"))
        this.removeIngredients(this.getAddOns()[20]);
      this.updateItem(parent);
      //console.log(this.allComponents);
    });
  }

  updateItem(parent: HTMLElement) {
    const description = document.querySelector(".displayItem") as HTMLElement;
    if (description) description!.remove();
    this.renderItem(parent);
  }

  createItems(parent: HTMLElement) {
    this.createBase(parent);
    this.createMustHaves(parent);
    this.createAddOns(parent);
    //this.renderItem(parent);
  }

  resetPizza() {
    this.allComponents = [];
    let price = this.getPrice();
    price = 0;
  }
}

export { Pizza };
