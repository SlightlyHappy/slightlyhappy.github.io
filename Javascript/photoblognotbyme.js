document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox background
    let lightboxBackground = document.createElement('div');
    lightboxBackground.className = 'lightbox-background';
    document.body.appendChild(lightboxBackground);

    lightboxBackground.addEventListener('click', function() {
        lightboxBackground.style.opacity = '0';
        setTimeout(() => {
            lightboxBackground.style.display = 'none';
        }, 400); // this delay should match the transition duration in CSS
    });

    // For each image in the grid...
    document.querySelectorAll('.grid img').forEach(img => {
        img.addEventListener('click', function() {
            let lightboxContent = document.createElement('div');
            lightboxContent.className = 'lightbox-content';

            let imgClone = img.cloneNode(); // Clone the clicked image
            lightboxContent.appendChild(imgClone);
            
            lightboxBackground.innerHTML = ''; // Clear previous content
            lightboxBackground.appendChild(lightboxContent);
            lightboxBackground.style.display = 'block';

            // We use setTimeout to ensure that the display block takes effect first, then we animate
            setTimeout(() => {
                lightboxBackground.style.opacity = '1';
                imgClone.style.transform = 'scale(1)'; // grow the image to its natural size
                imgClone.style.opacity = '1';
            }, 10);
        });
    });
});
