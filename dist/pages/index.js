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
            
            <!-- Bootstrap -->
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
                        <header class="hero-content text-center m-auto"> 
                            <h1>COMEÇA JÁ <br>A COMPOSTAR</h1>
                            <p>Reciclar resíduos orgânicos</p>
                            <a href="#form" class="btn btn-success">Aprende como</a>
                        </header>
                    </div>
                </section>

                <!-- HUELLA 2030 -->        
                <section class="angled-section first-section fluid-container d-flex">
                    <div class="angled-content fluid-container text-center d-flex">
                        <div class="fluid-container texto align-self-center">
                            <h2>HUELLA 2030</h2>
                            <p>Um compostor <b>inteligente</b>, <br> <b>comunitário</b> e <b>sustentável</b></p>
                        </div>
                        <div class="img-bg fluid-container d-flex">
                            <img class="img-compostor align-self-center" src="/assets/first-section-compostor.png" alt="Compostor">
                        </div>
                    </div>
                </section>
                 
                <!-- Objetivos  -->
                <section class="angled-section second-section container-fluid d-flex">
                    <div class="angled-content container-fluid text-center d-flex">
                        <div class="img-bg fluid-container d-flex">
                            <img class="img-compostor align-self-center" src="/assets/first-section-compostor.png" alt="Compostor">
                        </div>
                        <div class="fluid-container-white texto align-self-center">
                            <h2>OBJETIVOS SUSTENTÁVEIS</h2>
                            <p>Dimensão <b>ambiental</b> Dimensão <b>económica</b> Dimensão <b>tecnológica</b> Dimensão <b>socioeducativa</b> Dimensão <b>política</b></p>
                        </div>
                    </div>
                </section>

            
                <!--  -->
                <section class="registration py-5" id="form">
                    <div class="container">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="abc@mail.com">
                            <small id="emailHelp" class="form-text text-muted">Help text</small>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password">
                        </div>
                    </div>
                </section>
            </main>

            ${(0, footer_1.Footer)()}

            <!-- Scripts -->
            <script type="module" src="/js/client.js"></script>
            
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
        </html>
    `;
};
exports.Index = Index;
