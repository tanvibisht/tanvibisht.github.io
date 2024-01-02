function createFireflies(num) {
    const container = document.getElementById('firefly-container');
    
    for (let i = 0; i < num; i++) {
        let firefly = document.createElement('div');
        firefly.className = 'firefly';
        firefly.style.width = `${Math.random() * 5}px`;
        firefly.style.height = firefly.style.width;
        firefly.style.left = `${Math.random() * 100}%`;
        firefly.style.top = `${Math.random() * 100}%`;
        firefly.style.animationDuration = `${Math.random() + 0.5}s`;
        firefly.style.animationDelay = `${Math.random()}s`;

        container.appendChild(firefly);
    }
}

createFireflies(50); 
