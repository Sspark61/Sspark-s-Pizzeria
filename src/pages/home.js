function createhomepage() {
    let container = document.getElementById("container");
    let banner = document.createElement("div");
    let content = document.createElement("div");
  
    banner.classList.add("banner");
    container.appendChild(banner);
  
    content.classList.add("content");
    let headline = document.createElement("h1");
    headline.innerHTML = "Welcome To Sspark's Pizzeria";
    content.appendChild(headline);
    let para = document.createElement("p");
    para.innerHTML = `Welcome to Sspark's Pizzeria, where tradition meets taste in every
    slice, Nestled in the heart of town, our family-owned pizzeria is
    dedicated to bringing you authentic Italian flavors crafted with
    passion and the freshest ingredients. From our hand-tossed dough to
    our rich, homemade tomato sauce and the finest mozzarella, every pizza
    is a celebration of culinary excellence. Whether you're craving a
    classic Margherita, a bold Pepperoni, or a creative seasonal special,
    we invite you to experience the warmth and charm of Sspark's. Come
    savor a slice of Italy with us—where every meal is a moment to
    cherish!`;
    content.appendChild(para);
    container.appendChild(content);
  }
  
  export default createhomepage;
  