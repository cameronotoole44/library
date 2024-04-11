
const treebeard = document.getElementById('treebeard');
const path = [
    { x: 300, y: 200 },
    { x: 320, y: 200 },
    { x: 340, y: 200 },
    { x: 360, y: 200 },
    { x: 380, y: 200 },
    { x: 400, y: 200 },
    { x: 420, y: 200 },
    { x: 440, y: 200 },
    { x: 460, y: 200 },
    { x: 480, y: 200 },
    { x: 500, y: 200 },
    { x: 520, y: 200 },
    { x: 540, y: 200 },
    { x: 560, y: 200 },
    { x: 580, y: 200 },
    { x: 600, y: 200 },
    { x: 620, y: 200 },
    { x: 640, y: 200 },
    { x: 660, y: 200 },
    { x: 680, y: 200 },
    { x: 700, y: 200 },
    { x: 720, y: 200 },
    { x: 740, y: 200 },
    { x: 760, y: 200 },
    { x: 780, y: 200 },
    { x: 800, y: 200 },
    { x: 820, y: 200 },
    { x: 840, y: 200 },
    { x: 860, y: 200 },
    { x: 860, y: 180 },
    { x: 860, y: 160 },
    { x: 860, y: 140 },
    { x: 860, y: 120 },
    { x: 860, y: 100 },
    { x: 860, y: 80 },
    { x: 860, y: 60 },
    { x: 860, y: 40 },
    { x: 860, y: 20 },
    { x: 860, y: 0 },
    { x: 860, y: -20 },
    { x: 860, y: -40 },
    { x: 840, y: -40 },
    { x: 820, y: -40 },
    { x: 800, y: -40 },
    { x: 780, y: -40 },
    { x: 760, y: -40 },
    { x: 740, y: -40 },
    { x: 720, y: -40 },
    { x: 700, y: -40 },
    { x: 680, y: -40 },
    { x: 660, y: -40 },
    { x: 640, y: -40 },
    { x: 620, y: -40 },
    { x: 600, y: -40 },
    { x: 580, y: -40 },
    { x: 560, y: -40 },
    { x: 540, y: -40 },
    { x: 520, y: -40 },
    { x: 500, y: -40 },
    { x: 480, y: -40 },
    { x: 460, y: -40 },
    { x: 440, y: -40 },
    { x: 420, y: -40 },
    { x: 400, y: -40 },
    { x: 380, y: -40 },
    { x: 360, y: -40 },
    { x: 340, y: -40 },
    { x: 340, y: -20 },
    { x: 340, y: -10 },
    { x: 340, y: 0 },
    { x: 340, y: 10 },
    { x: 340, y: 20 },
    { x: 340, y: 40 },
    { x: 340, y: 60 },
    { x: 340, y: 80 },
    { x: 340, y: 100 },
    { x: 340, y: 120 },
    { x: 340, y: 140 },
    { x: 340, y: 160 },
    { x: 340, y: 180 },
    { x: 340, y: 200 },
    { x: 320, y: 200 },
    { x: 300, y: 200 },

];

let imageIndex = 0;
const walkingImages = ['Ent_walk_1.png', 'Ent_walk_2.png', 'Ent_walk_3.png', 'Ent_walk_4.png']; // Update with your image paths

function animateTreebeard() {
    let index = 0;
    const intervalId = setInterval(() => {
        if (index < path.length - 1) {
            const currentPos = path[index];
            const nextPos = path[index + 1];
            const angle = Math.atan2(nextPos.y - currentPos.y, nextPos.x - currentPos.x) * 180 / Math.PI;
            treebeard.style.transform = `translate(${nextPos.x}px, ${nextPos.y}px) rotate(${angle}deg)`;
            updateWalkingImage();
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, 200); // adjust the speed of animation (milliseconds)
}

function updateWalkingImage() {
    treebeard.style.backgroundImage = `url('${walkingImages[imageIndex]}')`;
    imageIndex = (imageIndex + 1) % walkingImages.length;
}

animateTreebeard();
