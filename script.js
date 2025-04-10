

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
    message: "You got me 😊",
    image: "hulio3.png"
  },
  {
    message: "Well....",
    image: "hulio2.png"
  },
  {
    message: `Congratulations TAMMI! 🎉
You did a really, really, *REALLY* great job today!
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
      if (onComplete) onComplete();
    }
  }

  type();
}
// leanImage.addEventListener('mouseover', () => {
//   if (!isTyping) {
//     isTyping = true;
//     typeMessage(messageText, messageContainer, () => {
//       isTyping = false;
//     });
//   }
// });



    const envelope = document.getElementById("envelope");
    const messageCard = document.getElementById("messageCard");
    const finalMessage = document.getElementById("finalMessage");
    const resetBtn = document.getElementById("resetBtn");
    const closeBtn = document.getElementById("closeBtn");

    let heartCount = 0;
    let heartsCreated = false;
    const placedHearts = [];
    const fullText = `Hey there!
Well, look at you… today marks the end of one incredible chapter, and the beginning of another even more exciting one. I couldn’t be more proud of you. Watching you work so hard, pushing through every challenge, and staying focused no matter what life threw your way—it’s been nothing short of inspiring. Your strength, your passion, your resilience… it all paid off. And now, you stand tall as a living testament to dedication and perseverance.

You’ve always had this quiet fire in you—the kind that doesn’t need to shout to be felt. The way you chase your goals, how you keep your heart in everything you do, and how you make even the hardest things seem effortless—it’s something I deeply admire. You’ve achieved something so special, and I hope you truly take this moment in. This isn’t just a piece of paper or a certificate. It’s a reflection of who you are: someone incredibly talented, courageous, and full of light.

And beyond all the accomplishments, it’s who you are as a person that I’m most grateful for. You’ve shared your journey with so much grace and kindness, and I feel incredibly lucky to have witnessed your growth. You’ve touched hearts, including mine, just by being you. Your ability to uplift, inspire, and make others believe in themselves is something rare—and something I’ll never stop appreciating.

Thank you for allowing me to walk beside you on this journey. No matter where life takes you next, I know you’ll continue to shine in your own beautiful way. The world better be ready, because this is just the beginning. And no matter what, I’ll always be right here—cheering you on, proud of every step you take.

Congratulations, Pen 🦢.
You’ve earned every bit of this moment. Don’t ever forget how amazing you are.

With all my love, admiration, and appreciation,
– Cob

You will have the life, you always talk about.
`;

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
      envelope.src = "envelope-open.png";
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


    // document.querySelectorAll(".reveal-item").forEach(item => observer.observe(item));
//     const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     // Add the "show" class when element is at least 50% in the center
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     }
//   });
// }, {
//   threshold: 0.5,   // This ensures 50% of the element is visible.
//   rootMargin: "0px 0px -50% 0px" // This ensures the element is scrolled into the center.
// });

// Start observing each reveal item

document.querySelectorAll(".reveal-item").forEach(item => observer.observe(item));
const audioDisplay = document.getElementById("audioStatus");
const audio = document.getElementById("customAudio");
const pauseBtn = document.getElementById("pauseBtn");
const restartBtn = document.getElementById("restartBtn");

envelope.addEventListener("click", () => {
 
  audioDisplay.style.opacity = 1;
  audio.loop = true;
  audio.play();

  
  setTimeout(() => {
    audioDisplay.style.opacity = 0.25;
  }, 2500);
});

pauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audio.pause();
    pauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
});

restartBtn.addEventListener("click", () => {
  audio.currentTime = 0;
  audio.play();
});
