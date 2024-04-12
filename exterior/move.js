const treebeard = document.getElementById('treebeard');
const path = [
    { x: 20, y: 20 },
    { x: 20, y: 40 },
    { x: 20, y: 60 },
    { x: 20, y: 80 },
    { x: 20, y: 100 },
    { x: 20, y: 120 },
    { x: 20, y: 140 },
    { x: 20, y: 160 },
    { x: 20, y: 180 },
    { x: 20, y: 200 },
    { x: 20, y: 220 },
    { x: 20, y: 240 },
    { x: 20, y: 260 },
    { x: 20, y: 280 },
    { x: 20, y: 300 },
    { x: 40, y: 320 },
    { x: 60, y: 340 },
    { x: 80, y: 360 },
    { x: 100, y: 380 },
    { x: 120, y: 400 },
    { x: 140, y: 420 },
    { x: 160, y: 440 },
    { x: 180, y: 460 },
    { x: 200, y: 480 },
    { x: 220, y: 500 },
];

let imageIndex = 0;
const walkingImages = ['./exterior/Ent_walk_1.png', './exterior/Ent_walk_2.png', './exterior/Ent_walk_3.png', './exterior/Ent_walk_4.png'];

function animateTreebeard() {
    let index = 0;
    let direction = 1;
    const intervalId = setInterval(() => {
        if (index < 0 || index >= path.length - 1) {
            direction *= -1;
        }
        index += direction;
        const currentPos = path[index];
        if (currentPos) {
            treebeard.style.left = `${currentPos.x}px`;
            treebeard.style.top = `${currentPos.y}px`;
        }
        updateWalkingImage();
    }, 220); // speed
}

function updateWalkingImage() {
    treebeard.style.backgroundImage = `url('${walkingImages[imageIndex]}')`;
    imageIndex = (imageIndex + 1) % walkingImages.length;
}

animateTreebeard();