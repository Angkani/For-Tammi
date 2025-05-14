

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
    message: "his love for you has always remained the same",
    image: "hulio7.png"
  },
  {
    message: "From the moment you first met — ",
    image: "hulio8.png"
  },
   {
    message: "until now...",
    image: "hulio8.png"
  },
  {
    message: "in matter of fact, it grow so much more each and every day",
    image: "hulio8.png"
  },
  {
    message: "seeing you both apart is crashing me... yk",
    image: "hulio7.png"
  },
  {
    message: "anyway, before i get caught up in the moment",
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

leanImage.addEventListener('click', () => {
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
    



const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const messageParts = [
  { type: "text", content: "I miss you" },
  { type: "text", content: "Can we get back to what once was?" },
  { type: "text", content: "pardon me for being too straighforward" },
  { type: "text", content: "but can we? 🥺" },
  { type: "text", content: "Anyway, let's get right to why you are here."},
  { type: "text", content: "Here is my message for you on our graduation day." },
  { type: "text", content: "btw. you might wanna change the song 😊"},
  { type: "special", content: `<span style="display: block; text-align: right; font-size: 0.9em; margin-bottom: 1em;">April 11, 2025</span> 
    
      Hey there!<br>
    &nbsp&nbsp Well, look at you… today marks the end of one incredible chapter, and the beginning of another even more exciting one. I couldn’t be more proud of you. Watching you work so hard, pushing through every challenge, and staying focused no matter what life threw your way—it’s been nothing short of inspiring. Your strength, your passion, your resilience… it all paid off. And now, you stand tall as a living testament to dedication and perseverance.
    <br><br>
    &nbsp&nbspYou’ve always had this quiet fire in you—the kind that doesn’t need to shout to be felt. The way you chase your goals, how you keep your heart in everything you do, and how you make even the hardest things seem effortless—it’s something I deeply admire. You’ve achieved something so special, and I hope you truly take this moment in. This isn’t just a piece of paper or a certificate. It’s a reflection of who you are: someone incredibly talented, courageous, and full of light.
    <br><br>
    &nbsp&nbspAnd beyond all the accomplishments, it’s who you are as a person that I’m most grateful for. You’ve shared your journey with so much grace and kindness, and I feel incredibly lucky to have witnessed your growth. You’ve touched hearts, including mine, just by being you. Your ability to uplift, inspire, and make others believe in themselves is something rare—and something I’ll never stop appreciating.
    <br><br>
    &nbsp&nbspThank you for allowing me to walk beside you on this journey. No matter where life takes you next, I know you’ll continue to shine in your own beautiful way. The world better be ready, because this is just the beginning. And no matter what, I’ll always be right here—cheering you on, proud of every step you take.
    <br><br>
    Congratulations, Pen 🦢.<br>
    You’ve earned every bit of this moment. Don’t ever forget how amazing you are.
    <br><br>
    With all my love, admiration, and appreciation,<br>
    – Cob
    <br><br>
    You will have the life, you always talk about.
    `, id: "finalMessages" },
    { type: "text", content: "Thank you for reading it." },
    { type: "text", content: "I hope you're doing okay now," },
    { type: "text", content: "slowly finding your way back to where you're meant to be." },
    { type: "text", content: "Well, since you're already here..." },
    { type: "text", content: "I want to apologize for the way I left." },
    { type: "text", content: "The way I walked away without saying much." },
    { type: "text", content: "All I knew at the time was that it felt like the best thing I could do." },
    { type: "text", content: "I didn’t want to hurt you more than I already had." },
    { type: "text", content: "I literally uninstalled all the messaging apps..." },
    { type: "text", content: "even disabled my messages and contacts apps completely." },
    { type: "text", content: "I didn't think it through" },
    { type: "text", content: "I just ran." },  
    { type: "text", content: "and now I still dont have any idea how can I bring you back your books" },
    { type: "text", content: "I promise I will bring these back." },  
    { type: "text", content: "I'm sorry. I ran away crying like a child." },
    { type: "text", content: "It’s just... I knew I was the cause of your pain, and I didn’t want to make it any worse." },
    { type: "text", content: "I felt like even just replying to you might hurt you more." },
    { type: "text", content: "Even sending a simple message—" },
    { type: "text", content: "an appreciation, a goodbye, anything—" },
    { type: "text", content: "felt like it would just reopen wounds." },
    { type: "text", content: "I'm not good at goodbyes." },
    { type: "text", content: "So no matter how hard it was not to say anything," },
    { type: "text", content: "how painful it was to stay silent," },
    { type: "text", content: "I chose to disappear quietly." },
    { type: "text", content: "No flowery farewell messages from me," },
    { type: "text", content: "because I knew those words would only leave a thorn in your heart." },
    { type: "text", content: "And deep down, I felt like maybe you preferred it that way." },
    { type: "text", content: "But, if you also preferred it the other way around" },
    { type: "text", content: "you may read this one" },
    {
      type: "special",
      content: ` 
    
      You don’t owe me anything—not closure, not answers, not even a glance back.<br>  
      Just knowing you’re out there, hopefully healing and becoming everything you’re meant to be—that’s enough for me. <br> 
      I may never get to be part of your next chapters, and that’s okay.  <br>
      Because a part of me will always quietly root for you from afar.  <br>
      Every dream you chase, every laugh you share, every moment of peace you find—I’ll be silently cheering for it all.<br>  
      You’ve taught me what real love feels like—not just the joy, but the responsibility and the letting go, too.  <br>
      And while it hurts to hold back everything I still feel, I’ll carry it with grace.  <br>
      Not as a regret, but as a reminder of something real, something pure.  <br>
      Loving you shaped me. It made me softer. Braver. Wiser.  <br>
      So if this love has to live quietly in me from now on, so be it.  <br>
      It will live as something beautiful—not bitter.  <br>
      And if ever you feel alone, I hope a part of your heart remembers...  <br>
      There’s someone out here who still carries you with gentleness, always.  <br>
    <br><br>
      And if I’m being honest...  <br>
      I want you to know that no matter where life takes you from here—my hope for you is peace.  <br>
      A peace so quiet and warm it wraps around you like a gentle morning light.  <br>
      I hope you find everything you’ve been searching for, even the things you didn’t know you needed.  <br>
      I hope love surrounds you in the way you deserve—fully, honestly, and without fear.  <br>
      And if ever my absence creates silence, I hope it’s the kind that lets you breathe easier.  <br>
    <br><br>
      As for me, this will always be my quiet burden to carry.  <br>
      Not a painful one—but a precious one.  <br>
      Because it’s been a privilege to love you.  <br>
      And an even greater honor to have been loved by someone like you.  <br>
      So if this is goodbye, let it be gentle. Let it be kind.  <br>
      And please—walk forward with your head high and your heart full.  <br>
      You were always meant to shine.`, id: "farewell" },
    
  { type: "text", content: "And I am truly sory for that" },
  { type: "text", content: "And I am truly sory for that" },
  { type: "text", content: "Also... I don’t know. Maybe I should just leave this here too." },
  { type: "text", content: "There’s a message I’ve been holding onto—one I never sent." },
  { type: "text", content: "Because honestly, I’m hesitant. I don’t know if I’m supposed to send it, or if it even matters anymore." },
  { type: "text", content: "But this message was bugging me during the days that we were still together." },
  { type: "text", content: "I feel like I need to say it... but I’m scared it might ruin everything we had back then" },
  { type: "text", content: "That maybe the issue is over, but some part of me still saying that it is not." },
  { type: "text", content: "And it’s confusing. It’s heavy." },
  { type: "text", content: "I’m sorry I never found the right time to tell you this." },
  { type: "text", content: "Not even now, really." },
  { type: "text", content: "But here it is." },
  
  { type: "special", content: `<span style="display: block; text-align: right; font-size: 0.9em; margin-bottom: 1em;">April 7, 2025</span> 
    &nbsp These past few days, you've been asking me why I left—why I would even think of walking away from you. And I’ve told you, more than once, that I didn’t want to. I never intended to leave you. And that’s the truth.
  <br><br>
  Still, I realize maybe it wasn’t about hearing the words—you needed to feel that I meant them. So I’m writing this, even though part of me is hesitant. Maybe I’ve already said enough. Maybe you've already heard everything you needed. But there’s still something in me that needs to be said.
  <br><br>
  I'm sorry, Julia. Truly.
  <br><br>
  I didn’t leave because I stopped loving you.<br>
  I didn’t leave because I hated you.<br>
  I didn’t leave because I wanted to.<br><br>
  
  I left because I felt something I’ve never felt toward you before—feelings that I always hate having, feeling that I always avoid to feel on someone and to anyone.<br><br>
  
  I was angry. I was mad. And I didn’t want that version of me anywhere near you, that's what I promised you, and that's what I promised myself.<br><br>
  
  I admitted I was angry, but I couldn’t even explain it fully at the time. I didn’t want to speak out of that anger and say things I didn’t mean. I didn’t want to let my emotions take control and end up hurting you with my words or actions. I know you've been through so much already—I couldn’t bear the thought of adding more weight to that, all I ever want for you is your peace and happiness.
  <br><br>
  So, I stepped away. Not because I wanted to abandon you. Not because I want to avoid all the accountability, but because I wanted to protect you—from me, in that moment. I needed to cool down, to collect myself, to come back as someone who could love you properly, not someone led by frustration and fear.
  <br><br>
  > while writing this— I wish I had told you all this instead of what I did say—that you deserved better, that I always mess things up. I said those things because I was overwhelmed, not because they were true. And I’m sorry for that too.
  <br><br>
  > so in the middle of writing this what I’ve come to realize is that sometimes, all I needed was just to breathe—to have a pause and inhale-exhale things out instead of just letting my self out and explode. And I’m glad I did. Because now I can speak to you clearly, calmly, and honestly.
  <br><br>
  I love you, Julia. And I’m here—not to run, not to leave—but to make things right.
  <br><br>
  I am so hesitant to send this to you because I promised you and also written on the letters I gave you that, that would be the last apologize letter you will receive from me because I'm going to be better and more better for you — but as you can see I still couldn't. I want to be a man of my word but as you can see, I failed.
  <br><br>
  and I admit that, I will truly respect all the decision you may be, and I will understand it thoroughly.`, id: "apology"},
  { type: "text", content: "it was writen a week before our graduation."},

  { type: "text", content: "uhmmmm"},
  { type: "text", content: "I see you activate your facebook now"},
  { type: "text", content: "well at least your messenger"},
  { type: "text", content: "I am glad that you are finally back"},
  { type: "text", content: "I am so happy for you"},
  { type: "text", content: "and..."},
  { type: "text", content: "you removed our theme and my nickname for you 🥺"},
  { type: "text", content: "kidding aside, what matter is that you are back"},
  { type: "text", content: "and I am so so happy for you, I hope youre doing great now Tammi."},
  { type: "text", content: "that's all 😊" },
  { type: "text", content: "I guess..." },
  { type: "text", content: "I appreciate you spending your time here." },
  { type: "text", content: "truly, Thank you so much once again." },
  { type: "text", content: "one more thing!" },
  { type: "text", content: "Hulio also prepare a message for you" },
  { type: "text", content: "just tickle him a little you know. 😁" },
  { type: "text", content: "you know where his spot is 😊" },
];


let currentIndex = 0;
let typingInterval = null;  

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
  },70 );
}

