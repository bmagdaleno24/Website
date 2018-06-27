// controls for changing the background
document.getElementById('background-btn').addEventListener('click', function() {
    document.getElementById('background').style.backgroundImage = "url('https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg')";
});


// button controls

// controls for the left button
document.getElementById('left').addEventListener('click', function() {
    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) - 10;

    document.getElementById('ball').style.left = newPosition + 'px';
});

// controls for the right button
document.getElementById('right').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) + 10;

    document.getElementById('ball').style.left = newPosition + 'px';
});

// controls for the Up button
document.getElementById('up').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    myGamePiece.speedY -= 1;

    document.getElementById('ball').style.left = newPosition + 'px';
});

