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
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get('/', (_req, res) => {
    res.send((0, index_1.Index)());
});
app.get('/map', (_req, res) => {
    res.send((0, map_1.Map)());
});
app.get('/info', (_req, res) => {
    res.send((0, info_1.Info)());
});
app.get('/formacoes', (_req, res) => {
    res.send((0, formacoes_1.Formacoes)());
});
app.get('/login', (_req, res) => {
    res.send((0, login_1.Login)());
});
app.get('/dashboard', (_req, res) => {
    res.send((0, dashboard_1.Dashboard)());
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
