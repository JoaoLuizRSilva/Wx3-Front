document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.item');
    items.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            showButton(item);
        });
        item.addEventListener('mouseout', function() {
            hideButton(item);
        });
    });
});

function showButton(item) {
    var button = item.querySelector('.button-comprar');
    button.style.visibility = 'visible';
}

function hideButton(item) {
    var button = item.querySelector('.button-comprar');
    button.style.visibility = 'hidden';
}