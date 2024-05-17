document.addEventListener('keydown', function(event) {
    if (event.key === 's' || event.key === 'S') {
        handleSKeyPress();
    }
});

function handleSKeyPress() {
    window.location.href = 'projects.html';
}
