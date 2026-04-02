async function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const userMessage = input.value.trim();
    if (userMessage === "") return;

    // show user message
    const userDiv = document.createElement("div");
    userDiv.className = "message user";
    userDiv.innerText = userMessage;
    chatBox.appendChild(userDiv);

    input.value = "";

    // bot placeholder
    const botDiv = document.createElement("div");
    botDiv.className = "message bot";
    botDiv.innerText = "Thinking...";
    chatBox.appendChild(botDiv);

    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const response = await fetch("http://127.0.0.1:5000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: userMessage })
        });

        const data = await response.json();
        botDiv.innerText = data.reply;
    } catch (error) {
        botDiv.innerText = "Error connecting to backend";
        console.error(error);
    }
}
