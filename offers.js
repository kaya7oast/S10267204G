// Function to display offers in the "Offers Made" section
document.addEventListener('DOMContentLoaded', function () {
    function displayOffers() {
        const offersList = document.getElementById('offers-list');
        const itemName = document.querySelector('.bought_item').textContent.trim();
        const storedOffers = JSON.parse(sessionStorage.getItem(itemName)) || [];
        offersList.innerHTML = '';

        storedOffers.forEach(function(offer) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<p style="white-space: pre;">${offer.amount} Gold                                     CoolGuy28</p>`;
            offersList.appendChild(listItem);
        });
    }
    displayOffers();
    
    const form = document.getElementById('offer-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const offerAmount = document.getElementById('offer-amount').value.trim();
        const itemName = document.querySelector('.bought_item').textContent.trim();

        if (offerAmount !== '') {
            const newOffer = {
                amount: offerAmount,
                item: itemName,
                username: "CoolGuy28"
            };
            const existingOffers = JSON.parse(sessionStorage.getItem(itemName)) || [];
            existingOffers.push(newOffer);

            sessionStorage.setItem(itemName, JSON.stringify(existingOffers));
            form.reset();
            displayOffers();
            alert('Offer made!')
        } 
        else {
            alert('Please enter a valid offer amount');
        }
    });
});
