export function Footer() {
  return (
    
    <footer className="footer-custom text-center">
      <div className="fluid-container d-flex py-4 px-5">
        <div className="texto-container d-flex">
          <p className="align-self-center">Apenas possível com o apoio:</p>
        </div>
        <img 
          src="/assets/huella-footer.png" 
          alt="Huella Footer" 
          className="huella-footer" 
        />
      </div>
      <div className="fluid-container container-patrocinios">
        <img 
          src="/assets/patrocinios.png" 
          alt="Patrocinios" 
          className="patrocinios" 
        />
      </div>
    </footer>
  );
};