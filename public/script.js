var mymap = L.map('worldmap', 
            {
              center: [48.866667, 2.333333],
              zoom: 4
            }
           );



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);


var customIcon = L.icon({
  iconUrl: '/images/leaf-green.png',
  shadowUrl: '/images/leaf-shadow.png',

  iconSize:     [38, 95], 
  shadowSize:   [50, 64], 

  iconAnchor:   [22, 94], 
  shadowAnchor: [4, 62],  

  popupAnchor:  [-3, -76]
});

var cities= document.getElementsByClassName('list-group-item');
console.log(cities)
for(var i=0; i<cities.length; i++)
{
  var lon=cities[i].dataset.long;
  console.log(lon);
 
  var lat =cities[i].dataset.lat;
  console.log(lat);

  var marker=L.marker([lat,lon],{icon: customIcon}).addTo(mymap);

  marker.bindPopup(cities[i].dataset.popup).openPopup;

  
}


