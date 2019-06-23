var incident_counts = [
  {
    period: "Before School",
    count: 0
  },
  {
    period: "As School is Opening",
    count: 0
  },
  {
    period: "Morning Classes",
    count: 0
  },
  {
    period: "Lunch",
    count: 0
  },
  {
    period: "Afternoon Classes",
    count: 0
  },
  {
    period: "Dismissal",
    count: 0
  },
  {
    period: "After School",
    count: 0
  },
  {
    period: "Evening",
    count: 0
  },
  {
    period: "Night",
    count: 0
  },
  {
    period: "Not a School Day",
    count: 0
  },
  {
    period: "Unknown",
    count: 0
  }
];

const margin = 60;
const width = 1280 - 2 * margin;
const height = 600 - 2 * margin;
const svg = d3.select('svg');

const chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);

// Grabbing our JSON data..
var link = "/jsonShootingData";
d3.json(link, function(error, data) {
  data.forEach(function(d) {
    var key = d["Time Period"];
    incident_counts.forEach(function(item) {
      if (item.period == key) {
        item.count += 1;
      }
    });
  });

  total_counts = incident_counts.reduce(function(total, item) {
    return total + item.count;
  }, 0);

  const yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(incident_counts.map((i) => i.count), function(t) {return t;})]);

  chart.append('g')
    .call(d3.axisLeft(yScale));

  const xScale = d3.scaleBand()
    .range([0, width])
    .domain(incident_counts.map((i) => i.period))
    .padding(0.2);

  chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

  const makeYLines = () => d3.axisLeft()
    .scale(yScale);

  chart.append('g')
    .attr('class', 'grid')
    .call(makeYLines()
      .tickSize(-width, 0, 0)
      .tickFormat(''));

  const barGroups = chart.selectAll()
    .data(incident_counts)
    .enter()
    .append('g');

  barGroups
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (g) => xScale(g.period))
    .attr('y', (g) => yScale(g.count))
    .attr('height', (g) => height - yScale(g.count))
    .attr('width', xScale.bandwidth())
    .on('mouseenter', function (actual, i) {
      d3.selectAll('.value')
        .attr('opacity', 0);

      d3.select(this)
        .transition()
        .duration(300)
        .attr('opacity', 0.6)
        .attr('x', (a) => xScale(a.period) - 5)
        .attr('width', xScale.bandwidth() + 10);

      const y = yScale(actual.count);

      line = chart.append('line')
        .attr('id', 'limit')
        .attr('x1', 0)
        .attr('y1', y)
        .attr('x2', width)
        .attr('y2', y);

      barGroups.append('text')
        .attr('class', 'divergence')
        .attr('x', (a) => xScale(a.period) + xScale.bandwidth() / 2)
        .attr('y', (a) => yScale(a.count) + 30)
        .attr('fill', 'white')
        .attr('text-anchor', 'middle')
        .text((a, idx) => {
          const divergence = (((a.count - actual.count) / total_counts) * 100).toFixed(1);
          
          let text = '';
          if (divergence > 0) text += '+'
            text += `${divergence}%`;

          return idx !== i ? text : '';
        });

      })
      .on('mouseleave', function () {
        d3.selectAll('.value')
          .attr('opacity', 1);

        d3.select(this)
          .transition()
          .duration(300)
          .attr('opacity', 1)
          .attr('x', (a) => xScale(a.period))
          .attr('width', xScale.bandwidth());

        chart.selectAll('#limit').remove();
        chart.selectAll('.divergence').remove();
      });

  barGroups 
    .append('text')
    .attr('class', 'value')
    .attr('x', (a) => xScale(a.period) + xScale.bandwidth() / 2)
    .attr('y', (a) => yScale(a.count) + 30)
    .attr('text-anchor', 'middle')
    .text((a) => `${a.count}`);
  
  svg
    .append('text')
    .attr('class', 'label')
    .attr('x', -(height / 2) - margin)
    .attr('y', margin / 2.4)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('Incident Count');

  svg.append('text')
    .attr('class', 'label')
    .attr('x', width / 2 + margin)
    .attr('y', height + margin * 1.7)
    .attr('text-anchor', 'middle')
    .text('Period');

  svg.append('text')
    .attr('class', 'title')
    .attr('x', width / 2 + margin)
    .attr('y', 40)
    .attr('text-anchor', 'middle')
    .text('Shooting Incident by Periods');

  console.log(incident_counts);
});