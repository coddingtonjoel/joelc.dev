const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.get("/", (req, res) =>
    res.send("Static file server for https://joelc.dev")
);

app.get("/resume", function (req, res) {
    const file = `${__dirname}/static/joelc-resume.docx`;
    res.download(file);
});
