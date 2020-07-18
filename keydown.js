document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyR') {
        let audio = new Audio('./sounds/12do2.mp3');
        audio.play();
        let q = document.getElementById('ndo2');
        if (q.textContent == '') {
            q.innerHTML = 'ДО';
            q.style.backgroundColor = 'red';
        } else {
            q.innerHTML = '';
            q.style.backgroundColor = '';
        }
    }
});
