// app.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("App is running! Hello from acme-widget. ¥n This is good working here");
});

app.listen(PORT, () => {
    console.log(`☑️ Server is running at http://localhost:${PORT}`);
});