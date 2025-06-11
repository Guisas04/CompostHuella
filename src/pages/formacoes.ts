import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export const Formacoes = (): string => {
    return `
        <!DOCTYPE html>
        <html lang="pt">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Huella Formações | UBI</title>
                
                <!-- Bootstrap 4.3.1 -->
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                
                <!-- Icons -->
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

                <!-- Styles -->
                <link rel="stylesheet" href="/css/misc.css">
                <link rel="stylesheet" href="/css/home.css">
            </head>

            <body>
                ${Navbar()}

                <main>
<iframe src="https://www.google.com/maps/d/embed?mid=1R7doEOyz-zhHu0sGUM2sI7pT9CIxrvY&ehbc=2E312F" width="640" height="480"></iframe>                </main>

                ${Footer()}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
            </body>
        </html>
    `;
};