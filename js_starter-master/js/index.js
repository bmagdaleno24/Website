
// controls for changing the background
document.getElementById('background-btn').addEventListener('click', function() {
    document.getElementById('background').style.backgroundImage = "url('')";
});





// button controls

// controls for the left button
document.getElementById('left').addEventListener('click', function() {

});

// controls for the right button
document.getElementById('').addEventListener('', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) + 10;

    document.getElementById('ball').style.left = newPosition + 'px';
});

