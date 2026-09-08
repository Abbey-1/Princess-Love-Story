// Music player
const musicElement = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = async () => {
    if (musicElement.paused) {
        try {
            await musicElement.play();
            musicBtn.textContent = "❚❚ Pause";
        } catch (e) {
            alert("Add your song as music.mp3 in the repository to play music!");
        }
    } else {
        musicElement.pause();
        musicBtn.textContent = "♫ Music";
    }
};

// Runaway No button
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function() {
    const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

noBtn.addEventListener("click", function(e) {
    e.preventDefault();
    return false;
});

// Surprise button
document.getElementById("surprise").onclick = function() {
    const message = document.getElementById("message");
    message.classList.toggle("hidden");
    
    if (!message.classList.contains("hidden")) {
        // Add some visual effects
        message.style.animation = "fadeIn 0.5s ease-in";
        
        // Trigger falling hearts animation
        createHearts();
    }
};

// Create falling hearts animation
function createHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = "-50px";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";
        heart.style.animation = "fall " + (Math.random() * 2 + 2) + "s ease-in forwards";
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

// Smooth scrolling for navigation (enhanced)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animations for elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "fadeIn 0.6s ease-in";
        }
    });
});

document.querySelectorAll('.section, .media-item, .grid article').forEach(el => {
    observer.observe(el);
});
