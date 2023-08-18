import * as Masonry from 'masonry-layout';
document.addEventListener("DOMContentLoaded", function() {
    const gallery = new FlexMasonry('.gallery', {
        breakpointCols: {
            default: 4,
            1100: 3,
            700: 2,
            500: 1
        }
    });

    const images = [
        'https://github.com/SlightlyHappy/slightlyhappy.github.io/blob/master/images/53CB254D-B0F0-4393-8183-EDCB1D1020D6-4714-00000062D78F194C.jpg?raw=true',
    'https://github.com/SlightlyHappy/slightlyhappy.github.io/blob/master/images/IMG_0674.JPG?raw=true','https://github.com/SlightlyHappy/slightlyhappy.github.io/blob/master/images/IMG_0947.JPG?raw=true',
    'https://github.com/SlightlyHappy/slightlyhappy.github.io/blob/master/images/IMG_0956.JPG?raw=true','https://github.com/SlightlyHappy/slightlyhappy.github.io/blob/master/images/IMG_0982.JPG?raw=true','https://github.com/SlightlyHappy/slightlyhappy.github.io/blob/master/images/IMG_1065.JPG?raw=true','https://github.com/SlightlyHappy/slightlyhappy.github.io/blob/master/images/IMG_1106.JPG?raw=true',
    'https://github.com/SlightlyHappy/slightlyhappy.github.io/blob/master/images/IMG_1240.PNG?raw=true'
    ];

    const galleryContainer = document.getElementById('gallery');
    images.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${image}" alt="Image">`;
        galleryContainer.appendChild(galleryItem);
    });
});
