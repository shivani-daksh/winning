const btnImageOverlayContainers = document.querySelectorAll('.btn-img-overlay-container');

btnImageOverlayContainers.forEach(container => {
    const overlayButton = container.querySelector('.overlay-button');

    container.addEventListener('mouseover', () => {
        overlayButton.style.display = 'flex';
    });

    container.addEventListener('mouseout', () => {
        overlayButton.style.display = 'none';
    });
});


const photoOverlayContainers = document.querySelectorAll('.photo-overlay-container');

photoOverlayContainers.forEach(container => {
    const overlayButton = container.querySelector('.overlay-button');

    container.addEventListener('mouseover', () => {
        overlayButton.style.display = 'flex';
    });

    container.addEventListener('mouseout', () => {
        overlayButton.style.display = 'none';
    });
});
