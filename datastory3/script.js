  // height and width of the svg
  var height = 4500,
       width = 800;

  var padding = 50;

  // html element that contains the svg
  var viz = d3.select("#viz-wrapper")
                  .append('svg')
                  .attr('id', 'viz')
                  .attr('height', height)
                  .attr('width', width)


  // Parses csv, and then creates array of circles stored in ITEMS
  // items is d3 selector to refer to all the circles in svg
  d3.csv("guns.csv").then(function(data) {
      items = viz.selectAll('circle')
        .data(data)
        .enter()
      .append('circle')

      // Sets radius of circle, cx (x position), cy (y position)
      // positions are random, for scatterplot
      items.attr('r', 2.5);
      items.attr('cx', function(d) {return Math.random() * ((width-padding) - padding) + padding});
      items.attr('cy', function(d) {return Math.random() * ((height-padding) - padding) + padding});



      // gives all circles within the svg:  class="dots"
      items.classed('dots', true);

    // Adds class based on truthiness of function.
    // functions determine what population based on data
    d3.select("#dotAnimationSuicide").on("click", function() {
      items.classed('highlighted', function(d) {
        if (d.intent == "Suicide") {
          return true;
        } else {
          return false;
        }
      });
    });

    d3.select("#dotAnimationRemoveNonSuicides").on("click", function(d) {
      items.classed('hide', function(d) {
        if (d.intent !== "Suicide") {
          return true;
        } else {
          return false;
        }
      });
      items.classed('highlighted', false);
    });

    d3.select("#dotAnimationSuicideWhiteMale").on("click", function() {
      items.classed('highlighted', function(d) {
        if (d.intent == "Suicide" && d.race == "White" && d.sex == "M") {
          return true;
        } else {
          return false;
        }
      })
    })

    d3.select("#dotAnimationRemoveNonWhiteMaleSuicides").on("click", function() {
      items.classed('hide', function(d) {
        if (!(d.intent == "Suicide" && d.race == "White" && d.sex == "M")) {
          return true;
        } else {
          return false;
        }
      });
      items.classed('highlighted', false);
    })



    d3.select("#dotAnimationSuicideWhiteMaleMiddleAged").on("click", function() {
      items.classed('highlighted', function(d) {
        if (d.intent == "Suicide" && d.race == "White" && d.sex == "M" && ((d.age >= 20) && (d.age <= 59))) {
          return true;
        } else {
          return false;
        }
      })
    })

    d3.select("#dotAnimationHomicide").on("click", function() {
      items.classed('homicide', function(d) {
        if (d.intent == "Homicide") {
          return true;
        } else {
          return false;
        }
      })
    })

    // Removes all classes from circles, resetting to original dots{} csss
    d3.select("#resetButton").on("click", function() {
      items.classed("hide", false);
      items.classed("highlighted", false);
    })
    
});
