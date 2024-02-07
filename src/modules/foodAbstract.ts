import { createTag, createMultiTags } from "./functions";

// abstract class Ingredient {
//   name: string;
//   type: string;
//   amount: number;
//   constructor(name: string, type: string) {
//     this.name = name;
//     this.type = type;
//     this.amount = 0;
//   }
//   getAmount(): number {
//     return this.amount;
//   }
//   addAmount() {
//     this.amount++;
//   }
//   decreaseAmount() {
//     this.amount--;
//   }
// }

abstract class Food {
  public allComponents: string[];
  private id: string;

  constructor(
    public type: string,
    private price: number,
    private base: string[],
    private addOns: string[],
    private mustHaves: string[]
  ) {
    this.type = type;
    this.price = price;
    this.base = base;
    this.addOns = addOns;
    this.mustHaves = mustHaves;
    this.allComponents = [];
    this.id = this.createId();
  }

  // Functions
  createId() {
    return Math.random().toString(8).slice(2);
  }
  getId() {
    return this.id;
  }
  getBase() {
    return this.base;
  }
  getAddOns(): string[] {
    return this.addOns;
  }
  getMustHaves() {
    return this.mustHaves;
  }
  setPrice(newPrice: number) {
    this.price = newPrice;
  }
  getPrice() {
    return this.price;
  }
  getAllComponents() {
    return this.allComponents;
  }
  removeLastAddedIngredient() {
    this.allComponents.pop();
  }
  addIngredients(item: string) {
    if (this.allComponents.includes(item)) {
      console.log(this.renderWarning());
    }
    this.allComponents.push(item);
  }
  removeIngredients(item: string) {
    let index: number = this.allComponents.lastIndexOf(item);
    this.allComponents.splice(index, 1);
  }
  calculatePrice(): number {
    let currentPrice = this.getPrice();
    let currentLength = this.getAllComponents().length;
    currentPrice =
      currentLength > 7
        ? currentPrice + (currentLength - 7) * 1.5
        : this.getPrice();
    console.log(currentLength, currentPrice);

    return currentPrice;
  }

  renderItem(parent: HTMLElement) {
    let currentPrice = this.calculatePrice();
    const display = createTag(parent, "div", null, "displayItem", null);
    createTag(display, "p", null, null, `Current ingredients are:`);

    const displayList = createTag(display, "ul", null, null, null);
    createMultiTags(
      displayList,
      "li",
      this.allComponents.length,
      this.allComponents,
      false,
      false
    );
    createTag(
      display,
      "p",
      null,
      null,
      `The current price is: ${currentPrice.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR",
      })}`
    );
    console.log(`The current price is ${currentPrice}!`);
  }

  updateItem(parent: HTMLElement) {
    const description = document.querySelector(".displayItem");
    description!.remove();
    this.renderItem(parent);
  }

  renderWarning() {
    const parent = document.getElementById("ingredientList");
    createTag(
      parent,
      "h3",
      "warning",
      "warning",
      "You've selected an Ingredient double!"
    );
  }
}

export { Food };
