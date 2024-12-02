function showImage(month) {
    console.log('Attempting to show image for month:', month);
    var imagePopup = document.getElementById('image-popup');
    var image = imagePopup.querySelector('img');
    
    // Define the image path
    const imagePath = `./img/${month}.jpg`;  // Changed to relative path
    
    image.onerror = function() {
        console.error('Error loading image:', imagePath);
        alert(`Unable to load image for ${month}. Please check if ${imagePath} exists.`);
    };
    
    image.onload = function() {
        console.log('Image loaded successfully:', imagePath);
        imagePopup.style.display = 'block';
        imagePopup.style.opacity = 1;
    };
    
    console.log('Attempting to load image from:', imagePath);
    image.src = imagePath;
}

function hidePopup() {
    var imagePopup = document.getElementById('image-popup');
    imagePopup.style.opacity = 0;
    setTimeout(function() {
        imagePopup.style.display = 'none';
    }, 500);
}

console.log('Current page URL:', window.location.href);
console.log('Project root:', window.location.origin);
