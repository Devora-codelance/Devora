const addBtns = document.querySelectorAll('.add-btn');
const cartList = document.getElementById('cart-list');
const totalPriceEl = document.getElementById('totalPrice');
const orderNowBtn = document.getElementById('orderNow');

let total = 0;

addBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const name = item.querySelector('h3').textContent;
    const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));

    const li = document.createElement('li');
    li.textContent = `${name} - $${price.toFixed(2)}`;
    cartList.appendChild(li);

    total += price;
    totalPriceEl.textContent = total.toFixed(2);
  });
});

orderNowBtn.addEventListener('click', () => {
  if (total === 0) {
    alert('Your cart is empty!');
    return;
  }

  alert(`✅ Thank you! Your order of $${total.toFixed(2)} has been placed successfully.`);
  cartList.innerHTML = '';
  total = 0;
  totalPriceEl.textContent = '0.00';
});
