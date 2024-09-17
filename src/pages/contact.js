function createcontactpage() {
    let container = document.getElementById("container");
    let card = document.createElement("div");
    card.classList.add("card");
    let phoneno = document.createElement("p");
    phoneno.innerHTML = "Phone Number : 0123456789";
    let address = document.createElement("p");
    address.innerHTML =
      "Address : 1234 Enchanted Lane, Fantasia City, Dreamland 56789";
    let image = document.createElement("div");
    image.classList.add("loc");
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phoneno);
    container.appendChild(card);
  }
  
  export default createcontactpage;
  