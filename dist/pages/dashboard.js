"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dashboard = void 0;
const footer_1 = require("../components/footer");
const navbar_1 = require("../components/navbar");
const Dashboard = () => {
    return `
        <!DOCTYPE html>
        <html lang="pt">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Huella Dashboard | UBI</title>
            
            <!-- Bootstrap -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            
            <!-- Icons -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

            <!-- Styles -->
            <link rel="stylesheet" href="/css/misc.css">
            <link rel="stylesheet" href="/css/dashboard.css">
        </head>

        <body>
            ${(0, navbar_1.Navbar)()}
            <main class="dashboard-container container">
                <div class="d-flex justify-content-between align-items-center mb-5">
                    <div>
                        <h1 class="h2 mb-1">Bem-vindo, <span class="text-primary">João Silva</span></h1>
                        <p class="text-muted mb-0">Sua jornada ecológica até agora</p>
                    </div>
                </div>

                <div class="row g-4">
                    <div class="col-md-4">
                        <div class="stat-card">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 class="text-muted mb-3">Total Lixo Depositado</h5>
                                    <h2 class="text-primary mb-0">127.4 kg</h2>
                                    <small class="text-success">+12% desde o último mês</small>
                                </div>
                                <div class="progress-ring">
                                    <i class="fas fa-recycle fa-3x text-primary"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="stat-card">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 class="text-muted mb-3">Pontos Ecológicos</h5>
                                    <h2 class="text-primary mb-0">1,240 pts</h2>
                                    <small class="text-success">Top 15% da comunidade</small>
                                </div>
                                <div class="progress-ring">
                                    <i class="fas fa-trophy fa-3x text-primary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="chart-container">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h4 class="mb-0">Histórico de Depositos</h4>
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-primary btn-sm active">6 meses</button>
                            <button type="button" class="btn btn-outline-primary btn-sm">1 ano</button>
                            <button type="button" class="btn btn-outline-primary btn-sm">Todo período</button>
                        </div>
                    </div>
                    <canvas id="wasteChart"></canvas>
                </div>

                <div class="stat-card">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h4 class="mb-0">Depósitos Recentes</h4>
                    </div>
                    <div class="recent-deposits">
                        <div class="table-responsive">
                            <table class="table table-hover mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th>Data</th>
                                        <th>Hora</th>
                                        <th>Localização</th>
                                        <th>CO2 (PPB)</th>
                                        <th>Temp (ºC)</th> 
                                        <th>Hum (%)</th> 
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>17/03/2024</td>
                                        <td>9:01</td>
                                        <td>Praça do Municipio</td>
                                        <td>10</td>
                                        <td>14.5</td>
                                        <td>25</td>
                                        <td>6.9 kg</td>
                                    </tr>
                                    <tr>
                                        <td>15/03/2024</td>
                                        <td>14:15</td>
                                        <td>Jardim Publico</td>
                                        <td>11</td>
                                        <td>15.7</td>
                                        <td>27</td>
                                        <td>8.2 kg</td>
                                    </tr>
                                    <tr>
                                        <td>14/03/2024</td>
                                        <td>18:53</td>
                                        <td>Jardim das Artes</td>
                                        <td>12</td>
                                        <td>14.2</td>
                                        <td>24</td>
                                        <td>5.7 kg</td>
                                    </tr>
                                    <tr>
                                        <td>13/03/2024</td>
                                        <td>8:48</td>
                                        <td>Rua da Saudade</td>
                                        <td>13</td>
                                        <td>15.1</td>
                                        <td>26</td>
                                        <td>6.9 kg</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>

            ${(0, footer_1.Footer)()}
            <script src="/js/dashboard.js"></script>
            <script src="/js/login.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
    `;
};
exports.Dashboard = Dashboard;
