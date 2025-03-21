"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const index_1 = require("./pages/index");
const map_1 = require("./pages/map");
const info_1 = require("./pages/info");
const formacoes_1 = require("./pages/formacoes");
const dashboard_1 = require("./pages/dashboard");
const login_1 = require("./pages/login");
const registar_1 = require("./pages/registar");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get('/', (req, res) => {
    res.send((0, index_1.Index)());
});
app.get('/map', (req, res) => {
    res.send((0, map_1.Map)());
});
app.get('/info', (req, res) => {
    res.send((0, info_1.Info)());
});
app.get('/formacoes', (req, res) => {
    res.send((0, formacoes_1.Formacoes)());
});
app.get('/login', (req, res) => {
    res.send((0, login_1.Login)());
});
app.get('/registar', (req, res) => {
    res.send((0, registar_1.Registar)());
});
app.get('/dashboard', (req, res) => {
    res.send((0, dashboard_1.Dashboard)());
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
