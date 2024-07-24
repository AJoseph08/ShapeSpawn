document.addEventListener('DOMContentLoaded', function() {
    const oval = document.getElementById('oval');
    const square = document.getElementById('spawn-point');
    
    const shapes = [
        document.getElementById('triangle'),
        document.getElementById('can'),
        document.getElementById('cube'),
        document.getElementById('rounded-rect-callout')
    ];

    oval.addEventListener('click', function() {
        // Hide all shapes initially
        shapes.forEach(shape => shape.classList.add('hidden'));

        // Pick a random shape to display
        const randomShapeIndex = Math.floor(Math.random() * shapes.length);
        const selectedShape = shapes[randomShapeIndex];

        // Calculate the position to center the shape within the square
        const squareWidth = square.clientWidth;
        const squareHeight = square.clientHeight;

        const centerX = squareWidth / 2;
        const centerY = squareHeight / 2;

        // Set the position and show the selected shape
        selectedShape.style.left = `${centerX}px`;
        selectedShape.style.top = `${centerY}px`;
        selectedShape.classList.remove('hidden');

        // Append the shape to the square
        square.appendChild(selectedShape);
    });
});
