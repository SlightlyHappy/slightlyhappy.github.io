document.addEventListener("DOMContentLoaded", function() {

    // Randomize the order of images
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    //  slideshow code
    const imageUrls = [
        'https://i.redd.it/national-park-4k-3840x2160-by-a-i-v0-g4crddfnmt9a1.jpg?s=09b1d04542d7641ca8f15e7d41a4c8786926be97',
       'https://i.redd.it/stained-glass-waterfall-scene-4k-3840x2160-by-a-i-v0-go1ih058xtwa1.jpg?s=b61e042bc26509ad41b0c7082f1b8f4a5edad448',
      'https://i.redd.it/4k-neonate-mohave-rattlesnake-v0-9wg7mxnuw98b1.jpg?s=ea77fc3eb9ce1e3ceb94413aa94de7c1e0fb8e82',
      'https://i.redd.it/xd3cep2milb51.jpg',
      'https://i.redd.it/qo4f0m6ey3u51.png',
      'https://i.redd.it/5lb3sugxkmb51.jpg',
      'https://c4.wallpaperflare.com/wallpaper/596/763/771/artwork-painting-nighthawks-edward-hopper-wallpaper-preview.jpg',
      'https://c4.wallpaperflare.com/wallpaper/567/290/398/vincent-van-gogh-classic-art-painting-flowers-wallpaper-preview.jpg',
      'https://c4.wallpaperflare.com/wallpaper/50/277/72/railway-train-station-painting-steam-locomotive-wallpaper-preview.jpg',
      'https://i.redd.it/northern-lights-1920-1080-v0-x256oeqi9nib1.jpg?s=047872164fb4641722691fd4837c6b8e88cca7f6',
      'https://i.redd.it/night-sky-forests-and-mountains-5952x3264-v0-drtekja8qmib1.jpg?s=0e450b40a2f68d98184986c7f90624eb776125ed',
      'https://i.imgur.com/ezOgN0q.jpg',
      'https://i.redd.it/7lx9aw3ypcjb1.jpg',
      'https://i.redd.it/sv3ot16jm9jb1.jpg',
      'https://i.redd.it/n6y1w3gu0bjb1.jpg',
      'https://i.redd.it/t7ss77z3x6jb1.jpg',
      'https://i.redd.it/9it4uvroz2jb1.jpg'
    ];

    shuffleArray(imageUrls);

    const keyframeDuration = 10;
    const step = 100 / imageUrls.length;

    let keyframesCSS = '@keyframes slideshow {';
    for (let i = 0; i < imageUrls.length; i++) {
        const imageUrl = imageUrls[i];
        const startTime = i * step;
        const endTime = (i + 1) * step;

        keyframesCSS += `
            ${startTime}%, ${endTime}% {
                opacity: 1;
                background-image: url(${imageUrl});
            }
        `;
    }
    keyframesCSS += '}';

    const styleElement = document.createElement('style');
    styleElement.innerHTML = keyframesCSS;
    document.head.appendChild(styleElement);

    // Font-switching code
    const fonts = [
        'Barriecito', 'Caprasimo', 'Inconsolata', 'Josefin Sans', 'Bebas Neue', 'Rajdhani', 'Handjet', 'Dancing Script',
        'Pacifico', 'Lobster', 'Caveat', 'IBM Plex Mono', 'Shadows Into Light', 'Indie Flower', 'Satisfy', 'Tulpen One',
        'Kalam', 'Permanent Marker', 'Alumni Sans Inline One', 'Borel', 'Great Vibes'
    ];
    
    let currentFontIndex = 0;
    const spanElement = document.querySelector('section h1 span');
    
    setInterval(() => {
        spanElement.style.fontFamily = fonts[currentFontIndex];
        currentFontIndex = (currentFontIndex + 1) % fonts.length; // Loop over the fonts
    }, 2000); // Change font every 2 seconds

     // Animation code for sliding header
     const header = document.querySelector("header");
    
     // After a short delay, slide the header down into view
     setTimeout(() => {
         header.style.top = "0";
     }, 500); // Adjust the delay as needed

});
