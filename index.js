document.addEventListener('DOMContentLoaded', () => {
  const products = [
    {id: 'product1', price: 6000},
    {id: 'product2', price: 5995},
    {id: 'product3', price: 5675},
    {id: 'product4', price: 6500},
    {id: 'product5', price: 7028},
    {id: 'product6', price: 4350},
    {id: 'product7', price: 5999},
  ];

  const cart = document.getElementById('carts');
  const totalField = document.getElementById('total');
  const cashField = document.getElementById('cash');
  const changeField = document.getElementById('change');
  let total = 0;

  products.forEach(product => {
    const qtyInput = document.getElementById(`qty${product.id.slice(-1)}`);
    
    qtyInput.addEventListener('input', () => {
      updateCart();
    });
  });

  cashField.addEventListener('input', () => {
    updateChange();
  });

  function updateCart() {
    cart.value = '';
    total = 0;
    
    products.forEach(product => {
      const qty = document.getElementById(`qty${product.id.slice(-1)}`).value;
      if (qty > 0) {
        const itemTotal = qty * product.price;
        cart.value += `${product.id.toUpperCase()}: ${qty} x ${product.price} = ${itemTotal}\n`;
        total += itemTotal;
      }
    });

    totalField.value = total;
    updateChange();
  }

  function updateChange() {
    const cash = parseFloat(cashField.value) || 0;
    const change = cash - total;
    changeField.value = change >= 0 ? change : 0;
  }
});
      
