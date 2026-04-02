# 🤖 RAG Chat Assistant (AI Chat App)

## 📌 Overview

This project is a simple AI-powered chat application built using **Flask (Python)** for the backend and **HTML, CSS, JavaScript** for the frontend.

It integrates with the **Groq API (LLaMA 3.1 model)** to generate intelligent responses.

---

## 🚀 Features

* 💬 Real-time chat interface
* 🤖 AI-powered responses using LLaMA model
* ⚡ Fast API response via Groq
* 🌐 Simple and clean UI
* 🔗 REST API integration

---

## 🏗️ Project Structure

```
CHAT BOT/
│
├── backend/
│   ├── app.py
│   ├── .env
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
```

---

## ⚙️ Tech Stack

### Frontend:

* HTML
* CSS
* JavaScript

### Backend:

* Python (Flask)
* Flask-CORS
* dotenv

### AI Integration:

* Groq API (LLaMA 3.1 model)

---

## 🔧 Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Backend Setup

```
cd backend
pip install -r requirements.txt
```

---

### 3️⃣ Create .env File

```
GROQ_API_KEY=your_api_key_here
```

---

### 4️⃣ Run Backend

```
python app.py
```

Server will run at:

```
http://127.0.0.1:5000
```

---

### 5️⃣ Run Frontend

Open:

```
frontend/index.html
```

---

## 🔄 API Endpoint

### POST `/chat`

#### Request:

```json
{
  "message": "Hello AI"
}
```

#### Response:

```json
{
  "reply": "Hello! How can I help you?"
}
```

---

## 📸 UI Preview

* Chat interface with user & bot messages
* Real-time response display

---

## ⚠️ Important Notes

* Do NOT upload `venv/` folder to GitHub
* Add `.env` to `.gitignore`
* Keep your API key secure

---

## 📌 Future Improvements

* Add chat history
* Add authentication (login/signup)
* Add database (MySQL / MongoDB)
* Deploy on cloud (Render / AWS)

---

## 👨‍💻 Author

**Srinu**
Aspiring Data Scientist & AI Developer

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
