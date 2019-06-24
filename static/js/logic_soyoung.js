am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_dataviz);
am4core.useTheme(am4themes_animated);
// Themes end

var colorSet = new am4core.ColorSet();

// creating an am4 object container
var container = am4core.create("map-soyoung", am4core.Container);
container.width = am4core.percent(100);
container.height = am4core.percent(100);

// creating a map chart inside container. map instance///////
var mapChart = container.createChild(am4maps.MapChart);
mapChart.width = am4core.percent(100);
mapChart.height = am4core.percent(50);
mapChart.valign = "top";

// label for this map and chart
var label = container.createChild(am4core.Label);
label.text = "1970";
label.size = "20px";
label.valign = "top";
label.align = "center";
label.padding(10, 10, 10, 10);

// zoom control
mapChart.mouseWheelBehavior = "none";
mapChart.zoomControl = new am4maps.ZoomControl();
mapChart.zoomControl.slider.height = 50;

// Set map definition to usa low(low definition map)
try {
    mapChart.geodata = am4geodata_usaLow;
}
catch (e) {
    mapChart.raiseCriticalError({
        "message": "Map geodata could not be loaded. Please download the latest <a href=\"https://www.amcharts.com/download/download-v4/\">amcharts geodata</a> and extract its contents into the same directory as your amCharts files."
    });
}

// setting map projection
mapChart.projection = new am4maps.projections.AlbersUsa();
mapChart.deltaLongitude = 145;// rotation not working for Albers map
mapChart.seriesContainer.draggable = false;

// separators not working for Albers USA map
// var separatorSeries = mapChart.series.push(new am4maps.MapLineSeries());
// separatorSeries.useGeodata = true;
// separatorSeries.mapLines.template.stroke = am4core.color("#ec8a2e");

// creating map polygon series
var polygonSeries = mapChart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;
// series configuration
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.fill = am4core.color("#FCBA12");
polygonTemplate.tooltipText = "{name}";
polygonTemplate.strokeOpacity = 0.5;
// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#FF4500");


// Creating map image(marker) series
var mapImageSeries = mapChart.series.push(new am4maps.MapImageSeries());

var mapImageSeriesTemplate = mapImageSeries.mapImages.template;
var shootImage = mapImageSeriesTemplate.createChild(am4core.Circle);
// shootImage.href = "./static/images/red_marker.png"
// marker.href = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/marker.svg" //blue&green marker;
// bombImage.href = "//www.amcharts.com/wp-content/uploads/2018/11/rocket.png";
// bangImage.href = "https://www.amcharts.com/wp-content/uploads/2018/11/bang.png";
shootImage.radius = 4;
shootImage.fill = am4core.color("#FC0000");
// shootImage.stroke = am4core.color("#F7EDD4");
shootImage.strokeWidth = 1;
shootImage.nonScaling = true;
shootImage.horizontalCenter = "bottom";
shootImage.verticalCenter = "bottom";
shootImage.tooltip = new am4core.Tooltip();
shootImage.tooltipText = "{school}, {city}, {state}";
shootImage.tooltip.filters.clear();
shootImage.tooltip.background.cornerRadius = 20;
shootImage.tooltip.label.padding(15, 20, 15, 20);
shootImage.tooltip.background.strokeOpacity = 0;
shootImage.tooltipY = -5;

mapImageSeriesTemplate.propertyFields.latitude = "latitude";
mapImageSeriesTemplate.propertyFields.longitude = "longitude";

// line config
var mapLineSeries = mapChart.series.push(new am4maps.MapLineSeries());
mapLineSeries.mapLines.template.line.stroke = am4core.color("#DB7093");
mapLineSeries.mapLines.template.line.strokeOpacity = 0.5;
mapLineSeries.mapLines.template.line.strokeWidth = 3;
mapLineSeries.mapLines.template.line.strokeDasharray = "3,3";

