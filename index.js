document.addEventListener("DOMContentLoaded", function() {
  const products = [
    { id: 1, name: "ADIDAS", price: 6000 },
    { id: 2, name: "ADIDAS", price: 5995 },
    { id: 3, name: "JORDAN", price: 5675 },
    { id: 4, name: "JORDAN", price: 6500 },
    { id: 5, name: "JORDAN", price: 7028 },
    { id: 6, name: "NIKE", price: 4350 },
    { id: 7, name: "NIKE", price: 5999 }
  ];

  let cart = [];
  let total = 0;

  products.forEach(product => {
    const qtyInput = document.getElementById(`qty${product.id}`);
    qtyInput.addEventListener("change", () => {
      updateCart(product.id, qtyInput.value);
    });
  });

  const cashInput = document.getElementById("cash");
  cashInput.addEventListener("input", calculateChange);

  function updateCart(productId, qty) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.qty = qty;
      if (qty == 0) {
        cart = cart.filter(item => item.id !== productId);
      }
    } else {
      cart.push({ id: productId, name: product.name, price: product.price, qty: qty });
    }

    renderCart();
    calculateTotal();
    calculateChange();
  }

  function renderCart() {
    const cartsTextarea = document.getElementById("carts");
    cartsTextarea.value = cart.map(item => `${item.name} (x${item.qty}): ${item.price * item.qty}`).join("\n");
  }

  function calculateTotal() {
    total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    document.getElementById("total").value = total;
  }

  function calculateChange() {
    const cash = parseFloat(cashInput.value) || 0;
    const change = cash - total;
    document.getElementById("change").value = change >= 0 ? change : 0;
  }
});
  
