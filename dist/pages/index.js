"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Index = void 0;
const footer_1 = require("../components/footer");
const navbar_1 = require("../components/navbar");
const Index = () => {
    return `
        <!DOCTYPE html>
        <html lang="pt">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Huella | UBI</title>
                
                <!-- Bootstrap 4.3.1 -->
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                
                <!-- Icons -->
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

                <!-- Styles -->
                <link rel="stylesheet" href="/css/misc.css">
                <link rel="stylesheet" href="/css/home.css">
            </head>

            <body>
                ${(0, navbar_1.Navbar)()}
                <main>
                    <section class="hero-section">
                        <div class="fluid-container h-100 d-flex">
                            <header class="hero-content text-center mx-auto my-auto"> 
                                <h1>COMEÇA JÁ <br>A COMPOSTAR</h1>
                                <p>Reciclar resíduos orgânicos</p>
                                <a href="#form" class="btn">Aprende como</a>
                            </header>
                        </div>
                    </section>

                    <!-- HUELLA 2030 -->        
                    <section class="angled-section first-section fluid-container d-flex">
                        <div class="angled-content fluid-container text-center d-flex flex-column flex-md-row">
                            <div class="fluid-container texto align-self-center text-md-left py-5 py-md-0">
                                <h2>HUELLA 2030</h2>
                                <p class="lead">Um compostor <b>inteligente</b>, <br> <b>comunitário</b> e <b>sustentável</b></p>
                            </div>
                            <div class="fluid-container img-bg d-flex">
                                <img class="img-compostor align-self-center mr-md-5" src="/assets/first-section-compostor.png" alt="Compostor">
                            </div>
                        </div>
                    </section>

                    <!-- Objetivos  -->
                    <section class="angled-section second-section fluid-container d-flex">
                        <div class="angled-content fluid-container d-flex flex-column flex-md-row">
                            <div class="fluid-container img-bg d-flex align-items-center order-2 order-md-1">
                                <p>Dimensão <b>ambiental</b> <br>
                                Dimensão <b>económica</b> <br>
                                Dimensão <b>tecnológica</b> <br>
                                Dimensão <b>socioeducativa</b> <br>
                                Dimensão <b>política</b></p>                        
                            </div>
                            <div class="fluid-container texto align-self-center text-center text-md-left order-1 order-md-2">
                                <h2><u>OBJETIVOS</u> SUSTENTÁVEIS</h2>
                            </div>
                        </div>
                    </section>

                    <!-- Registo -->
                    <section class="registration py-5 bg-huela" id="form">
                        <p>Junta-te a nós!</p>
                        <div class="container">
                            <form class="bg-white p-5 rounded shadow">
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control form-control-lg" id="email" aria-describedby="emailHelp" placeholder="exemplo@mail.com">
                                </div>
                                <button type="submit" class="btn btn-success btn-block">Subscrever</button>
                            </form>
                        </div>
                    </section>
                </main>

                ${(0, footer_1.Footer)()}

                <!-- Scripts -->
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
            </body>
        </html>
    `;
};
exports.Index = Index;
