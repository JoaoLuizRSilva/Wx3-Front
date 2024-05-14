document.addEventListener('DOMContentLoaded', function() {
    let banner = document.querySelector('.banner');
    let image = banner.querySelector('img');
    
    let imageUrls = [
        'banner1',
        'banner2',
        'banner3'
    ];
    
    var currentIndex = 0;
    
    function showNextImage() {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        image.style.opacity = 0;
        setTimeout(function() {
            image.src = `./images/${imageUrls[currentIndex]}.jpg`;
            image.style.opacity = 1;
        }, 500);
    }
    
    setInterval(showNextImage, 4000);
});
