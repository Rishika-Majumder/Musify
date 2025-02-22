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

let currentSongIndex = 0;
const songs = [
    {
        title: 'Mera Chehra',
        artist: 'Arijit Singh',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-1AAIS0QGX6Yd3_9yr3GPLRKhw4QMELFNig&s',
        duration: '4:34'
    },
    {
        title: 'Ishq Hai',
        artist: 'Anurag Saikia',
        imgSrc: 'https://c.saavncdn.com/839/Mismatched-Season-3-Soundtrack-from-the-Netflix-Series-Hindi-2024-20241217204803-500x500.jpg',
        duration: '5:12'
    },
    {
        title: 'Sooiya',
        artist: 'Amit Trivedi',
        imgSrc: 'https://c.saavncdn.com/878/Sooiyan-From-Guddu-Rangeela--Hindi-2015-20200806151831-500x500.jpg',
        duration: '4:01'
    },
    {
        title: 'Haan ke Haan',
        artist: 'Sohail Sen',
        imgSrc: 'https://c.saavncdn.com/461/Maharaj-Hindi-2024-20240622100909-500x500.jpg',
        duration: '3:24'
    },
    {
        title: 'Uyi Amma',
        artist: 'Amit Trivedi',
        imgSrc: 'https://i.scdn.co/image/ab67616d0000b273ff602926eb81f594fc034034',
        duration: '4:13'
    }
];

function openPlayer(event, songIndex) {
    event.stopPropagation();
    currentSongIndex = songIndex;  // Set the current song index when a song is clicked
    
    // Update the floating player with the selected song's details
    const song = songs[currentSongIndex];
    document.getElementById("player-img").src = song.imgSrc;
    document.getElementById("player-song-title").textContent = `${song.title} - ${song.artist}`;
    document.getElementById("player").style.display = "block";
    document.getElementById("content").classList.add("blur");
}

function closePlayer(event) {
    if (!document.getElementById("player").contains(event.target)) {
        document.getElementById("player").style.display = "none";
        document.getElementById("content").classList.remove("blur");
    }
}

function togglePlayPause() {
    let icon = document.getElementById("playPauseIcon");
    if (icon.classList.contains("fa-play")) {
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
    } else {
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
    }
}

function prevSong() {
    // Go to the previous song
    currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
    const song = songs[currentSongIndex];
    document.getElementById("player-img").src = song.imgSrc;
    document.getElementById("player-song-title").textContent = `${song.title} - ${song.artist}`;
}

function nextSong() {
    // Go to the next song
    currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
    const song = songs[currentSongIndex];
    document.getElementById("player-img").src = song.imgSrc;
    document.getElementById("player-song-title").textContent = `${song.title} - ${song.artist}`;
}



