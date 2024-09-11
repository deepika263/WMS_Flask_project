// Initialize map
 var map = L.map('map').setView([51.505, -0.09], 2);

 // Add base map layer (optional)
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19
 }).addTo(map);

 // Add WMS layer
 var wmsLayer = L.tileLayer.wms('https://example.com/wms', {
     layers: 'your_layer_name',
     format: 'image/png',
     transparent: true
 }).addTo(map);
