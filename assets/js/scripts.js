// EDAD ///////////////////////
var wh = d3.select("#chart1").node().getBoundingClientRect().width-150;
var chart1 = {
  "width": wh,
  "data": {
    "values": [
      {"Respuesta": "< 15 años","Cantidad": 0},
      {"Respuesta": "15 - 20 años","Cantidad": 1},
      {"Respuesta": "21 - 30 años","Cantidad": 6},
      {"Respuesta": "31 - 40 años","Cantidad": 0},
      {"Respuesta": "41 - 50 años","Cantidad": 0},
      {"Respuesta": "> 50 años","Cantidad": 0}
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

vegaEmbed("#chart1", chart1);
d3.select("#chart1").attr("class","chart");

d3.select("#chart1 div.vega-actions-wrapper").remove();


// SEXO //////////////////////
var wh2 = d3.select("#chart2").node().getBoundingClientRect().width-150;
var chart2 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "Hombre","Cantidad": 5},
      {"Respuesta": "Mujer","Cantidad": 2},
      {"Respuesta": "Otro","Cantidad": 0}
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

vegaEmbed("#chart2", chart2);
d3.select("#chart2").attr("class","chart");

d3.select("#chart2 div.vega-actions-wrapper").remove();

// APPs //////////////////////
var chart3 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "Sí","Cantidad": 6},
      {"Respuesta": "No","Cantidad": 1}
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

vegaEmbed("#chart3", chart3);
d3.select("#chart3").attr("class","chart");

d3.select("#chart3 div.vega-actions-wrapper").remove();

// Residencia //////////////////////
var chart4 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "Teusaquillo","Cantidad": 1},
      {"Respuesta": "Rafael Uribe Uribe","Cantidad": 1},
      {"Respuesta": "Bosa","Cantidad": 1},
      {"Respuesta": "Puente Aranda","Cantidad": 1},
      {"Respuesta": "Chapinero","Cantidad": 1},
      {"Respuesta": "Santa Fe","Cantidad": 1},
      {"Respuesta": "Ns/Nr","Cantidad": 1}
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

vegaEmbed("#chart4", chart4);
d3.select("#chart4").attr("class","chart");

d3.select("#chart4 div.vega-actions-wrapper").remove();

// Estudio/Trabajo //////////////////////
var chart5 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "Chapinero","Cantidad": 1},
      {"Respuesta": "Chicó","Cantidad": 1},
      {"Respuesta": "Fontibón","Cantidad": 2},
      {"Respuesta": "Puente Aranda","Cantidad": 1},
      {"Respuesta": "Santa Fe","Cantidad": 1},
      {"Respuesta": "Ns/Nr","Cantidad": 1}
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

vegaEmbed("#chart5", chart5);
d3.select("#chart5").attr("class","chart");

d3.select("#chart5 div.vega-actions-wrapper").remove();

// T1 Q1 //////////////////////
var chart6 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "Sí","Cantidad": 7},
      {"Respuesta": "No","Cantidad": 0}
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

vegaEmbed("#chart6", chart6);
d3.select("#chart6").attr("class","chart");

d3.select("#chart6 div.vega-actions-wrapper").remove();

// T1 Q2 //////////////////////
var chart7 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "Sí","Cantidad": 7},
      {"Respuesta": "No","Cantidad": 0}
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

vegaEmbed("#chart7", chart7);
d3.select("#chart7").attr("class","chart");

d3.select("#chart7 div.vega-actions-wrapper").remove();

// T1 Q3 //////////////////////
var chart8 = {
  "width": wh,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "Sí","Cantidad": 7},
      {"Respuesta": "No","Cantidad": 0}
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

vegaEmbed("#chart8", chart8);
d3.select("#chart8").attr("class","chart");

d3.select("#chart8 div.vega-actions-wrapper").remove();

// T1 Q4 //////////////////////
var chart9 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "Correcto","Cantidad": 7},
      {"Respuesta": "Incorrecto","Cantidad": 0}
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

vegaEmbed("#chart9", chart9);
d3.select("#chart9").attr("class","chart");

d3.select("#chart9 div.vega-actions-wrapper").remove();

// T1 Q5 //////////////////////
var chart10 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "Correcto","Cantidad": 5},
      {"Respuesta": "Incorrecto","Cantidad": 2}
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

vegaEmbed("#chart10", chart10);
d3.select("#chart10").attr("class","chart");

d3.select("#chart10 div.vega-actions-wrapper").remove();

// T1 Q6 //////////////////////
var chart11 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "Correcto","Cantidad": 7},
      {"Respuesta": "Incorrecto","Cantidad": 0}
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

vegaEmbed("#chart11", chart11);
d3.select("#chart11").attr("class","chart");
d3.select("#chart11 div.vega-actions-wrapper").remove();

// T1 Q7 //////////////////////
var chart12 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "Correcto","Cantidad": 6},
      {"Respuesta": "Incorrecto","Cantidad": 1}
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

vegaEmbed("#chart12", chart12);
d3.select("#chart12").attr("class","chart");
d3.select("#chart12 div.vega-actions-wrapper").remove();

// T1 Q8 //////////////////////
var chart13 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "Correcto","Cantidad": 7},
      {"Respuesta": "Incorrecto","Cantidad": 0}
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

vegaEmbed("#chart13", chart13);
d3.select("#chart13").attr("class","chart");
d3.select("#chart13 div.vega-actions-wrapper").remove();

// T1 Q9 //////////////////////
var chart14 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "Correcto","Cantidad": 7},
      {"Respuesta": "Incorrecto","Cantidad": 0}
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

vegaEmbed("#chart14", chart14);
d3.select("#chart14").attr("class","chart");
d3.select("#chart14 div.vega-actions-wrapper").remove();

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

// T2 Q1 //////////////////////
var chart17 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "Sí","Cantidad": 7},
      {"Respuesta": "No","Cantidad": 0}
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

vegaEmbed("#chart17", chart17);
d3.select("#chart17").attr("class","chart");
d3.select("#chart17 div.vega-actions-wrapper").remove();

// T2 Q2 //////////////////////
var chart18 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "Sí","Cantidad": 6},
      {"Respuesta": "No","Cantidad": 1}
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

vegaEmbed("#chart18", chart18);
d3.select("#chart18").attr("class","chart");
d3.select("#chart18 div.vega-actions-wrapper").remove();

// T2 Q3 //////////////////////
var chart19 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "Sí","Cantidad": 5},
      {"Respuesta": "No","Cantidad": 2}
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

vegaEmbed("#chart19", chart19);
d3.select("#chart19").attr("class","chart");
d3.select("#chart19 div.vega-actions-wrapper").remove();

// T2 Q4 //////////////////////
var chart20 = {
  "width": wh2,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "Sí","Cantidad": 5},
      {"Respuesta": "No","Cantidad": 2}
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

vegaEmbed("#chart20", chart20);
d3.select("#chart20").attr("class","chart");
d3.select("#chart20 div.vega-actions-wrapper").remove();

// T2 Q5 //////////////////////
var chart21 = {
  "width": wh,
  "height": wh2,
  "data": {
    "values": [
      {"Respuesta": "Sí","Cantidad": 5},
      {"Respuesta": "No","Cantidad": 2}
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

vegaEmbed("#chart21", chart21);
d3.select("#chart21").attr("class","chart");
d3.select("#chart21 div.vega-actions-wrapper").remove();

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