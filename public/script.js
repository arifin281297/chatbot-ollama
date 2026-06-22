async function sendMessage() {

    let message = document.getElementById("message").value;

    if (message == "") return;

    let chatbox = document.getElementById("chatbox");

    chatbox.innerHTML += `
        <div class="user">
            <b>You :</b> ${message}
        </div>
    `;

    document.getElementById("message").value = "";

    try {

        const response = await fetch("/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message
            })
        });

        const data = await response.json();

        chatbox.innerHTML += `
            <div class="ai">
                <b>AI :</b> ${data.reply}
            </div>
        `;

        chatbox.scrollTop = chatbox.scrollHeight;

    } catch (error) {

        chatbox.innerHTML += `
            <div class="ai">
                <b>AI :</b> Gagal terhubung ke Ollama
            </div>
        `;

    }

}