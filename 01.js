var coll = document.getElementsByClassName("collapsible");
var i;
const labelType = document.querySelectorAll(".extra");
var price = 100;
var potatoprice = 0; 
const okbutton = document.querySelector(".sendBtn")

updatePrice()

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

function updatePrice(){
    okbutton.innerHTML = "Send order "+price+ " kr";

}

function addExtra(str) {
  for (i = 0; i < labelType.length; i++) {
    if (labelType[i].textContent === str) {
      switch (labelType[i].textContent) {
        case "Beef patty":
          price += 40;
          console.log(price);
          break;
        case "Jalapeno":
          price += 10;
          console.log(price);
          break;
        case "Extra Cheese":
          price += 10;
          console.log(price);
          break;
        case "Onion rings":
          price += 20;
          console.log(price);
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
                potatoprice=0
              price += potatoprice;             
          }

          console.log(price);
          break;

        case "Truffle fries":
          
            price -= potatoprice;
            if (document.getElementById("truffle").checked) {
                potatoprice=40;
              price +=potatoprice ;
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