// Function to update the displayed message with typewriter effect
function updateMessage() {
  const currentPart = messageParts[currentIndex];
  disableNextButton(); 

  if (currentPart.type === "text") {
    typewriterEffect(currentPart.content);
  } else if (currentPart.type === "special") {
    showSpecialMessage(currentPart.content, currentPart.id);
  }
}

function showSpecialMessage(content, id) {
  const messageCard = document.getElementById("messageCard");

  // Hide message card when special modal shows
  if (messageCard) {
    messageCard.style.display = "none";
  }

  // Create overlay/modal if not exists
  let specialBox = document.getElementById(id);
  if (!specialBox) {
    specialBox = document.createElement("div");
    specialBox.id = id;
    specialBox.className = "special-message-box";
    specialBox.innerHTML = `
      <div class="special-message-content">
        <p>${content}</p>
          <div class="envelope-button">
            <img src="envelope-open2.png" alt="Envelope Open" class="open">
            <img src="envelope-close.png" alt="Envelope Close" class="close">
          </div>

      
      </div>
    `;
      // <button class="closeSpecialBtn"><i class="fas fa-times"></i></button>
    document.body.appendChild(specialBox);
  }

  specialBox.style.display = "flex"; 


  const envelopeBtn = specialBox.querySelector(".envelope-button");
  const messageContent = specialBox.querySelector(".special-message-content p");
  
  let messageShown = false;
  
  envelopeBtn.addEventListener("click", () => {
    if (!messageShown) {
      // First click: reveal message text only
      messageContent.style.display = "block"; // or use opacity animation
      messageShown = true;
    } else {
      // Second click: close modal and show messageCard again
      specialBox.style.display = "none";
  
      if (messageCard) {
        messageCard.style.display = "block";
      }
  
      messageShown = false; // Reset for next time
  
      // Instead of just enabling, move to next message
      currentIndex++;       // Go to next part
      updateMessage();      // Display it
    }
  });
  
  messageContent.style.opacity = "1";
  
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

    function changeImageSmoothly(newSrc) {
      const fadeDuration = 300; // milliseconds (shorter, faster)
    
      // Preload image first
      const tempImg = new Image();
      tempImg.src = newSrc;
    
      tempImg.onload = () => {
        // Start fading out
        envelope.style.transition = `opacity ${fadeDuration}ms ease`;
        envelope.style.opacity = 0.5; // Not fully 0, keep a soft presence
    
        // Swap image slightly before full fade completes
        setTimeout(() => {
          envelope.src = newSrc;
    
          // Fade in again
          envelope.style.transition = `opacity ${fadeDuration}ms ease`;
          envelope.style.opacity = 1;
        }, fadeDuration - 60); // start swapping a little earlier
      };
    }
    
    
    
    envelope.addEventListener("mouseenter", () => {
      if (!heartsCreated) {
        changeImageSmoothly("envelope-open.png");
        envelope.classList.add("hovered");
      }
    });
    
    envelope.addEventListener("mouseleave", () => {
      if (!heartsCreated) {
        changeImageSmoothly("envelope-close.png");
        envelope.classList.remove("hovered");
      }
    });
    
    envelope.addEventListener("click", () => {
      if (heartsCreated) return;
    
      changeImageSmoothly("envelope-open2.png");
      envelope.classList.remove("hovered");
    
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
  { title: "Peace", src: "peace.mp3" },
  { title: "My Favorite Part", src: "myfavoritepart.mp3" },
  { title: "DtMFy", src: "DtMF-badbunny.mp3" },
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
// Play the next track automatically when current track ends
audio.addEventListener("ended", () => {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
});

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
  audio.loop = false; // Let it move to next track on 'ended'

  audio.play();

  
  setTimeout(() => {
    audioDisplay.style.opacity = 0.25;
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
const progressBar = document.getElementById('progressBar');

// Update progressBar as the song plays
audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
});

// Allow user to seek
progressBar.addEventListener('input', () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});
function updateProgressBarStyle() {
  const value = (audio.currentTime / audio.duration) * 100 || 0;
  progressBar.value = value;

  progressBar.style.background = `linear-gradient(to right, #aa2c2c ${value}%, #ccc ${value}%)`;
}

// Update as music plays
audio.addEventListener('timeupdate', updateProgressBarStyle);

// Update when seeking
progressBar.addEventListener('input', () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
  updateProgressBarStyle();
});



////////////////////////////////////


const volumeContainer = document.getElementById('volumeContainer');
let volumeTimeout;

// Keep slider open on hover
volumeContainer.addEventListener('mouseenter', () => {
  clearTimeout(volumeTimeout);
  volumeContainer.classList.add('show-slider');
});

// Allow smooth exit after delay
volumeContainer.addEventListener('mouseleave', () => {
  volumeTimeout = setTimeout(() => {
    volumeContainer.classList.remove('show-slider');
  }, 300); // short delay so it doesn't feel too snappy
});


// Slider controls volume
volumeControl.addEventListener('input', function () {
  audioPlayer.volume = volumeControl.value;
  if (audioPlayer.volume === 0) {
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    isMuted = true;
  } else {
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    isMuted = false;
  }
  
});




