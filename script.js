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

document.addEventListener("DOMContentLoaded", function () {
    const songItems = document.querySelectorAll(".songs-individual");
    const flashcard = document.getElementById("flashcard");
    const flashcardImg = document.getElementById("flashcard-img");
    const flashcardTitle = document.getElementById("flashcard-title");
    const flashcardArtist = document.getElementById("flashcard-artist");
    const closeBtn = document.querySelector(".close-btn");

    songItems.forEach(song => {
        song.addEventListener("click", function () {
            const imgSrc = this.querySelector(".song-img")?.src || "";
            const title = this.querySelector(".song-title")?.textContent || this.textContent;
            const artist = this.querySelector(".artist")?.textContent || "";

            flashcardImg.src = imgSrc;
            flashcardTitle.textContent = title;
            flashcardArtist.textContent = artist;
            
            flashcard.style.display = "flex";  // Show flashcard
        });
    });

    closeBtn.addEventListener("click", function () {
        flashcard.style.display = "none";  // Hide flashcard on close
    });

    // Hide flashcard if user clicks outside of it
    flashcard.addEventListener("click", function (e) {
        if (e.target === flashcard) {
            flashcard.style.display = "none";
        }
    });
});
