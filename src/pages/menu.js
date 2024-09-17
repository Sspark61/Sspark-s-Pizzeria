function item(title, description, price) {
  this.title = title;
  this.description = description;
  this.price = price;
}

const items = [
  new item("Margherita", "Pizza Sauce & Mozzarella", "14$"),
  new item(
    "Italiano",
    "Pizza Sauce, Mozzarella, Beef Pepperoni, Mushrooms & Italian Sausage",
    "17$"
  ),
  new item("Chicken BBQ", "Marinated chicken, BBQ sauce with onions", "18$"),
  new item(
    "Hawaiian",
    "Pizza Sauce, Mozzarella, Beef Pepperoni & Hawaiian Pineapple",
    "15$"
  ),
  new item("Pepperoni", "Pizza Sauce, Mozzarella & Beef Pepperoni", "20$"),
  new item(
    "Chicken Dynamite",
    "American Cheese, Green Peppers, Onions, Crunchy Chicken Breast, Mozzarella, Oregano with Dynamite Sauce",
    "18$"
  ),
  new item(
    "Four Cheese",
    "Pizza Sauce, American Cheese, 2 Layers of Mozzarella, Feta Cheese & Oregano​",
    "25$"
  ),
  new item(
    "Legend Chicken Hot",
    "American Cheese, Grilled Chicken Breast, Onions, Mozzarella, Oregano with Hot Buffalo Sauce",
    "21$"
  ),
  new item(
    "Extravaganzza",
    "Pizza Sauce, Mozzarella, Beef Pepperoni, Onions, Green Peppers, Mushrooms, Black Olives, Beef, Italian Sausage & Extra layer of Mozzarella",
    "30$"
  ),
];

function createmenupage() {
  let container = document.getElementById("container");
  let menugrid = document.createElement("div");
  menugrid.classList.add("menugrid");

  for (let i = 0; i < items.length; i++) {
    let cells = document.createElement("div");
    cells.classList.add("cells");

    let title = document.createElement("h1");
    let description = document.createElement("p");
    let cart = document.createElement("div");
    let btn = document.createElement("button");
    let price = document.createElement("a");
    cart.classList.add("cart");

    title.innerHTML = items[i].title;
    description.innerHTML = items[i].description;
    price.innerHTML = items[i].price;
    btn.innerHTML = "+";

    cart.appendChild(price);
    cart.appendChild(btn);
    cells.appendChild(title);
    cells.appendChild(description);
    cells.appendChild(cart);
    menugrid.appendChild(cells);
  }
  container.appendChild(menugrid);
}

export default createmenupage;
