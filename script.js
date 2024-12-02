function showImage(month) {
    var imagePopup = document.getElementById('image-popup');
    var image = imagePopup.querySelector('img');
    image.src = '/img/' + month + '.jpg';
    imagePopup.style.display = 'block';
    setTimeout(function() {
        imagePopup.style.opacity = 1;
    }, 600);
}

function hideImage() {
    var imagePopup = document.getElementById('image-popup');
    imagePopup.style.opacity = 0;
    setTimeout(function() {
        imagePopup.style.display = 'none';
    }, 500);
}
