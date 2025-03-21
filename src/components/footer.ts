export const Footer = (): string => {
    return `
        <footer class="footer-custom text-center">
            <div class="fluid-container d-flex py-4 px-5">
                <div class="texto-container d-flex">
                    <p class="align-self-center">Apenas possível com o apoio:</p>
                </div>
                <img src="/assets/huella-footer.png" alt="Huella Footer" class="huella-footer">
            </div>
            <div class="fluid-container container-patrocinios">
                <img src="/assets/patrocinios.png" alt="Patrocinios" class="patrocinios">
            </div>
        </footer>
    `;
};