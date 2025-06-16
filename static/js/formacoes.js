document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.querySelector('iframe');
    
    iframe.addEventListener('focus', function() {
        this.style.boxShadow = '0 0 0 3px #97BF0D';
    });
    
    iframe.addEventListener('blur', function() {
        this.style.boxShadow = '';
    });
    
    iframe.setAttribute('aria-label', 'Mapa interativo mostrando localizações de compostores Huella');
    
    iframe.addEventListener('error', function() {
        const alternative = document.querySelector('.map-alternative');
        alternative.classList.remove('sr-only');
        iframe.style.display = 'none';
    });
});