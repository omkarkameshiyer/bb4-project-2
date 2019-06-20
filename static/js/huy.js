function buildPlot() {
    /* data route */
  var url = "/plotdata";
  d3.json(url).then(function(response) {

    console.log(response);

    var data = [response];

    var layout = {
      title: "Question #1 Do you think we need stricter gun laws?",
      xaxis: {
        title: "Voter Sentiment"
      },
      yaxis: {
        title: "Number of Votes"
      }
    };

    Plotly.newPlot("huyplot", data, layout);
  });
}

buildPlot();