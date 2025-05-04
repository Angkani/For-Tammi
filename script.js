

const leanImage = document.getElementById('lean');
const messageContainer = document.getElementById('message');
const messageData = [
  {
    message: "*giggles*",
    image: "hulio2.png"
  },
  {
    message: "HAHA! 🤣",
    image: "hulio3.png"
  },
  {
    message: "okay..",
    image: "hulio4.png"
  },
  {
    message: "You got me! just continue tickling me to reveal the message 😊",
    image: "hulio3.png"
  },
  {
    message: "btw, he misses you, yk",
    image: "hulio.png"
  },
  {
    message: "he misses you so so much",
    image: "hulio9.png"
  },
  {
    message: "his love for you has always been remain the same",
    image: "hulio7.png"
  },
  {
    message: "from your first meeting until now",
    image: "hulio8.png"
  },
  {
    message: "in matter of fact, it grow so so much each and every day",
    image: "hulio8.png"
  },
  {
    message: "seeing you both apart is crushing me",
    image: "hulio7.png"
  },
  {
    message: "anyway, before i get caught out in the moment",
    image: "hulio1.png"
  }, 
  {
    message: "here is my message for you",
    image: "hulio2.png"
  },
  {
    message: "from me, Hulio",
    image: "hulio1.png"
  },
  {
    message: "before we proceed, I want to apoogize",
    image: "hulio1.png"
  },
  {
    message: "that I —",
    image: "hulio7.png"
  },
  {
    message: "i can only move my face",
    image: "hulio2.png"
  },
  {
    message: "anyways, here is my message",
    image: "hulio1.png"
  },
  {
    message: `Congratulations TAMMI! 🎉
You did a really, really, *REALLY* great job today and everyday!
Your effort, your creativity, your passion — it all paid off.
I am so proud of what you accomplished, and I hope you’re proud too.
Keep shining, Keep being amazing 🌟💖 and, Happy Graduation..`,
    image: "hulio5.png"
  },
  {
    message: "CHEERS!!! 🍻🍻",
    image: "hulio3.png"
  },
  {
    message: "You will have the life, you always talk about.",
    image: "hulio2.png"
  },
];

let messageIndex = 0;
let isTyping = false;

leanImage.addEventListener('mouseover', () => {
  if (!isTyping) {
    isTyping = true;

    const { message, image } = messageData[messageIndex];

    // Update image
    leanImage.src = image;

    // Type message
    typeMessage(message, messageContainer, () => {
      isTyping = false;
      messageIndex = (messageIndex + 1) % messageData.length;
    });
  }
});

function typeMessage(text, container, onComplete) {
  container.textContent = '';
  let i = 0;
  const speed = 50;

  function type() {
    if (i < text.length) {
      container.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      if (typeof onComplete === 'function') onComplete();
    }
  }

  type();
}



    const envelope = document.getElementById("envelope");
    const messageCard = document.getElementById("messageCard");
    const finalMessage = document.getElementById("finalMessage");
    const resetBtn = document.getElementById("resetBtn");
    const closeBtn = document.getElementById("closeBtn");

    let heartCount = 0;
    let heartsCreated = false;
    
    const placedHearts = [];
    

