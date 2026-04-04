// script.js
const excuses = [
    "I've decided to pivot to a career in interpretive birdwatching.",
    "my cat sat on my router and I don't want to disturb his workflow.",
    "I'm currently deep-diving into a bandwidth issue with a sandwich.",
    "I've entered a staring contest with my reflection and I'm winning.",
    "I accidentally joined a high-stakes underground bingo league.",
    "I am stuck in a 'synergy loop' and cannot find the exit."
];

const meetings = ["the Q3 Sync", "the Brainstorming Session", "the Status Update", "the Stand-up"];

const rollBtn = document.getElementById('rollBtn');
const dice = document.getElementById('dice');
const previewText = document.getElementById('previewText');
const previewSubject = document.getElementById('previewSubject');
const mailBtn = document.getElementById('mailBtn');

let currentExcuse = "";
let currentMeeting = "";

rollBtn.addEventListener('click', () => {
    // 1. Add shake animation
    dice.classList.add('shaking');
    rollBtn.disabled = true;

    setTimeout(() => {
        // 2. Pick random items
        currentExcuse = excuses[Math.floor(Math.random() * excuses.length)];
        currentMeeting = meetings[Math.floor(Math.random() * meetings.length)];

        // 3. Update UI
        dice.classList.remove('shaking');
        previewSubject.innerHTML = `<strong>Subject:</strong> Urgent: Absence from ${currentMeeting}`;
        previewText.innerText = `Hi Team, I can't make it. ${currentExcuse} Let's circle back when I've found my sanity.` ;

        // 4. Enable Buttons
        rollBtn.disabled = false;
        mailBtn.disabled = false;
        mailBtn.style.background = "#27c93f";
        mailBtn.style.color = "white";
    }, 600); // 0.6s delay for effect
});

mailBtn.addEventListener('click', () => {
    const subject = `Urgent: Absence from ${currentMeeting}`;
    const body = `Hi Team,\n\nI can't make it. ${currentExcuse}\n\nLet's circle back when I've found my sanity.\n\nBest,\n[Your Name]`;

    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
