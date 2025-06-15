import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export function Dashboard() {
    return (
        <html lang="pt">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Huella Dashboard | UBI</title>
                <link rel="icon" href="/favicon.ico" sizes="any"/>

                {/* Bootstrap 4.3.1 */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                
                {/* Icons */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"/>

                {/* Styles */}
                <link rel="stylesheet" href="/css/misc.css"/>
                <link rel="stylesheet" href="/css/home.css"/>
                <link rel="stylesheet" href="/css/dashboard.css"/>

                {/* Scripts */}
                <script src="https://cdn.jsdelivr.net/npm/chart.js"/>
            </head>

            <body>
                <Navbar/>
                <main class="dashboard-container container">
                    <div class="d-flex justify-content-between align-items-center mb-5">
                        <div>
                            <h1 class="h2 mb-1">Bem-vindo, <span class="text-primary">João Silva</span></h1>
                        </div>
                    </div>

                    <div class="chart-container">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <h4 class="mb-0">Histórico de Compostor</h4>
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
                                            <th>O2 (PPB)</th>
                                            <th>Temp (ºC)</th> 
                                            <th>Hum (%)</th> 
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
                                        </tr>
                                        <tr>
                                            <td>15/03/2024</td>
                                            <td>14:15</td>
                                            <td>Jardim Publico</td>
                                            <td>11</td>
                                            <td>15.7</td>
                                            <td>27</td>
                                        </tr>
                                        <tr>
                                            <td>14/03/2024</td>
                                            <td>18:53</td>
                                            <td>Jardim das Artes</td>
                                            <td>12</td>
                                            <td>14.2</td>
                                            <td>24</td>
                                        </tr>
                                        <tr>
                                            <td>13/03/2024</td>
                                            <td>8:48</td>
                                            <td>Rua da Saudade</td>
                                            <td>13</td>
                                            <td>15.1</td>
                                            <td>26</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer/>

                {/* Scripts */}
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

                <script src="/js/dashboard.js"></script>
            </body>
        </html>
    );
};