mapboxgl.accessToken =
  "pk.eyJ1IjoiYmFsbGFuY2UiLCJhIjoiY2s0NzV5cXlvMG96ODNrc2U5cGFoY3RoayJ9.4oFb9XUcfNA2r3EsfFSU6Q";
var coordinates = document.getElementById("coordinates");
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-79.79038, 36.07240],
  zoom: 10
});

var marker = new mapboxgl.Marker({
  draggable: true
})
  .setLngLat([-79.79038, 36.07240])
  .addTo(map);

function onDragEnd() {
  var lngLat = marker.getLngLat();
  coordinates.style.display = "block";
  coordinates.innerHTML =
    "Longitude: " + lngLat.lng + "<br />Latitude: " + lngLat.lat;
  hiddenlat.innerHTML = lngLat.lat;
  hiddenlon.innerHTML = lngLat.lng;
}

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');
 
function switchLayer(layer) {
  var layerId = layer.target.id;
  map.setStyle('mapbox://styles/mapbox/' + layerId);
}
 
for (var i = 0; i < inputs.length; i++) {
  inputs[i].onclick = switchLayer;
}

marker.on("dragend", onDragEnd);
