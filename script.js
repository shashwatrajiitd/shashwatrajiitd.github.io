const startExperience = () => {
    const startOverlay = document.getElementById('start-overlay');
    const splashScreen = document.getElementById('splash-screen');
    const introSound = document.getElementById('intro-sound');
    const spectrumContainer = document.querySelector('.spectrum-container');
    const profileSelection = document.getElementById('profile-selection');

    // Hide overlay and show splash
    startOverlay.style.display = 'none';
    splashScreen.style.display = 'flex';

    // Image-matched Clustered Ribbons Logic (Straight & Clean)
    const getColor = (pos) => {
        if (pos < 20) return ['#ff0000', '#ee0000', '#cc0000'][Math.floor(Math.random() * 3)]; // Left Reds
        if (pos < 35) return ['#ffcc00', '#ffaa00', '#eeb800'][Math.floor(Math.random() * 3)]; // Mid-Left Yellows
        if (pos < 50) return ['#ff0077', '#ff00aa', '#ff0055'][Math.floor(Math.random() * 3)]; // Middle Pinks
        if (pos < 75) return ['#00ffff', '#00ccff', '#0099ff'][Math.floor(Math.random() * 3)]; // Mid-Right Cyans
        return ['#0000ff', '#0000cc', '#000099'][Math.floor(Math.random() * 3)]; // Right Blues
    };

    const lineCount = 100; // Significantly reduced for a clean light-bar look

    for (let i = 0; i < lineCount; i++) {
        const line = document.createElement('div');
        line.className = 'spectrum-line';

        // Scattered horizontally but perfectly straight vertically
        const xPos = Math.random() * 100;
        const width = Math.random() * 10 + 2; // Varying widths for visual depth
        const height = 150 + Math.random() * 100;
        const opacity = Math.random() * 0.8 + 0.2;
        const color = getColor(xPos);

        line.style.left = `${xPos}%`;
        line.style.width = `${width}px`;
        line.style.height = `${height}%`;
        line.style.opacity = opacity;
        line.style.backgroundColor = color;
        line.style.color = color; // Used for box-shadow currentColor

        // Perfectly straight (0 rotation)
        line.style.transform = `rotate(0deg) translateY(${Math.random() * 20 - 10}%)`;

        // Staggered cinematic entry
        line.style.animationDelay = `${Math.random() * 1.5}s`;

        spectrumContainer.appendChild(line);
    }

    // Trigger Audio and Animation
    introSound.currentTime = 0;
    introSound.play().then(() => {
        console.log('Intro audio playing...');
    }).catch(e => {
        console.warn('Audio auto-play failed:', e);
    });

    spectrumContainer.classList.add('spectrum-active');

    // Transition to Profiles after the 4s animation
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.style.display = 'none';
            profileSelection.style.display = 'flex';
            profileSelection.classList.add('active');
        }, 500);
    }, 4500);
};

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const introSound = document.getElementById('intro-sound');
    if (introSound) introSound.load();
});

function selectProfile(profile) {
    console.log(`Profile selected: ${profile}`);
    const profileSelection = document.getElementById('profile-selection');
    const mainApp = document.getElementById('main-app');

    // Get the clicked profile card using event.target
    const clickedCard = event.currentTarget;

    // Add zoom animation to clicked card
    clickedCard.classList.add('selected');

    // Start fade-out after brief card zoom
    setTimeout(() => {
        profileSelection.classList.add('fade-out');

        // After fade-out completes, hide profile screen and show main app
        setTimeout(() => {
            profileSelection.style.display = 'none';
            profileSelection.classList.remove('fade-out', 'active');
            mainApp.style.display = 'block';

            // Reset scroll and trigger fade-in animation
            window.scrollTo(0, 0);
            setTimeout(() => {
                mainApp.classList.add('active');
            }, 10);
        }, 500); // Match fade-out duration
    }, 300); // Match profile zoom duration
}
