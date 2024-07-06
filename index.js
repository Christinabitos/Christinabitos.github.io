document.addEventListener('DOMContentLoaded', () => {
  // Product prices
  const prices = [6000, 5995, 5675, 6500, 7028, 4350, 5999];

  // Get elements
  const qtyElements = [];
  for (let i = 1; i <= 7; i++) {
    qtyElements.push(document.getElementById(`qty${i}`));
  }
  const carts = document.getElementById('carts');
  const total = document.getElementById('total');
  const cash = document.getElementById('cash');
  const change = document.getElementById('change');

  // Function to update orders and total
  function updateOrders() {
    let orders = '';
    let totalPrice = 0;
    for (let i = 0; i < qtyElements.length; i++) {
      const qty = parseInt(qtyElements[i].value) || 0;
      if (qty > 0) {
        orders += `Product ${i + 1} - Quantity: ${qty}, Price: ${prices[i] * qty}\n`;
        totalPrice += prices[i] * qty;
      }
    }
    carts.value = orders;
    total.value = totalPrice;
    updateChange();
  }

  // Function to update change
  function updateChange() {
    const totalPrice = parseInt(total.value) || 0;
    const cashTendered = parseInt(cash.value) || 0;
    if (cashTendered >= totalPrice) {
      change.value = cashTendered - totalPrice;
    } else {
      change.value = '';
    }
  }

  // Add event listeners
  qtyElements.forEach(element => {
    element.addEventListener('input', updateOrders);
  });

  cash.addEventListener('input', updateChange);
});
        
