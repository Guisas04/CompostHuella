import express from 'express';
import path from 'path';
import { Index } from './pages/index';
import { Map } from './pages/map'
import { Info } from './pages/info';
import { Formacoes } from './pages/formacoes';
import { Dashboard } from './pages/dashboard';
import { Login } from './pages/login';
import { Registar } from './pages/registar';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send(Index());
});

app.get('/map', (req, res) => {
  res.send(Map());
});

app.get('/info', (req, res) => {
  res.send(Info());
});

app.get('/formacoes', (req, res) => {
  res.send(Formacoes());
});

app.get('/login', (req, res) => {
  res.send(Login());
});

app.get('/registar', (req, res) => {
  res.send(Registar());
});

app.get('/dashboard', (req, res) => {
  res.send(Dashboard());
});




app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});