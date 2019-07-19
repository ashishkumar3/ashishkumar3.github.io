const mic = document.querySelector(".voice");

const themes = ["dark theme", "light theme"];

mic.addEventListener("click", () => {
  recognition.start();
});

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function() {
  console.log("Voice theme activated");
};

recognition.onresult = function(event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;

  if (transcript.includes("dark theme")) {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  }

  if (transcript.includes("light theme")) {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  }
};
