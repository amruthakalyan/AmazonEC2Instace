const express = require("express");
const app = express();
const port = 3000;

// Serve static files (optional)
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Virtual Server</title>
            </head>
            <body>
                <h1>Welcome to Virtual Server Amazon EC2 instance usage</h1>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
