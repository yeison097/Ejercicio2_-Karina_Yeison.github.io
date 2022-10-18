var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>' +
    "contributors",
  maxZoom: 18,
});
var map = L.map("map", {
  center: [1.61389, -75.6128],
  zoom: 13,
  layers: osm,
  scrollWheelZoom: false,
});
L.control.scale().addTo(map);

var myIcon = L.icon({
  iconUrl: "icono2.png",
  iconSize: [15, 15],
  popupAnchor: [-1, -10],
});

var marker = L.marker([1.6199199241326603, -75.60420644741252], {
  icon: myIcon,
})
  .addTo(map)
  .bindPopup("Uniamazonia");

var myIcon2 = L.icon({
  iconUrl: "alcal.png",
  iconSize: [15, 15],
  popupAnchor: [-1, -10],
});

var marker2 = L.marker([1.6151502700445595, -75.61359425674262], {
  icon: myIcon2,
})
  .addTo(map)
  .bindPopup("Alcaldia de Florencia");

var circle = L.circle([1.6151502700445595, -75.61359425674262], 500, {
  color: "#ffa9df",
  fillColor: "#ffa9df",
  fillOpacity: 0.5,
}).addTo(map);

circle.bindPopup("Alcaldia");

var myIcon3 = L.icon({
  iconUrl: "parque.png",
  iconSize: [15, 15],
  popupAnchor: [-1, -10],
});

var marker3 = L.marker([1.6150119050365215, -75.61323737352834], {
  icon: myIcon3,
})
  .addTo(map)
  .bindPopup("Parque santander");

var polygon = L.polygon([
  [1.6151806133917177, -75.61372175745142],
  [1.6144976732472331, -75.61351324484066],
  [1.6146936057225514, -75.6127861168591],
  [1.6154248876157284, -75.6130100813074],
])
  .addTo(map)
  .bindPopup("Centro");

var pointA = new L.LatLng(1.6153007045601366, -75.6005424967506);
var pointB = new L.LatLng(1.6157236330464804, -75.60123198785186);
var pointC = new L.LatLng(1.6159491949118188, -75.60196222110476);
var pointD = new L.LatLng(1.616954228920915, -75.60301454641014);
var pointE = new L.LatLng(1.6184998885097912, -75.60411740503766);
var pointF = new L.LatLng(1.6185851265577094, -75.60400370787735);
var pointG = new L.LatLng(1.6190851924582899, -75.60445849478002);
var pointH = new L.LatLng(1.6200903715330703, -75.60498482455753);
var pointI = new L.LatLng(1.6200231220607026, -75.60442215018743);


var fin = new L.LatLng(1.6199199241326603, -75.60420644741252);
var latlngs = [pointA,pointB,pointC,pointD,pointE,pointF,pointG,pointH,pointI,fin];
var polyline = L.polyline(latlngs, { color: "red" })
  .addTo(map)
  .bindPopup("De la casa de Karina a la Universidad");

//
