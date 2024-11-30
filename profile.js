document.addEventListener('DOMContentLoaded', function () {
    const userOffersList = document.getElementById('user-offers-list');
    const keys = Object.keys(sessionStorage);

    if (keys.length === 0) {
        userOffersList.innerHTML = '<li>No offers made yet.</li>';
    } 
    else {
        keys.forEach(key => {
            const offers = JSON.parse(sessionStorage.getItem(key));

            offers.forEach(offer => {
                const listItem = document.createElement('li');
                listItem.innerHTML = (`${offer.amount} Gold - <strong>${offer.item}</strong> 
                <button class="remove-offer" data-item="${offer.item}" data-index="${offers.indexOf(offer)}">Remove</button>`); // remove button
                userOffersList.appendChild(listItem);
            });
        });
    }

    // offer removal
    userOffersList.addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-offer')) {
            const itemName = e.target.getAttribute('data-item');
            const offerIndex = e.target.getAttribute('data-index');

            const offers = JSON.parse(sessionStorage.getItem(itemName));
            offers.splice(offerIndex, 1);

            if (offers.length > 0) {
                sessionStorage.setItem(itemName, JSON.stringify(offers));
            } 
            else {
                sessionStorage.removeItem(itemName);
            }
            location.reload();
        }
    });
});
