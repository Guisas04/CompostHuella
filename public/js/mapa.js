var map = new L.Map('map').setView([40.2778535, -7.5123146], 16);

// Tile Layer (keep this as-is)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap & CARTO',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

// Custom marker styling
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

// Create markers with different colors
var pin1 = L.marker([40.2778535, -7.5123146], {
    icon: greenPin,
    title: 'Compostor Micampus'  // This adds hover tooltip
}).addTo(map);

var pin2 = L.marker([40.27664447944312, -7.496967315673828], {
    icon: redPin,
    title: 'Compostor Alameda da Europa'
}).addTo(map);

// Custom popup styling
var popupOptions = {
    className: 'custom-popup',  // Add CSS class for styling
    maxWidth: 300
};

pin1.bindPopup(`
    <div class="popup-header">
        <h4>Compostor Micampus</h4>
        <span class="status operational">Operacional</span>
    </div>
    <div class="popup-content">
        <p>Última atualização: 2 horas atrás</p>
        <a href="#" class="btn">Ver Histórico</a>
    </div>
`, popupOptions);

pin2.bindPopup(`
    <div class="popup-header">
        <h4>Compostor Alameda da Europa</h4>
        <span class="status full">Cheio</span>
    </div>
    <div class="popup-content">
        <p>Última atualização: 15 minutos atrás</p>
        <a href="#" class="btn">Ver Histórico</a>
    </div>
`, popupOptions);

// Add hover effects
pin1.on('mouseover', function(e) {
    this.openPopup();
});
pin1.on('mouseout', function(e) {
    this.closePopup();
});

pin2.on('mouseover', function(e) {
    this.openPopup();
});
pin2.on('mouseout', function(e) {
    this.closePopup();
});