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
mapChart.valign = "top";

var title = mapChart.titles.create();
title.text = "50 Years of School Shooting History";
title.fontSize = 25;
title.marginBottom = 30;

// zoom control
mapChart.mouseWheelBehavior = "none";
// mapChart.zoomControl = new am4maps.ZoomControl();
// mapChart.zoomControl.slider.height = 100;

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
polygonTemplate.fill = am4core.color("#3f3f3f");
polygonTemplate.tooltipText = "{name}";
polygonTemplate.strokeOpacity = 0.5;
// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#FFB6C1");


// Creating map image(marker) series
var mapImageSeries = mapChart.series.push(new am4maps.MapImageSeries());

var mapImageSeriesTemplate = mapImageSeries.mapImages.template;
var shootImage = mapImageSeriesTemplate.createChild(am4core.Image);
shootImage.href = "./static/images/red_marker.png"
// marker.href = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/marker.svg" //blue&green marker;
// bombImage.href = "//www.amcharts.com/wp-content/uploads/2018/11/rocket.png";
// bangImage.href = "https://www.amcharts.com/wp-content/uploads/2018/11/bang.png";
shootImage.width = 30;
shootImage.height = 30;
shootImage.nonScaling = true;
// shootImage.tooltipText = "{title}";
shootImage.horizontalCenter = "middle";
shootImage.verticalCenter = "bottom";
// shootImage.tooltip = new am4core.Tooltip();
// shootImage.tooltip.filters.clear();
// shootImage.tooltip.background.cornerRadius = 20;
// shootImage.tooltip.label.padding(15, 20, 15, 20);
// shootImage.tooltip.background.strokeOpacity = 0;
// shootImage.tooltipY = -5;

mapImageSeriesTemplate.propertyFields.latitude = "latitude";
mapImageSeriesTemplate.propertyFields.longitude = "longitude";

// line config
var mapLineSeries = mapChart.series.push(new am4maps.MapLineSeries());
mapLineSeries.mapLines.template.line.stroke = am4core.color("#DB7093");
mapLineSeries.mapLines.template.line.strokeOpacity = 0.5;
mapLineSeries.mapLines.template.line.strokeWidth = 3;
mapLineSeries.mapLines.template.line.strokeDasharray = "3,3";


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


