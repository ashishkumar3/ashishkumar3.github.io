// const mic = document.querySelector(".voice");

// const themes = ["dark theme", "light theme"];

// mic.addEventListener("click", () => {
//   recognition.start();
// });

// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new SpeechRecognition();

// recognition.onstart = function() {
//   console.log("Voice theme activated");
// };

// recognition.onresult = function(event) {
//   const current = event.resultIndex;

//   const transcript = event.results[current][0].transcript;

//   const speech = new SpeechSynthesisUtterance();

//   speech.volume = 1;
//   speech.rate = 0.8;
//   speech.pitch = 1;
//   console.log(speech);

//   if (transcript.includes("dark theme")) {
//     document.body.classList.remove("light-theme");
//     document.body.classList.remove("night-fade");
//     document.body.classList.add("dark-theme");
//     speech.text = "Dark theme activated";
//   } else if (transcript.includes("light theme")) {
//     document.body.classList.remove("dark-theme");
//     document.body.classList.remove("night-fade");
//     document.body.classList.add("light-theme");
//     speech.text = "Light theme activated";
//   } else if (transcript.includes("night")) {
//     document.body.classList.remove("dark-theme");
//     document.body.classList.remove("light-theme");
//     document.body.classList.add("night-fade");
//     speech.text = "Noght fade theme activated";
//   }

//   window.speechSynthesis.speak(speech);
// };

const blogIcon = document.querySelector(".blog-icon");
const sliderBlog = document.querySelector(".sliding-blog-container-close");

blogIcon.addEventListener("click", e => {
  if (sliderBlog.style.display == "none") {
    sliderBlog.style.display = "flex";
  } else if (sliderBlog.style.display == "flex") {
    sliderBlog.style.display = "none";
  }
});
