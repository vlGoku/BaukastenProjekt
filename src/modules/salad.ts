import { Food } from "./foodAbstract";
import { createTag, createMultiTags } from "./functions";

class Salad extends Food {
  constructor() {
    super(
      "salad",
      6.3,
      //Potato Salad, Pasta Salad, Leaf lettuce, Bird's Salad added
      [
        "Romaine",
        "Lollo Rosso",
        "Radicchio",
        "Baby Spinach",
        "Potato Salad",
        "Pasta Salad",
        "Leaf lettuce",
        "Birds Salad",
      ],
      [
        "Carrots",
        "Cucumbers",
        "Bell Peppers",
        "Tomatoes",
        "Corn",
        "Tuna Fish",
        "Feta Cheese",
        "Olives",
        "Potatoes",
        "Onion",
      ],
      [
        "Olive Oil and Balsamic Vinegar",
        "Pumpkin-Seed Oil and Apple Cider Vinegar",
        "French Dressing",
        "Yoghurt Dressing",
      ]
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
      //console.log(nextSibling);
      nextSibling = nextSibling!.nextSibling;
      getNameIndex++;
    }

    // Buttons
    //ToDo also needs rework
    baseList.addEventListener("click", (e) => {
      let currentTarget = e.target as HTMLButtonElement;

      if (currentTarget!.matches(".baseRomaine")) {
        this.addIngredients("Romaine");
        const next = document.getElementById("saladMustHaves");
        next?.classList.remove("hidden");
        base.remove();
      }
      if (currentTarget!.matches(".baseLollo_Rosso")) {
        this.addIngredients("Lollo Rosso");
        const next = document.getElementById("saladMustHaves");
        next?.classList.remove("hidden");
        base.remove();
      }
      if (currentTarget!.matches(".baseRadicchio")) {
        this.addIngredients("Radicchio");
        const next = document.getElementById("saladMustHaves");
        next?.classList.remove("hidden");
        base.remove();
      }
      if (currentTarget!.matches(".baseBaby_Spinach")) {
        this.addIngredients("Baby Spinach");
        const next = document.getElementById("saladMustHaves");
        next?.classList.remove("hidden");
        base.remove();
      }
      if (currentTarget!.matches(".basePotato_Salad")) {
        this.addIngredients("Potato Salad");
        const next = document.getElementById("saladMustHaves");
        next?.classList.remove("hidden");
        base.remove();
      }
      if (currentTarget!.matches(".basePasta_Salad")) {
        this.addIngredients("Pasta Salad");
        const next = document.getElementById("saladMustHaves");
        next?.classList.remove("hidden");
        base.remove();
      }
      if (currentTarget!.matches(".baseLeaf_lettuce")) {
        this.addIngredients("Leaf lettuce");
        const next = document.getElementById("saladMustHaves");
        next?.classList.remove("hidden");
        base.remove();
      }
      if (currentTarget!.matches(".baseBirds_Salad")) {
        this.addIngredients("Bird's Salad");
        const next = document.getElementById("saladMustHaves");
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

      if (currentTarget!.matches(".mustOliveOilandBalsamicVinegar")) {
        this.addIngredients("Olive Oil and Balsamic Vinegar");
        const next = document.getElementById("saladAddOns");
        next?.classList.remove("hidden");
        basisNode.remove();
        const addSaladToCart = document.getElementById("saladToCartBtn");
        if (addSaladToCart) {
          addSaladToCart.classList.remove("hidden");
        }
      }
      if (currentTarget!.matches(".mustPumpkinSeedOilandAppleCiderVinegar")) {
        this.addIngredients("Pumpkin-Seed Oil and Apple Cider Vinegar");
        const next = document.getElementById("saladAddOns");
        next?.classList.remove("hidden");
        basisNode.remove();
        const addSaladToCart = document.getElementById("saladToCartBtn");
        if (addSaladToCart) {
          addSaladToCart.classList.remove("hidden");
        }
      }
      if (currentTarget!.matches(".mustFrenchDressing")) {
        this.addIngredients("French Dressing");
        const next = document.getElementById("saladAddOns");
        next?.classList.remove("hidden");
        basisNode.remove();
        const addSaladToCart = document.getElementById("saladToCartBtn");
        if (addSaladToCart) {
          addSaladToCart.classList.remove("hidden");
        }
      }
      if (currentTarget!.matches(".mustYoghurtDressing")) {
        this.addIngredients("Yoghurt Dressing");
        const next = document.getElementById("saladAddOns");
        next?.classList.remove("hidden");
        basisNode.remove();
        const addSaladToCart = document.getElementById("saladToCartBtn");
        if (addSaladToCart) {
          addSaladToCart.classList.remove("hidden");
        }
      }
      this.updateItem(parent);
    });

    let nextSibling = basisList.firstChild?.nextSibling;
    let getNameIndex = 0;
    while (nextSibling !== null) {
      const tag = document.createElement("div");
      tag.innerHTML = `<button class="must${this.getMustHaves()
        [getNameIndex].replace(/ /g, "")
        .replace("-", "")}"><i class="fa-solid fa-plus"></i></button>`;
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
    /*     const button = createTag(basisNode, "button", null, "next_button", "next");
    button.addEventListener("click", () => {
      const next = document.getElementById("saladMustHaves");
      next?.classList.remove("hidden");
      basisNode.remove();
    }); */
    basisList.addEventListener("click", (e) => {
      // TODO simplify later | rework
      let currentTarget = e.target as HTMLButtonElement;
      //Carrots
      if (currentTarget!.matches(".addCarrots"))
        this.addIngredients(this.getAddOns()[0]);
      if (currentTarget!.matches(".removeCarrots"))
        this.removeIngredients(this.getAddOns()[0]);
      //Cucumbers
      if (currentTarget!.matches(".addCucumbers"))
        this.addIngredients(this.getAddOns()[1]);
      if (currentTarget!.matches(".removeCucumbers"))
        this.removeIngredients(this.getAddOns()[1]);
      //Bell Pepper
      if (currentTarget!.matches(".addBellPepper"))
        this.addIngredients(this.getAddOns()[2]);
      if (currentTarget!.matches(".removeBellPepper"))
        this.removeIngredients(this.getAddOns()[2]);
      //Tomatoes
      if (currentTarget!.matches(".addTomatoes"))
        this.addIngredients(this.getAddOns()[3]);
      if (currentTarget!.matches(".removeTomatoes"))
        this.removeIngredients(this.getAddOns()[3]);
      //Corn
      if (currentTarget!.matches(".addCorn"))
        this.addIngredients(this.getAddOns()[4]);
      if (currentTarget!.matches(".removeCorn"))
        this.removeIngredients(this.getAddOns()[4]);
      //Tuna Fish
      if (currentTarget!.matches(".addTunaFish"))
        this.addIngredients(this.getAddOns()[5]);
      if (currentTarget!.matches(".removeTunaFish"))
        this.removeIngredients(this.getAddOns()[5]);
      //Feta Cheese
      if (currentTarget!.matches(".addFetaCheese"))
        this.addIngredients(this.getAddOns()[6]);
      if (currentTarget!.matches(".removeFetaCheese"))
        this.removeIngredients(this.getAddOns()[6]);
      //Olives
      if (currentTarget!.matches(".addOlives"))
        this.addIngredients(this.getAddOns()[7]);
      if (currentTarget!.matches(".removeOlives"))
        this.removeIngredients(this.getAddOns()[7]);
      //Potatoes
      if (currentTarget!.matches(".addPotatoes"))
        this.addIngredients(this.getAddOns()[8]);
      if (currentTarget!.matches(".removePotatoes"))
        this.removeIngredients(this.getAddOns()[8]);
      //Onion
      if (currentTarget!.matches(".addOnion"))
        this.addIngredients(this.getAddOns()[9]);
      if (currentTarget!.matches(".removeOnion"))
        this.removeIngredients(this.getAddOns()[9]);
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
    this.createAddOns(parent);
    this.createMustHaves(parent);
    //this.renderItem(parent);
  }

  resetSalad() {
    this.allComponents = [];
    let price = this.getPrice();
    price = 0;
  }
}
export { Salad };
