// home page outside of library- grass, stone, pathway(?)
// user clicks building to enter
// new layout is inside the library bookshelves, fireplace, chairs, tables, etc
// MAYBE user moves character (keep it simple for mobile in mind) to bookshelf
// user clicks on bookshelf to open their personal library
// third page is the actual interactive library



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
// LADDER MOVEMENT //
const ladder = document.getElementById('ladderImg');
ladder.addEventListener('mousemove', (e) => {
    const rect = ladder.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    ladder.style.transform = `translateX(${dx}px)`;
});
