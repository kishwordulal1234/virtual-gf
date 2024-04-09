import random

class MyGirlfriendBot:
    def __init__(self):
        self.responses = {
            "hi": ["Hey there! 😊", "Hi! 👋", "Hello! 👋"],
            "aaba ko sita bajni": [" khoi"],
            "ilam puga paxi ta moji moj hai": ["Nai k ko moj Tya basara ta timi sanga bajjna Maja authyo"],
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
        }
        self.asked_to_propose = False

    def start_chatting(self):
        print("Your virtual girlfriend is here to chat with you. Type 'bye' to end the conversation.")
        try:
            while True:
                user_input = input("> ").lower()
                if user_input == 'bye':
                    break

                response = self.generate_response(user_input)
                print(response)
        except KeyboardInterrupt:
            print("\nGoodbye! See you later! 😊")

    def generate_response(self, user_input):
        for key in self.responses.keys():
            if user_input.startswith(key):
                return random.choice(self.responses[key])
        return "I'm sorry, I don't understand that. Can you ask something else? 😊"

bot = MyGirlfriendBot()
bot.start_chatting()