// Split the full message into parts

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// Split the full message into parts
const messageParts = [
      "I miss you",
      "Can we get back to what once was?",
      "Pretty please 🥺",
      "pardon me for being too straighforward",
      "uhmmmm",
     
      "and maybe if you still haven't read my message for you on our graduation",
      "here it is...",
      "btw. you might wanna change the song 😊",
      "Hey there!",
      "Well, look at you…",
      "Today marks the end of one incredible chapter, and the beginning of another even more exciting one.",
      "I couldn’t be more proud of you.",
      "Watching you work so hard, pushing through every challenge, and staying focused no matter what life threw your way—it’s been nothing short of inspiring.",
      "Your strength, your passion, your resilience… it all paid off.",
      "And now, you stand tall as a living testament to dedication and perseverance.",
      "You’ve always had this quiet fire in you—the kind that doesn’t need to shout to be felt.",
      "The way you chase your goals, how you keep your heart in everything you do, and how you make even the hardest things seem effortless—it’s something I deeply admire.",
      "You’ve achieved something so special, and I hope you truly take this moment in.",
      "This isn’t just a piece of paper or a certificate. It’s a reflection of who you are: someone incredibly talented, courageous, and full of light.",
      "And beyond all the accomplishments, it’s who you are as a person that I’m most grateful for.",
      "You’ve shared your journey with so much grace and kindness, and I feel incredibly lucky to have witnessed your growth.",
      "You’ve touched hearts, including mine, just by being you.",
      "Your ability to uplift, inspire, and make others believe in themselves is something rare—and something I’ll never stop appreciating.",
      "Thank you for allowing me to walk beside you on this journey.",
      "No matter where life takes you next, I know you’ll continue to shine in your own beautiful way.",
      "The world better be ready, because this is just the beginning.",
      "And no matter what, I’ll always be right here—cheering you on, proud of every step you take.",
      "Congratulations, Pen 🦢.",
      "You’ve earned every bit of this moment.",
      "Don’t ever forget how amazing you are.",
      "With all my love, admiration, and appreciation \,\n – Cob",
      "You will have the life, you always talk about.",
      "Hulio has something for you too."
    ];

let currentIndex = 0;
let typingInterval = null;  // Track the interval for the typewriter effect

// Function to disable the Next button
function disableNextButton() {
  nextBtn.disabled = true;
}

// Function to enable the Next button
function enableNextButton() {
  nextBtn.disabled = false;
}

// Typewriter effect function
function typewriterEffect(text, callback) {
  let i = 0;
  finalMessage.textContent = ""; // Clear the previous message
  
  // Clear any existing typewriter interval
  if (typingInterval) {
    clearInterval(typingInterval);
  }

  // Start the new typewriter effect
  typingInterval = setInterval(() => {
    finalMessage.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(typingInterval);
      enableNextButton();  // Re-enable the Next button when typing is finished
      if (callback) callback();
    }
  },60); // Adjust the speed (100ms per character)
}

// Function to update the displayed message with typewriter effect
function updateMessage() {
  const currentPart = messageParts[currentIndex];
  disableNextButton(); // Disable Next button while typing
  typewriterEffect(currentPart);
}

// Event listener for "Next" button
nextBtn.addEventListener("click", () => {
  if (currentIndex < messageParts.length - 1) {
    currentIndex++;
    updateMessage();
  }
});

// Event listener for "Previous" button
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateMessage();
  }
});

// Initialize the first message when the envelope is clicked
envelope.addEventListener("click", () => {
  // Immediately show the first message without the typewriter effect
  finalMessage.textContent = messageParts[0]; 
  
  // Wait 2 seconds before starting the typewriter effect for the rest of the messages
  setTimeout(() => {
    currentIndex = 0;  // Start from the second message
    updateMessage();  // Begin typewriter effect for the second message
  }, 1000);  // Wait 2 seconds before starting the typewriter effect
});


    const calculateMaxHearts = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const heartSize = 7; 
      const maxHearts = Math.floor((screenWidth * screenHeight) / (heartSize * heartSize));
      return maxHearts;
    };
    const maxHearts = 350;
    // const maxHearts = calculateMaxHearts();

    envelope.addEventListener("click", () => {
      if (heartsCreated) return;

      // Hide envelope after click and make it go to the back
      envelope.src = "envelope-open2.png";
      setTimeout(() => {
        envelope.style.opacity = 0;
        envelope.style.zIndex = -1;  
      }, 1000);

      heartsCreated = true;
      startPoppingHearts();
      showCardAfterDelay();
    });

    function startPoppingHearts() {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const offsetX = screenWidth * 0.05;
      const offsetY = screenHeight * 0.05;

      heartsInterval = setInterval(() => {
        
        if (heartCount >= maxHearts) {
          clearInterval(heartsInterval);
          return;
        }

        if (heartCount < maxHearts) {
          let heart = createHeart(screenWidth, screenHeight, offsetX, offsetY);
          placedHearts.push({ left: heart.style.left, top: heart.style.top });
          document.body.appendChild(heart);
          heartCount++;
        }
      }, 30);
    }

    function createHeart(screenWidth, screenHeight, offsetX, offsetY) {
      let heart;
      let isValidPosition = false;
      let left, top;

      while (!isValidPosition) {
        left = Math.random() * (screenWidth + offsetX * 2) - offsetX;
        top = Math.random() * (screenHeight + offsetY * 2) - offsetY;
        isValidPosition = checkHeartPosition(left, top);
      }

      heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = `${left}px`;
      heart.style.top = `${top}px`;

      heart.style.opacity = 1;

      return heart;
    }

    function checkHeartPosition(left, top) {
      const minDistance = 50;

      for (let i = 0; i < placedHearts.length; i++) {
        const placedHeart = placedHearts[i];
        const distance = Math.sqrt(
          Math.pow(left - parseFloat(placedHeart.left), 2) + Math.pow(top - parseFloat(placedHeart.top), 2)
        );

        if (distance < minDistance) {
          return false;
        }
      }

      return true;
    }

    function showCardAfterDelay() {
     
      setTimeout(() => {
        messageCard.style.opacity = 1; 
        startTypingEffect();
      }, 1000); 
    }

    function startTypingEffect() {
      let index = 0;
      finalMessage.textContent = "";

      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          finalMessage.textContent += fullText[index];
          index++;
        } else {
          clearInterval(typingInterval);
          
          finalMessage.style.borderRight = "none"; // Stop the blinking cursor
        }
      }, 50); // Adjust the speed of typing
    }


    resetBtn.addEventListener("click", () => location.reload());
    closeBtn.addEventListener("click", () => messageCard.style.opacity = 0);

    // Reveal animation
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      
      });
    }, { threshold: 0.4 });