// map data empty array prep
let shoot1970 = [];
let shoot1971 = [];
let shoot1972 = [];
let shoot1973 = [];
let shoot1974 = [];
let shoot1975 = [];
let shoot1976 = [];
let shoot1977 = [];
let shoot1978 = [];
let shoot1979 = [];

let shoot1980 = [];
let shoot1981 = [];
let shoot1982 = [];
let shoot1983 = [];
let shoot1984 = [];
let shoot1985 = [];
let shoot1986 = [];
let shoot1987 = [];
let shoot1988 = [];
let shoot1989 = [];

let shoot1990 = [];
let shoot1991 = [];
let shoot1992 = [];
let shoot1993 = [];
let shoot1994 = [];
let shoot1995 = [];
let shoot1996 = [];
let shoot1997 = [];
let shoot1998 = [];
let shoot1999 = [];

let shoot2000 = [];
let shoot2001 = [];
let shoot2002 = [];
let shoot2003 = [];
let shoot2004 = [];
let shoot2005 = [];
let shoot2006 = [];
let shoot2007 = [];
let shoot2008 = [];
let shoot2009 = [];

let shoot2010 = [];
let shoot2011 = [];
let shoot2012 = [];
let shoot2013 = [];
let shoot2014 = [];
let shoot2015 = [];
let shoot2016 = [];
let shoot2017 = [];
let shoot2018 = [];
let shoot2019 = [];

let mapData={};
let shoot7019 = []; // array for accumulated markers 1970-2019

// empty array for chart data
let xyData = {};
let xyDataArr = [];

