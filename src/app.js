const express = require('express');
const gameRoutes = require('./routes/gameRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

// Usar las rutas
app.use('/api/games', gameRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});