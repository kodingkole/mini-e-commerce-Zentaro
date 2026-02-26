<script>
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let selectedProduct = "";
let selectedPrice = 0;

function showCartMessage(name, price){

  selectedProduct = name;
  selectedPrice = price;
  let existingProduct = cart.find(item => item.name === name);
  if(existingProduct){
    existingProduct.quantity += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      quantity: 1
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("animePopup").style.display = "flex";
  document.getElementById("popupText").innerText =
  name + " added to your ninja cart! 🥷🔥";
}

function closePopup(){
  document.getElementById("animePopup").style.display = "none";
}

function goToOrder(name, price){
  localStorage.setItem("productName", name);
  localStorage.setItem("productPrice", price);
  window.location.href = "order.html";
}
function goToCheckout(){
  localStorage.setItem("productName", selectedProduct);
  localStorage.setItem("productPrice", selectedPrice);
  window.location.href = "checkout.html";
}
function goToCart(){
  window.location.href = "cart.html";
}
</script>