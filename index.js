
// user clicks building to enter //
// new layout is inside the library bookshelves, coffee, chairs, table, etc.
// user clicks on computer to open their personal library
// third page is the actual interactive library to add, remove books etc.
// exit computer button ! !! ! !! !
// user can click on lucky cat for a random fortune 
// user clicks door to exit to outside of library




// INTERIOR DOOR ANIMATIONS //
function openDoor() {
    var doorClosed = document.getElementById('doorImageClosed');
    var doorOpen = document.getElementById('doorImageOpen');
    if (doorClosed && doorOpen) {
        doorClosed.style.display = 'none';
        doorOpen.style.display = 'block';
    } else {
        console.error('Cannot find door elements in the DOM.');
    }
}
function closeDoor() {
    var doorClosed = document.getElementById('doorImageClosed');
    var doorOpen = document.getElementById('doorImageOpen');
    if (doorClosed && doorOpen) {
        doorClosed.style.display = 'block';
        doorOpen.style.display = 'none';
    } else {
        console.error('Cannot find door elements in the DOM.');
    }
}
// NAVIGATION TO EXTERIOR // 
function navigateToPage() {
    window.location.href = '../index.html';
}
// LADDER **** MOVEMENT //
const speechBubble1 = document.getElementById('speechBubble1');
const speechBubble2 = document.getElementById('speechBubble2');
const mush1 = document.getElementById('mush1');
const mush2 = document.getElementById('mush2');
const ladder = document.getElementById('ladderImg');

ladder.addEventListener('mousemove', (e) => {
    const rect = ladder.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    ladder.style.transform = `translateX(${dx}px)`;

    // Toggle between showing speech bubbles and mushrooms based on ladder movement
    if (dx > 0) {
        // Moving right
        speechBubble1.style.display = 'block';
        speechBubble2.style.display = 'none';
        mush1.style.display = 'none';
        mush2.style.display = 'block';
    } else {
        // Moving left
        speechBubble1.style.display = 'none';
        speechBubble2.style.display = 'block';
        mush1.style.display = 'block';
        mush2.style.display = 'none';
    }
});

// ladder.addEventListener('mousemove', (e) => {
//     const rect = ladder.getBoundingClientRect();
//     const dx = e.clientX - rect.left - rect.width / 2;
//     ladder.style.transform = `translateX(${dx}px)`;
// });


