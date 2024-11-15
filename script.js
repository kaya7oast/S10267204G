// Filter items in the marketplace
document.getElementById('search').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let items = document.querySelectorAll('.item');

    items.forEach(function(item) {
        let itemName = item.querySelector('h3').innerText.toLowerCase();
        if (itemName.includes(filter)) {
            item.style.display = ''; 
        } else {
            item.style.display = 'none';
        }
    });
});

// trade button
const tradeButtons = document.querySelectorAll('.item button');
tradeButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('You have contacted the seller to trade this item!');
    });
});
