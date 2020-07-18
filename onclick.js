
document.getElementById('do2').onclick = () => {
    let audio = new Audio('./sounds/do2.mp3');
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
