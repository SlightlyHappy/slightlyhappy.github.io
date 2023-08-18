document.addEventListener('DOMContentLoaded', function () {
    
    // Image URLs and gallery logic
    const images = [
        'https://raw.githubusercontent.com/SlightlyHappy/slightlyhappy.github.io/master/images/53CB254D-B0F0-4393-8183-EDCB1D1020D6-4714-00000062D78F194C.jpg',
        'https://raw.githubusercontent.com/SlightlyHappy/slightlyhappy.github.io/master/images/IMG_0674.JPG',
        'https://raw.githubusercontent.com/SlightlyHappy/slightlyhappy.github.io/master/images/IMG_0947.JPG',
        'https://raw.githubusercontent.com/SlightlyHappy/slightlyhappy.github.io/master/images/IMG_0956.JPG',
        'https://raw.githubusercontent.com/SlightlyHappy/slightlyhappy.github.io/master/images/IMG_0982.JPG',
        'https://raw.githubusercontent.com/SlightlyHappy/slightlyhappy.github.io/master/images/IMG_1065.JPG',
        'https://raw.githubusercontent.com/SlightlyHappy/slightlyhappy.github.io/master/images/IMG_1106.JPG',
        'https://raw.githubusercontent.com/SlightlyHappy/slightlyhappy.github.io/master/images/IMG_1240.PNG'
    ];

    const galleryDiv = document.getElementById('gallery');

    images.forEach(imageUrl => {
        const divElement = document.createElement('div');
        divElement.className = 'grid-item';
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        divElement.appendChild(imgElement);
        galleryDiv.appendChild(divElement);
    });

    // Initialize Masonry after the images have loaded
    imagesLoaded(galleryDiv, function () {
        const msnry = new Masonry(galleryDiv, {
            itemSelector: '.grid-item',
            columnWidth: 300,
            gutter: 5
        });
    });

    // Background color changing functionality
    const colors = ['#07020D', '#5DB7DE', '#F1E9DB', '#A39B8B', '#716A5C'];
    let colorIndex = 0; // outside the event listener to retain its value

    window.addEventListener('wheel', function(event) {
        // Checking the scroll direction (positive for down, negative for up)
        if (event.deltaY > 0) {
            colorIndex++;
        } else if (event.deltaY < 0 && colorIndex > 0) { // prevent the index from going negative
            colorIndex--;
        }
        const currentColor = colors[colorIndex % colors.length];
        document.body.style.backgroundColor = currentColor;
    });

});
