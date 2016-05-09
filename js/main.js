var map = L.map('map').setView([61.67, -149.07], 7);
var layer = L.esri.basemapLayer('Topographic').addTo(map);
var layerLabels;

function setBasemap(basemap) {
    if (layer) {
      map.removeLayer(layer);
    }

    layer = L.esri.basemapLayer(basemap);

    map.addLayer(layer);

    if (layerLabels) {
      map.removeLayer(layerLabels);
    }

    if (basemap === 'ShadedRelief'
     || basemap === 'Oceans'
     || basemap === 'Gray'
     || basemap === 'DarkGray'
     || basemap === 'Imagery'
     || basemap === 'Terrain'
   ) {
      layerLabels = L.esri.basemapLayer(basemap + 'Labels');
      map.addLayer(layerLabels);
    }
  }

  function changeBasemap(basemaps){
  var basemap = basemaps.value;
  setBasemap(basemap);
  }


function createPopup (feature, layer) {
    layer.bindPopup(feature.properties.place + " <a href='"+feature.properties.theweb+"'>" + feature.properties.theweb + "</a>");
};


L.geoJson(ak_activities, {
    onEachFeature: createPopup
}).addTo(map);