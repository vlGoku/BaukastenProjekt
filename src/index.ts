import "../src/styles.scss";
import { createTag, createMultiTags } from "./modules/functions";
import { createHeader } from "./modules/header";
import { createMenu } from "./modules/menu";
import { createFooter } from "./modules/footer";

function init() {
  createHeader();
  console.log("header created");
  createMenu();
  console.log("menu created");
  createFooter();
  console.log("footer created");
}

init();
