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

function getCount(list, prop, value, prop2, value2){
        return list.filter(item => item[prop] === value && item[prop2] ===value2 ).length
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

function question1Compare(){
    d3.json('/votedata').then((response) =>{
        
   
    var list = response;
   console.log(list)
    
    var maleYesCountQ1 = getCount(list,'question1','Yes','sex','Male')
     var maleNoCountQ1 = getCount(list,'question1','No','sex','Male')
     var femaleYesCountQ1 = getCount(list,'question1','Yes','sex','Female')
     var femaleNoCountQ1 = getCount(list,'question1','No','sex','Female')
    
   console.log("Males saying Yes count to question 1 is:"+ maleYesCountQ1);
    
    var trace1 =  {
        "x": ["Yes","No"],
        "y": [maleYesCountQ1, maleNoCountQ1],
        "name": "Male",
        "type": "bar"
    };
    
    var trace2 =  {
    "x": ["Yes","No"],
    "y": [femaleYesCountQ1,femaleNoCountQ1],
    "name": "Female",
    "type": "bar"
};
        
    var data =[trace1, trace2];
    
    var layout = {
      title: {
        text: "Question #1",
        font: {color: "rgba(255,255,255, 1)",
               size: 18}
      },
      xaxis: {
        title: "by Sex",
        color: "rgba(255,255,255, 1)"
      },
      yaxis: {
        title: "# of votes",
        color: "rgba(255,255,255, 1)"
      },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        barmode: 'group'
};
    console.log(data)
    console.log(layout)
    Plotly.newPlot("huyplot4", data, layout);
});
 };


function question2Compare(){
    d3.json('/votedata').then((response) =>{
        
   
    var list = response;
   console.log(list)
    
    var maleYesCountQ2 = getCount(list,'question2','Yes','sex','Male')
     var maleNoCountQ2 = getCount(list,'question2','No','sex','Male')
     var femaleYesCountQ2 = getCount(list,'question2','Yes','sex','Female')
     var femaleNoCountQ2 = getCount(list,'question2','No','sex','Female')
    
   console.log(trace1 + trace2);
    
    var trace1 =  {
        "x": ["Yes","No"],
        "y": [maleYesCountQ2, maleNoCountQ2],
        "name": "Male",
        "type": "bar"
    };
    
    var trace2 =  {
    "x": ["Yes","No"],
    "y": [femaleYesCountQ2,femaleNoCountQ2],
    "name": "Female",
    "type": "bar"
};
        
    var data =[trace1, trace2];
    
    var layout = {
      title: {
        text: "Question #2",
        font: {color: "rgba(255,255,255, 1)",
               size: 18}
      },
      xaxis: {
        title: "by Sex",
        color: "rgba(255,255,255, 1)"
      },
      yaxis: {
        title: "# of votes",
        color: "rgba(255,255,255, 1)"
      },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        barmode: 'group'
};
    console.log(data)
    console.log(layout)
    Plotly.newPlot("huyplot5", data, layout);
});
 };
buildPlot();
testPlot();
agePlot();
question1Compare();
question2Compare();
