document.querySelector('.music-icon').addEventListener('click', function() {
    alert('Music icon clicked!');
});

const slider = document.querySelector('.playlist-slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -200, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 200, behavior: 'smooth' });
});


const playButton = document.querySelector('.play-button');

playButton.addEventListener('click', () => {
    if (playButton.classList.contains('fa-play')) {
        playButton.classList.remove('fa-play');
        playButton.classList.add('fa-pause');
    } else {
        playButton.classList.remove('fa-pause');
        playButton.classList.add('fa-play');
    }
});