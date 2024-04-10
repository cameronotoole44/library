// home page outside of library- grass, stone, pathway(?)
// user clicks building to enter
// new layout is inside the library bookshelves, fireplace, chairs, tables, etc
// MAYBE user moves character (keep it simple for mobile in mind) to bookshelf
// user clicks on bookshelf to open their personal library
// third page is the actual interactive library


// function openDoor() {
//     document.getElementById("doorImageClosed").style.display = "none";
//     document.getElementById("doorImageOpen").style.display = "block";
// }

// function closeDoor() {
//     document.getElementById("doorImageClosed").style.display = "block";
//     document.getElementById("doorImageOpen").style.display = "none";
// }
// function navigateToPage() {
//     function navigateToPage() {
//         var doorClosed = document.getElementById("doorImageClosed");
//         var doorOpen = document.getElementById("doorImageOpen");

//         if (doorClosed && doorOpen) {
//             doorClosed.style.display = "none";
//             doorOpen.style.display = "block";
//         } else {
//             console.error("Cannot find door elements in the DOM.");
//         }
//     }
//     window.location.href = "../index.html";
// }

// const ladder = document.getElementById('ladderImg');

// ladder.addEventListener('mousemove', (e) => {
//     const rect = ladder.getBoundingClientRect();
//     const dx = e.clientX - rect.left - rect.width / 2;
//     ladder.style.setProperty('--ladder-translate-x', `${dx}px`);
// });


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

function navigateToPage() {
    window.location.href = '../index.html';
}

const ladder = document.getElementById('ladderImg');

ladder.addEventListener('mousemove', (e) => {
    const rect = ladder.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    ladder.style.transform = `translateX(${dx}px)`;
});
