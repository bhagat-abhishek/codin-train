const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.json({ limit: '1mb' }));

// Routes
app.post("/api", (request, response) => {
    
    response.json({
        status: "success",
        latitute: request.body.lat,
        longitude: request.body.long
    })
});
  

app.listen(3000, () => console.log("Server started on port: 3000"));