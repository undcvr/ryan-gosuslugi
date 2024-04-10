document.querySelector('.calculate').addEventListener('click', function() {
    document.querySelector('.ring').style.display = 'block'
    var audio = new Audio('./untitled.mp3');
    audio.play();
    setTimeout(() => {
        document.querySelector('.ring').style.display = 'none'
        document.querySelector('img').style.height = '580px'
    }, 2000);
})