d3.json('/jsonShootingData').then(function(response){
  // console.log(response);
  for (i = 0; i<response.length; i++) {
    var year = new Date(response[i].Date);
    let shootLoc = {latitude : response[i].location.lat, longitude : response[i].location.lng};

    if (year.getFullYear()===1970) {
      shoot1970.push(shootLoc);
      } else if (year.getFullYear()===1971) {
        shoot1971.push(shootLoc);
      } else if (year.getFullYear()===1972) {
        shoot1972.push(shootLoc);
      } else if (year.getFullYear()===1973) {
        shoot1973.push(shootLoc);
      } else if (year.getFullYear()===1974) {
        shoot1974.push(shootLoc);
      } else if (year.getFullYear()===1975) {
        shoot1975.push(shootLoc);
      } else if (year.getFullYear()===1976) {
        shoot1976.push(shootLoc);
      } else if (year.getFullYear()===1977) {
        shoot1977.push(shootLoc);
      } else if (year.getFullYear()===1978) {
        shoot1978.push(shootLoc);
      } else if (year.getFullYear()===1979) {
        shoot1979.push(shootLoc);
      } 
        else if (year.getFullYear()===1980) {
        shoot1980.push(shootLoc);
      } else if (year.getFullYear()===1981) {
        shoot1981.push(shootLoc);
      } else if (year.getFullYear()===1982) {
        shoot1982.push(shootLoc);
      } else if (year.getFullYear()===1983) {
        shoot1983.push(shootLoc);
      } else if (year.getFullYear()===1984) {
        shoot1984.push(shootLoc);
      } else if (year.getFullYear()===1985) {
        shoot1985.push(shootLoc);
      } else if (year.getFullYear()===1986) {
        shoot1986.push(shootLoc);
      } else if (year.getFullYear()===1987) {
        shoot1987.push(shootLoc);
      } else if (year.getFullYear()===1988) {
        shoot1988.push(shootLoc);
      } else if (year.getFullYear()===1989) {
        shoot1989.push(shootLoc);
      } 
        else if (year.getFullYear()===1990) {
        shoot1990.push(shootLoc);
      } else if (year.getFullYear()===1991) {
        shoot1991.push(shootLoc);
      } else if (year.getFullYear()===1992) {
        shoot1992.push(shootLoc);
      } else if (year.getFullYear()===1993) {
        shoot1993.push(shootLoc);
      } else if (year.getFullYear()===1994) {
        shoot1994.push(shootLoc);
      } else if (year.getFullYear()===1995) {
        shoot1995.push(shootLoc);
      } else if (year.getFullYear()===1996) {
        shoot1996.push(shootLoc);
      } else if (year.getFullYear()===1997) {
        shoot1997.push(shootLoc);
      } else if (year.getFullYear()===1998) {
        shoot1998.push(shootLoc);
      } else if (year.getFullYear()===1999) {
        shoot1999.push(shootLoc);
      }
        else if (year.getFullYear()===2000) {
        shoot2000.push(shootLoc);
      } else if (year.getFullYear()===2001) {
        shoot2001.push(shootLoc);
      } else if (year.getFullYear()===2002) {
        shoot2002.push(shootLoc);
      } else if (year.getFullYear()===2003) {
        shoot2003.push(shootLoc);
      } else if (year.getFullYear()===2004) {
        shoot2004.push(shootLoc);
      } else if (year.getFullYear()===2005) {
        shoot2005.push(shootLoc);
      } else if (year.getFullYear()===2006) {
        shoot2006.push(shootLoc);
      } else if (year.getFullYear()===2007) {
        shoot2007.push(shootLoc);
      } else if (year.getFullYear()===2008) {
        shoot2008.push(shootLoc);
      } else if (year.getFullYear()===2009) {
        shoot2009.push(shootLoc);
      }
        else if (year.getFullYear()===2010) {
        shoot2010.push(shootLoc);
      } else if (year.getFullYear()===2011) {
        shoot2011.push(shootLoc);
      } else if (year.getFullYear()===2012) {
        shoot2012.push(shootLoc);
      } else if (year.getFullYear()===2013) {
        shoot2013.push(shootLoc);
      } else if (year.getFullYear()===2014) {
        shoot2014.push(shootLoc);
      } else if (year.getFullYear()===2015) {
        shoot2015.push(shootLoc);
      } else if (year.getFullYear()===2016) {
        shoot2016.push(shootLoc);
      } else if (year.getFullYear()===2017) {
        shoot2017.push(shootLoc);
      } else if (year.getFullYear()===2018) {
        shoot2018.push(shootLoc);
      } else if (year.getFullYear()===2019) {
        shoot2019.push(shootLoc);
      }

  }; // end of for loop
  // console.log(shoot1970);
  // console.log(shoot1971);
  // console.log(shoot1972);
  // console.log(shoot1973);
  // console.log(shoot1974);

  // console.log(shoot1980);
  // console.log(shoot1981);
  // console.log(shoot1982);
  // console.log(shoot1983);
  // console.log(shoot1984);



// times of events
var startTime = new Date(response[0].Date).getTime();
console.log(startTime);
var endTime = new Date(response.slice(-1)[0].Date).getTime();
console.log(endTime);
var currentTime;

var shootYears = [
  { year: new Date(1970).getTime(), text: "1970"},
  { year: new Date(1971).getTime, text: "1971"},
  { year: new Date(1972).getTime, text: "1972"},
  { year: new Date(1973).getTime, text: "1973"},
  { year: new Date(1974).getTime, text: "1974"},
  { year: new Date(1975).getTime, text: "1975"},
]


// // when slider bar point is changed, update all elements
function setTime() {
    var time = new Date(startTime + (endTime - startTime) * slider.start).getTime();
    var roundedTime = am4core.time.round(new Date(time), "hour").getTime();

    if (roundedTime != currentTime) {
        currentTime = roundedTime;
        var count = lineSeries.dataItems.length;
        console.log(count);

        if (slider) {
            for (var i = 0; i < count; i++) {
                var dataItem = lineSeries.dataItems.getIndex(i);

                if (i < slider.start * count) {
                    dataItem.show(500, 0, ["valueY"]);
                }
                else {
                    dataItem.hide(500, 0, 0, ["valueY"]);
                }
            }
        }
    }
    

      if (time >= new Date(1970,1,1).getTime()) {
        mapLineSeries.data = [{"multiGeoLine": [shoot1970]}];
        mapImageSeries.data = shoot1970;
      } else if (time >= new Date(1971,1,1).getTime()) {
        mapLineSeries.data = [{"multiGeoLine": [shoot1971]}];
        mapImageSeries.data = shoot1971;
      } else if (time >= new Date(1972,1,1).getTime()) {
        mapLineSeries.data = [{"multiGeoLine": [shoot1972]}];
        mapImageSeries.data = shoot1972;
      } else if (time >= new Date(1973,1,1).getTime()) {
        mapLineSeries.data = [{"multiGeoLine": [shoot1973]}];
        mapImageSeries.data = shoot1973;
      }
  }

  // if (honoluluCircle.tooltipText) {
  //     honoluluCircle.showTooltip();
  // }
  // else {
  //     honoluluCircle.hideTooltip();
  // }
  

    // if (time > 1971) {
    //     if (!bulletAlertCircle.visible) {
    //         bulletAlertCircle.visible = true;
    //         bulletAlertAnimation.resume();
    //     }
    // }
    // else {
    //     bulletAlertCircle.visible = false;
    // }

//     for (var i = 0; i < honoluluTexts.length; i++) {
//         var honoluluText = honoluluTexts[i];
//         if (time > honoluluText.time) {
//             honoluluCircle.tooltipText = honoluluText.text;
//         }
//     }

//     if (honoluluCircle.tooltipText) {
//         honoluluCircle.showTooltip();
//     }
//     else {
//         honoluluCircle.hideTooltip();
//     }

//     for (var i = 0; i < pyongyangTexts.length; i++) {
//         var pyongyangText = pyongyangTexts[i];
//         if (time > pyongyangText.time) {
//             shootImage.tooltipText = pyongyangText.text;
//         }
//     }

//     if (shootImage.tooltipText) {
//         shootImage.showTooltip();
//     }
//     else {
//         shootImage.hideTooltip();
//     }
// }

//////////////////////////////////////////////////
/////// time-series chart at the bottom //////////
var chart = container.createChild(am4charts.XYChart);
chart.padding(0, 50, 50, 50);
chart.height = 300;
chart.valign = "bottom";
// background gradient
var gradientFill = new am4core.LinearGradient();
gradientFill.addColor(am4core.color("#000000"), 0, 0);
gradientFill.addColor(am4core.color("#FFB6C1"), 0.5, 0.5);
gradientFill.rotation = 90;
chart.background.fill = gradientFill;

// x axis
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.tooltip.background.pointerLength = 4;
dateAxis.tooltip.background.fillOpacity = 1;
dateAxis.tooltip.background.fill = am4core.color("#666666");
dateAxis.tooltip.background.stroke = dateAxis.tooltip.background.fill;

dateAxis.renderer.inside = true;
dateAxis.renderer.ticks.template.disabled = true;
dateAxis.renderer.grid.template.strokeDasharray = "3,3";
dateAxis.renderer.grid.template.strokeOpacity = 0.2;
dateAxis.renderer.line.disabled = true;
dateAxis.tooltip.dateFormatter.dateFormat = "YYYY";
dateAxis.renderer.inside = false;
dateAxis.renderer.labels.template.fillOpacity = 0.4;
dateAxis.renderer.minLabelPosition = 0.03;
dateAxis.renderer.labels.template.fill = am4core.color("#ffffff");
dateAxis.renderer.grid.template.stroke = am4core.color("#ffffff");

// y axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;
valueAxis.max = 100;
valueAxis.renderer.minGridDistance = 10;
valueAxis.renderer.grid.template.disabled = true;
valueAxis.renderer.line.disabled = true;
valueAxis.tooltip.disabled = true;
valueAxis.strictMinMax = true;
valueAxis.renderer.labels.template.fillOpacity = 0.4;
valueAxis.renderer.labels.template.fill = am4core.color("#ffffff");
valueAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
valueAxis.renderer.inside = true;

var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.valueY = "value";
lineSeries.dataFields.dateX = "year";
lineSeries.tooltipText = "{value}";
lineSeries.stroke = am4core.color("#DB7093");
lineSeries.tooltip.background.fillOpacity = 0;
lineSeries.tooltip.autoTextColor = false;
lineSeries.tooltip.label.fill = am4core.color("#ffffff");
lineSeries.tooltip.filters.clear();
lineSeries.tooltip.pointerOrientation = "vertical";
lineSeries.strokeWidth = 2;
lineSeries.tensionX = 1;
lineSeries.tensionY = 1;


// var negativeRange = valueAxis.createSeriesRange(lineSeries);
// negativeRange.value = 0;
// negativeRange.endValue = - 100;
// negativeRange.contents.stroke = am4core.color("#84279a");
// negativeRange.contents.fill = negativeRange.contents.stroke;

chart.dateFormatter.inputDateFormat = "yyyy-mm-dd";

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.xAxis = dateAxis;
chart.cursor.lineX.strokeOpacity = 0;

chart.events.on("ready", function () {
    createSlider();
})

var slider;

// // var alertStart = dateAxis.axisRanges.create();
// // alertStart.date = new Date(alertTime);
// // alertStart.grid.stroke = am4core.color("#ffffff");
// // alertStart.grid.strokeWidth = 1;
// // alertStart.grid.strokeOpacity = 0.5;
// // alertStart.grid.strokeDasharray = undefined;
// // alertStart.label.text = "Citizens alerted";
// // alertStart.label.horizontalCenter = "right";
// // alertStart.label.fillOpacity = 0.7;
// // alertStart.label.dy = -215;
// // alertStart.label.fill = am4core.color("#FFFFFF");

// // var alertCanceled = dateAxis.axisRanges.create();
// // alertCanceled.date = new Date(cancelTime);
// // alertCanceled.grid.stroke = am4core.color("#ffffff");
// // alertCanceled.grid.strokeOpacity = 0.5;
// // alertCanceled.grid.strokeDasharray = undefined;
// // alertCanceled.label.text = "Alert canceled";
// // alertCanceled.label.dy = -215;
// // alertCanceled.label.fillOpacity = 0.7;
// // alertCanceled.label.horizontalCenter = "left";
// // alertCanceled.label.fill = am4core.color("#FFFFFF");

var playButton;

function createSlider() {
    var sliderContainer = container.createChild(am4core.Container);

    sliderContainer.width = am4core.percent(100);
    sliderContainer.valign = "bottom";
    sliderContainer.padding(0, 50, 25, 50);
    sliderContainer.layout = "horizontal";
    sliderContainer.height = 50;


    playButton = sliderContainer.createChild(am4core.PlayButton);
    playButton.valign = "middle";
    playButton.events.on("toggled", function (event) {
        if (event.target.isActive) {
            play();
        }
        else {
            stop();
        }
    })
    
    slider = sliderContainer.createChild(am4core.Slider);
    slider.valign = "middle";
    slider.margin(0, 0, 0, 0);
    slider.background.opacity = 0.3;
    slider.opacity = 0.7;
    slider.background.fill = am4core.color("#ffffff");
    slider.marginLeft = 30;
    slider.height = 15;
    slider.events.on("rangechanged", function () {
        setTime();
    });

    slider.startGrip.events.on("drag", function () {
        stop();
        sliderAnimation.setProgress(slider.start);
    });

    sliderAnimation = slider.animate({ property: "start", to: 1 }, 50000, am4core.ease.linear).pause();
    sliderAnimation.events.on("animationended", function () {
        playButton.isActive = false;
    })
}

// slider
var sliderAnimation;

function play() {
    if (slider) {
        if (slider.start >= 1) {
            slider.start = 0;
            sliderAnimation.start();
        }
        sliderAnimation.resume();
        playButton.isActive = true;
    }
}

function stop() {
    sliderAnimation.pause();
    playButton.isActive = false;
}

setTimeout(function () {
    play()
}, 2000);



chart.data = [

{ "year": "1970", "value": shoot1970.length },
{ "year": "1971", "value": shoot1971.length },
{ "year": "1972", "value": shoot1972.length },
{ "year": "1973", "value": shoot1973.length },
{ "year": "1974", "value": shoot1974.length },
{ "year": "1975", "value": shoot1975.length },
{ "year": "1976", "value": shoot1976.length },
{ "year": "1977", "value": shoot1977.length },
{ "year": "1978", "value": shoot1978.length },
{ "year": "1979", "value": shoot1979.length },

{ "year": "1980", "value": shoot1980.length },
{ "year": "1981", "value": shoot1981.length },
{ "year": "1982", "value": shoot1982.length },
{ "year": "1983", "value": shoot1983.length },
{ "year": "1984", "value": shoot1984.length },
{ "year": "1985", "value": shoot1985.length },
{ "year": "1986", "value": shoot1986.length },
{ "year": "1987", "value": shoot1987.length },
{ "year": "1988", "value": shoot1988.length },
{ "year": "1989", "value": shoot1989.length },

{ "year": "1990", "value": shoot1990.length },
{ "year": "1991", "value": shoot1991.length },
{ "year": "1992", "value": shoot1992.length },
{ "year": "1993", "value": shoot1993.length },
{ "year": "1994", "value": shoot1994.length },
{ "year": "1995", "value": shoot1995.length },
{ "year": "1996", "value": shoot1996.length },
{ "year": "1997", "value": shoot1997.length },
{ "year": "1998", "value": shoot1998.length },
{ "year": "1999", "value": shoot1999.length },

{ "year": "2000", "value": shoot2000.length },
{ "year": "2001", "value": shoot2001.length },
{ "year": "2002", "value": shoot2002.length },
{ "year": "2003", "value": shoot2003.length },
{ "year": "2004", "value": shoot2004.length },
{ "year": "2005", "value": shoot2005.length },
{ "year": "2006", "value": shoot2006.length },
{ "year": "2007", "value": shoot2007.length },
{ "year": "2008", "value": shoot2008.length },
{ "year": "2009", "value": shoot2009.length },

{ "year": "2010", "value": shoot2010.length },
{ "year": "2011", "value": shoot2011.length },
{ "year": "2012", "value": shoot2012.length },
{ "year": "2013", "value": shoot2013.length },
{ "year": "2014", "value": shoot2014.length },
{ "year": "2015", "value": shoot2015.length },
{ "year": "2016", "value": shoot2016.length },
{ "year": "2017", "value": shoot2017.length },
{ "year": "2018", "value": shoot2018.length },
{ "year": "2019", "value": shoot2019.length },

];


}) // end of d3.json promise

// label for this map and chart
var label = container.createChild(am4core.Label);
label.text = "Year | Team BB4 | Soyoung";
label.valign = "top";
label.padding(0, 50, 10, 0);
label.align = "center";

}); // end am4core.ready()