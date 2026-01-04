const output = document.getElementById("output")

// Speech Recognition
const SpeechRecognition = 
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.interimResults = false;

// Text to Speech
function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
}

// Start Listening
function startListening() {
    output.innerText = "Listening...";
    recognition.start();
}

// When voice is captured
recognition.onresult = function (event) {
    const command = event.results[0][0].transcript.toLowerCase();
    output.innerText = "You said:" + command;
    handleCommand(command);
};

function handleCommand(command) {
    if (command.includes("open")) {
        if (command.includes("open youtube")) {
            speak("Opening YouTube");
            window.location.href = "https://www.youtube.com";
        } else if (command.includes("open whatsapp")) {
            speak("Opening Whatsapp");
            window.location.href = "https://web.whatsapp.com";
        } else if (command.includes("open whatsapp")) {
            speak("Sorry, I cannot make calls from browser");
        } else {
            speak("Sorry, I didn't unerstand that");
        } 
    } else { 
        speak ("Please say hey diva first");
    }
}