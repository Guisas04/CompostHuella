import express from 'express';
import path from 'path';
import { Index } from './pages/index';
import { Map } from './pages/map'
import { Info } from './pages/info';
import { Formacoes } from './pages/formacoes';
import { Dashboard } from './pages/dashboard';
import { Login } from './pages/login';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (_req, res) => {
  res.send(Index());
});

app.get('/map', (_req, res) => {
  res.send(Map());
});

app.get('/info', (_req, res) => {
  res.send(Info());
});

app.get('/formacoes', (_req, res) => {
  res.send(Formacoes());
});

app.get('/login', (_req, res) => {
  res.send(Login());
});

app.get('/dashboard', (_req, res) => {
  res.send(Dashboard());
});




app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});