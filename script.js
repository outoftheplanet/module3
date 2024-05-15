// scripts.js

$(document).ready(function() {
    function displayMenu(menuType, menuItems) {
        $('#menu-content').html(`
            <h2>${menuType} Menu</h2>
            <p>Here are some delicious ${menuType.toLowerCase()} dishes:</p>
            <ul>
                ${menuItems.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `).fadeIn();
    }

    $('#chicken').click(function() {
        displayMenu('Chicken', ['Grilled Chicken', 'Chicken Alfredo', 'Chicken Curry']);
    });

    $('#beef').click(function() {
        displayMenu('Beef', ['Steak', 'Beef Tacos', 'Beef Stroganoff']);
    });

    $('#sushi').click(function() {
        displayMenu('Sushi', ['California Roll', 'Spicy Tuna Roll', 'Dragon Roll']);
    });
});