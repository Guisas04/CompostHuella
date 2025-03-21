import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export const Info = (): string => {
    return `
        <!DOCTYPE html>
        <html lang="pt">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Huella Informações | UBI</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

            <link rel="stylesheet" href="/css/style.css">

            <link href="https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
        </head>

        <body>
            `+
            Navbar()
            +`

            <main>
                
            </main>

            `+
            Footer()
            +`
            <script src="/js/login.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
    `;
};