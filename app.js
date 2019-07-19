const mic = document.querySelector(".voice");

const themes = ["dark mode", "light mode"];

mic.addEventListener("click", () => {
  console.log("coice");
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

  if (transcript.includes("dark mode")) {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  }

  if (transcript.includes("light mode")) {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  }

  //console.log(transcript);
};
