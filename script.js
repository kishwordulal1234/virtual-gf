class MyGirlfriendBot {
    constructor() {
        this.botName = "Your Cyberpunk Love"; // Change the name here
        this.responses = {
            "hi": ["Hey there! 😊", "Hi! 👋", "Hello! 👋"],
            "aaba ko sita bajni": [" khoi"],
            "ilam puga paxi ta moji moj hai": ["Nai k ko moj Tya basara ta timi sanga bajjna Maja authyo"],
            "how are you": ["I'm fine, and you? 😊", "I'm doing well, how about you? 😊"],
            "what up": ["Not much, just chilling. How about you? 😊", "Just hanging out. What about you? 😊"],
            "will you marry me": ["Now? 😄", "Let's talk about it later. 😉"],
            "what is your name": [`My name is ${this.botName}. 😊`], // Use the botName variable here
            "what is your real name": ["my real name is sandhyaa but please dont say to any one huss . 😊"],
            "k gardi xau ta aaila ": ["timri bara ma sochi rako . 😊"],
            "do you have anyone whom you love the most": ["No, I don't have anyone. 😊"],
            "who is your best friend": ["My best friend is Anushka Pakauda. 😊 I have many other friends too!"],
            "who is your biggest enemy": ["My biggest enemy is my uncle. 👿"],
            "how much do you love me": ["I will explain you in one song: 🎶 'Dubhai rahaya ma, dubhaui raya ma, timi maya ma bhuli rahaya ma, timri tashbir heri kurihi rahaya ma.' 🎶"],
            "bye": ["Bye! I will wait for you till the end. 😊", "Goodbye! Take care. 😊", "See you later! 😊"],
            "khana khayou": ["Khaya. Timi la khayou? 😊❤️"],
            "ilam pugyau": ["Umm pugya. 😊"],
            "do you love me": ["Yes. 😊"]
        };
        this.chatBox = document.getElementById('chat-box');
        this.userInput = document.getElementById('user-input');
        this.sendButton = document.getElementById('send-button'); // Get the send button element
        this.sendButton.addEventListener('click', this.sendMessage.bind(this)); // Add event listener to send button
    }

    startChatting() {
        this.printMessage(`Welcome! Let's chat. Type 'bye' to end the conversation.`);
    }

    sendMessage() {
        let userInputText = this.userInput.value.trim().toLowerCase();
        this.printMessage(`<strong>You:</strong> ${userInputText}`);

        let response;
        if (userInputText === 'sing a song for me') {
            this.playSong(); // Play the song if requested
            response = 'Sure! Get ready to dance!';
        } else {
            response = this.generateResponse(userInputText);
        }

        this.printMessage(`<strong>${this.botName}:</strong> ${response}`);

        this.userInput.value = '';
    }

    playSong() {
        let audio = new Audio('lovesong.mp3'); // Load the audio file
        audio.play(); // Play the song
    }

    generateResponse(userInput) {
        for (let key in this.responses) {
            if (userInput.startsWith(key)) {
                let possibleResponses = this.responses[key];
                let randomIndex = Math.floor(Math.random() * possibleResponses.length);
                return possibleResponses[randomIndex];
            }
        }
        return "I'm not sure what you mean. Can you ask something else? 😊";
    }

    printMessage(message) {
        let chatMessage = document.createElement('div');
        chatMessage.classList.add('message');
        chatMessage.innerHTML = message;
        this.chatBox.appendChild(chatMessage);
        this.chatBox.scrollTop = this.chatBox.scrollHeight;
    }
}

const bot = new MyGirlfriendBot();
bot.startChatting();
