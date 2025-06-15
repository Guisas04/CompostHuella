import { useEffect, useRef } from 'react';
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export function Map() {
    const mapRef = useRef<L.Map | null>(null);
    
    useEffect(() => {
        const map = L.map('map').setView([40.2778535, -7.5123146], 16);
        mapRef.current = map;

        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap & CARTO',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(map);

        const greenPin = L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        const redPin = L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        const pin1 = L.marker([40.2778535, -7.5123146], {
            icon: greenPin,
            title: 'Compostor Micampus'
        }).addTo(map);

        const pin2 = L.marker([40.27664447944312, -7.496967315673828], {
            icon: redPin,
            title: 'Compostor Alameda da Europa'
        }).addTo(map);

        const popupOptions: L.PopupOptions = {
            className: 'custom-popup',
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

        pin1.on('mouseover', () => pin1.openPopup());
        pin1.on('mouseout', () => pin1.closePopup());

        pin2.on('mouseover', () => pin2.openPopup());
        pin2.on('mouseout', () => pin2.closePopup());

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    return (
        <html lang="pt">
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Huella Mapa | UBI</title>
                <link rel="icon" href="/favicon.ico" sizes="any"/>

                {/* Bootstrap */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
                
                {/* Icons */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"/>

                {/* Styles */}
                <link rel="stylesheet" href="/css/misc.css"/>
                <link rel="stylesheet" href="/css/mapa.css"/>
            </head>

            <body>
                <Navbar/>

                <main>
                    <div id="map" style={{ height: "calc(100vh - 120px)", width: "100%" }}></div>
                </main>
            
                <Footer/>

                {/* Scripts */}
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"/>
            </body>
        </html>
    );
}