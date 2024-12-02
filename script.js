function showImage(month) {
    console.log('Attempting to show image for month:', month);
    var imagePopup = document.getElementById('image-popup');
    var image = imagePopup.querySelector('img');
    image.onerror = function() {
        console.error('Error loading image for month:', month);
    };
    image.onload = function() {
        imagePopup.style.display = 'block';
        setTimeout(function() {
            imagePopup.style.opacity = 1;
        }, 100);
    };
    image.src = '/img/' + month + '.jpg';
}

function hidePopup() {
    var imagePopup = document.getElementById('image-popup');
    imagePopup.style.opacity = 0;
    setTimeout(function() {
        imagePopup.style.display = 'none';
    }, 500);
}
