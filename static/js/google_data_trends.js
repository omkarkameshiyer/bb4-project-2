var ar15 = [];
var gunControl = [];
var schoolShooting = [];
var labels = [];
var count = [];
var schoolShootingDataAfter2003 = [];
var labelsurlSchoolShootingDataAfter2003 = [];


function getDataFromGoogle() {
    var urlAr15 = "/google/multiTimelineAr15";
    d3.json(urlAr15, function(json) {
        var countLocal = 0
        json.forEach(function(item, index) {
            ar15.push(item.Data)
            labels.push(item.Month)
            count.push(countLocal)
            countLocal = countLocal + 1
        });

    });
    var urlGunControl = "/google/multiTimelineGunControl";
    d3.json(urlGunControl, function(json) {
        json.forEach(function(item, index) {
            gunControl.push(item.Data);
            labels.push(item.Month);
        });

        console.log("loading.....")
        console.log("loading.....")
    });
    var urlSchoolShooting = "/google/multiTimelineSchoolShooting";
    d3.json(urlSchoolShooting, function(json) {
        json.forEach(function(item, index) {
            schoolShooting.push(item.Data)
            labels.push(item.Month)
        });
        console.log("loading.....")
    });

    var urlSchoolShootingDataAfter2003 = "/google/schoolShootingAfter2004";
    d3.json(urlSchoolShootingDataAfter2003, function(json) {
        json.forEach(function(item, index) {
            schoolShootingDataAfter2003.push(item.Killed)
            labelsurlSchoolShootingDataAfter2003.push(item.Date)
        });
        console.log("loading data from school data.....")
    });
}

function plot_Trends_google() {
    googlePlots();
    plotShootingDataAfter2003();
};

function plotShootingDataAfter2003() {
    var schoolSchootingData = {
        x: labelsurlSchoolShootingDataAfter2003,
        y: schoolShootingDataAfter2003,
        mode: 'markers',
        type: 'scatter',
        name: 'Data School Shooting ',
    };
    Plotly.newPlot('oiyer-4', [schoolSchootingData], { showlegend: true });
}

function googlePlots() {
    var AR15 = {
        y: ar15,
        x: labels,
        type: 'scatter',
        name: 'AR -15 ',
    };
    var GunControl = {
        y: gunControl,
        x: labels,
        type: 'scatter',
        name: 'Gun Control ',
    };
    var SchoolShooting = {
        y: schoolShooting,
        x: labels,
        type: 'scatter',
        name: 'School Shooting ',
    };
    var data = [AR15, GunControl, SchoolShooting];
    Plotly.newPlot('oiyer', data, { showlegend: true });
}