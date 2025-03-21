"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
const footer_1 = require("../components/footer");
const navbar_1 = require("../components/navbar");
const Map = () => {
    return `
        <!DOCTYPE html>
        <html lang="pt">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Huella Mapa | UBI</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

            <link rel="stylesheet" href="/css/style.css">

            <link href="https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
        </head>

        <body>+
            ` +
        (0, navbar_1.Navbar)()
        + `

            <main>
                <div id="map"></div>
            </main>
            
            ` +
        (0, footer_1.Footer)()
        + `
            <script src="/js/mapa.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
    `;
};
exports.Map = Map;
