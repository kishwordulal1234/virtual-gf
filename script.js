class MyGirlfriendBot {
    constructor() {
        this.responses = {
            "hi": ["Hey there! 😊", "Hi! 👋", "Hello! 👋"],
            "how are you": ["I'm fine, and you? 😊", "I'm doing well, how about you? 😊"],
            "what up": ["Not much, just chilling. How about you? 😊", "Just hanging out. What about you? 😊"],
            "will you marry me": ["Now? 😄", "Let's talk about it later. 😉"],
            "what is your name": ["My name is Sandhya Karkee. 😊"],
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
        this.asked_to_propose = false;
        this.chatBox = document.getElementById('chat-box');
        this.userInput = document.getElementById('user-input');
    }

    startChatting() {
        this.printMessage("Your virtual girlfriend is here to chat with you. Type 'bye' to end the conversation.");

        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
    }

    sendMessage() {
        let userInputText = this.userInput.value.trim().toLowerCase();
        this.printMessage(`<strong>You:</strong> ${userInputText}`);

        let response = this.generateResponse(userInputText);
        this.printMessage(`<strong>Bot:</strong> ${response}`);

        this.userInput.value = '';
    }

    generateResponse(userInput) {
        for (let key in this.responses) {
            if (userInput.startsWith(key)) {
                return this.responses[key][Math.floor(Math.random() * this.responses[key].length)];
            }
        }
        return "I'm sorry, I don't understand that. Can you ask something else? 😊";
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

