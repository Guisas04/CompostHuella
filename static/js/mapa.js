document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map', {
        keyboard: true,
        keyboardPanDelta: 100
    }).setView([40.2778535, -7.5123146], 16);
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap & CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);
    
    var greenPin = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    
    var redPin = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    
    var pin1 = L.marker([40.2778535, -7.5123146], {
        icon: greenPin,
        title: 'Compostor Micampus',
        alt: 'Marcador para Compostor Micampus - Status: Operacional',
        keyboard: true
    }).addTo(map);
    
    var pin2 = L.marker([40.27664447944312, -7.496967315673828], {
        icon: redPin,
        title: 'Compostor Alameda da Europa',
        alt: 'Marcador para Compostor Alameda da Europa - Status: Cheio',
        keyboard: true
    }).addTo(map);
    
    var popupOptions = {
        className: 'custom-popup',
        maxWidth: 300,
        closeOnClick: false,
        autoClose: false
    };
    
    pin1.bindPopup(`
        <div class="popup-header">
            <h4 id="popup-title-1">Compostor Micampus</h4>
            <span class="status operational">Operacional</span>
        </div>
        <div class="popup-content">
            <p>Última atualização: 2 horas atrás</p>
            <a href="#" class="btn">Ver Histórico</a>
        </div>
    `, popupOptions).on('popupopen', function() {
        document.getElementById('popup-title-1').focus();
    });
    
    pin2.bindPopup(`
        <div class="popup-header">
            <h4 id="popup-title-2">Compostor Alameda da Europa</h4>
            <span class="status full">Cheio</span>
        </div>
        <div class="popup-content">
            <p>Última atualização: 15 minutos atrás</p>
            <a href="#" class="btn">Ver Histórico</a>
        </div>
    `, popupOptions).on('popupopen', function() {
        document.getElementById('popup-title-2').focus();
    });
    
    pin1.on('keypress', function(e) {
        if (e.originalEvent.key === 'Enter' || e.originalEvent.key === ' ') {
            this.openPopup();
        }
    });
    
    pin2.on('keypress', function(e) {
        if (e.originalEvent.key === 'Enter' || e.originalEvent.key === ' ') {
            this.openPopup();
        }
    });
    
    map.on('popupopen', function(e) {
        var popup = e.popup;
        popup._container.setAttribute('tabindex', '0');
        
        popup._container.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                popup.close();
            }
        });
    });
    
    map.whenReady(function() {
        document.getElementById('map').focus();
    });
    
    window.focusMarker = function(markerNum) {
        if (markerNum === 1) {
            map.setView(pin1.getLatLng(), 18);
            pin1.openPopup();
        } else if (markerNum === 2) {
            map.setView(pin2.getLatLng(), 18);
            pin2.openPopup();
        }
    };
    
    setTimeout(function() {
        var instructions = document.getElementById('map-instructions');
        if (instructions) {
            instructions.classList.remove('sr-only');
            setTimeout(function() {
                instructions.classList.add('sr-only');
            }, 10000);
        }
    }, 1000);
});