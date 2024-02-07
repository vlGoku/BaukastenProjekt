import { Food } from "./foodAbstract";
import { createTag, createMultiTags } from "./functions";

class Pasta extends Food {
  constructor() {
    super(
      "pasta",
      8.5,
      ["Fusilli", "Penne", "Farfalle", "Spaghetti", "Tagliatelle", "Rigatoni"],
      [
        "Onion",
        "Garlic",
        "Bell Pepper",
        "Pepperoni",
        "Corn",
        "Mushrooms",
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
      ["Tomato Sauce", "Cream Sauce"]
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
      tag.innerHTML = `<button class="base${
        this.getBase()[getNameIndex]
      }"><i class="fa-solid fa-plus"></i></button>`;
      nextSibling?.appendChild(tag);
      nextSibling = nextSibling!.nextSibling;
      getNameIndex++;
    }

    // Buttons

    baseList.addEventListener("click", (e) => {
      // TODO was working fine now sometimes you have to click more then once
      let currentTarget = e.target as HTMLButtonElement;
      // todo try to exchange for switch statement
      if (currentTarget!.matches(".baseFusilli")) {
        this.addIngredients("Fusilli");
        const next = document.getElementById("pastaAddOns");
        next?.classList.remove("hidden");
        base.remove();
      }
      if (currentTarget!.matches(".basePenne")) {
        this.addIngredients("Penne");
        const next = document.getElementById("pastaAddOns");
        next?.classList.remove("hidden");
        base.remove();
      }
      if (currentTarget!.matches(".baseFarfalle")) {
        this.addIngredients("Farfalle");
        const next = document.getElementById("pastaAddOns");
        next?.classList.remove("hidden");
        base.remove();
      }
      if (currentTarget!.matches(".baseSpaghetti")) {
        this.addIngredients("Spaghetti");
        const next = document.getElementById("pastaAddOns");
        next?.classList.remove("hidden");
        base.remove();
      }
      if (currentTarget!.matches(".baseRigatoni")) {
        this.addIngredients("Rigatoni");
        const next = document.getElementById("pastaAddOns");
        next?.classList.remove("hidden");
        base.remove();
      }
      if (currentTarget!.matches(".baseTagliatelle")) {
        this.addIngredients("Tagliatelle");
        const next = document.getElementById("pastaAddOns");
        next?.classList.remove("hidden");
        base.remove();
      }
      console.log(this.allComponents);
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

    basisList.addEventListener("click", (e) => {
      let currentTarget = e.target as HTMLButtonElement;

      if (currentTarget!.matches(".mustTomatoSauce")) {
        this.addIngredients("Tomato Sauce");
        basisNode.remove();
      }
      if (currentTarget!.matches(".mustCreamSauce")) {
        this.addIngredients("Cream Sauce");
        basisNode.remove();
      }

      this.updateItem(parent);

      console.log(this.allComponents);
    });
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
      ].replace(/ /g, "")}"><i class="fa-solid fa-plus"></i></button>
      <button class="remove${this.getAddOns()[getNameIndex].replace(
        / /g,
        ""
      )}"><i class="fa-solid fa-minus"></i></button>`;
      nextSibling?.appendChild(tag);
      //console.log(nextSibling);
      nextSibling = nextSibling!.nextSibling;
      getNameIndex++;
    }
    // Buttons
    const button = createTag(basisNode, "button", null, "next_button", "next");
    button.addEventListener("click", () => {
      const next = document.getElementById("pastaMustHaves");
      next?.classList.remove("hidden");
      basisNode.remove();
    });
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
      //Mushroom
      if (currentTarget!.matches(".addMushroom"))
        this.addIngredients(this.getAddOns()[5]);
      if (currentTarget!.matches(".removeMushroom"))
        this.removeIngredients(this.getAddOns()[5]);
      //Zucchini
      if (currentTarget!.matches(".addZucchini"))
        this.addIngredients(this.getAddOns()[6]);
      if (currentTarget!.matches(".removeZucchini"))
        this.removeIngredients(this.getAddOns()[6]);
      //Spinach
      if (currentTarget!.matches(".addSpinach"))
        this.addIngredients(this.getAddOns()[7]);
      if (currentTarget!.matches(".removeSpinach"))
        this.removeIngredients(this.getAddOns()[7]);
      //Olives
      if (currentTarget!.matches(".addOlives"))
        this.addIngredients(this.getAddOns()[8]);
      if (currentTarget!.matches(".removeOlives"))
        this.removeIngredients(this.getAddOns()[8]);
      //Basil
      if (currentTarget!.matches(".addBasil"))
        this.addIngredients(this.getAddOns()[9]);
      if (currentTarget!.matches(".removeBasil"))
        this.removeIngredients(this.getAddOns()[9]);
      //Sage
      if (currentTarget!.matches(".addSage"))
        this.addIngredients(this.getAddOns()[10]);
      if (currentTarget!.matches(".removeSage"))
        this.removeIngredients(this.getAddOns()[10]);
      //Minced Meat
      if (currentTarget!.matches(".addMincedMeat"))
        this.addIngredients(this.getAddOns()[11]);
      if (currentTarget!.matches(".removeMincedMeat"))
        this.removeIngredients(this.getAddOns()[11]);
      //Tuna Fish
      if (currentTarget!.matches(".addTunaFish"))
        this.addIngredients(this.getAddOns()[12]);
      if (currentTarget!.matches(".removeTunaFish"))
        this.removeIngredients(this.getAddOns()[12]);
      //Mozzarella
      if (currentTarget!.matches(".addMozzarella"))
        this.addIngredients(this.getAddOns()[13]);
      if (currentTarget!.matches(".removeMozzarella"))
        this.removeIngredients(this.getAddOns()[13]);
      //Parmesan
      if (currentTarget!.matches(".addParmesan"))
        this.addIngredients(this.getAddOns()[14]);
      if (currentTarget!.matches(".removeParmesan"))
        this.removeIngredients(this.getAddOns()[14]);
      //Gorgonzola
      if (currentTarget!.matches(".addGorgonzola"))
        this.addIngredients(this.getAddOns()[15]);
      if (currentTarget!.matches(".removeGorgonzola"))
        this.removeIngredients(this.getAddOns()[15]);
      console.log(this.allComponents);
    });
  }
  updateItem(parent: HTMLElement) {
    const description = document.querySelector(".displayItem") as HTMLElement;
    description!.remove();
    this.renderItem(parent);
  }

  createItems(parent: HTMLElement) {
    this.createBase(parent);
    this.createAddOns(parent);
    this.createMustHaves(parent);
    this.renderItem(parent);
  }
}

export { Pasta };
