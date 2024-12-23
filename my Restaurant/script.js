document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const foodItem = document.getElementById('food-item').value;
    const quantity = document.getElementById('quantity').value;

    alert(`Thank you for your order, ${name}! You ordered ${quantity} of ${foodItem}.`);
});