(()=>{"use strict";var e={292:(e,t,n)=>{n.d(t,{c:()=>r});var a=n(500),d=n.n(a),s=n(312),i=n.n(s)()(d());i.push([e.id,'*{box-sizing:border-box;margin:0;text-align:center;font-family:"M PLUS Rounded 1c", sans-serif;font-weight:400;font-style:normal}.hidden{display:none !important}.notEmpty{color:blue !important}header{background-color:#556b2f;display:grid;grid-template-columns:80px 80% 1fr;align-items:center;color:white;padding-top:0.5em;padding-bottom:0.5em}.logo{align-self:center;font-size:50pt;width:100%;height:80px;grid-column:1}.btnCartHead{grid-column:3;background-color:#556b2f;color:white;font-size:25pt;border-style:none}.btnCartHead:hover{cursor:pointer;transform:scale(1.5);transition:0.3s ease}.heading{grid-column:2;text-align:left}button{cursor:pointer}button i{pointer-events:none}.menu{background-color:#fafafa;display:flex;flex-direction:column;min-height:100vh}.menu h2{padding:2em}.menu li{list-style-type:none}.menu li a{text-decoration:none;color:black}.displayItem{border-radius:20px;background-color:#b6b3b3c8;color:#696666;margin-left:2em;padding-top:1em;padding-bottom:1em;width:75%;height:fit-content;font-size:smaller}.pizzaHeading,.pastaHeading,.saladHeading,.drinkHeading{display:flex;margin-top:1em;flex-direction:row;justify-content:center;padding-left:20%;padding-right:20%;background-color:darkgoldenrod;color:white}.ingredientsPizza,.ingredientsPasta,.ingredientsSalad{padding-top:1em;padding-bottom:2em;padding-left:20%;padding-right:5%;display:grid;grid-template-columns:1fr 1fr}.ingredientsPizza .displayItem,.ingredientsPasta .displayItem,.ingredientsSalad .displayItem{grid-column:2}.base{grid-column:1}.IngredList{display:grid;grid-column:2fr 1fr}.IngredList ul{grid-column:1}.IngredList li{grid-column:2;display:flex;justify-content:space-between;float:left}.btnPizza,.btnPasta,.btnSalad,.btnDrink{border:none;font-size:larger;background-color:transparent;color:rgba(252,252,252,0.517);padding:none;margin-top:-5px}.btnPizza:hover,.btnPasta:hover,.btnSalad:hover{color:#fff}.drinkDisplay{display:flex;justify-content:center}.drinkDisplay p{margin:1em}.drinkDisplay button{margin:1em;height:fit-content}#cartOverlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.5);z-index:9999}#cartOverlay.hidden{display:none}.cardDisplay{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#f9f9f9;padding:20px;border-radius:8px;box-shadow:0 0 10px rgba(0,0,0,0.1);width:80vw;max-width:500px;max-height:80vh;overflow-y:auto}.cardDisplay .totalOrder{margin-bottom:20px;font-size:24px;color:#333}.cardDisplay #elementTypeHeader{font-size:22px;margin-bottom:10px;color:#555}.cardDisplay #ingredList{list-style-type:none;padding:0;margin:0;color:#666}.cardDisplay #ingredList li{margin-bottom:5px;font-size:18px}.cardDisplay #ingredList li:before{content:"•";margin-right:5px;color:#999}.cardDisplay #closeBtn,.cardDisplay #deleteAll{background-color:transparent;border:none;font-size:16px;cursor:pointer;color:#777}.cardDisplay #closeBtn:hover,.cardDisplay #deleteAll:hover{color:#333}.cardDisplay #closeBtn:focus,.cardDisplay #deleteAll:focus{outline:none}.cardDisplay #closeBtn{position:absolute;top:10px;right:10px}.cardDisplay #deleteAll{position:relative;margin-top:20px;align-self:flex-end}.cardDisplay .buttonDeleteItem{background-color:red;color:white;padding:8px 16px;border:none;border-radius:4px;cursor:pointer;transition:background-color 0.3s ease}.cardDisplay .buttonDeleteItem:hover{background-color:darkred}.cardDisplay .buttonDeleteItem:focus{outline:none}footer{margin-top:auto;background-color:#89938e;padding:1em;display:flex;flex-direction:row;justify-content:space-evenly}footer li{list-style-type:none;display:inline-block}footer a{text-decoration:none;color:black;padding:1em}\n',""]);const r=i},312:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,d,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);a&&i[c[0]]||(void 0!==s&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=s),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),d&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=d):c[4]="".concat(d)),t.push(c))}},t}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var s={},i=[],r=0;r<e.length;r++){var o=e[r],l=a.base?o[0]+a.base:o[0],c=s[l]||0,u="".concat(l," ").concat(c);s[l]=c+1;var m=n(u),g={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==m)t[m].references++,t[m].updater(g);else{var p=d(g,a);a.byIndex=r,t.splice(r,0,{identifier:u,updater:p,references:1})}i.push(u)}return i}function d(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,d){var s=a(e=e||[],d=d||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var r=n(s[i]);t[r].references--}for(var o=a(e,d),l=0;l<s.length;l++){var c=n(s[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}s=o}}},176:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},808:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},120:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var d=void 0!==n.layer;d&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,d&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},936:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var d=t[a];if(void 0!==d)return d.exports;var s=t[a]={id:a,exports:{}};return e[a](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(596),t=n.n(e),a=n(520),d=n.n(a),s=n(176),i=n.n(s),r=n(120),o=n.n(r),l=n(808),c=n.n(l),u=n(936),m=n.n(u),g=n(292),p={};function h(e,t,n,a,d){var s=document.createElement(t);return null!=e?e.append(s):document.getElementById("content").append(s),null!=n&&(s.id=n),null!=a&&(s.className=a),null!=d&&(s.innerHTML=d),s}function v(e,t,n,a,d,s){for(var i=0;i<n;i++)d?h(e,t,null,a[i],'<a href="#'+a[i].replace(/ /g,"-")+'">'+a[i]+"</a>"):s?h(e,t,null,null,'<a class="'+a[i]+'" href="#"></a>'):h(e,t,null,a[i].replace(/ /g,"_"),a[i])}p.styleTagTransform=m(),p.setAttributes=o(),p.insert=i().bind(null,"head"),p.domAPI=d(),p.insertStyleElement=c(),t()(g.c,p),g.c&&g.c.locals&&g.c.locals;var f,y=function(){function e(e,t,n,a,d){this.type=e,this.price=t,this.base=n,this.addOns=a,this.mustHaves=d,this.type=e,this.price=t,this.base=n,this.addOns=a,this.mustHaves=d,this.allComponents=[],this.id=this.createId()}return e.prototype.createId=function(){return Math.random().toString(8).slice(2)},e.prototype.getId=function(){return this.id},e.prototype.getBase=function(){return this.base},e.prototype.getAddOns=function(){return this.addOns},e.prototype.getMustHaves=function(){return this.mustHaves},e.prototype.setPrice=function(e){return this.price=e},e.prototype.getPrice=function(){return this.price},e.prototype.getAllComponents=function(){return this.allComponents},e.prototype.removeLastAddedIngredient=function(){this.allComponents.pop()},e.prototype.addIngredients=function(e){this.allComponents.includes(e)||this.allComponents.push(e)},e.prototype.removeIngredients=function(e){var t=this.allComponents.lastIndexOf(e);this.allComponents.splice(t,1)},e.prototype.calculatePrice=function(){var e=this.getPrice(),t=this.getAllComponents().length;return e=t>7?e+1.5*(t-7):this.getPrice(),console.log(t,e),e},e.prototype.renderItem=function(e){var t=this.calculatePrice(),n=h(e,"div",null,"displayItem",null);h(n,"p",null,null,"Current ingredients are:"),v(h(n,"ul",null,null,null),"li",this.allComponents.length,this.allComponents,!1,!1),h(n,"p",null,null,"The current price is: ".concat(t.toLocaleString("de-DE",{style:"currency",currency:"EUR"}))),console.log("The current price is ".concat(t,"!"))},e.prototype.updateItem=function(e){document.querySelector(".displayItem").remove(),this.renderItem(e)},e.prototype.renderWarning=function(){h(document.getElementById("ingredientList"),"h3","warning","warning","You've selected an Ingredient double!")},e}(),I=(f=function(e,t){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},f(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}f(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),O=function(e){function t(){return e.call(this,"pizza",9.7,["Wheat","Whole Grain"],["Onion","Garlic","Bell Pepper","Pepperoni","Corn","Mushrooms","Zucchini","Fried Egg","Spinach","Pineapple","Ham","Salami","Bacon","Gouda Cheese","Mozzarella","Parmesan","Blue Cheese","Cheddar","Olives","Pumpkin","Broccoli"],["Tomato Sauce","White Sauce"])||this}return I(t,e),t.prototype.createBase=function(e){var t,n=this,a=h(e,"div","".concat(this.type,"Base"),"base",null),d=h(a,"ul",null,"IngredList","Choose your base:");v(d,"li",this.getBase().length,this.getBase(),!1,!1);for(var s=null===(t=d.firstChild)||void 0===t?void 0:t.nextSibling,i=0;null!==s;){var r=document.createElement("div");r.innerHTML='<button class="base'.concat(this.getBase()[i].replace(/ /g,"_"),'"><i class="fa-solid fa-plus"></i></button>'),null==s||s.appendChild(r),s=s.nextSibling,i++}d.addEventListener("click",(function(t){var d,s=t.target;s.matches(".baseWheat")&&(n.addIngredients("Wheat"),null==(d=document.getElementById("pizzaMustHaves"))||d.classList.remove("hidden"),a.remove()),s.matches(".baseWhole_Grain")&&(n.addIngredients("Whole Grain"),null==(d=document.getElementById("pizzaMustHaves"))||d.classList.remove("hidden"),a.remove()),n.updateItem(e)}))},t.prototype.createMustHaves=function(e){var t,n=this,a=h(e,"div","".concat(this.type,"MustHaves"),"mustHave",null);a.classList.add("hidden");var d=h(a,"ul",null,"IngredList","Pick a sauce:");v(d,"li",this.getMustHaves().length,this.getMustHaves(),!1,!1),d.addEventListener("click",(function(t){var d=t.target;if(d.matches(".mustTomatoSauce")&&(n.addIngredients("Tomato Sauce"),null==(s=document.getElementById("pizzaAddOns"))||s.classList.remove("hidden"),a.remove(),(i=document.getElementById("pizzaToCartBtn"))&&i.classList.remove("hidden")),d.matches(".mustWhiteSauce")){var s;n.addIngredients("White Sauce"),null==(s=document.getElementById("pizzaAddOns"))||s.classList.remove("hidden"),a.remove();var i=document.getElementById("pizzaToCartBtn");console.log(i),i&&i.classList.remove("hidden")}n.updateItem(e)}));for(var s=null===(t=d.firstChild)||void 0===t?void 0:t.nextSibling,i=0;null!==s;){var r=document.createElement("div");r.innerHTML='<button class="must'.concat(this.getMustHaves()[i].replace(/ /g,""),'"><i class="fa-solid fa-plus"></i></button>'),null==s||s.appendChild(r),s=s.nextSibling,i++}},t.prototype.createAddOns=function(e){var t,n=this,a=h(e,"div","".concat(this.type,"AddOns"),"addOns",null),d=h(a,"ul",null,"IngredList","Choose your add-ons:");v(d,"li",this.getAddOns().length,this.getAddOns(),!1,!1),a.classList.add("hidden");for(var s=null===(t=d.firstChild)||void 0===t?void 0:t.nextSibling,i=0;null!==s;){var r=document.createElement("div");r.innerHTML='<button class="add'.concat(this.getAddOns()[i].replace(/ /g,""),'"><i class="fa-solid fa-plus"></i></button>'),null==s||s.appendChild(r),s=s.nextSibling,i++}d.addEventListener("click",(function(t){var a=t.target;a.matches(".addOnion")&&n.addIngredients(n.getAddOns()[0]),a.matches(".removeOnion")&&n.removeIngredients(n.getAddOns()[0]),a.matches(".addGarlic")&&n.addIngredients(n.getAddOns()[1]),a.matches(".removeGarlic")&&n.removeIngredients(n.getAddOns()[1]),a.matches(".addBellPepper")&&n.addIngredients(n.getAddOns()[2]),a.matches(".removeBellPepper")&&n.removeIngredients(n.getAddOns()[2]),a.matches(".addPepperoni")&&n.addIngredients(n.getAddOns()[3]),a.matches(".removePepperoni")&&n.removeIngredients(n.getAddOns()[3]),a.matches(".addCorn")&&n.addIngredients(n.getAddOns()[4]),a.matches(".removeCorn")&&n.removeIngredients(n.getAddOns()[4]),a.matches(".addMushrooms")&&n.addIngredients(n.getAddOns()[5]),a.matches(".removeMushrooms")&&n.removeIngredients(n.getAddOns()[5]),a.matches(".addZucchini")&&n.addIngredients(n.getAddOns()[6]),a.matches(".removeZucchini")&&n.removeIngredients(n.getAddOns()[6]),a.matches(".addFriedEgg")&&n.addIngredients(n.getAddOns()[7]),a.matches(".removeFriedEgg")&&n.removeIngredients(n.getAddOns()[7]),a.matches(".addSpinach")&&n.addIngredients(n.getAddOns()[8]),a.matches(".removeSpinach")&&n.removeIngredients(n.getAddOns()[8]),a.matches(".addPineapple")&&n.addIngredients(n.getAddOns()[9]),a.matches(".removePineapple")&&n.removeIngredients(n.getAddOns()[9]),a.matches(".addHam")&&n.addIngredients(n.getAddOns()[10]),a.matches(".removeHam")&&n.removeIngredients(n.getAddOns()[10]),a.matches(".addSalami")&&n.addIngredients(n.getAddOns()[11]),a.matches(".removeSalami")&&n.removeIngredients(n.getAddOns()[11]),a.matches(".addBacon")&&n.addIngredients(n.getAddOns()[12]),a.matches(".removeBacon")&&n.removeIngredients(n.getAddOns()[12]),a.matches(".addGoudaCheese")&&n.addIngredients(n.getAddOns()[13]),a.matches(".removeGoudaCheese")&&n.removeIngredients(n.getAddOns()[13]),a.matches(".addMozzarella")&&n.addIngredients(n.getAddOns()[14]),a.matches(".removeMozzarella")&&n.removeIngredients(n.getAddOns()[14]),a.matches(".addParmesan")&&n.addIngredients(n.getAddOns()[15]),a.matches(".removeParmesan")&&n.removeIngredients(n.getAddOns()[15]),a.matches(".addBlueCheese")&&n.addIngredients(n.getAddOns()[16]),a.matches(".removeBlueCheese")&&n.removeIngredients(n.getAddOns()[16]),a.matches(".addCheddar")&&n.addIngredients(n.getAddOns()[17]),a.matches(".removeCheddar")&&n.removeIngredients(n.getAddOns()[17]),a.matches(".addOlives")&&n.addIngredients(n.getAddOns()[18]),a.matches(".removeOlives")&&n.removeIngredients(n.getAddOns()[18]),a.matches(".addPumpkin")&&n.addIngredients(n.getAddOns()[19]),a.matches(".removePumpkin")&&n.removeIngredients(n.getAddOns()[19]),a.matches(".addBroccoli")&&n.addIngredients(n.getAddOns()[20]),a.matches(".removeBroccoli")&&n.removeIngredients(n.getAddOns()[20]),n.updateItem(e)}))},t.prototype.updateItem=function(e){document.querySelector(".displayItem").remove(),this.renderItem(e)},t.prototype.createItems=function(e){this.createBase(e),this.createMustHaves(e),this.createAddOns(e),this.renderItem(e)},t.prototype.resetPizza=function(){this.allComponents=[],this.getPrice()},t}(y),b=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),L=function(e){function t(){return e.call(this,"pasta",8.5,["Fusilli","Penne","Farfalle","Spaghetti","Tagliatelle","Rigatoni"],["Onion","Garlic","Bell Pepper","Pepperoni","Corn","Lenses","Mushrooms","Pumpkin","Jalapeno","Zucchini","Spinach","Olives","Basil","Sage","Minced Meat","Tuna Fish","Mozzarella","Parmesan","Gorgonzola"],["Tomato Sauce","Cream Sauce","Olive Oil"])||this}return b(t,e),t.prototype.createBase=function(e){var t,n=this,a=h(e,"div","".concat(this.type,"Base"),"base",null),d=h(a,"ul",null,"IngredList","Choose your base:");v(d,"li",this.getBase().length,this.getBase(),!1,!1);for(var s=null===(t=d.firstChild)||void 0===t?void 0:t.nextSibling,i=0;null!==s;){var r=document.createElement("div");r.innerHTML='<button class="base'.concat(this.getBase()[i].replace(/ /g,"_"),'"><i class="fa-solid fa-plus"></i></button>'),null==s||s.appendChild(r),s=s.nextSibling,i++}d.addEventListener("click",(function(t){var d,s=t.target;s.matches(".baseFusilli")&&(n.addIngredients("Fusilli"),null==(d=document.getElementById("pastaMustHaves"))||d.classList.remove("hidden"),a.remove()),s.matches(".basePenne")&&(n.addIngredients("Penne"),null==(d=document.getElementById("pastaMustHaves"))||d.classList.remove("hidden"),a.remove()),s.matches(".baseFarfalle")&&(n.addIngredients("Farfalle"),null==(d=document.getElementById("pastaMustHaves"))||d.classList.remove("hidden"),a.remove()),s.matches(".baseSpaghetti")&&(n.addIngredients("Spaghetti"),null==(d=document.getElementById("pastaMustHaves"))||d.classList.remove("hidden"),a.remove()),s.matches(".baseRigatoni")&&(n.addIngredients("Rigatoni"),null==(d=document.getElementById("pastaMustHaves"))||d.classList.remove("hidden"),a.remove()),s.matches(".baseTagliatelle")&&(n.addIngredients("Tagliatelle"),null==(d=document.getElementById("pastaMustHaves"))||d.classList.remove("hidden"),a.remove()),n.updateItem(e)}))},t.prototype.createMustHaves=function(e){var t,n=this,a=h(e,"div","".concat(this.type,"MustHaves"),"mustHave",null);a.classList.add("hidden");var d=h(a,"ul",null,"IngredList","Pick a sauce:");v(d,"li",this.getMustHaves().length,this.getMustHaves(),!1,!1),d.addEventListener("click",(function(t){var d,s,i=t.target;i.matches(".mustTomatoSauce")&&(n.addIngredients("Tomato Sauce"),null==(d=document.getElementById("pastaAddOns"))||d.classList.remove("hidden"),a.remove(),(s=document.getElementById("pastaToCartBtn"))&&s.classList.remove("hidden")),i.matches(".mustCreamSauce")&&(n.addIngredients("Cream Sauce"),null==(d=document.getElementById("pastaAddOns"))||d.classList.remove("hidden"),a.remove(),(s=document.getElementById("pastaToCartBtn"))&&s.classList.remove("hidden")),i.matches(".mustOliveOil")&&(n.addIngredients("Olive Oil"),null==(d=document.getElementById("pastaAddOns"))||d.classList.remove("hidden"),a.remove(),(s=document.getElementById("pastaToCartBtn"))&&s.classList.remove("hidden")),n.updateItem(e)}));for(var s=null===(t=d.firstChild)||void 0===t?void 0:t.nextSibling,i=0;null!==s;){var r=document.createElement("div");r.innerHTML='<button class="must'.concat(this.getMustHaves()[i].replace(/ /g,""),'"><i class="fa-solid fa-plus"></i></button>'),null==s||s.appendChild(r),s=s.nextSibling,i++}},t.prototype.createAddOns=function(e){var t,n=this,a=h(e,"div","".concat(this.type,"AddOns"),"addOns",null),d=h(a,"ul",null,"IngredList","Choose your add-ons:");v(d,"li",this.getAddOns().length,this.getAddOns(),!1,!1),a.classList.add("hidden");for(var s=null===(t=d.firstChild)||void 0===t?void 0:t.nextSibling,i=0;null!==s;){var r=document.createElement("div");r.innerHTML='<button class="add'.concat(this.getAddOns()[i].replace(/ /g,""),'"><i class="fa-solid fa-plus"></i></button>'),null==s||s.appendChild(r),s=s.nextSibling,i++}d.addEventListener("click",(function(t){var a=t.target;a.matches(".addOnion")&&n.addIngredients(n.getAddOns()[0]),a.matches(".removeOnion")&&n.removeIngredients(n.getAddOns()[0]),a.matches(".addGarlic")&&n.addIngredients(n.getAddOns()[1]),a.matches(".removeGarlic")&&n.removeIngredients(n.getAddOns()[1]),a.matches(".addBellPepper")&&n.addIngredients(n.getAddOns()[2]),a.matches(".removeBellPepper")&&n.removeIngredients(n.getAddOns()[2]),a.matches(".addPepperoni")&&n.addIngredients(n.getAddOns()[3]),a.matches(".removePepperoni")&&n.removeIngredients(n.getAddOns()[3]),a.matches(".addCorn")&&n.addIngredients(n.getAddOns()[4]),a.matches(".removeCorn")&&n.removeIngredients(n.getAddOns()[4]),a.matches(".addLenses")&&n.addIngredients(n.getAddOns()[5]),a.matches(".removeLenses")&&n.removeIngredients(n.getAddOns()[5]),a.matches(".addMushrooms")&&n.addIngredients(n.getAddOns()[6]),a.matches(".removeMushrooms")&&n.removeIngredients(n.getAddOns()[6]),a.matches(".addPumpkin")&&n.addIngredients(n.getAddOns()[7]),a.matches(".removePumpkin")&&n.removeIngredients(n.getAddOns()[7]),a.matches(".addJalapeno")&&n.addIngredients(n.getAddOns()[8]),a.matches(".removeJalapeno")&&n.removeIngredients(n.getAddOns()[8]),a.matches(".addZucchini")&&n.addIngredients(n.getAddOns()[9]),a.matches(".removeZucchini")&&n.removeIngredients(n.getAddOns()[9]),a.matches(".addSpinach")&&n.addIngredients(n.getAddOns()[10]),a.matches(".removeSpinach")&&n.removeIngredients(n.getAddOns()[10]),a.matches(".addOlives")&&n.addIngredients(n.getAddOns()[11]),a.matches(".removeOlives")&&n.removeIngredients(n.getAddOns()[11]),a.matches(".addBasil")&&n.addIngredients(n.getAddOns()[12]),a.matches(".removeBasil")&&n.removeIngredients(n.getAddOns()[12]),a.matches(".addSage")&&n.addIngredients(n.getAddOns()[13]),a.matches(".removeSage")&&n.removeIngredients(n.getAddOns()[13]),a.matches(".addMincedMeat")&&n.addIngredients(n.getAddOns()[14]),a.matches(".removeMincedMeat")&&n.removeIngredients(n.getAddOns()[14]),a.matches(".addTunaFish")&&n.addIngredients(n.getAddOns()[15]),a.matches(".removeTunaFish")&&n.removeIngredients(n.getAddOns()[15]),a.matches(".addMozzarella")&&n.addIngredients(n.getAddOns()[16]),a.matches(".removeMozzarella")&&n.removeIngredients(n.getAddOns()[16]),a.matches(".addParmesan")&&n.addIngredients(n.getAddOns()[17]),a.matches(".removeParmesan")&&n.removeIngredients(n.getAddOns()[17]),a.matches(".addGorgonzola")&&n.addIngredients(n.getAddOns()[18]),a.matches(".removeGorgonzola")&&n.removeIngredients(n.getAddOns()[18]),n.updateItem(e)}))},t.prototype.updateItem=function(e){document.querySelector(".displayItem").remove(),this.renderItem(e)},t.prototype.createItems=function(e){this.createBase(e),this.createAddOns(e),this.createMustHaves(e)},t.prototype.resetPasta=function(){this.allComponents=[],this.getPrice()},t}(y),A=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),C=function(e){function t(){return e.call(this,"salad",6.3,["Romaine","Lollo Rosso","Radicchio","Baby Spinach","Potato Salad","Pasta Salad","Leaf lettuce","Birds Salad"],["Carrots","Cucumbers","Bell Peppers","Tomatoes","Corn","Tuna Fish","Feta Cheese","Olives","Potatoes","Onion"],["Olive Oil and Balsamic Vinegar","Pumpkin-Seed Oil and Apple Cider Vinegar","French Dressing","Yoghurt Dressing"])||this}return A(t,e),t.prototype.createBase=function(e){var t,n=this,a=h(e,"div","".concat(this.type,"Base"),"base",null),d=h(a,"ul",null,"IngredList","Choose your base:");v(d,"li",this.getBase().length,this.getBase(),!1,!1);for(var s=null===(t=d.firstChild)||void 0===t?void 0:t.nextSibling,i=0;null!==s;){var r=document.createElement("div");r.innerHTML='<button class="base'.concat(this.getBase()[i].replace(/ /g,"_"),'"><i class="fa-solid fa-plus"></i></button>'),null==s||s.appendChild(r),s=s.nextSibling,i++}d.addEventListener("click",(function(t){var d,s=t.target;s.matches(".baseRomaine")&&(n.addIngredients("Romaine"),null==(d=document.getElementById("saladMustHaves"))||d.classList.remove("hidden"),a.remove()),s.matches(".baseLollo_Rosso")&&(n.addIngredients("Lollo Rosso"),null==(d=document.getElementById("saladMustHaves"))||d.classList.remove("hidden"),a.remove()),s.matches(".baseRadicchio")&&(n.addIngredients("Radicchio"),null==(d=document.getElementById("saladMustHaves"))||d.classList.remove("hidden"),a.remove()),s.matches(".baseBaby_Spinach")&&(n.addIngredients("Baby Spinach"),null==(d=document.getElementById("saladMustHaves"))||d.classList.remove("hidden"),a.remove()),s.matches(".basePotato_Salad")&&(n.addIngredients("Potato Salad"),null==(d=document.getElementById("saladMustHaves"))||d.classList.remove("hidden"),a.remove()),s.matches(".basePasta_Salad")&&(n.addIngredients("Pasta Salad"),null==(d=document.getElementById("saladMustHaves"))||d.classList.remove("hidden"),a.remove()),s.matches(".baseLeaf_lettuce")&&(n.addIngredients("Leaf lettuce"),null==(d=document.getElementById("saladMustHaves"))||d.classList.remove("hidden"),a.remove()),s.matches(".baseBirds_Salad")&&(n.addIngredients("Bird's Salad"),null==(d=document.getElementById("saladMustHaves"))||d.classList.remove("hidden"),a.remove()),n.updateItem(e)}))},t.prototype.createMustHaves=function(e){var t,n=this,a=h(e,"div","".concat(this.type,"MustHaves"),"mustHave",null);a.classList.add("hidden");var d=h(a,"ul",null,"IngredList","Pick a sauce:");v(d,"li",this.getMustHaves().length,this.getMustHaves(),!1,!1),d.addEventListener("click",(function(t){var d,s,i=t.target;i.matches(".mustOliveOilandBalsamicVinegar")&&(n.addIngredients("Olive Oil and Balsamic Vinegar"),null==(d=document.getElementById("saladAddOns"))||d.classList.remove("hidden"),a.remove(),(s=document.getElementById("saladToCartBtn"))&&s.classList.remove("hidden")),i.matches(".mustPumpkinSeedOilandAppleCiderVinegar")&&(n.addIngredients("Pumpkin-Seed Oil and Apple Cider Vinegar"),null==(d=document.getElementById("saladAddOns"))||d.classList.remove("hidden"),a.remove(),(s=document.getElementById("saladToCartBtn"))&&s.classList.remove("hidden")),i.matches(".mustFrenchDressing")&&(n.addIngredients("French Dressing"),null==(d=document.getElementById("saladAddOns"))||d.classList.remove("hidden"),a.remove(),(s=document.getElementById("saladToCartBtn"))&&s.classList.remove("hidden")),i.matches(".mustYoghurtDressing")&&(n.addIngredients("Yoghurt Dressing"),null==(d=document.getElementById("saladAddOns"))||d.classList.remove("hidden"),a.remove(),(s=document.getElementById("saladToCartBtn"))&&s.classList.remove("hidden")),n.updateItem(e)}));for(var s=null===(t=d.firstChild)||void 0===t?void 0:t.nextSibling,i=0;null!==s;){var r=document.createElement("div");r.innerHTML='<button class="must'.concat(this.getMustHaves()[i].replace(/ /g,"").replace("-",""),'"><i class="fa-solid fa-plus"></i></button>'),null==s||s.appendChild(r),s=s.nextSibling,i++}},t.prototype.createAddOns=function(e){var t,n=this,a=h(e,"div","".concat(this.type,"AddOns"),"addOns",null),d=h(a,"ul",null,"IngredList","Choose your add-ons:");v(d,"li",this.getAddOns().length,this.getAddOns(),!1,!1),a.classList.add("hidden");for(var s=null===(t=d.firstChild)||void 0===t?void 0:t.nextSibling,i=0;null!==s;){var r=document.createElement("div");r.innerHTML='<button class="add'.concat(this.getAddOns()[i].replace(/ /g,""),'"><i class="fa-solid fa-plus"></i></button>'),null==s||s.appendChild(r),s=s.nextSibling,i++}d.addEventListener("click",(function(t){var a=t.target;a.matches(".addCarrots")&&n.addIngredients(n.getAddOns()[0]),a.matches(".removeCarrots")&&n.removeIngredients(n.getAddOns()[0]),a.matches(".addCucumbers")&&n.addIngredients(n.getAddOns()[1]),a.matches(".removeCucumbers")&&n.removeIngredients(n.getAddOns()[1]),a.matches(".addBellPepper")&&n.addIngredients(n.getAddOns()[2]),a.matches(".removeBellPepper")&&n.removeIngredients(n.getAddOns()[2]),a.matches(".addTomatoes")&&n.addIngredients(n.getAddOns()[3]),a.matches(".removeTomatoes")&&n.removeIngredients(n.getAddOns()[3]),a.matches(".addCorn")&&n.addIngredients(n.getAddOns()[4]),a.matches(".removeCorn")&&n.removeIngredients(n.getAddOns()[4]),a.matches(".addTunaFish")&&n.addIngredients(n.getAddOns()[5]),a.matches(".removeTunaFish")&&n.removeIngredients(n.getAddOns()[5]),a.matches(".addFetaCheese")&&n.addIngredients(n.getAddOns()[6]),a.matches(".removeFetaCheese")&&n.removeIngredients(n.getAddOns()[6]),a.matches(".addOlives")&&n.addIngredients(n.getAddOns()[7]),a.matches(".removeOlives")&&n.removeIngredients(n.getAddOns()[7]),a.matches(".addPotatoes")&&n.addIngredients(n.getAddOns()[8]),a.matches(".removePotatoes")&&n.removeIngredients(n.getAddOns()[8]),a.matches(".addOnion")&&n.addIngredients(n.getAddOns()[9]),a.matches(".removeOnion")&&n.removeIngredients(n.getAddOns()[9]),n.updateItem(e)}))},t.prototype.updateItem=function(e){document.querySelector(".displayItem").remove(),this.renderItem(e)},t.prototype.createItems=function(e){this.createBase(e),this.createAddOns(e),this.createMustHaves(e),this.renderItem(e)},t.prototype.resetSalad=function(){this.allComponents=[],this.getPrice()},t}(y),B=function(){function e(e,t,n,a){this.type=e,this.size=t,this.underage=n,this.price=a,this.type=e,this.size=t,this.underage=n,this.price=a,this.id=this.createId()}return e.prototype.createId=function(){return Math.random().toString(8).slice(2)},e.prototype.getId=function(){return this.id},e.prototype.getPrice=function(){return this.price},e.prototype.getType=function(){return this.type},e.prototype.getCheckString=function(){return"".concat(this.getType().replace(/ /g,"")).concat(this.size.toString().replace(".",""))},e.prototype.renderDrink=function(e,t){var n=this,a=h(e,"div",null,"drinkDisplay",null);h(a,"p",null,null,"".concat(this.getType(),", ").concat(this.size,"l")),h(a,"p",null,null,"".concat(this.getPrice().toLocaleString("de-DE",{style:"currency",currency:"EUR"})));var d=h(a,"button",null,"addDrinkToCart",'<i class="fa-solid fa-plus">');d.dataset.drinkType=this.type,d.dataset.drinkSize=this.size.toString();var s=document.getElementById("orderDiv"),i=document.getElementById("totalPrice");d.addEventListener("click",(function(){t.addToCart(n),t.createCartItems(s,n),i instanceof HTMLElement&&(i.innerHTML="Total: ".concat(t.getTotal().toFixed(2).toString(),"€"))}))},e}(),E=function(){function e(){this.order=[],this.totalPrice=this.getTotal()}return e.prototype.getTotal=function(){var e=0;return this.order.forEach((function(t){e+=t.getPrice()})),e},e.prototype.addToCart=function(e){this.order.push(e)},e.prototype.removeFromCart=function(e){var t=this,n=e.getId();this.order.forEach((function(e){e.getId()===n&&t.order.splice(t.order.indexOf(e),1)}))},e.prototype.emptyCart=function(){for(var e=document.getElementById("orderDiv"),t=document.getElementById("totalPrice");null==e?void 0:e.firstChild;)e.removeChild(e.firstChild);this.order=[],t instanceof HTMLElement&&(t.innerHTML="Total: ".concat(this.getTotal().toFixed(2).toString(),"€"));var n=document.getElementById("btn_cartHead");null==n||n.classList.remove("notEmpty")},e.prototype.createCartItems=function(e,t){var n=this,a=h(e,"div","card",null,null);h(a,"button",null,"buttonDeleteItem",'<i class="fa-solid fa-minus"></i>');var d=document.getElementById("btn_cartHead");0!==this.order.length&&(null==d||d.classList.add("notEmpty"));var s=document.querySelectorAll(".buttonDeleteItem"),i=document.getElementById("totalPrice");if(s.forEach((function(e,t){e.addEventListener("click",(function(e){var a=e.target.parentElement;n.order.splice(t,1),null==a||a.remove(),i instanceof HTMLElement&&(i.innerHTML="Total: ".concat(n.getTotal().toFixed(2).toString(),"€")),0===n.order.length&&(null==d||d.classList.remove("notEmpty"))}))})),t instanceof O){var r=h(a,"h3","elementTypeHeader",null,"".concat(t.type+" "+t.getPrice().toFixed(2)+" €"));v(h(r,"ul","ingredList",null,null),"li",t.getAllComponents().length,t.getAllComponents(),!1,!1)}t instanceof L&&(r=h(a,"h3","elementTypeHeader",null,"".concat(t.type+" "+t.getPrice().toFixed(2)+" €")),v(h(r,"ul","ingredList",null,null),"li",t.getAllComponents().length,t.getAllComponents(),!1,!1)),t instanceof C&&(r=h(a,"h3","elementTypeHeader",null,"".concat(t.type+" "+t.getPrice().toFixed(2)+" €")),v(h(r,"ul","ingredList",null,null),"li",t.getAllComponents().length,t.getAllComponents(),!1,!1)),t instanceof B&&h(a,"h3",null,null,"".concat(t.type+" "+t.size+"l "+t.getPrice().toFixed(2)+" €"))},e.prototype.createCart=function(){var e=this,t=h(null,"div","cartOverlay",null,null);t.classList.add("hidden"),document.body.appendChild(t);var n=h(t,"div",null,"cardDisplay",null);h(n,"h2",null,"totalOrder","Your Order:"),h(n,"div","orderDiv",null,null),h(n,"h2","totalPrice",null,"Total: "),h(n,"button","closeBtn",null,"X").addEventListener("click",(function(){t.classList.add("hidden")})),h(n,"button","deleteAll",null,"Delete All").addEventListener("click",(function(){e.emptyCart()}))},e}();!function(){var e=h(null,"header",null,null,null);h(e,"div","header_logo","logo",null).innerHTML='<i class="fa-solid fa-plate-wheat"></i>',h(e,"h1",null,"heading","Ristorante con Kit di Costruzione");var t=h(e,"button","btn_cartHead","btnCartHead",null);t.innerHTML='<i class="fa-solid fa-cart-shopping"></i>',t.addEventListener("click",(function(){var e=document.getElementById("cartOverlay");null==e||e.classList.remove("hidden")}))}(),console.log("header created"),function(){var e=new E;e.createCart();var t=[new B("Beer",.5,!1,3),new B("Beer",.33,!1,2.7),new B("Coca Cola",.5,!1,2.2),new B("Coca Cola",.33,!1,1.8),new B("Sprite",.5,!1,2.2),new B("Sprite",.33,!1,1.8),new B("Apple Juice",.5,!1,1.9),new B("Apple Juice",.33,!1,1.6),new B("Mineral Water",.5,!1,1.7)],n=new O,a=new L,d=new C,s=h(null,"div",null,"menu",null);h(s,"h2",null,"menuDescription","Welcome to Ristorante con Kit di Costruzione!</br> Where you can pick and choose your ingredients.</br>\n    At first you choose one base, then you can add your ingredients of choice.</br>Up to five Ingredients are included in the base price</br>\n    Every other adds a charge of 1,50 to price</br>After that you get to choose what type of sauce/condiment you would like.</br>\n    Enjoy and happy ordering!");var i=h(s,"div",null,null,null),r=h(i,"div",null,"pizzaHeading",null),o=(h(r,"h3",null,null,"Pizza"),h(r,"button",null,"btnPizza",'<i class="fa-solid fa-sort-down"></i>')),l=h(i,"div",null,"ingredientsPizza",null);n.createItems(l);var c=h(i,"button","pizzaToCartBtn",null,"Add to cart");c.classList.add("hidden"),o.addEventListener("click",(function(){l.classList.contains("hidden")?(l.classList.add("ingredientsPizza"),l.classList.remove("hidden")):(l.classList.add("hidden"),l.classList.remove("ingredientsPizza"))}));var u=document.getElementById("orderDiv"),m=document.getElementById("totalPrice");c.addEventListener("click",(function(){var t=document.querySelector(".displayItem"),a=document.getElementById("pizzaAddOns");null==t||t.remove();var d=new O;d.allComponents=n.allComponents,d.setPrice(d.calculatePrice()),e.addToCart(d),null==a||a.classList.add("hidden"),console.log(e.order),n.resetPizza(),n.createItems(l),c.classList.add("hidden"),e.createCartItems(u,d),m instanceof HTMLElement&&(m.innerHTML="Total: ".concat(e.getTotal().toFixed(2).toString(),"€"))}));var g=h(i,"div",null,"pastaHeading",null),p=(h(g,"h3",null,null,"Pasta"),h(g,"button",null,"btnPasta",'<i class="fa-solid fa-sort-down"></i>')),v=h(i,"div",null,"ingredientsPasta",null);a.createItems(v);var f=h(i,"button","pastaToCartBtn",null,"Add to cart");f.classList.add("hidden"),v.classList.add("hidden"),v.classList.remove("ingredientsPasta"),p.addEventListener("click",(function(){v.classList.contains("hidden")?(v.classList.add("ingredientsPasta"),v.classList.remove("hidden")):(v.classList.add("hidden"),v.classList.remove("ingredientsPasta"))})),f.addEventListener("click",(function(){var t=document.querySelector(".displayItem"),n=document.getElementById("pastaAddOns");null==t||t.remove();var d=new L;d.allComponents=a.allComponents,d.setPrice(d.calculatePrice()),e.addToCart(d),null==n||n.classList.add("hidden"),console.log(e.order),a.resetPasta(),a.createItems(v),f.classList.add("hidden"),e.createCartItems(u,d),m instanceof HTMLElement&&(m.innerHTML="Total: ".concat(e.getTotal().toFixed(2).toString(),"€"))}));var y=h(i,"div",null,"saladHeading",null),I=(h(y,"h3",null,null,"Salad"),h(y,"button",null,"btnSalad",'<i class="fa-solid fa-sort-down"></i>')),b=h(i,"div",null,"ingredientsSalad",null);b.classList.add("hidden"),b.classList.remove("ingredientsSalad"),d.createItems(b);var A=h(i,"button","saladToCartBtn",null,"Add to cart");A.classList.add("hidden"),I.addEventListener("click",(function(){b.classList.contains("hidden")?(b.classList.add("ingredientsSalad"),b.classList.remove("hidden")):(b.classList.add("hidden"),b.classList.remove("ingredientsSalad"))})),A.addEventListener("click",(function(){var t=document.querySelector(".displayItem"),n=document.getElementById("saladAddOns");null==t||t.remove();var a=new C;a.allComponents=d.allComponents,a.setPrice(a.calculatePrice()),e.addToCart(a),null==n||n.classList.add("hidden"),console.log(e.order),d.resetSalad(),d.createItems(b),A.classList.add("hidden"),e.createCartItems(u,a),m instanceof HTMLElement&&(m.innerHTML="Total: ".concat(e.getTotal().toFixed(2).toString(),"€"))}));var P=h(i,"div",null,"drinkHeading",null),S=(h(P,"h3",null,null,"Drink"),h(P,"button",null,"btnDrink",'<i class="fa-solid fa-sort-down"></i>')),T=h(i,"div",null,"drinksList",null);T.classList.add("hidden"),T.classList.remove("drinksList");for(var x=0;x<t.length;x++)t[x].renderDrink(T,e);S.addEventListener("click",(function(){T.classList.contains("hidden")?(T.classList.add("drinksList"),T.classList.remove("hidden")):(T.classList.add("hidden"),T.classList.remove("drinksList"))}))}(),console.log("menu created"),h(null,"footer",null,null,null).innerHTML='<ul class="footerSides">\n    <li><a href="#">Impressum</a></li>\n    <li><a href="#">Sitemap</a></li>\n  </ul>\n  <ul class="social">\n    <li><a href="https://www.facebook.com"><i class="fa-brands fa-facebook"></i></a></li>\n    <li><a href="https://twitter.com/?lang=en"><i class="fa-brands fa-twitter"></i></a></li>\n    <li><a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a></i></li>\n  </ul>',console.log("footer created")})()})();