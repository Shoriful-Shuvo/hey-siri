let question ="How are you ?"

function greetings() {
    if (question == "What is your name ?") {
        
        let utterance = new SpeechSynthesisUtterance("My name is shuvo");
        speechSynthesis.speak(utterance);

    }

    else if (question == "What is your age ?" ) {
               
        let utterance = new SpeechSynthesisUtterance("I am 21 years old");
        speechSynthesis.speak(utterance);

    }
    else if (question == "What are you doing ?" ) {
               
        let utterance = new SpeechSynthesisUtterance("I am doing my job");
        speechSynthesis.speak(utterance);

    }
    else if (question == "How are you ?" ) {
               
        let utterance = new SpeechSynthesisUtterance("I am fine");
        speechSynthesis.speak(utterance);

    }
}
greetings()