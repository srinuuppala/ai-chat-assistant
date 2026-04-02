from flask import Flask, request, jsonify
from flask_cors import CORS
from groq import Groq
from dotenv import load_dotenv
import os

# Load env variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Groq client
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message")

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {"role": "system", "content": "You are a helpful AI assistant."},
            {"role": "user", "content": user_message}
        ]
    )

    bot_reply = response.choices[0].message.content

    return jsonify({"reply": bot_reply})

if __name__ == "__main__":
    app.run(debug=True)
