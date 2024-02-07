import { createTag, createMultiTags } from "./functions";

class Drink {
  private id: string;
  constructor(
    public type: string,
    public size: number,
    public underage: boolean,
    private price: number
  ) {
    this.type = type;
    this.size = size;
    this.underage = underage;
    this.price = price;
    this.id = this.createId();
  }
  // Functions
  createId() {
    return Math.random().toString(8).slice(2);
  }
  getId() {
    return this.id;
  }

  getPrice() {
    return this.price;
  }

  getType() {
    return this.type;
  }
  getCheckString() {
    return `${this.getType().replace(/ /g, "")}${this.size
      .toString()
      .replace(".", "")}`;
  }
  renderDrink(parent: HTMLElement) {
    const drink = createTag(parent, "div", null, "drinkDisplay", null);
    createTag(drink, "p", null, null, `${this.getType()}, ${this.size}l`);
    createTag(
      drink,
      "p",
      null,
      null,
      `${this.getPrice().toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR",
      })}`
    );
    const buttons = createTag(drink, "div", null, "drinkDisplay", null);
    createTag(
      buttons,
      "button",
      null,
      `add${this.getCheckString()}`,
      `<i class="fa-solid fa-plus">`
    );
    createTag(
      buttons,
      "button",
      null,
      `remove${this.getCheckString()}`,
      `<i class="fa-solid fa-minus">`
    );
  }
  // todo for later use
  // ageWarning() {
  //   if (this.underage === false) {
  //     console.log("Must be over 18 to order");
  //   }
}

export { Drink };
