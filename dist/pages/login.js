"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const footer_1 = require("../components/footer");
const navbar_1 = require("../components/navbar");
const Login = () => {
    return `
        <!DOCTYPE html>
        <html lang="pt">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Huella Registar | UBI</title>

            <!-- Bootstrap -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            
            <!-- Icons -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

            <!-- Styles -->
            <link rel="stylesheet" href="/css/misc.css">
        </head>

        <body>
            ${(0, navbar_1.Navbar)()}
            <main>
                <div class="container d-flex justify-content-center align-items-center min-vh-100">
                    <div class="row border rounded-5 p-3 bg-white shadow box-area">
                        <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                            <div class="featured-image mb-3">
                                <img src="/assets/Hero.svg" class="img-fluid" style="width: 350px;">
                            </div>
                        </div>
                        <div class="col-md-6 right-box">
                            <div class="row align-items-center">
                                <div class="header-text mb-4">
                                    <h2>Olá</h2>
                                    <p>Bem-vindo novamente.</p>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control form-control-lg bg-light fs-6" placeholder="Email">
                                </div>
                                <div class="input-group mb-1">
                                    <input type="password" class="form-control form-control-lg bg-light fs-6" placeholder="Palavra-Passe">
                                </div>
                                <div class="input-group mb-5 d-flex justify-content-between">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="formCheck">
                                        <label for="formCheck" class="form-check-label text-secondary"><small>Lembrar-me</small></label>
                                    </div>
                                    <div class="forgot">
                                        <small><a href="#">Esqueci-me da palavra-passe</a></small>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <button onclick="login()" class="btn btn-lg btn-primary w-100 fs-6">Login</button>
                                </div>
                                <div class="input-group mb-3">
                                    <button class="btn btn-lg btn-light w-100 fs-6">
                                        <img src="../../assets/logo_Google.png" style="width:20px" class="me-2">
                                        <small>Login com Google</small>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
exports.Login = Login;
