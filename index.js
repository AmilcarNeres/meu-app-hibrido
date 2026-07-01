const express = require("express");
const path = require("path");
const app = express();

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Rota API simples
app.get("/api/hello", (req, res) => {
  res.json({ message: "API funcionando!" });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
