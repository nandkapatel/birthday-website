function unlock() {
  let input = document.getElementById("secretInput").value.toLowerCase();
  let error = document.getElementById("error");

  if (input === "Nand") {  // ✅ correct answer
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    error.innerText = "❌ Wrong answer, try again!";
  }
}

// Unlock remains same
function unlock() {
  let input = document.getElementById("secretInput").value.toLowerCase();
  let error = document.getElementById("error");

  if (input === "nand") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    error.innerText = "❌ Wrong answer, try again!";
  }
}

// 🎂 3D card toggle
document.addEventListener("click", function(e) {
  if (e.target.closest(".card")) {
    e.target.closest(".card").classList.toggle("open");
  }
});


// Typewriter message
function typeWriter(text, elementId, speed = 80) {
  let i = 0;
  let element = document.getElementById(elementId);
  element.innerHTML = ""; // reset

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}


// When card opens, start typing
document.addEventListener("click", function(e) {
  if (e.target.closest(".card")) {
    let card = e.target.closest(".card");
    card.classList.toggle("open");

    if (card.classList.contains("open")) {
      document.getElementById("loveMessage").innerHTML = ""; // reset
      typeWriter("You make my world brighter every day, and I feel lucky to have you. I love you forever ❤️", "loveMessage");
    }
  }
});

// Fireworks + Balloons
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createFirework(x, y) {
  let colors = ["red", "yellow", "pink", "lightblue", "purple"];
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: x,
      y: y,
      color: colors[Math.floor(Math.random() * colors.length)],
      radius: random(2, 4),
      angle: random(0, Math.PI * 2),
      speed: random(2, 6),
      alpha: 1
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.alpha -= 0.02;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${hexToRgb(p.color)}, ${p.alpha})`;
    ctx.fill();

    if (p.alpha <= 0) particles.splice(i, 1);
  });

  requestAnimationFrame(animate);
}

function hexToRgb(color) {
  const colors = {
    red: "255,0,0",
    yellow: "255,255,0",
    pink: "255,105,180",
    lightblue: "173,216,230",
    purple: "128,0,128"
  };
  return colors[color] || "255,255,255";
}

window.addEventListener("click", (e) => {
  createFirework(e.clientX, e.clientY);
});

// Start animation
animate();

// Show final glowing message after scrolling down
window.addEventListener("scroll", () => {
  let timeline = document.querySelector(".timeline");
  let finalMsg = document.getElementById("finalMessage");
  if (timeline && window.scrollY > timeline.offsetTop + timeline.offsetHeight - 200) {
    finalMsg.style.display = "block";
  }
});



// Floating hearts animation
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 800); // every 0.8 sec a heart appears

function showLoveNote() {
  const notes = [
    "You’re my everything 💕",
    "I love you more every day 🌸",
    "You make my world brighter 🌞",
    "Forever yours ❤️",
    "My heart beats for you 💓"
  ];

  let note = document.createElement("div");
  note.classList.add("love-note");
  note.innerText = notes[Math.floor(Math.random() * notes.length)];
  document.body.appendChild(note);

  setTimeout(() => { note.remove(); }, 4000);
}

setInterval(showLoveNote, 7000);

function updateCounter() {
  const startDate = new Date("2024-04-06"); // put your date here
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000*60*60*24));
  document.getElementById("loveCounter").innerText =
    "💖 We’ve been together for " + days + " days!";
}
setInterval(updateCounter, 1000);

// Create starry sky
function createStars(count = 100) {
  const starsContainer = document.getElementById("stars");
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    let size = Math.random() * 3 + 1; // 1-4px
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = (Math.random() * 3 + 2) + "s";
    starsContainer.appendChild(star);
  }
}

createStars(150); // 150 stars

// Unlock function stays the same
function unlock() {
  let input = document.getElementById("secretInput").value.toLowerCase();
  let error = document.getElementById("error");

  if (input === "nand") {
    // Hide lock screen
    document.getElementById("lockScreen").style.display = "none";

    // Show camera roll immediately
    let roll = document.getElementById("cameraRoll");
    if (roll) roll.style.display = "block";

    // Show main content immediately too
    document.getElementById("mainContent").style.display = "block";

    // Attach flip action to card
    let card = document.getElementById("birthdayCard");
    if (card) {
      card.addEventListener("click", () => {
        card.classList.toggle("open");

        // Start typewriter only when card is opened
        if (card.classList.contains("open")) {
          document.getElementById("loveMessage").innerHTML = "";
          typeWriter(
            "You make my world brighter every day, and I feel lucky to have you. I love you forever ❤️",
            "loveMessage"
          );
        }
      });
    }
  } else {
    error.innerText = "❌ Wrong answer, try again!";
  }
}

// Typewriter effect
function typeWriter(text, elementId, speed = 80) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById(elementId).innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}



