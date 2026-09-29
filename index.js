const express = require("express");
const path = require("path");

const productorRoutes = require("./routes/productor.routes");

const app = express();
const PORT = 3001;

app.use(express.json());

// API de productores
app.use("/api/productores", productorRoutes);

// Página principal
app.get("/", (req, res) => {
    res.sendFile(
        "C:\\Users\\fld83\\OneDrive\\Documentos\\Michella\\AgroJachal\\public\\index.html"
    );
});

// Servir archivos de public
app.use(express.static(
    "C:\\Users\\fld83\\OneDrive\\Documentos\\Michella\\AgroJachal\\public"
));

app.listen(PORT, () => {
    console.log(
        `Servidor AgroJáchal funcionando en http://localhost:${PORT}`
    );
});