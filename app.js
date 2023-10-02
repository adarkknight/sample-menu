const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const sandwichesRouter = require('./routes/sandwiches');
const appetizersRouter = require('./routes/appetizers');
const entreesRouter = require('./routes/entrees');
const tacosRouter = require('./routes/tacos');
const enchiladasRouter = require('./routes/enchiladas');
const combosRouter = require('./routes/combos');
const fajitasRouter = require('./routes/fajitas');
const quicheRouter = require('./routes/quiche');
const greenSaladsRouter = require('./routes/greenSalads');

app.use('/sandwiches', sandwichesRouter);
app.use('/appetizers', appetizersRouter);
app.use('/entrees', entreesRouter);
app.use('/tacos', tacosRouter);
app.use('/enchiladas', enchiladasRouter);
app.use('/combos', combosRouter);
app.use('/fajitas', fajitasRouter);
app.use('/quiche', quicheRouter);
app.use('/green-salads', greenSaladsRouter);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

module.exports = app;