document.querySelectorAll(".reveal-item").forEach(item => observer.observe(item));
const audioDisplay = document.getElementById("audioStatus");
const audio = document.getElementById("customAudio");
const audioPauseBtn = document.getElementById("audioPauseBtn");
const audioRestartBtn = document.getElementById("audioRestartBtn");
const audioNextBtn = document.getElementById("audioNextBtn");
const audioPrevBtn = document.getElementById("audioPrevBtn");
const playlist = [
  { title: "Do I wanna know?", src: "hozier-doiwannaknow.mp3" },
  { title: "My Favorite Part", src: "myfavoritepart.mp3" },
  { title: "DtMF by Bad Bunny", src: "DtMF-badbunny.mp3" },
 
  { title: "The Way", src: "theway.mp3" }
];

let currentTrack = 0;

function loadTrack(index) {
  const track = playlist[index];
  audio.src = track.src;
  document.querySelector('.now-playing-text').innerHTML = `${track.title} <i>is now playing...</i>`;
  audio.play();
  audioPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

// Handle Pause/Play
audioPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    audioPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audio.pause();
    audioPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
});

// Handle Restart
audioRestartBtn.addEventListener("click", () => {
  audio.currentTime = 0;
  audio.play();
});

// Handle Next
audioNextBtn.addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
});

// Handle Previous
audioPrevBtn.addEventListener("click", () => {
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrack);
});

// Load initial track when the page loads
window.addEventListener("DOMContentLoaded", () => {
  loadTrack(currentTrack);
});



envelope.addEventListener("click", () => {
 
  audioDisplay.style.opacity = 1;
  audio.loop = true;
  audio.play();

  
  setTimeout(() => {
    audioDisplay.style.opacity = 0.5;
  }, 2500);
});

const volumeBtn = document.getElementById('volumeBtn');
const volumeControl = document.getElementById('volumeControl');
const audioPlayer = document.getElementById('customAudio');

// Toggle mute on volume button click
let isMuted = false;
volumeBtn.addEventListener('click', function() {
  isMuted = !isMuted;
  if (isMuted) {
    audioPlayer.muted = true; // Mute the audio
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>'; // Change icon to mute
    volumeControl.value = 0; // Set slider to 0
  } else {
    audioPlayer.muted = false; // Unmute the audio
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>'; // Change icon back to volume-up
    volumeControl.value = audioPlayer.volume; // Set slider to current volume
  }
});

// Adjust the volume when the slider is changed
volumeControl.addEventListener('input', function () {
  if (!isMuted) {
    audioPlayer.volume = volumeControl.value;
  }
});

