const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/chat", async (req, res) => {

    try {

        const response = await axios.post(
            "http://localhost:11434/api/chat",
            {
                model: "phi",
                messages: [
                    {
                        role: "user",
                        content: req.body.message
                    }
                ],
                stream: false
            }
        );

        res.json({
            reply: response.data.message.content
        });

    } catch (err) {

        console.log(err.response?.data || err.message);

        res.status(500).json({
            reply: "Terjadi kesalahan saat menghubungi Ollama"
        });

    }

});

app.listen(4000, () => {
    console.log("Server berjalan di http://localhost:4000");
});