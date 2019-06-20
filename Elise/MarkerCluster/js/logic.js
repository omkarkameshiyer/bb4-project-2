// map object centered in US
var myMap = L.map("map", {
  center: [39.8283, -98.5795],
  zoom: 4
});

// Adding tile layer to the map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);


var parseTime = d3.timeParse("%B %d, %Y");

// Load data from JSON
var url = "http://127.0.0.1:5000/jsonShootingData";

d3.json(url, function(error, url) {
  // if (error) throw error;
  console.log("Shooting data loaded!");

  // // Create a new marker cluster group
  // var markers = L.markerClusterGroup();

  // // Format the date and cast the miles value to a number
  // shootingData.forEach(function(data) {
  //   data.Date = parseTime(data.Date);
  //   // Set the data location property to a variable
  //   var location = data.Location.replace(/\'/g, "\"");
  //   try {
  //     location = JSON.parse(location);
  //     // Add a new marker to the cluster group and bind a pop-up
  //     markers.addLayer(L.marker([location.lat, location.lng])
  //       // .bindPopup(data.Summary));
  //            .bindPopup("Date: " + data.Date + "<br>" +
  //                       "State: " + data.State + "<br>" +
  //                       "City: " + data.City + "<br>" +
  //                       "School: " + data.School + "<br>" +
  //                       "Killed (includes shooter): " + data.Killed.toString() + "<br>" +
  //                       "Summary: " + data.Summary
  //                       ));
  //   } catch {
  //     console.log('Invalid location');
  //   }
  // });

  // // Add our marker cluster layer to the map
  // myMap.addLayer(markers);
});



// // Load data from CSV

// d3.csv("csv/SchoolShootingData_withGeoCoordinates.csv", function(error, shootingData) {
//   if (error) throw error;
//   console.log(shootingData);

//   // Create a new marker cluster group
//   var markers = L.markerClusterGroup();

//   // Format the date and cast the miles value to a number
//   shootingData.forEach(function(data) {
//     data.date = parseTime(data.date);
//     // Set the data location property to a variable
//     var location = data.location.replace(/\'/g, "\"");
//     try {
//       location = JSON.parse(location);
//       // Add a new marker to the cluster group and bind a pop-up
//       markers.addLayer(L.marker([location.lat, location.lng])
//         // .bindPopup(data.Summary));
//              .bindPopup("Date: " + data.Date + "<br>" +
//                         "State: " + data.State + "<br>" +
//                         "City: " + data.City + "<br>" +
//                         "School: " + data.School + "<br>" +
//                         "Killed (includes shooter): " + data.Killed.toString() + "<br>" +
//                         "Summary: " + data.Summary
//                         ));
//     } catch {
//       console.log('Invalid location');
//     }
//   });

//   // Add our marker cluster layer to the map
//   myMap.addLayer(markers);
// });

