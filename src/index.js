
const pojo = require('../data');
let data = pojo();
//  

let svg = d3.select("svg");
let width = document.body.clientWidth; // get width in pixels
let height = +svg.attr("height");
// let height = document.body.clientHeight;
let centerX = width * 0.5;
let centerY = height * 0.5;
let strength = 0.05;
let focusedNode;


let scaleColor = d3.scaleOrdinal([
  `#353544`,
  `#98A5A5`,
  `#D5786F`,
  `#B8B8C1`,
  `#9B6079`,
  `#5D7177`,
  `#424751`,
  `#949396`,
  `#4C4B63`
]);

// use pack to calculate radius of the circle
let pack = d3
  .pack()
  .size([width, height])
  .padding(2.0);

let forceCollide = d3.forceCollide(d => d.r + 1);

// use the force
let simulation = d3
  .forceSimulation()
  .force("charge", d3.forceManyBody())
  .force("collide", forceCollide)
  .force("x", d3.forceX(centerX).strength(strength))
  .force("y", d3.forceY(centerY).strength(strength));

// reduce number of circles on mobile screen due to slow computation
if (
  "matchMedia" in window &&
  window.matchMedia("(max-device-width: 767px)").matches
) {
  data = data.filter(el => {
    return el.value >= 50;
  });
}

let root = d3.hierarchy({ children: data }).sum(d => d.value);

// we use pack() to automatically calculate radius conveniently only
// and get only the leaves
let nodes = pack(root)
  .leaves()
  .map(node => {
    console.log("node:", node.x, (node.x - centerX) * 2);
    const data = node.data;
    return {
      x: centerX + (node.x - centerX) * 3, // magnify start position to have transition to center movement
      y: centerY + (node.y - centerY) * 3,
      r: 0, // for tweening
      radius: node.r, //original radius
      id: data.cat,
      cat: data.cat,
      name: data.name,
      value: data.value,
      icon: data.icon,
      desc: data.desc,
      link: data.link,
      linkUrl: data.linkUrl
    };
  });
simulation.nodes(nodes).on("tick", ticked);