d3.json('/jsonShootingData').then(function(response){
  // console.log(response);
  for (i = 0; i<response.length; i++) {
    var year = new Date(response[i].Date).getFullYear();
    // console.log(year);
    let shootLoc = {latitude : response[i].location.lat, 
                    longitude : response[i].location.lng, 
                    school : response[i].School,
                    city : response[i].City,
                    state : response[i].State };

    shoot7019.push(shootLoc);

            if (year>=1970 && year<1971) {
        shoot1970.push(shootLoc);
      } else if (year>=1971 && year<1972) {
        shoot1971.push(shootLoc);
      } else if (year>=1972 && year<1973) {
        shoot1972.push(shootLoc);
      } else if (year>=1973 && year<1974) {
        shoot1973.push(shootLoc);
      } else if (year>=1974 && year<1975) {
        shoot1974.push(shootLoc);
      } else if (year>=1975 && year<1976) {
        shoot1975.push(shootLoc);
      } else if (year>=1976 && year<1977) {
        shoot1976.push(shootLoc);
      } else if (year>=1977 && year<1978) {
        shoot1977.push(shootLoc);
      } else if (year>=1978 && year<1979) {
        shoot1978.push(shootLoc);
      } else if (year>=1979 && year<1980) {
        shoot1979.push(shootLoc);
      } 

        else if (year>=1980 && year<1981) {
        shoot1980.push(shootLoc);
      } else if (year>=1981 && year<1982) {
        shoot1981.push(shootLoc);
      } else if (year>=1982 && year<1983) {
        shoot1982.push(shootLoc);
      } else if (year>=1983 && year<1984) {
        shoot1983.push(shootLoc);
      } else if (year>=1984 && year<1985) {
        shoot1984.push(shootLoc);
      } else if (year>=1985 && year<1986) {
        shoot1985.push(shootLoc);
      } else if (year>=1986 && year<1987) {
        shoot1986.push(shootLoc);
      } else if (year>=1987 && year<1988) {
        shoot1987.push(shootLoc);
      } else if (year>=1988 && year<1989) {
        shoot1988.push(shootLoc);
      } else if (year>=1989 && year<1990) {
        shoot1989.push(shootLoc);
      } 

        else if (year>=1990 && year<1991) {
        shoot1990.push(shootLoc);
      } else if (year>=1991 && year<1992) {
        shoot1991.push(shootLoc);
      } else if (year>=1992 && year<1993) {
        shoot1992.push(shootLoc);
      } else if (year>=1993 && year<1994) {
        shoot1993.push(shootLoc);
      } else if (year>=1994 && year<1995) {
        shoot1994.push(shootLoc);
      } else if (year>=1995 && year<1996) {
        shoot1995.push(shootLoc);
      } else if (year>=1996 && year<1997) {
        shoot1996.push(shootLoc);
      } else if (year>=1997 && year<1998) {
        shoot1997.push(shootLoc);
      } else if (year>=1998 && year<1999) {
        shoot1998.push(shootLoc);
      } else if (year>=1999 && year<2000) {
        shoot1999.push(shootLoc);
      } 

        else if (year>=2000 && year<2001) {
        shoot2000.push(shootLoc);
      } else if (year>=2001 && year<2002) {
        shoot2001.push(shootLoc);
      } else if (year>=2002 && year<2003) {
        shoot2002.push(shootLoc);
      } else if (year>=2003 && year<2004) {
        shoot2003.push(shootLoc);
      } else if (year>=2004 && year<2005) {
        shoot2004.push(shootLoc);
      } else if (year>=2005 && year<2006) {
        shoot2005.push(shootLoc);
      } else if (year>=2006 && year<2007) {
        shoot2006.push(shootLoc);
      } else if (year>=2007 && year<2008) {
        shoot2007.push(shootLoc);
      } else if (year>=2008 && year<2009) {
        shoot2008.push(shootLoc);
      } else if (year>=2009 && year<2010) {
        shoot2009.push(shootLoc);
      } 

        else if (year>=2010 && year<2011) {
        shoot2010.push(shootLoc);
      } else if (year>=2011 && year<2012) {
        shoot2011.push(shootLoc);
      } else if (year>=2012 && year<2013) {
        shoot2012.push(shootLoc);
      } else if (year>=2013 && year<2014) {
        shoot2013.push(shootLoc);
      } else if (year>=2014 && year<2015) {
        shoot2014.push(shootLoc);
      } else if (year>=2015 && year<2016) {
        shoot2015.push(shootLoc);
      } else if (year>=2016 && year<2017) {
        shoot2016.push(shootLoc);
      } else if (year>=2017 && year<2018) {
        shoot2017.push(shootLoc);
      } else if (year>=2018 && year<2019) {
        shoot2018.push(shootLoc);
      } else if (year>=2019 && year<2020) {
        shoot2019.push(shootLoc);
      } 

    // for chart
    if (year in xyData) {
      xyData[year] += 1;
    }
    else {
      xyData[year] =1;
    }

  }; // end of for loop

  // map data prep continued
  mapData[1970]=shoot1970;
  mapData[1971]=shoot1971;
  mapData[1972]=shoot1972;
  mapData[1973]=shoot1973;
  mapData[1974]=shoot1974;
  mapData[1975]=shoot1975;
  mapData[1976]=shoot1976;
  mapData[1977]=shoot1977;
  mapData[1978]=shoot1978;
  mapData[1979]=shoot1979;

  mapData[1980]=shoot1980;
  mapData[1981]=shoot1981;
  mapData[1982]=shoot1982;
  mapData[1983]=shoot1983;
  mapData[1984]=shoot1984;
  mapData[1985]=shoot1985;
  mapData[1986]=shoot1986;
  mapData[1987]=shoot1987;
  mapData[1988]=shoot1988;
  mapData[1989]=shoot1989;

  mapData[1990]=shoot1990;
  mapData[1991]=shoot1991;
  mapData[1992]=shoot1992;
  mapData[1993]=shoot1993;
  mapData[1994]=shoot1994;
  mapData[1995]=shoot1995;
  mapData[1996]=shoot1996;
  mapData[1997]=shoot1997;
  mapData[1998]=shoot1998;
  mapData[1999]=shoot1999;

  mapData[2000]=shoot2000;
  mapData[2001]=shoot2001;
  mapData[2002]=shoot2002;
  mapData[2003]=shoot2003;
  mapData[2004]=shoot2004;
  mapData[2005]=shoot2005;
  mapData[2006]=shoot2006;
  mapData[2007]=shoot2007;
  mapData[2008]=shoot2008;
  mapData[2009]=shoot2009;

  mapData[2010]=shoot2010;
  mapData[2011]=shoot2011;
  mapData[2012]=shoot2012;
  mapData[2013]=shoot2013;
  mapData[2014]=shoot2014;
  mapData[2015]=shoot2015;
  mapData[2016]=shoot2016;
  mapData[2017]=shoot2017;
  mapData[2018]=shoot2018;
  mapData[2019]=shoot2019;
 
  // console.log(mapData);

  //chart data prep continued
  // console.log(xyData);
  Object.entries(xyData).forEach( ([key, value]) => 
  xyDataArr.push({'year':key, 'value': value}) )
  // console.log(xyDataArr);


// map animation
// mapImageSeries.data = shoot7019; //for accumulated locations
var currentYear = 1970;

function getCurrentData() {
  label.text = currentYear;
  var data = mapData[currentYear];
  // console.log(data);
  currentYear++;
  if (currentYear > 2019)
    currentYear = 1970;
  return data
}

function loop() {
  var data = getCurrentData();
  // for (let i = 0; i<data.length; i++) {
  // console.log(data)
  mapLineSeries.data = [{"multiGeoLine": [data]}];
  mapImageSeries.data = data;
  mapImageSeries.setTimeout(loop,300);
}
loop();

// // chart animation :
// times of events
var startTime = new Date(response[0].Date).getFullYear();
// console.log(startTime);
var endTime = new Date(response.slice(-1)[0].Date).getFullYear();
// console.log(endTime);
var currentTime;
// console.log(currentTime);


/////// time-series chart at the bottom //////////
var chart = container.createChild(am4charts.XYChart);
chart.padding(0, 50, 200, 50);
chart.height = 400;
chart.valign = "bottom";

// background gradient
// var gradientFill = new am4core.LinearGradient();
// gradientFill.addColor(am4core.color("#F7EDD4"), 0, 0);
// gradientFill.addColor(am4core.color("#FCBA12"), 0.7, 0.7);
// gradientFill.rotation = 90;
// chart.background.fill = gradientFill;

// x axis Date
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.title.text = "Year";
categoryAxis.dataFields.category = "year";
categoryAxis.tooltip.dateFormatter.dateFormat = "yyyy";
categoryAxis.tooltip.background.pointerLength = 4;
categoryAxis.tooltip.background.fillOpacity = 1;
categoryAxis.tooltip.background.fill = am4core.color("#FCBA12");
categoryAxis.tooltip.background.stroke = categoryAxis.tooltip.background.fill;

categoryAxis.renderer.inside = false;
categoryAxis.renderer.line.fill = am4core.color("#DB7093");
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.grid.template.strokeDasharray = "3,3";
categoryAxis.renderer.grid.template.strokeOpacity = 0.2;
// categoryAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
categoryAxis.renderer.minLabelPosition = 0.03;

// categoryAxis.renderer.labels.template.fill = am4core.color("#ffffff");
categoryAxis.renderer.labels.template.fillOpacity = 0.4;


// y axis incident (value)
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "# of Incidents";
valueAxis.min = 0;
valueAxis.max = 100;
// valueAxis.strictMinMax = true;
valueAxis.tooltip.disabled = true;

// valueAxis.renderer.inside = true;
// valueAxis.renderer.line.disabled = true;
// valueAxis.renderer.ticks.template.disabled = true;
// valueAxis.renderer.minGridDistance = 10;
// valueAxis.renderer.grid.template.disabled = true;
// valueAxis.renderer.grid.template.stroke = am4core.color("#ffffff");

// valueAxis.renderer.labels.template.fillOpacity = 0.4;
// valueAxis.renderer.labels.template.fill = am4core.color("#ffffff");


var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.valueY = "value";
lineSeries.dataFields.categoryX = "year";
lineSeries.tooltipText = "{value}";
lineSeries.stroke = am4core.color("#090934");
lineSeries.tooltip.background.fillOpacity = 0;
lineSeries.tooltip.autoTextColor = false;
lineSeries.tooltip.label.fill = am4core.color("#ffffff");
lineSeries.tooltip.filters.clear();
lineSeries.tooltip.pointerOrientation = "vertical";
lineSeries.strokeWidth = 2;
lineSeries.tensionX = 1;
lineSeries.tensionY = 0.9;

var bullet = lineSeries.bullets.push(new am4charts.Bullet());
bullet.fill = am4core.color("#DB7093");

// chart.dateFormatter.inputDateFormat = "YYYY";

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.xAxis = categoryAxis;
chart.cursor.lineX.strokeOpacity = 0;

chart.data = xyDataArr
lineSeries.sequencedInterpolation = true;

/////////////////slider bar ////////////////
// // when slider bar point is changed, update all elements
// function setTime() {
//     var time = new Date(startTime + (endTime - startTime) * slider.start).getFullYear();
//     // console.log(time);
//     var roundedTime = am4core.time.round(new Date(time), "year").getFullYear();
//     // console.log(roundedTime);

//     if (roundedTime != currentTime) {
//         currentTime = roundedTime;
//         var count = lineSeries.dataItems.length;


//         if (slider) {
//             for (var i = 0; i < count; i++) {
//                 var dataItem = lineSeries.dataItems.getIndex(i);

//                 if (i < slider.start * count) {
//                     dataItem.show(500, 0, ["valueY"]);
//                 }
//                 else {
//                     dataItem.hide(500, 0, 0, ["valueY"]);
//                 }
//             }
//         }
//     }

//  } //end setTime()


// chart.events.on("ready", function () {
//     createSlider();
// });

// var slider;

// var playButton;

// function createSlider() {
//     var sliderContainer = container.createChild(am4core.Container);

//     sliderContainer.width = am4core.percent(100);
//     sliderContainer.valign = "bottom";
//     sliderContainer.padding(0, 50, 50, 50);
//     sliderContainer.layout = "horizontal";
//     sliderContainer.height = 50;


//     playButton = sliderContainer.createChild(am4core.PlayButton);
//     playButton.valign = "middle";
//     playButton.events.on("toggled", function (event) {
//         if (event.target.isActive) {
//             play();
//         }
//         else {
//             stop();
//         }
//     })
    
//     slider = sliderContainer.createChild(am4core.Slider);
//     slider.valign = "middle";
//     slider.margin(0, 0, 0, 0);
//     slider.background.opacity = 0.5;
//     slider.opacity = 0.7;
//     slider.background.fill = am4core.color("#ffffff");
//     // slider.marginLeft = 10;
//     slider.height = 15;
//     slider.events.on("rangechanged", function () {
//         setTime();
//     });

//     slider.startGrip.events.on("drag", function () {
//         stop();
//         sliderAnimation.setProgress(slider.start);
//     });

//     sliderAnimation = slider.animate({ property: "start", to: 1 }, 50000, am4core.ease.linear).pause();
//     sliderAnimation.events.on("animationended", function () {
//         playButton.isActive = false;
//     })
// } //createSlider() 

// // slider
// var sliderAnimation;

// function play() {
//     if (slider) {
//         if (slider.start >= 1) {
//             slider.start = 0;
//             sliderAnimation.start();
//         }
//         sliderAnimation.resume();
//         playButton.isActive = true;
//     }
// }

// function stop() {
//     sliderAnimation.pause();
//     playButton.isActive = false;
// }

// setTimeout(function () {
//     play()
// }, 2000);


}) // end of d3.json promise



}); // end am4core.ready()