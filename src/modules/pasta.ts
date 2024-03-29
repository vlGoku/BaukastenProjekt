import { Food } from "./foodAbstract";
import { createTag, createMultiTags } from "./functions";
import { Cart } from "./cart";

class Pasta extends Food {
  constructor() {
    super(
      "pasta",
      8.5,
      ["Fusilli", "Penne", "Farfalle", "Spaghetti", "Tagliatelle", "Rigatoni"],
      //Pumpkin, Lenses, Jalapeno added
      [
        "Onion",
        "Garlic",
        "Bell Pepper",
        "Pepperoni",
        "Corn",
        "Lenses",
        "Mushrooms",
        "Pumpkin",
        "Jalapeno",
        "Zucchini",
        "Spinach",
        "Olives",
        "Basil",
        "Sage",
        "Minced Meat",
        "Tuna Fish",
        "Mozzarella",
        "Parmesan",
        "Gorgonzola",
      ],
      //Olive Oil added
      ["Tomato Sauce", "Cream Sauce", "Olive Oil"]
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
      // TODO was working fine now sometimes you have to click more then once
      //TODO (cm) in Einzelschritten durchgehen um das Problem zu finden.
      let currentTarget = e.target as HTMLButtonElement;
      // todo try to exchange for switch statement
      if (currentTarget!.matches(".baseFusilli")) {
        this.addIngredients("Fusilli");
        const next = document.getElementById("pastaMustHaves");
        next?.classList.remove("hidden");
        base.remove();
      }
      if (currentTarget!.matches(".basePenne")) {
        this.addIngredients("Penne");
        const next = document.getElementById("pastaMustHaves");
        next?.classList.remove("hidden");
        base.remove();
      }
      if (currentTarget!.matches(".baseFarfalle")) {
        this.addIngredients("Farfalle");
        const next = document.getElementById("pastaMustHaves");
        next?.classList.remove("hidden");
        base.remove();
      }
      if (currentTarget!.matches(".baseSpaghetti")) {
        this.addIngredients("Spaghetti");
        const next = document.getElementById("pastaMustHaves");
        next?.classList.remove("hidden");
        base.remove();
      }
      if (currentTarget!.matches(".baseRigatoni")) {
        this.addIngredients("Rigatoni");
        const next = document.getElementById("pastaMustHaves");
        next?.classList.remove("hidden");
        base.remove();
      }
      if (currentTarget!.matches(".baseTagliatelle")) {
        this.addIngredients("Tagliatelle");
        const next = document.getElementById("pastaMustHaves");
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
        const next = document.getElementById("pastaAddOns");
        next?.classList.remove("hidden");
        basisNode.remove();
        const addPastaToCart = document.getElementById("pastaToCartBtn");
        if (addPastaToCart) {
          addPastaToCart.classList.remove("hidden");
        }
      }
      if (currentTarget!.matches(".mustCreamSauce")) {
        this.addIngredients("Cream Sauce");
        const next = document.getElementById("pastaAddOns");
        next?.classList.remove("hidden");
        basisNode.remove();
        const addPastaToCart = document.getElementById("pastaToCartBtn");
        if (addPastaToCart) {
          addPastaToCart.classList.remove("hidden");
        }
      }
      if (currentTarget!.matches(".mustOliveOil")) {
        this.addIngredients("Olive Oil");
        const next = document.getElementById("pastaAddOns");
        next?.classList.remove("hidden");
        basisNode.remove();
        const addPastaToCart = document.getElementById("pastaToCartBtn");
        if (addPastaToCart) {
          addPastaToCart.classList.remove("hidden");
        }
      }
      this.updateItem(parent);
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
    /* const button = createTag(basisNode, "button", null, "next_button", "next");
    button.addEventListener("click", () => {
      const next = document.getElementById("pastaMustHaves");
      next?.classList.remove("hidden");
      basisNode.remove();
    }); */
    basisList.addEventListener("click", (e) => {
      // TODO simplify later | rework
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
      //Lenses
      if (currentTarget!.matches(".addLenses"))
        this.addIngredients(this.getAddOns()[5]);
      if (currentTarget!.matches(".removeLenses"))
        this.removeIngredients(this.getAddOns()[5]);
      //Mushrooms
      if (currentTarget!.matches(".addMushrooms"))
        this.addIngredients(this.getAddOns()[6]);
      if (currentTarget!.matches(".removeMushrooms"))
        this.removeIngredients(this.getAddOns()[6]);
      //Pumpkin
      if (currentTarget!.matches(".addPumpkin"))
        this.addIngredients(this.getAddOns()[7]);
      if (currentTarget!.matches(".removePumpkin"))
        this.removeIngredients(this.getAddOns()[7]);
      //Jalapeno
      if (currentTarget!.matches(".addJalapeno"))
        this.addIngredients(this.getAddOns()[8]);
      if (currentTarget!.matches(".removeJalapeno"))
        this.removeIngredients(this.getAddOns()[8]);
      //Zucchini
      if (currentTarget!.matches(".addZucchini"))
        this.addIngredients(this.getAddOns()[9]);
      if (currentTarget!.matches(".removeZucchini"))
        this.removeIngredients(this.getAddOns()[9]);
      //Spinach
      if (currentTarget!.matches(".addSpinach"))
        this.addIngredients(this.getAddOns()[10]);
      if (currentTarget!.matches(".removeSpinach"))
        this.removeIngredients(this.getAddOns()[10]);
      //Olives
      if (currentTarget!.matches(".addOlives"))
        this.addIngredients(this.getAddOns()[11]);
      if (currentTarget!.matches(".removeOlives"))
        this.removeIngredients(this.getAddOns()[11]);
      //Basil
      if (currentTarget!.matches(".addBasil"))
        this.addIngredients(this.getAddOns()[12]);
      if (currentTarget!.matches(".removeBasil"))
        this.removeIngredients(this.getAddOns()[12]);
      //Sage
      if (currentTarget!.matches(".addSage"))
        this.addIngredients(this.getAddOns()[13]);
      if (currentTarget!.matches(".removeSage"))
        this.removeIngredients(this.getAddOns()[13]);
      //Minced Meat
      if (currentTarget!.matches(".addMincedMeat"))
        this.addIngredients(this.getAddOns()[14]);
      if (currentTarget!.matches(".removeMincedMeat"))
        this.removeIngredients(this.getAddOns()[14]);
      //Tuna Fish
      if (currentTarget!.matches(".addTunaFish"))
        this.addIngredients(this.getAddOns()[15]);
      if (currentTarget!.matches(".removeTunaFish"))
        this.removeIngredients(this.getAddOns()[15]);
      //Mozzarella
      if (currentTarget!.matches(".addMozzarella"))
        this.addIngredients(this.getAddOns()[16]);
      if (currentTarget!.matches(".removeMozzarella"))
        this.removeIngredients(this.getAddOns()[16]);
      //Parmesan
      if (currentTarget!.matches(".addParmesan"))
        this.addIngredients(this.getAddOns()[17]);
      if (currentTarget!.matches(".removeParmesan"))
        this.removeIngredients(this.getAddOns()[17]);
      //Gorgonzola
      if (currentTarget!.matches(".addGorgonzola"))
        this.addIngredients(this.getAddOns()[18]);
      if (currentTarget!.matches(".removeGorgonzola"))
        this.removeIngredients(this.getAddOns()[18]);
      this.updateItem(parent);
      //console.log(this.allComponents);
    });
  }
  updateItem(parent: HTMLElement) {
    const description = document.querySelector(".displayItem") as HTMLElement;
    //TODO: Die If Kondition verhindert dass das Scipt abstürzt wenn das Element mioch nicht existiert#
    //TODO: Das musst du auch bei salsd.ts usw machen.
    if (description) description.remove();
    this.renderItem(parent);
  }

  createItems(parent: HTMLElement) {
    this.createBase(parent);
    this.createAddOns(parent);
    this.createMustHaves(parent);
    //this.renderItem(parent);
  }

  resetPasta() {
    this.allComponents = [];
    let price = this.getPrice();
    price = 0;
  }
}

export { Pasta };
