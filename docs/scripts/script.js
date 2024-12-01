// Filter items in the marketplace
document.getElementById('search').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let items = document.querySelectorAll('.item');

    items.forEach(function(item) {
        let itemName = item.querySelector('h4').innerText.toLowerCase();
        if (itemName.includes(filter)) {
            item.style.display = ''; 
        } 
        else {
            item.style.display = 'none';
        }
    });
});
