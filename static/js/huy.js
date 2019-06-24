function buildPlot() {
    /* data route */
  var url = "/plotdata";
  d3.json(url).then(function(response) {

    var data1 = response[0];
     
    var layout = {
      title: {
        text:"Question #2: Do you think we need stricter gun laws?",
        font: {color: "rgba(255,255,255, 1)",
               size: 18}
      },
      xaxis: {
        title: "Voter Sentiment",
        color: "rgba(255,255,255, 1)"
      },
      yaxis: {
        title: "Number of Votes",
        color: "rgba(255,255,255, 1)"
      },
       paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)'
    };

    Plotly.newPlot("huyplot", [data1], layout, {responsive:true});
  });
}




function testPlot() {
    /* data route */
  var url = "/plotdata";
  var option = d3.json(url).then(function(response) {

    var data2 = response[1];

    

    var layout = {
      title: {
        text: "Q2: Do you believe the 2nd Amendment is outdated? ",
        font: {color: "rgba(255,255,255, 1)",
               size: 18}
      },
      xaxis: {
        title: "Voter Sentiment",
        color: "rgba(255,255,255, 1)"
      },
      yaxis: {
        title: "Number of Votes",
        color: "rgba(255,255,255, 1)"
      },
       paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)'
    };
    Plotly.newPlot("huyplot2", [data2], layout, {responsive:true});
  });
}

function getCount(list, prop, value){
        return list.filter(item => item[prop] ===value).length
}

function getAverageAge(list) {
    var sum = 0;
    list.forEach(item => {
        console.log(sum)
        sum = sum + item.age
        
    })
    return Math.floor(sum/list.length)
}

function agePlot(){
    d3.json('/votedata').then((response) =>{
        
   
    var list = response;
   console.log(list)
    
    var averageAge = [getAverageAge(list)]
    
    console.log("this is the average age")
    console.log(averageAge)
    
    var data =  [{
        "x": ["Responses"],
        "y": averageAge,
        "type": "bar"
    }]
    
    var layout = {
      title: {
        text: "Average Pollster Age ",
        font: {color: "rgba(255,255,255, 1)",
               size: 18}
      },
      xaxis: {
        title: "Age",
        color: "rgba(255,255,255, 1)"
      },
      yaxis: {
        title: "",
        color: "rgba(255,255,255, 1)"
      },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)'
};
    console.log(data)
    console.log(layout)
    Plotly.newPlot("huyplot3", data, layout);
});
 };
buildPlot();
testPlot();
agePlot();
