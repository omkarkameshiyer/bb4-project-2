

// function getItems(input) {
//   var arr = input, obj = {};
//   for (var i = 0; i < arr.length; i++) {
//     if (!obj[arr[i].name]) {
//       obj[arr[i].name] = 1;
//     } else if (obj[arr[i].name]) {
//       obj[arr[i].name] += 1;
//     }
//   }
//   return obj;
// }
// // example use
// console.log(getItems(order_contents)); // outputs entire object
// console.log(getItems(order_contents)['product 1']); // outputs 10

var trace1 = {
  x: ['Liam', 'Sophie', 'Jacob', 'Mia', 'William', 'Olivia'],
  y: [8.0, 8.0, 12.0, 12.0, 13.0, 20.0],
  type: 'bar',
  text: ['4.17 below the mean', '4.17 below the mean', '0.17 below the mean', '0.17 below the mean', '0.83 above the mean', '7.83 above the mean'],
  marker: {
    color: 'rgb(142,124,195)'
  }
};

var data = [trace1];

var layout = {
  title: 'INCIDENTS BY TIME OF DAY',
  font:{
    family: 'Raleway, sans-serif'
  },
  showlegend: false,
  xaxis: {
    title: "Time of the Day",
    tickangle: -45
  },
  yaxis: {
    title: "Incident Count",
    zeroline: false,
    gridwidth: 2
  },
  bargap :0.05
};

Plotly.newPlot('myDiv', data, layout, {showSendToCloud:true});