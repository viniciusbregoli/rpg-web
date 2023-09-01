function move(direction) {
    const narrativeText = document.getElementById('narrative-text');
    const sceneImage = document.getElementById('scene-image');

    switch (direction) {
        case 'up':
            narrativeText.textContent = "Você subiu uma montanha.";
            sceneImage.src = "mountain.jpg";
            break;
        case 'right':
            narrativeText.textContent = "Você foi para uma praia.";
            sceneImage.src = "beach.jpg";
            break;
        case 'down':
            narrativeText.textContent = "Você desceu para um vale.";
            sceneImage.src = "valley.jpg";
            break;
        case 'left':
            narrativeText.textContent = "Você está de volta na floresta.";
            sceneImage.src = "forest.jpg";
            break;
        default:
            break;
    }
}
