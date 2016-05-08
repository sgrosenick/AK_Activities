var map = L.map('map').setView([61.67, -149.07], 7);
        mapLink = 
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; ' + mapLink,
            maxZoom: 18,
            }).addTo(map);

//var peecture = new L.Icon.Default();

function createPopup (feature, layer) {
    layer.bindPopup(feature.properties.place + " <a href='"+feature.properties.theweb+"'>" + feature.properties.theweb + "</a>");
};


L.geoJson(ak_activities, {
    onEachFeature: createPopup
}).addTo(map);