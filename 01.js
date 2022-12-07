var coll = document.getElementsByClassName("collapsible");
var i;
const labelType = document.querySelectorAll(".extra");
var price = 100;
var totalprice = 0;
var potatoprice = 0;
let order = 1;
let beefcounter = 0;
let jalapenocounter = 0;
let cheesecounter = 0;
let onioncounter = 0;
const okbutton = document.querySelector(".sendBtn");
const orderLabel = document.querySelector(".counter");
const beefLabel = document.querySelector(".counterbeef");
const jalapenoLabel = document.querySelector(".counterjalapeno");
const cheeseLabel = document.querySelector(".countercheese");
const onionLabel = document.querySelector(".counteronion");

updatePrice();

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
}

function updatePrice() {
  totalprice = price * order;

  okbutton.innerHTML =
    "Add " + order + " to order &nbsp; <b>SEK:</b>  " + totalprice;
  orderLabel.innerHTML = order;
}

function addExtra(str) {
  for (i = 0; i < labelType.length; i++) {
    if (labelType[i].textContent === str) {
      switch (labelType[i].textContent) {
        case "Beef patty":
          if (beefcounter < 6) {
            price += 40;
            beefcounter++;
            beefLabel.innerHTML = beefcounter;
            console.log(price);
          }

          break;
        case "Jalapeno":
          if (jalapenocounter < 6) {
            price += 10;
            jalapenocounter++;
            jalapenoLabel.innerHTML = jalapenocounter;
            console.log(price);
          }

          break;
        case "Extra Cheese":
          if (cheesecounter < 6) {
            price += 10;
            cheesecounter++;
            cheeseLabel.innerHTML = cheesecounter;
            console.log(price);
          }

          break;
        case "Onion rings":
          if (onioncounter < 6) {
            price += 20;
            onioncounter++;
            onionLabel.innerHTML = onioncounter;
            console.log(price);
            //test
          }

          break;
        case "Ketchup":
          if (document.getElementById("ketchup").checked) {
            price += 5;
          } else {
            price -= 5;
          }
          console.log(price);
          break;
        case "Mayo":
          if (document.getElementById("mayo").checked) {
            price += 5;
          } else {
            price -= 5;
          }
          console.log(price);
          break;
        case "Cheddar":
          if (document.getElementById("cheddar").checked) {
            price += 10;
          } else {
            price -= 10;
          }

          console.log(price);
          break;
        case "Sweet potato":
          price -= potatoprice;
          if (document.getElementById("sweet").checked) {
            potatoprice = 30;
            price += potatoprice;
          }

          console.log(price);
          break;

        case "Pommes":
          price -= potatoprice;
          if (document.getElementById("pommes").checked) {
            potatoprice = 0;
            price += potatoprice;
          }

          console.log(price);
          break;

        case "Truffle fries":
          price -= potatoprice;
          if (document.getElementById("truffle").checked) {
            potatoprice = 40;
            price += potatoprice;
          }

          console.log(price);
          break;
        default:
          console.log(labelType.textContent);
          break;
      }
    }
  }
  updatePrice();
}

function subtractExtra(str) {
  for (i = 0; i < labelType.length; i++) {
    if (labelType[i].textContent === str) {
      switch (labelType[i].textContent) {
        case "Beef patty":
          if (beefcounter > 0) {
            price -= 40;
            beefcounter--;
            beefLabel.innerHTML = beefcounter;
            console.log(price);
            break;
          }

        case "Jalapeno":
          if (jalapenocounter > 0) {
            price -= 10;
            jalapenocounter--;
            jalapenoLabel.innerHTML = jalapenocounter;
            console.log(price);
            break;
          }

        case "Extra Cheese":
          if (cheesecounter > 0) {
            price -= 10;
            cheesecounter--;
            cheeseLabel.innerHTML = cheesecounter;
            console.log(price);
            break;
          }

        case "Onion rings":
          if (onioncounter > 0) {
            price -= 20;
            onioncounter--;
            onionLabel.innerHTML = onioncounter;
            console.log(price);
            break;
          }
      }
    }
  }

  updatePrice();
}

function addToOrder() {
  order++;

  console.log(order);
  updatePrice();
}

function minusToOrder() {
  if (order > 1) {
    order--;

    console.log(order);
    updatePrice();
  }
}
