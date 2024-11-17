const express = require('express');
const entidadeRoutes = require('./routes/entidadeRoutes');

const app = express();
app.use(express.json());

app.use('/api/entidade', entidadeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
