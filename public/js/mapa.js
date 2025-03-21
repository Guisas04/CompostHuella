// Initialize map (coordinates for Covilhã, Portugal)
const map = L.map('map').setView([40.2811, -7.5050], 14);

// Add OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Custom marker icon
const compostIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

// Add markers
const markers = [
    {
        coords: [40.2811, -7.5050],
        title: "Central Compost",
        description: "Main composting facility"
    },
    {
        coords: [40.2833, -7.5025],
        title: "Park Station",
        description: "Community compost bin"
    }
];

markers.forEach(marker => {
    L.marker(marker.coords, { icon: compostIcon })
    .addTo(map)
    .bindPopup(`
        <h5>${marker.title}</h5>
        <p>${marker.description}</p>
    `);
});