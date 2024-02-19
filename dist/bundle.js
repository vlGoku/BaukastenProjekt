(()=>{"use strict";var e={99:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(81),s=n.n(a),r=n(645),d=n.n(r)()(s());d.push([e.id,'*{box-sizing:border-box;margin:0;text-align:center;font-family:"M PLUS Rounded 1c", sans-serif;font-weight:400;font-style:normal}.hidden{display:none}header{background-color:#556b2f;display:grid;grid-template-columns:80px 80% 1fr;align-items:center;color:white;padding-top:0.5em;padding-bottom:0.5em}.logo{align-self:center;font-size:50pt;width:100%;height:80px;grid-column:1}.btnCartHead{grid-column:3;background-color:#556b2f;color:white;font-size:25pt;border-style:none}.btnCartHead:hover{cursor:pointer;transform:scale(1.5);transition:0.3s ease}.heading{grid-column:2;text-align:left}.menu{background-color:#fafafa;display:flex;flex-direction:column;min-height:100vh}.menu h2{padding:2em}.menu li{list-style-type:none}.menu li a{text-decoration:none;color:black}.displayItem{border-radius:20px;background-color:#b6b3b3c8;color:#696666;margin-left:2em;padding-top:1em;padding-bottom:1em;width:75%;height:fit-content;font-size:smaller}.pizzaHeading,.pastaHeading,.saladHeading,.drinkHeading{display:flex;margin-top:1em;flex-direction:row;justify-content:center;padding-left:20%;padding-right:20%;background-color:darkgoldenrod;color:white}.ingredientsPizza,.ingredientsPasta,.ingredientsSalad{padding-top:1em;padding-bottom:2em;padding-left:20%;padding-right:5%;display:grid;grid-template-columns:1fr 1fr}.ingredientsPizza .displayItem,.ingredientsPasta .displayItem,.ingredientsSalad .displayItem{grid-column:2}.base{grid-column:1}.IngredList{display:grid;grid-column:2fr 1fr}.IngredList ul{grid-column:1}.IngredList li{grid-column:2;display:flex;justify-content:space-between;float:left}.btnPizza,.btnPasta,.btnSalad,.btnDrink{border:none;font-size:larger;background-color:transparent;color:rgba(252,252,252,0.517);padding:none;margin-top:-5px}.btnPizza:hover,.btnPasta:hover,.btnSalad:hover{color:#fff}.drinkDisplay{display:flex;justify-content:center}.drinkDisplay p{margin:1em}.drinkDisplay button{margin:1em;height:fit-content}footer{margin-top:auto;background-color:#89938e;padding:1em;display:flex;flex-direction:row;justify-content:space-evenly}footer li{list-style-type:none;display:inline-block}footer a{text-decoration:none;color:black;padding:1em}\n',""]);const i=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(d[o]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);a&&d[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),s&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=s):c[4]="".concat(s)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},d=[],i=0;i<e.length;i++){var o=e[i],l=a.base?o[0]+a.base:o[0],c=r[l]||0,u="".concat(l," ").concat(c);r[l]=c+1;var m=n(u),g={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==m)t[m].references++,t[m].updater(g);else{var h=s(g,a);a.byIndex=i,t.splice(i,0,{identifier:u,updater:h,references:1})}d.push(u)}return d}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var r=a(e=e||[],s=s||{});return function(e){e=e||[];for(var d=0;d<r.length;d++){var i=n(r[d]);t[i].references--}for(var o=a(e,s),l=0;l<r.length;l++){var c=n(r[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}r=o}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,s&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),s=n.n(a),r=n(569),d=n.n(r),i=n(565),o=n.n(i),l=n(216),c=n.n(l),u=n(589),m=n.n(u),g=n(99),h={};function p(e,t,n,a,s){var r=document.createElement(t);return null!=e?e.append(r):document.getElementById("content").append(r),null!=n&&(r.id=n),null!=a&&(r.className=a),null!=s&&(r.innerHTML=s),r}function v(e,t,n,a,s,r){for(var d=0;d<n;d++)s?p(e,t,null,a[d],'<a href="#'+a[d].replace(/ /g,"-")+'">'+a[d]+"</a>"):r?p(e,t,null,null,'<a class="'+a[d]+'" href="#"></a>'):p(e,t,null,a[d].replace(/ /g,"_"),a[d])}h.styleTagTransform=m(),h.setAttributes=o(),h.insert=d().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=c(),t()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;var f,y,I=function(){function e(e,t,n,a,s){this.type=e,this.price=t,this.base=n,this.addOns=a,this.mustHaves=s,this.type=e,this.price=t,this.base=n,this.addOns=a,this.mustHaves=s,this.allComponents=[],this.id=this.createId()}return e.prototype.createId=function(){return Math.random().toString(8).slice(2)},e.prototype.getId=function(){return this.id},e.prototype.getBase=function(){return this.base},e.prototype.getAddOns=function(){return this.addOns},e.prototype.getMustHaves=function(){return this.mustHaves},e.prototype.setPrice=function(e){this.price=e},e.prototype.getPrice=function(){return this.price},e.prototype.getAllComponents=function(){return this.allComponents},e.prototype.removeLastAddedIngredient=function(){this.allComponents.pop()},e.prototype.addIngredients=function(e){this.allComponents.includes(e)&&console.log(this.renderWarning()),this.allComponents.push(e)},e.prototype.removeIngredients=function(e){var t=this.allComponents.lastIndexOf(e);this.allComponents.splice(t,1)},e.prototype.calculatePrice=function(){var e=this.getPrice(),t=this.getAllComponents().length;return e=t>7?e+1.5*(t-7):this.getPrice(),console.log(t,e),e},e.prototype.renderItem=function(e){var t=this.calculatePrice(),n=p(e,"div",null,"displayItem",null);p(n,"p",null,null,"Current ingredients are:"),v(p(n,"ul",null,null,null),"li",this.allComponents.length,this.allComponents,!1,!1),p(n,"p",null,null,"The current price is: ".concat(t.toLocaleString("de-DE",{style:"currency",currency:"EUR"}))),console.log("The current price is ".concat(t,"!"))},e.prototype.updateItem=function(e){document.querySelector(".displayItem").remove(),this.renderItem(e)},e.prototype.renderWarning=function(){p(document.getElementById("ingredientList"),"h3","warning","warning","You've selected an Ingredient double!")},e}(),O=(f=function(e,t){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},f(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}f(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),b=function(e){function t(){return e.call(this,"pizza",9.7,["Wheat","Whole Grain"],["Onion","Garlic","Bell Pepper","Pepperoni","Corn","Olives","Broccoli","Pumpkin","Mushrooms","Zucchini","Fried Egg","Spinach","Pineapple","Ham","Salami","Bacon","Gouda Cheese","Mozzarella","Parmesan","Blue Cheese","Cheddar"],["Tomato Sauce","White Sauce"])||this}return O(t,e),t.prototype.createBase=function(e){var t,n=this,a=p(e,"div","".concat(this.type,"Base"),"base",null),s=p(a,"ul",null,"IngredList","Choose your base:");v(s,"li",this.getBase().length,this.getBase(),!1,!1);for(var r=null===(t=s.firstChild)||void 0===t?void 0:t.nextSibling,d=0;null!==r;){var i=document.createElement("div");i.innerHTML='<button class="base'.concat(this.getBase()[d].replace(/ /g,"_"),'"><i class="fa-solid fa-plus"></i></button>'),null==r||r.appendChild(i),r=r.nextSibling,d++}s.addEventListener("click",(function(e){var t,s=e.target;s.matches(".baseWheat")&&(n.addIngredients("Wheat"),null==(t=document.getElementById("pizzaAddOns"))||t.classList.remove("hidden"),a.remove()),s.matches(".baseWhole_Grain")&&(n.addIngredients("Whole Grain"),null==(t=document.getElementById("pizzaAddOns"))||t.classList.remove("hidden"),a.remove()),console.log(n.allComponents)}))},t.prototype.createMustHaves=function(e){var t,n=this,a=p(e,"div","".concat(this.type,"MustHaves"),"mustHave",null);a.classList.add("hidden");var s=p(a,"ul",null,"IngredList","Pick a sauce:");v(s,"li",this.getMustHaves().length,this.getMustHaves(),!1,!1);for(var r=null===(t=s.firstChild)||void 0===t?void 0:t.nextSibling,d=0;null!==r;){var i=document.createElement("div");i.innerHTML='<button class="must'.concat(this.getMustHaves()[d].replace(/ /g,""),'"><i class="fa-solid fa-plus"></i></button>'),null==r||r.appendChild(i),r=r.nextSibling,d++}s.addEventListener("click",(function(t){var s=t.target;s.matches(".mustTomatoSauce")&&(n.addIngredients("Tomato Sauce"),a.remove()),s.matches(".mustWhiteSauce")&&(n.addIngredients("White Sauce"),a.remove()),n.updateItem(e),console.log(n.allComponents)}))},t.prototype.createAddOns=function(e){var t,n=this,a=p(e,"div","".concat(this.type,"AddOns"),"addOns",null),s=p(a,"ul",null,"IngredList","Choose your add-ons:");v(s,"li",this.getAddOns().length,this.getAddOns(),!1,!1),a.classList.add("hidden");for(var r=null===(t=s.firstChild)||void 0===t?void 0:t.nextSibling,d=0;null!==r;){var i=document.createElement("div");i.innerHTML='<button class="add'.concat(this.getAddOns()[d].replace(/ /g,""),'"><i class="fa-solid fa-plus"></i></button>\n      <button class="remove').concat(this.getAddOns()[d].replace(/ /g,""),'"><i class="fa-solid fa-minus"></i></button>'),null==r||r.appendChild(i),r=r.nextSibling,d++}p(a,"button",null,"next_button","next").addEventListener("click",(function(){var e=document.getElementById("pizzaMustHaves");null==e||e.classList.remove("hidden"),a.remove()})),s.addEventListener("click",(function(t){var a=t.target;a.matches(".addOnion")&&n.addIngredients(n.getAddOns()[0]),a.matches(".removeOnion")&&n.removeIngredients(n.getAddOns()[0]),a.matches(".addGarlic")&&n.addIngredients(n.getAddOns()[1]),a.matches(".removeGarlic")&&n.removeIngredients(n.getAddOns()[1]),a.matches(".addBellPepper")&&n.addIngredients(n.getAddOns()[2]),a.matches(".removeBellPepper")&&n.removeIngredients(n.getAddOns()[2]),a.matches(".addPepperoni")&&n.addIngredients(n.getAddOns()[3]),a.matches(".removePepperoni")&&n.removeIngredients(n.getAddOns()[3]),a.matches(".addCorn")&&n.addIngredients(n.getAddOns()[4]),a.matches(".removeCorn")&&n.removeIngredients(n.getAddOns()[4]),a.matches(".addMushroom")&&n.addIngredients(n.getAddOns()[5]),a.matches(".removeMushroom")&&n.removeIngredients(n.getAddOns()[5]),a.matches(".addZucchini")&&n.addIngredients(n.getAddOns()[6]),a.matches(".removeZucchini")&&n.removeIngredients(n.getAddOns()[6]),a.matches(".addFriedEgg")&&n.addIngredients(n.getAddOns()[7]),a.matches(".removeFriedEgg")&&n.removeIngredients(n.getAddOns()[7]),a.matches(".addSpinach")&&n.addIngredients(n.getAddOns()[8]),a.matches(".removeSpinach")&&n.removeIngredients(n.getAddOns()[8]),a.matches(".addPineapple")&&n.addIngredients(n.getAddOns()[9]),a.matches(".removePineapple")&&n.removeIngredients(n.getAddOns()[9]),a.matches(".addHam")&&n.addIngredients(n.getAddOns()[10]),a.matches(".removeHam")&&n.removeIngredients(n.getAddOns()[10]),a.matches(".addSalami")&&n.addIngredients(n.getAddOns()[11]),a.matches(".removeSalami")&&n.removeIngredients(n.getAddOns()[11]),a.matches(".addBacon")&&n.addIngredients(n.getAddOns()[12]),a.matches(".removeBacon")&&n.removeIngredients(n.getAddOns()[12]),a.matches(".addGoudaCheese")&&n.addIngredients(n.getAddOns()[13]),a.matches(".removeGoudaCheese")&&n.removeIngredients(n.getAddOns()[13]),a.matches(".addMozzarella")&&n.addIngredients(n.getAddOns()[14]),a.matches(".removeMozzarella")&&n.removeIngredients(n.getAddOns()[14]),a.matches(".addParmesan")&&n.addIngredients(n.getAddOns()[15]),a.matches(".removeParmesan")&&n.removeIngredients(n.getAddOns()[15]),a.matches(".addBlueCheese")&&n.addIngredients(n.getAddOns()[16]),a.matches(".removeBlueCheese")&&n.removeIngredients(n.getAddOns()[16]),a.matches(".addCheddar")&&n.addIngredients(n.getAddOns()[17]),a.matches(".removeCheddar")&&n.removeIngredients(n.getAddOns()[17]),n.updateItem(e),console.log(n.allComponents)}))},t.prototype.updateItem=function(e){document.querySelector(".displayItem").remove(),this.renderItem(e)},t.prototype.createItems=function(e){this.createBase(e),this.createAddOns(e),this.createMustHaves(e),this.renderItem(e)},t}(I),A=function(){function e(e,t,n,a){this.type=e,this.size=t,this.underage=n,this.price=a,this.type=e,this.size=t,this.underage=n,this.price=a,this.id=this.createId()}return e.prototype.createId=function(){return Math.random().toString(8).slice(2)},e.prototype.getId=function(){return this.id},e.prototype.getPrice=function(){return this.price},e.prototype.getType=function(){return this.type},e.prototype.getCheckString=function(){return"".concat(this.getType().replace(/ /g,"")).concat(this.size.toString().replace(".",""))},e.prototype.renderDrink=function(e){var t=p(e,"div",null,"drinkDisplay",null);p(t,"p",null,null,"".concat(this.getType(),", ").concat(this.size,"l")),p(t,"p",null,null,"".concat(this.getPrice().toLocaleString("de-DE",{style:"currency",currency:"EUR"})));var n=p(t,"div",null,"drinkDisplay",null);p(n,"button",null,"add".concat(this.getCheckString()),'<i class="fa-solid fa-plus">'),p(n,"button",null,"remove".concat(this.getCheckString()),'<i class="fa-solid fa-minus">')},e}(),C=function(){function e(){this.order=[],this.totalPrice=this.getTotal()}return e.prototype.getTotal=function(){var e=0;return this.order.forEach((function(t){e+=t.getPrice()})),e},e.prototype.addToCart=function(e){this.order.push(e)},e.prototype.removeFromCart=function(e){var t=this,n=e.getId();this.order.forEach((function(e){e.getId()===n&&t.order.splice(t.order.indexOf(e),1)}))},e.prototype.createCartItems=function(e){var t=this;this.order.forEach((function(n){var a=p(e,"div",null,null,null);if(n instanceof b){var s=p(a,"h3",null,null,"".concat(n.type," with the following ingredients:"));v(p(s,"ul",null,null,null),"li",n.getAllComponents().length,n.getAllComponents(),!1,!1)}n instanceof A&&(s=p(a,"h3",null,null,"".concat(n.type))),p(a,"h3",null,null,"price: ".concat(n.getPrice())),p(a,"button","removeBtn",null,'<i class="fa-solid fa-minus"></i>').addEventListener("click",(function(){t.removeFromCart(n),t.totalPrice=t.getTotal(),t.createCart()}))}))},e.prototype.createCart=function(){var e=p(null,"div",null,"cardDisplay",null);p(e,"h2",null,null,"Your Order:"),this.createCartItems(e),p(e,"h2",null,null,"total: ".concat(this.totalPrice))},e}(),L=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),S=function(e){function t(){return e.call(this,"pasta",8.5,["Fusilli","Penne","Farfalle","Spaghetti","Tagliatelle","Rigatoni"],["Onion","Garlic","Bell Pepper","Pepperoni","Corn","Lenses","Mushrooms","Pumpkin","Jalapeno","Zucchini","Spinach","Olives","Basil","Sage","Minced Meat","Tuna Fish","Mozzarella","Parmesan","Gorgonzola"],["Tomato Sauce","Cream Sauce","Olive Oil"])||this}return L(t,e),t.prototype.createBase=function(e){var t,n=this,a=p(e,"div","".concat(this.type,"Base"),"base",null),s=p(a,"ul",null,"IngredList","Choose your base:");v(s,"li",this.getBase().length,this.getBase(),!1,!1);for(var r=null===(t=s.firstChild)||void 0===t?void 0:t.nextSibling,d=0;null!==r;){var i=document.createElement("div");i.innerHTML='<button class="base'.concat(this.getBase()[d],'"><i class="fa-solid fa-plus"></i></button>'),null==r||r.appendChild(i),r=r.nextSibling,d++}s.addEventListener("click",(function(e){var t,s=e.target;s.matches(".baseFusilli")&&(n.addIngredients("Fusilli"),null==(t=document.getElementById("pastaAddOns"))||t.classList.remove("hidden"),a.remove()),s.matches(".basePenne")&&(n.addIngredients("Penne"),null==(t=document.getElementById("pastaAddOns"))||t.classList.remove("hidden"),a.remove()),s.matches(".baseFarfalle")&&(n.addIngredients("Farfalle"),null==(t=document.getElementById("pastaAddOns"))||t.classList.remove("hidden"),a.remove()),s.matches(".baseSpaghetti")&&(n.addIngredients("Spaghetti"),null==(t=document.getElementById("pastaAddOns"))||t.classList.remove("hidden"),a.remove()),s.matches(".baseRigatoni")&&(n.addIngredients("Rigatoni"),null==(t=document.getElementById("pastaAddOns"))||t.classList.remove("hidden"),a.remove()),s.matches(".baseTagliatelle")&&(n.addIngredients("Tagliatelle"),null==(t=document.getElementById("pastaAddOns"))||t.classList.remove("hidden"),a.remove()),console.log(n.allComponents)}))},t.prototype.createMustHaves=function(e){var t,n=this,a=p(e,"div","".concat(this.type,"MustHaves"),"mustHave",null);a.classList.add("hidden");var s=p(a,"ul",null,"IngredList","Pick a sauce:");v(s,"li",this.getMustHaves().length,this.getMustHaves(),!1,!1);for(var r=null===(t=s.firstChild)||void 0===t?void 0:t.nextSibling,d=0;null!==r;){var i=document.createElement("div");i.innerHTML='<button class="must'.concat(this.getMustHaves()[d].replace(/ /g,""),'"><i class="fa-solid fa-plus"></i></button>'),null==r||r.appendChild(i),r=r.nextSibling,d++}s.addEventListener("click",(function(t){var s=t.target;s.matches(".mustTomatoSauce")&&(n.addIngredients("Tomato Sauce"),a.remove()),s.matches(".mustCreamSauce")&&(n.addIngredients("Cream Sauce"),a.remove()),n.updateItem(e),console.log(n.allComponents)}))},t.prototype.createAddOns=function(e){var t,n=this,a=p(e,"div","".concat(this.type,"AddOns"),"addOns",null),s=p(a,"ul",null,"IngredList","Choose your add-ons:");v(s,"li",this.getAddOns().length,this.getAddOns(),!1,!1),a.classList.add("hidden");for(var r=null===(t=s.firstChild)||void 0===t?void 0:t.nextSibling,d=0;null!==r;){var i=document.createElement("div");i.innerHTML='<button class="add'.concat(this.getAddOns()[d].replace(/ /g,""),'"><i class="fa-solid fa-plus"></i></button>\n      <button class="remove').concat(this.getAddOns()[d].replace(/ /g,""),'"><i class="fa-solid fa-minus"></i></button>'),null==r||r.appendChild(i),r=r.nextSibling,d++}p(a,"button",null,"next_button","next").addEventListener("click",(function(){var e=document.getElementById("pastaMustHaves");null==e||e.classList.remove("hidden"),a.remove()})),s.addEventListener("click",(function(e){var t=e.target;t.matches(".addOnion")&&n.addIngredients(n.getAddOns()[0]),t.matches(".removeOnion")&&n.removeIngredients(n.getAddOns()[0]),t.matches(".addGarlic")&&n.addIngredients(n.getAddOns()[1]),t.matches(".removeGarlic")&&n.removeIngredients(n.getAddOns()[1]),t.matches(".addBellPepper")&&n.addIngredients(n.getAddOns()[2]),t.matches(".removeBellPepper")&&n.removeIngredients(n.getAddOns()[2]),t.matches(".addPepperoni")&&n.addIngredients(n.getAddOns()[3]),t.matches(".removePepperoni")&&n.removeIngredients(n.getAddOns()[3]),t.matches(".addCorn")&&n.addIngredients(n.getAddOns()[4]),t.matches(".removeCorn")&&n.removeIngredients(n.getAddOns()[4]),t.matches(".addMushroom")&&n.addIngredients(n.getAddOns()[5]),t.matches(".removeMushroom")&&n.removeIngredients(n.getAddOns()[5]),t.matches(".addZucchini")&&n.addIngredients(n.getAddOns()[6]),t.matches(".removeZucchini")&&n.removeIngredients(n.getAddOns()[6]),t.matches(".addSpinach")&&n.addIngredients(n.getAddOns()[7]),t.matches(".removeSpinach")&&n.removeIngredients(n.getAddOns()[7]),t.matches(".addOlives")&&n.addIngredients(n.getAddOns()[8]),t.matches(".removeOlives")&&n.removeIngredients(n.getAddOns()[8]),t.matches(".addBasil")&&n.addIngredients(n.getAddOns()[9]),t.matches(".removeBasil")&&n.removeIngredients(n.getAddOns()[9]),t.matches(".addSage")&&n.addIngredients(n.getAddOns()[10]),t.matches(".removeSage")&&n.removeIngredients(n.getAddOns()[10]),t.matches(".addMincedMeat")&&n.addIngredients(n.getAddOns()[11]),t.matches(".removeMincedMeat")&&n.removeIngredients(n.getAddOns()[11]),t.matches(".addTunaFish")&&n.addIngredients(n.getAddOns()[12]),t.matches(".removeTunaFish")&&n.removeIngredients(n.getAddOns()[12]),t.matches(".addMozzarella")&&n.addIngredients(n.getAddOns()[13]),t.matches(".removeMozzarella")&&n.removeIngredients(n.getAddOns()[13]),t.matches(".addParmesan")&&n.addIngredients(n.getAddOns()[14]),t.matches(".removeParmesan")&&n.removeIngredients(n.getAddOns()[14]),t.matches(".addGorgonzola")&&n.addIngredients(n.getAddOns()[15]),t.matches(".removeGorgonzola")&&n.removeIngredients(n.getAddOns()[15]),console.log(n.allComponents)}))},t.prototype.updateItem=function(e){document.querySelector(".displayItem").remove(),this.renderItem(e)},t.prototype.createItems=function(e){this.createBase(e),this.createAddOns(e),this.createMustHaves(e),this.renderItem(e)},t}(I),P=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),B=function(e){function t(){return e.call(this,"salad",6.3,["Romaine","Lollo Rosso","Radicchio","Baby Spinach","Potato Salad","Pasta Salad","Leaf lettuce","Bird's Salad"],["Carrots","Cucumbers","Bell Peppers","Tomatoes","Corn","Tuna Fish","Feta Cheese","Olives","Potatoes","Onion"],["Olive Oil and Balsamic Vinegar","Pumpkin-Seed Oil and Apple Cider Vinegar","French Dressing","Yoghurt Dressing"])||this}return P(t,e),t.prototype.createBase=function(e){var t,n=this,a=p(e,"div","".concat(this.type,"Base"),"base",null),s=p(a,"ul",null,"IngredList","Choose your base:");v(s,"li",this.getBase().length,this.getBase(),!1,!1);for(var r=null===(t=s.firstChild)||void 0===t?void 0:t.nextSibling,d=0;null!==r;){var i=document.createElement("div");i.innerHTML='<button class="base'.concat(this.getBase()[d].replace(/ /g,"_"),'"><i class="fa-solid fa-plus"></i></button>'),null==r||r.appendChild(i),r=r.nextSibling,d++}s.addEventListener("click",(function(e){var t,s=e.target;s.matches(".baseRomaine")&&(n.addIngredients("Romaine"),null==(t=document.getElementById("saladAddOns"))||t.classList.remove("hidden"),a.remove()),s.matches(".baseLolloRosso")&&(n.addIngredients("Lollo Rosso"),null==(t=document.getElementById("saladAddOns"))||t.classList.remove("hidden"),a.remove()),s.matches(".baseRadicchio")&&(n.addIngredients("Radicchio"),null==(t=document.getElementById("saladAddOns"))||t.classList.remove("hidden"),a.remove()),s.matches(".baseBabySpinach")&&(n.addIngredients("Baby Spinach"),null==(t=document.getElementById("saladAddOns"))||t.classList.remove("hidden"),a.remove()),console.log(n.allComponents)}))},t.prototype.createMustHaves=function(e){var t,n=this,a=p(e,"div","".concat(this.type,"MustHaves"),"mustHave",null);a.classList.add("hidden");var s=p(a,"ul",null,"IngredList","Pick a sauce:");v(s,"li",this.getMustHaves().length,this.getMustHaves(),!1,!1);for(var r=null===(t=s.firstChild)||void 0===t?void 0:t.nextSibling,d=0;null!==r;){var i=document.createElement("div");i.innerHTML='<button class="must'.concat(this.getMustHaves()[d].replace(/ /g,"").replace("-",""),'"><i class="fa-solid fa-plus"></i></button>'),null==r||r.appendChild(i),r=r.nextSibling,d++}s.addEventListener("click",(function(t){var s=t.target;s.matches(".OliveOilandBalsamicVinegar")&&(n.addIngredients("Olive Oil and Balsamic Vinegar"),a.remove()),s.matches(".PumpkinSeedOilandAppleCiderVinegar")&&(n.addIngredients("Pumpkin-Seed Oil and Apple Cider Vinegar"),a.remove()),s.matches(".mustFrenchDressing")&&(n.addIngredients("French Dressing"),a.remove()),s.matches(".YoghurtDressing")&&(n.addIngredients("Yoghurt Dressing"),a.remove()),n.updateItem(e),console.log(n.allComponents)}))},t.prototype.createAddOns=function(e){var t,n=this,a=p(e,"div","".concat(this.type,"AddOns"),"addOns",null),s=p(a,"ul",null,"IngredList","Choose your add-ons:");v(s,"li",this.getAddOns().length,this.getAddOns(),!1,!1),a.classList.add("hidden");for(var r=null===(t=s.firstChild)||void 0===t?void 0:t.nextSibling,d=0;null!==r;){var i=document.createElement("div");i.innerHTML='<button class="add'.concat(this.getAddOns()[d].replace(/ /g,""),'"><i class="fa-solid fa-plus"></i></button>\n      <button class="remove').concat(this.getAddOns()[d].replace(/ /g,""),'"><i class="fa-solid fa-minus"></i></button>'),null==r||r.appendChild(i),r=r.nextSibling,d++}p(a,"button",null,"next_button","next").addEventListener("click",(function(){var e=document.getElementById("saladMustHaves");null==e||e.classList.remove("hidden"),a.remove()})),s.addEventListener("click",(function(e){var t=e.target;t.matches(".addCarrots")&&n.addIngredients(n.getAddOns()[0]),t.matches(".removeCarrots")&&n.removeIngredients(n.getAddOns()[0]),t.matches(".addCucumbers")&&n.addIngredients(n.getAddOns()[1]),t.matches(".removeCucumbers")&&n.removeIngredients(n.getAddOns()[1]),t.matches(".addBellPepper")&&n.addIngredients(n.getAddOns()[2]),t.matches(".removeBellPepper")&&n.removeIngredients(n.getAddOns()[2]),t.matches(".addTomatoes")&&n.addIngredients(n.getAddOns()[3]),t.matches(".removeTomatoes")&&n.removeIngredients(n.getAddOns()[3]),t.matches(".addCorn")&&n.addIngredients(n.getAddOns()[4]),t.matches(".removeCorn")&&n.removeIngredients(n.getAddOns()[4]),t.matches(".addTunaFish")&&n.addIngredients(n.getAddOns()[5]),t.matches(".removeTunaFish")&&n.removeIngredients(n.getAddOns()[5]),t.matches(".addFetaCheese")&&n.addIngredients(n.getAddOns()[6]),t.matches(".removeFetaCheese")&&n.removeIngredients(n.getAddOns()[6]),t.matches(".addOlives")&&n.addIngredients(n.getAddOns()[7]),t.matches(".removeOlives")&&n.removeIngredients(n.getAddOns()[7]),t.matches(".addPotatoes")&&n.addIngredients(n.getAddOns()[8]),t.matches(".removePotatoes")&&n.removeIngredients(n.getAddOns()[8]),t.matches(".addOnion")&&n.addIngredients(n.getAddOns()[9]),t.matches(".removeOnion")&&n.removeIngredients(n.getAddOns()[9]),console.log(n.allComponents)}))},t.prototype.updateItem=function(e){document.querySelector(".displayItem").remove(),this.renderItem(e)},t.prototype.createItems=function(e){this.createBase(e),this.createAddOns(e),this.createMustHaves(e),this.renderItem(e)},t}(I);y=p(null,"header",null,null,null),p(y,"div","header_logo","logo",null).innerHTML='<i class="fa-solid fa-plate-wheat"></i>',p(y,"h1",null,"heading","Ristorante con Kit di Costruzione"),p(y,"button","btn_cartHead","btnCartHead",null).innerHTML='<i class="fa-solid fa-cart-shopping"></i>',console.log("header created"),function(){var e=new C,t=[new A("Beer",.5,!1,3),new A("Beer",.33,!1,2.7),new A("Coca Cola",.5,!1,2.2),new A("Coca Cola",.33,!1,1.8),new A("Sprite",.5,!1,2.2),new A("Sprite",.33,!1,1.8),new A("Apple Juice",.5,!1,1.9),new A("Apple Juice",.33,!1,1.6),new A("Mineral Water",.5,!1,1.7)],n=new b,a=new S,s=new B,r=p(null,"div",null,"menu",null);p(r,"h2",null,"menuDescription","Welcome to Ristorante con Kit di Costruzione!</br> Where you can pick and choose your ingredients.</br>\n    At first you choose one base, then you can add your ingredients of choice.</br>Up to five Ingredients are included in the base price</br>\n    Every other adds a charge of 1,50 to price</br>After that you get to choose what type of sauce/condiment you would like.</br>\n    Enjoy and happy ordering!");var d=p(r,"div",null,null,null),i=p(d,"div",null,"pizzaHeading",null),o=(p(i,"h3",null,null,"Pizza"),p(i,"button",null,"btnPizza",'<i class="fa-solid fa-sort-down"></i>')),l=p(d,"div",null,"ingredientsPizza",null);n.createItems(l);var c=p(d,"button",'pizzaToCartBtn"',null,"Add to cart");o.addEventListener("click",(function(){l.classList.contains("hidden")?(l.classList.add("ingredientsPizza"),l.classList.remove("hidden")):(l.classList.add("hidden"),l.classList.remove("ingredientsPizza"))})),c.addEventListener("click",(function(){var t=document.querySelector(".displayItem");null==t||t.remove(),console.log("zest"),e.addToCart(n),n.allComponents=[],console.log(e.order),n.createItems(l)}));var u=p(d,"div",null,"pastaHeading",null),m=(p(u,"h3",null,null,"Pasta"),p(u,"button",null,"btnPasta",'<i class="fa-solid fa-sort-down"></i>')),g=p(d,"div",null,"ingredientsPasta",null);a.createItems(g),g.classList.add("hidden"),g.classList.remove("ingredientsPasta"),m.addEventListener("click",(function(){g.classList.contains("hidden")?(g.classList.add("ingredientsPasta"),g.classList.remove("hidden")):(g.classList.add("hidden"),g.classList.remove("ingredientsPasta"))})),p(d,"button",'pastaToCartBtn"',null,"Add to cart").addEventListener("click",(function(){var t=document.querySelector(".displayItem");null==t||t.remove(),console.log("zest"),e.addToCart(a),a.allComponents=[],console.log(e.order),a.createItems(g)}));var h=p(d,"div",null,"saladHeading",null),v=(p(h,"h3",null,null,"Salad"),p(h,"button",null,"btnSalad",'<i class="fa-solid fa-sort-down"></i>')),f=p(d,"div",null,"ingredientsSalad",null);f.classList.add("hidden"),f.classList.remove("ingredientsSalad"),s.createItems(f),v.addEventListener("click",(function(){f.classList.contains("hidden")?(f.classList.add("ingredientsSalad"),f.classList.remove("hidden")):(f.classList.add("hidden"),f.classList.remove("ingredientsSalad"))})),p(d,"button",'saladToCartBtn"',null,"Add to cart").addEventListener("click",(function(){var t=document.querySelector(".displayItem");null==t||t.remove(),console.log("zest"),e.addToCart(a),s.allComponents=[],console.log(e.order),s.createItems(f)}));var y=p(d,"div",null,"drinkHeading",null),I=(p(y,"h3",null,null,"Drink"),p(y,"button",null,"btnDrink",'<i class="fa-solid fa-sort-down"></i>')),O=p(d,"div",null,"drinksList",null);O.classList.add("hidden"),O.classList.remove("drinksList");for(var L=0;L<t.length;L++)t[L].renderDrink(O);I.addEventListener("click",(function(){O.classList.contains("hidden")?(O.classList.add("drinksList"),O.classList.remove("hidden")):(O.classList.add("hidden"),O.classList.remove("drinksList"))})),O.addEventListener("click",(function(n){var a=n.target;a.matches(".addBeer05")&&e.addToCart(t[0]),a.matches(".removeBeer05")&&e.removeFromCart(t[0]),a.matches(".addBeer033")&&e.addToCart(t[1]),a.matches(".removeBeer033")&&e.removeFromCart(t[1]),a.matches(".addCocaCola05")&&e.addToCart(t[2]),a.matches(".removeCocaCola05")&&e.removeFromCart(t[2]),a.matches(".addCocaCola033")&&e.addToCart(t[3]),a.matches(".removeCocaCola033")&&e.removeFromCart(t[3]),a.matches(".addSprite05")&&e.addToCart(t[4]),a.matches(".removeSprite05")&&e.removeFromCart(t[4]),a.matches(".addSprite033")&&e.addToCart(t[5]),a.matches(".removeSprite033")&&e.removeFromCart(t[5]),a.matches(".addAppleJuice05")&&e.addToCart(t[6]),a.matches(".removeAppleJuice05")&&e.removeFromCart(t[6]),a.matches(".addAppleJuice033")&&e.addToCart(t[7]),a.matches(".removeAppleJuice033")&&e.removeFromCart(t[7]),a.matches(".addMineralWater05")&&e.addToCart(t[8]),a.matches(".removeMineralWater05")&&e.removeFromCart(t[8])}))}(),console.log("menu created"),p(null,"footer",null,null,null).innerHTML='<ul class="footerSides">\n    <li><a href="#">Impressum</a></li>\n    <li><a href="#">Sitemap</a></li>\n  </ul>\n  <ul class="social">\n    <li><a href="https://www.facebook.com"><i class="fa-brands fa-facebook"></i></a></li>\n    <li><a href="https://twitter.com/?lang=en"><i class="fa-brands fa-twitter"></i></a></li>\n    <li><a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a></i></li>\n  </ul>',console.log("footer created")})()})();