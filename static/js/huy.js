function buildPlot() {
    /* data route */
  var url = "/plotdata";
  d3.json(url).then(function(response) {


    console.log("Below is the plotdata object...promise? or actual data?");
    console.log(response);

    var data1 = response[0];
    console.log("Below is Data for Question #1")
    console.log(data1)
    

    var layout = {
      title: "Question #1 Do you think we need stricter gun laws?",
      xaxis: {
        title: "Voter Sentiment"
      },
      yaxis: {
        title: "Number of Votes"
      }
    };

    Plotly.newPlot("huyplot", [data1], layout, {responsive:true});
  });
}




function testPlot() {
    /* data route */
  var url = "/plotdata";
  var option = d3.json(url).then(function(response) {

    console.log(response);

    var data2 = response[1];

    console.log("Below is Data for Question #2")
    console.log(data2)
  

    var layout = {
      title: "Would you like to live in a world where guns did not exist?",
      xaxis: {
        title: "Voter Sentiment"
      },
      yaxis: {
        title: "Number of Votes"
      }
    };
    console.log(layout.title)
    Plotly.newPlot("huyplot2", [data2], layout, {responsive:true});
  });
}

buildPlot();
testPlot();
