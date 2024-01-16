document.addEventListener("DOMContentLoaded", function () {
    const words = document.querySelectorAll('.word');
    const bubbles = document.querySelectorAll('.bubble');

    words.forEach(word => {
        word.addEventListener('mouseover', showBubble);
        word.addEventListener('mouseout', hideBubble);
        word.addEventListener('click', toggleBubble);
        word.addEventListener('touchstart', showBubbleTouch);
        word.addEventListener('touchend', hideBubble);
    });

    function showBubble(event) {
        const bubbleId = event.target.getAttribute('data-bubble');
        const bubble = document.getElementById(bubbleId);
        setPositionAndShowBubble(event, bubble);
    }

    function hideBubble(event) {
        const bubbleId = event.target.getAttribute('data-bubble');
        const bubble = document.getElementById(bubbleId);
        bubble.style.display = 'none';
    }

    function toggleBubble(event) {
        const bubbleId = event.target.getAttribute('data-bubble');
        const bubble = document.getElementById(bubbleId);
        
        if (bubble.style.display === 'block') {
            bubble.style.display = 'none';
        } else {
            setPositionAndShowBubble(event, bubble);
        }
    }

    function showBubbleTouch(event) {
        event.preventDefault(); // Prevents the default touch event behavior
        const bubbleId = event.target.getAttribute('data-bubble');
        const bubble = document.getElementById(bubbleId);
        setPositionAndShowBubble(event.touches[0], bubble);
    }

    function setPositionAndShowBubble(event, bubble) {
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        bubble.style.left = `${event.clientX + scrollX}px`;
        bubble.style.top = `${event.clientY + scrollY}px`;
        bubble.style.display = 'block';
    }
});
