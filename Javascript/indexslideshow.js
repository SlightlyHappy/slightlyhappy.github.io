document.addEventListener("DOMContentLoaded", function() {
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
      'https://i.redd.it/national-park-4k-3840x2160-by-a-i-v0-g4crddfnmt9a1.jpg?s=09b1d04542d7641ca8f15e7d41a4c8786926be97'
    ];

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
});
