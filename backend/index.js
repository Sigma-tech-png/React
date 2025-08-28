const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

// Пример API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Привет с Express!" });
});

// Продакшн: отдаём React build
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));