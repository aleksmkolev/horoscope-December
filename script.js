function showImage(month) {
    console.log('Attempting to show image for month:', month);
    var imagePopup = document.getElementById('image-popup');
    var image = imagePopup.querySelector('img');
    
    // Add better error handling
    image.onerror = function() {
        console.error('Error loading image:', '/img/' + month + '.jpg');
        alert('Unable to load image for ' + month);
    };
    
    image.onload = function() {
        console.log('Image loaded successfully:', month);
        imagePopup.style.display = 'block';
        imagePopup.style.opacity = 1;
    };
    
    // Log the full image path
    console.log('Loading image from:', '/img/' + month + '.jpg');
    image.src = window.location.origin + '/img/' + month + '.jpg';
}

function hidePopup() {
    var imagePopup = document.getElementById('image-popup');
    imagePopup.style.opacity = 0;
    setTimeout(function() {
        imagePopup.style.display = 'none';
    }, 500);
}