// svg.style("background-color", "#eee");
let node = svg
  .selectAll(".node")
  .data(nodes)
  .enter()
  .append("g")
  .attr("class", "node")
  .call(
    d3
      .drag()
      .on("start", d => {
        if (!d3.event.active) simulation.alphaTarget(0.2).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", d => {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      })
      .on("end", d => {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      })
  );

node
  .append("circle")
  // .attr("id", d => d.id)
  .attr("r", 0)
  .style("fill", d => scaleColor(d.cat))
  .attr("id", d => d.cat)
  .style("opacity", 0.7)
  .transition()
  .duration(2000) // 3000??
  .ease(d3.easeElasticOut)
  .tween("circleIn", d => {
    let i = d3.interpolateNumber(0, d.radius);
    return t => {
      d.r = i(t);
      simulation.force("collide", forceCollide);
    };
  });

node
  .append("clipPath")
  .attr("id", d => `clip-${d.id}`)
  .append("use")
  .attr("xlink:href", d => `#${d.id}`);

// display text as circle icon
node
  .filter(d => !String(d.icon).includes("img/"))
  .append("text")
  .classed("node-icon", true)
  .attr("clip-path", d => `url(#clip-${d.id})`)
  .selectAll("tspan")
  .data(d => d.icon.split(';')) // Comment Out ??? Purpose
  .enter()
// .append("tspan")
// .attr("x", 0)
// .attr("y", (d, i, nodes) => 13 + (i - nodes.length / 2 - 0.5) * 10)
// .text(name => name);

// display image as circle icon
node
  .filter(d => String(d.icon).includes("img/"))
  .append("image")
  .classed("node-icon", true)
  .attr("clip-path", d => `url(#clip-${d.id})`)
  .attr("xlink:href", d => d.icon)
  .attr("x", d => -d.radius * 0.7)
  .attr("y", d => -d.radius * 0.7)
  .attr("height", d => d.radius * 2 * 0.7)
  .attr("width", d => d.radius * 2 * 0.7);

// node.append("title").text(d => d.cat + "::" + d.name + "\n" + format(d.value));

let legendOrdinal = d3
  .legendColor()
  .scale(scaleColor)
  .shape("circle");

let legend = svg
  .append("g")
  .classed("legend-color", true)
  .attr("text-anchor", "start")
  .attr("transform", "translate(20,30)")
  .style("font-size", "18px")
  // .style("color", "white")
  .style("fill", "#B9CCCC")
  .style("cursor", 'pointer')
  .call(legendOrdinal)

let sizeScale = d3
  .scaleOrdinal()
  .domain(["less use", "more use"])
  .range([5, 10]);

let legendSize = d3
  .legendSize()
  .scale(sizeScale)
  .shape("circle")
  .shapePadding(10)
  .labelAlign("end");

let legend2 = svg
  .append("g")
  .classed("legend-size", true)
  .attr("text-anchor", "start")
  .attr("transform", "translate(150, 25)")
  .style("font-size", "15px")
  .style("fill", "#B9CCCC")

  .call(legendSize);

let infoBox = node
  .append("foreignObject")
  .classed("circle-overlay hidden", true)
  .attr("x", -350 * 0.5 * 0.8)
  .attr("y", -350 * 0.5 * 0.8)
  .attr("height", 350 * 0.8)
  .attr("width", 350 * 0.8)
  .append("xhtml:div")
  .classed("circle-overlay__inner", true);

infoBox
  .append("h2")
  .classed("circle-overlay__title", true)
  .text(d => d.name);

infoBox
  .append("p")
  .classed("circle-overlay__body", true)
  .html(d => d.desc);

infoBox
  .append("a")
  .attr("href", d => d.linkUrl)
  .classed("circle-overlay__body", true)
  .attr("target", "_blank")
  .html(d => d.link);

// ---------------------------------------------


node.on("click", currentNode => {
  d3.event.stopPropagation();

  let currentTarget = d3.event.currentTarget; // the <g> el

  if (currentNode === focusedNode) {
    return;
  }

  let lastNode = focusedNode;
  focusedNode = currentNode;

  simulation.alphaTarget(0.2).restart();
  // hide all circle-overlay
  d3.selectAll(".circle-overlay").classed("hidden", true);
  d3.selectAll(".node-icon").classed("node-icon--faded", false);

  // don't fix last node to center anymore
  if (lastNode) {
    lastNode.fx = null;
    lastNode.fy = null;
    node
      .filter((d, i) => i === lastNode.index)
      .transition()
      .duration(2000)
      .ease(d3.easePolyOut)
      .tween("circleOut", () => {
        let irl = d3.interpolateNumber(lastNode.r, lastNode.radius);
        return t => {
          lastNode.r = irl(t);
        };
      })
      .on("interrupt", () => {
        lastNode.r = lastNode.radius;
      });
  }

  // if (!d3.event.active) simulation.alphaTarget(0.5).restart();

  d3.transition()
    .duration(2000)
    .ease(d3.easePolyOut)
    .tween("moveIn", () => {
      console.log("tweenMoveIn", currentNode);
      let ix = d3.interpolateNumber(currentNode.x, centerX);
      let iy = d3.interpolateNumber(currentNode.y, centerY);
      let ir = d3.interpolateNumber(currentNode.r, centerY * 0.5);
      return function (t) {
        currentNode.fx = ix(t);
        currentNode.fy = iy(t);
        currentNode.r = ir(t);
        simulation.force("collide", forceCollide);
      };
    })
    .on("end", () => {
      simulation.alphaTarget(0);
      let $currentGroup = d3.select(currentTarget);
      $currentGroup.select(".circle-overlay").classed("hidden", false);
      $currentGroup.select(".node-icon").classed("node-icon--faded", true);
    })
  // .on("interrupt", () => {
  //   console.log("move interrupt", currentNode);
  //   currentNode.fx = null;
  //   currentNode.fy = null;
  //   simulation.alphaTarget(0);
  // });
});

// blur
d3.select(document).on("click", () => {
  let target = d3.event.target;


  // check if click on document but not on the circle overlay
  if (!target.closest("#circle-overlay") && focusedNode) {
    focusedNode.fx = null;
    focusedNode.fy = null;
    simulation.alphaTarget(0.2).restart();
    d3.transition()
      .duration(2000)
      .ease(d3.easePolyOut)
      .tween("moveOut", function () {
        console.log("tweenMoveOut", focusedNode);
        let ir = d3.interpolateNumber(focusedNode.r, focusedNode.radius);
        return function (t) {
          focusedNode.r = ir(t);
          simulation.force("collide", forceCollide);
        };
      })
      .on("end", () => {
        focusedNode = null;
        simulation.alphaTarget(0);
      })
    // .on("interrupt", () => {
    //   simulation.alphaTarget(0);
    // });

    // hide all circle-overlay
    d3.selectAll(".circle-overlay").classed("hidden", true);
    d3.selectAll(".node-icon").classed("node-icon--faded", false)
      .classed("node-icon--faded", false)
      .style("opacity", 1);
  }
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".legendCells > g:first-child").forEach((el, idx) => {
    el.setAttribute('id', el.textContent)
  });
})

// document.addEventListener('DOMContentLoaded', () => {

//   document.querySelectorAll(".legendCells > g").forEach( (el) => {
//     el.onclick = function () {
//       node.filter(function (d) {
//         return d.id === el.id
//       }).style("opacity", 1)
//     }
//   });
// })



document.addEventListener('DOMContentLoaded', () => {
  var clicked = false;

  document.querySelectorAll(".legendCells > g:first-child").forEach((el) => {
    el.onclick = function () {

      node.filter(function (d) {
        return d.id !== el.id
      }).style("opacity", 0.1)

      node.filter(function (d) {
        return d.id === el.id
      }).style("opacity", 1)

      clicked = true;
    }
  });
})


function ticked() {
  node
    .attr("transform", d => `translate(${d.x},${d.y})`)
    .select("circle")
    .attr("r", d => d.r);
}

///// MODAL DRAFT 

document.addEventListener("DOMContentLoaded", () => {
  let modalBtn = document.getElementById("top-left");
  let modal = document.querySelector(".modal");

  modalBtn.onclick = function () {
    if (modal.style.display === 'block') {
      modal.style.display = "none";
    } else if (modal.style.display === "none") {
        modal.style.display = "block"
    };
  };

  modal.onclick = function(e) {
    if (modal.style.display) {
      modal.style.display = "none";
    }
  }
  modal.style.display = "block";
})

///////

// INCORPORATE THE RENERING OF THE AXIOS CALL here
// axios.get(`/players`)
//   .then((res) => {
//     console.log(res.data.api)
//     return res.data.api;
//   })
//   .then(data => {

//     console.log(data.players);
//     let playersIndex = "";
//     data.players.forEach(player => {
//       let name = `<div class="p-index-item" id="player-${player.playerId}">${player.lastName}, ${player.firstName}</div>`
//       playersIndex = playersIndex.concat(name);
//     })
//     this.container.innerHTML = `${playersIndex}`;
//   })


