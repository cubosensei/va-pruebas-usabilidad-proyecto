
var wh2 = d3.select("#chart15").node().getBoundingClientRect().width-150;

// T1 Q10 //////////////////////
var chart15 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "1","Cantidad": 0},
      {"Respuesta": "2","Cantidad": 0},
      {"Respuesta": "3","Cantidad": 1},
      {"Respuesta": "4","Cantidad": 1},
      {"Respuesta": "5","Cantidad": 5}
    ]
  },
  "encoding": {
    "x": {"field": "Respuesta", "type": "nominal"},
    "y": {"field": "Cantidad", "type": "quantitative"},
    "color": {"field": "Respuesta", "type": "nominal"}
  },
  "layer": [{
    "mark": "bar"
  }, {
    "mark": {
      "type": "text",
      "align": "center",
      "baseline": "middle",
      "dy": -5
    },
    "encoding": {
      "text": {"field": "Cantidad", "type": "quantitative"}
    }
  }]
}

vegaEmbed("#chart15", chart15);
d3.select("#chart15").attr("class","chart");
d3.select("#chart15 div.vega-actions-wrapper").remove();

// T1 Q11 //////////////////////
var chart16 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "1","Cantidad": 0},
      {"Respuesta": "2","Cantidad": 0},
      {"Respuesta": "3","Cantidad": 1},
      {"Respuesta": "4","Cantidad": 2},
      {"Respuesta": "5","Cantidad": 4}
    ]
  },
  "encoding": {
    "x": {"field": "Respuesta", "type": "nominal"},
    "y": {"field": "Cantidad", "type": "quantitative"},
    "color": {"field": "Respuesta", "type": "nominal"}
  },
  "layer": [{
    "mark": "bar"
  }, {
    "mark": {
      "type": "text",
      "align": "center",
      "baseline": "middle",
      "dy": -5
    },
    "encoding": {
      "text": {"field": "Cantidad", "type": "quantitative"}
    }
  }]
}

vegaEmbed("#chart16", chart16);
d3.select("#chart16").attr("class","chart");
d3.select("#chart16 div.vega-actions-wrapper").remove();

// T2 Q6 //////////////////////
var chart22 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "1","Cantidad": 0},
      {"Respuesta": "2","Cantidad": 1},
      {"Respuesta": "3","Cantidad": 0},
      {"Respuesta": "4","Cantidad": 2},
      {"Respuesta": "5","Cantidad": 4}
    ]
  },
  "encoding": {
    "x": {"field": "Respuesta", "type": "nominal"},
    "y": {"field": "Cantidad", "type": "quantitative"},
    "color": {"field": "Respuesta", "type": "nominal"}
  },
  "layer": [{
    "mark": "bar"
  }, {
    "mark": {
      "type": "text",
      "align": "center",
      "baseline": "middle",
      "dy": -5
    },
    "encoding": {
      "text": {"field": "Cantidad", "type": "quantitative"}
    }
  }]
}

vegaEmbed("#chart22", chart22);
d3.select("#chart22").attr("class","chart");
d3.select("#chart22 div.vega-actions-wrapper").remove();

// T2 Q7 //////////////////////
var chart23 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "1","Cantidad": 0},
      {"Respuesta": "2","Cantidad": 1},
      {"Respuesta": "3","Cantidad": 0},
      {"Respuesta": "4","Cantidad": 2},
      {"Respuesta": "5","Cantidad": 4}
    ]
  },
  "encoding": {
    "x": {"field": "Respuesta", "type": "nominal"},
    "y": {"field": "Cantidad", "type": "quantitative"},
    "color": {"field": "Respuesta", "type": "nominal"}
  },
  "layer": [{
    "mark": "bar"
  }, {
    "mark": {
      "type": "text",
      "align": "center",
      "baseline": "middle",
      "dy": -5
    },
    "encoding": {
      "text": {"field": "Cantidad", "type": "quantitative"}
    }
  }]
}

vegaEmbed("#chart23", chart23);
d3.select("#chart23").attr("class","chart");
d3.select("#chart23 div.vega-actions-wrapper").remove();

// T2 Q8 //////////////////////
var chart24 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "1","Cantidad": 0},
      {"Respuesta": "2","Cantidad": 2},
      {"Respuesta": "3","Cantidad": 1},
      {"Respuesta": "4","Cantidad": 1},
      {"Respuesta": "5","Cantidad": 3}
    ]
  },
  "encoding": {
    "x": {"field": "Respuesta", "type": "nominal"},
    "y": {"field": "Cantidad", "type": "quantitative"},
    "color": {"field": "Respuesta", "type": "nominal"}
  },
  "layer": [{
    "mark": "bar"
  }, {
    "mark": {
      "type": "text",
      "align": "center",
      "baseline": "middle",
      "dy": -5
    },
    "encoding": {
      "text": {"field": "Cantidad", "type": "quantitative"}
    }
  }]
}

vegaEmbed("#chart24", chart24);
d3.select("#chart24").attr("class","chart");
d3.select("#chart24 div.vega-actions-wrapper").remove();

// T2 Q9 //////////////////////
var chart25 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "1","Cantidad": 0},
      {"Respuesta": "2","Cantidad": 1},
      {"Respuesta": "3","Cantidad": 2},
      {"Respuesta": "4","Cantidad": 1},
      {"Respuesta": "5","Cantidad": 3}
    ]
  },
  "encoding": {
    "x": {"field": "Respuesta", "type": "nominal"},
    "y": {"field": "Cantidad", "type": "quantitative"},
    "color": {"field": "Respuesta", "type": "nominal"}
  },
  "layer": [{
    "mark": "bar"
  }, {
    "mark": {
      "type": "text",
      "align": "center",
      "baseline": "middle",
      "dy": -5
    },
    "encoding": {
      "text": {"field": "Cantidad", "type": "quantitative"}
    }
  }]
}

vegaEmbed("#chart25", chart25);
d3.select("#chart25").attr("class","chart");
d3.select("#chart25 div.vega-actions-wrapper").remove();