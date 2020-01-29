 let data = [
   {
     cat: "Industrials",
     name: "3M Co",
     value: 30,
     icon: "img/3m.png",
     desc: `
        3M Co. is a technology company, which manufactures industrial, safety and consumer products
			`
   },
   {
     cat: "financials",
     name: "AMEX",
     value: 10,
     icon: "img/amex.svg",
     desc: `
        American Express Co. engages in the provision of charge
         and credit card products, and travel-related services.
			`
   },
   {
     cat: "technology",
     name: "Apple",
     value: 10,
     icon: "img/apple.png",
     desc: `
      Apple, Inc. engages in the design, manufacture, and sale of smartphones, personal 
      computers, tablets, wearables and accessories, and other variety of related services. 
			`
   },
   {
     cat: "technology",
     name: "Boeing",
     value: 10,
     icon: "img/boeing.png",
     desc: `
        The Boeing Co. is an aerospace company, which engages in the manufacture of 
        commercial jetliners and defense, space and security systems. 
			`
   },
   {
     cat: "industrial",
     name: "Caterpillar",
     value: 10,
     icon: "img/cat.jpeg",
     desc: `
        Caterpillar, Inc. engages in the manufacture of construction and mining equipment, 
        diesel and natural gas engines, industrial gas turbines, and diesel-electric locomotives.
			`
   },
   {
     cat: "energy",
     name: "Chevron",
     value: 10,
     icon: "img/chevron.png",
     desc: `
        Chevron Corp. engages in the provision of administrative, financial management, 
        and technology support for energy and chemical operations.
			`
   },
   {
     cat: "technology",
     name: "Cisco",
     value: 10,
     icon: "img/cisco.png",
     desc: `
        Cisco Systems, Inc. engages in the design, manufacture, and sale of Internet 
        Protocol based networking products and services related to the communications and information technology industry.
			`
   },
   {
     cat: "consumer staples",
     name: "Coca-Cola",
     value: 10,
     icon: "img/coke.png",
     desc: `
        The Coca-Cola Company is an American multinational corporation, and manufacturer, 
        retailer, and marketer of nonalcoholic beverage concentrates and syrups.
			`
   },
   {
     cat: "consumer discretionary",
     name: "Disney",
     value: 10,
     icon: "img/disney.png",
     desc: `
        The Walt Disney Company, commonly known as Disney, is an American diversified multinational mass 
        media and entertainment conglomerate headquartered at the Walt Disney Studios complex in Burbank, California.
			`
   },
   {
     cat: "industrial",
     name: "Dow Chemical",
     value: 10,
     icon: "img/dow.png",
     desc: `
        Dow, Inc. materials science company, combining science and technology to develop innovative solutions. 
			`
   },
   {
     cat: "energy",
     name: "Exxon Mobil Corp",
     value: 10,
     icon: "img/exxon.png",
     desc: `
        Exxon Mobil Corp. engages in the exploration, development, and distribution of oil, gas, and petroleum products.
			`
   },
   {
     cat: "financials",
     name: "Goldman Sachs",
     value: 10,
     icon: "img/goldman.png",
     desc: `
        Goldman Sachs Group, Inc. engages in global investment banking, securities, and investment management, which provides financial services.
			`
   },
   {
     cat: "technology",
     name: "IBM",
     value: 10,
     icon: "img/ibm.png",
     desc: `
        International Business Machines Corp. is an information technology company, 
        which provides integrated solutions that leverage information technology and knowledge of business processes.
			`
   },
   {
     cat: "technology",
     name: "Intel",
     value: 10,
     icon: "img/intel.png",
     desc: `
       Intel Corp. engages in the design, manufacture, and sale of computer products and 
       technologies. It delivers computer, networking, data storage, and communications platforms. 
			`
   },
   //////////////
   {
     cat: "consumer",
     name: "Johnson & Johnson",
     value: 10,
     icon: "img/johnson.png",
     desc: `
       Johnson & Johnson is a holding company, which engages in the research and development, 
       manufacture and sale of products in the health care field.  
			`
   },
   {
     cat: "financials",
     name: "JPMorgan Chase",
     value: 10,
     icon: "img/jpmorgan.png",
     desc: `
       Intel Corp. engages in the design, manufacture, and sale of computer products and 
       technologies. It delivers computer, networking, data storage, and communications platforms. 
			`
   },
   {
     cat: "technology",
     name: "McDonald",
     value: 10,
     icon: "img/mcdonald.png",
     desc: `
       Intel Corp. engages in the design, manufacture, and sale of computer products and 
       technologies. It delivers computer, networking, data storage, and communications platforms. 
			`
   },
   {
     cat: "technology",
     name: "Merck",
     value: 10,
     icon: "img/merck.png",
     desc: `
       Intel Corp. engages in the design, manufacture, and sale of computer products and 
       technologies. It delivers computer, networking, data storage, and communications platforms. 
      ` 
   },
   {
     cat: "technology",
     name: "Microsoft",
     value: 10,
     icon: "img/microsoft.png",
     desc: `
       Intel Corp. engages in the design, manufacture, and sale of computer products and 
       technologies. It delivers computer, networking, data storage, and communications platforms. 
			`
   },
   {
     cat: "technology",
     name: "Nike",
     value: 10,
     icon: "img/nike.png",
     desc: `
       Intel Corp. engages in the design, manufacture, and sale of computer products and 
       technologies. It delivers computer, networking, data storage, and communications platforms. 
			`
   },
   {
     cat: "technology",
     name: "Pfizer",
     value: 10,
     icon: "img/pfizer.png",
     desc: `
       Intel Corp. engages in the design, manufacture, and sale of computer products and 
       technologies. It delivers computer, networking, data storage, and communications platforms. 
			`
   },
   {
     cat: "technology",
     name: "Proctor & Gamble",
     value: 10,
     icon: "img/gamble.png",
     desc: `
       Intel Corp. engages in the design, manufacture, and sale of computer products and 
       technologies. It delivers computer, networking, data storage, and communications platforms. 
			`
   },
   {
     cat: "financials",
     name: "Travelers Companies Inc",
     value: 10,
     icon: "img/intel.png",
     desc: `
       The Travelers Cos., Inc. is a holding company, which engages in the provision 
       of commercial and personal property and casualty insurance products and services.
			`
   },
   {
     cat: "technology",
     name: "United Technologies",
     value: 10,
     icon: "img/intel.png",
     desc: `
       Intel Corp. engages in the design, manufacture, and sale of computer products and 
       technologies. It delivers computer, networking, data storage, and communications platforms. 
			`
   },
   {
     cat: "healthcare",
     name: "UnitedHealth",
     value: 10,
     icon: "img/unitedhealth.png",
     desc: `
       UnitedHealth Group, Inc. engages in the provision of health care coverage, software, and data consultancy services. 
			`
   },
   {
     cat: "technology",
     name: "Verizon",
     value: 10,
     icon: "img/verizon.png",
     desc: `
       Verizon Communications, Inc. is a holding company, which engages in the provision communications, 
       information and entertainment products and services to consumers, businesses and governmental agencies. 
			`
   },
   {
     cat: "financials",
     name: "Visa",
     value: 10,
     icon: "img/visa.png",
     desc: `
       Visa, Inc. engages in the provision of digital payment services. It also facilitates global commerce through the transfer of value 
       and information among global network of consumers, merchants, financial institutions, businesses, strategic partners, and government entities.
			`
   },
   {
     cat: "Consumer Discretionary",
     name: "Wal-mart",
     value: 10,
     icon: "img/walmart.png",
     desc: `
       Walmart, Inc. engages in retail and wholesale business. The Company offers 
       an assortment of merchandise and services at everyday low prices. 
			`
   },
   {
     cat: "consumer discretionary",
     name: "Walgreens",
     value: 10,
     icon: "img/walgreens.png",
     desc: `
       Walgreens Boots Alliance, Inc. engages in the provision of drug store services. 
			
   },
 ];

let svg = d3.select("svg");
let width = document.body.clientWidth; // get width in pixels
let height = +svg.attr("height");
let centerX = width * 0.5;
let centerY = height * 0.5;
let strength = 0.05;
let focusedNode;

let format = d3.format(",d");

let scaleColor = d3.scaleOrdinal(d3.schemeCategory20);

// use pack to calculate radius of the circle
let pack = d3
  .pack()
  .size([width, height])
  .padding(1.5);

let forceCollide = d3.forceCollide(d => d.r + 1);

// use the force
let simulation = d3
  .forceSimulation()
  // .force('link', d3.forceLink().id(d => d.id))
  .force("charge", d3.forceManyBody())
  .force("collide", forceCollide)
  // .force('center', d3.forceCenter(centerX, centerY))
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
      id: data.cat + "." + data.name.replace(/\s/g, "-"),
      cat: data.cat,
      name: data.name,
      value: data.value,
      icon: data.icon,
      desc: data.desc
    };
  });
simulation.nodes(nodes).on("tick", ticked);

svg.style("background-color", "#eee");
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
  .attr("id", d => d.id)
  .attr("r", 0)
  .style("fill", d => scaleColor(d.cat))
  .transition()
  .duration(2000)
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
  // .data(d => d.icon.split(';'))
  .enter()
  .append("tspan")
  .attr("x", 0)
  .attr("y", (d, i, nodes) => 13 + (i - nodes.length / 2 - 0.5) * 10)
  .text(name => name);

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

node.append("title").text(d => d.cat + "::" + d.name + "\n" + format(d.value));

let legendOrdinal = d3
  .legendColor()
  .scale(scaleColor)
  .shape("circle");

let legend = svg
  .append("g")
  .classed("legend-color", true)
  .attr("text-anchor", "start")
  .attr("transform", "translate(20,30)")
  .style("font-size", "12px")
  .call(legendOrdinal);

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
  .style("font-size", "12px")
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

node.on("click", currentNode => {
  d3.event.stopPropagation();
  console.log("currentNode", currentNode);
  let currentTarget = d3.event.currentTarget; // the <g> el

  if (currentNode === focusedNode) {
    // no focusedNode or same focused node is clicked
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
      return function(t) {
        // console.log('i', ix(t), iy(t));
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
    .on("interrupt", () => {
      console.log("move interrupt", currentNode);
      currentNode.fx = null;
      currentNode.fy = null;
      simulation.alphaTarget(0);
    });
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
      .tween("moveOut", function() {
        console.log("tweenMoveOut", focusedNode);
        let ir = d3.interpolateNumber(focusedNode.r, focusedNode.radius);
        return function(t) {
          focusedNode.r = ir(t);
          simulation.force("collide", forceCollide);
        };
      })
      .on("end", () => {
        focusedNode = null;
        simulation.alphaTarget(0);
      })
      .on("interrupt", () => {
        simulation.alphaTarget(0);
      });

    // hide all circle-overlay
    d3.selectAll(".circle-overlay").classed("hidden", true);
    d3.selectAll(".node-icon").classed("node-icon--faded", false);
  }
});

function ticked() {
  node
    .attr("transform", d => `translate(${d.x},${d.y})`)
    .select("circle")
    .attr("r", d => d.r);
}


///////

// INCORPORATE THE RENERING OF THE AXIOS CALL here