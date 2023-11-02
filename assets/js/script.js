console.log("AYAYA");
// I want to add functionality wherein when I click the button, it should DISPLAY the price, origin, and weight of the fish.

// I want to make ONE CLICK EVENT CAUSE IM LAZY. SO I AM GOING TO TARGET THE PARENT ELEMENT

var fishCardBody = document.getElementById('fishBody');

console.log(fishCardBody);

// When I click on a card inside of this fishBody, I want to get the origin. But let's start by confirming that I can click a specific card in this body.

fishCardBody.addEventListener('click', function(e) {
    console.log(e.target);
    var buttonOnCard = e.target;

    if(buttonOnCard.matches("button")) {
        // console.log("You clicked a button!");
        // console.log(e.target);
        var dataOfOrigin = buttonOnCard.getAttribute('data-origin');
        console.log(dataOfOrigin);

        var listEl = document.createElement('li');
        listEl.textContent = dataOfOrigin;
       var mackerelTable = document.getElementById('mackerel-table');
       mackerelTable.append(listEl);
    }
});
// We can ask Alan how hard it is to catch every one of them and give it a difficulty rating of 1 - 5. 