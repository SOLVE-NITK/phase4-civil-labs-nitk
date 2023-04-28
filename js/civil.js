let labs = [
  {
    labName: "Mining Environmental Lab",
    experiments: [
      {
        id: "Vane Anemometer",
        // path: "http://vlabs.iitb.ac.in/vlabs-dev/labs/nitk_labs/mining-enviornment/labs/vane-anemometer-nitk/index.html",
        path: "mining_environment/Air-Velocity-using-Vane-Anemometer-nitk/index.html",
      },
      {
        id: "Determination of Relative Humidity of Assman Psychrometer",
        // path: "http://vlabs.iitb.ac.in/vlabs-dev/labs/nitk_labs/mining-enviornment/labs/assman-psychrometer-nitk/index.html",
        path: "mining_environment/exp2/relative-humidity-using-assman-psychrometer-nitk/index.html",
      },
      {
        id: "Determination of Relative Humidity of Whirling Hygrometer",
        // path: "http://vlabs.iitb.ac.in/vlabs-dev/labs/nitk_labs/mining-enviornment/labs/whirling-hygrometer-nitk/index.html",
        path: "mining_environment/exp2/relative-humidity-using-whirling-hygrometer-nitk/index.html",
      },
      {
        id: "Determination of Air Velocity in the Ventilation Duct",
        path: "mining_environment/exp-air-velocity-in-ventilation-duct",
      },
      {
        id: "Determination of Resistance and K – Factor in the Ventilation Duct",
        path: "mining_environment/exp-k-factor-ventilation-duct-nitk",
      },
      {
        id: "To verify the Law of the Resistance of a System of Ducts connected in Series",
        path: "mining_environment/exp-law-of-resistance-of-system-of-ducts-nitk",
      },
      {
        id: "Determination of Shock Loss Factor for a Right Angled Bend in the Ventilation Duct",
        path: "mining_environment/exp-shock-loss-factor-for-a-right-angled-bend-nitk",
      },
      {
        id: "Determination of Shock Loss Factor for a U Bend in a Ventilation Duct",
        path: "mining_environment/exp-shock-loss-factor-for-U-bend-nitk",
      },
      {
        id: "Study of Characteristics Curve of a Backward Bladed Centrifugal Fan",
        path: "mining_environment/exp-backward-bladed-centrifugal-fan-nitk",
      },
      {
        id: "Study of Characteristics Curve of Backward Bladed Axial Fan",
        path: "mining_environment/exp-backward-bladed-axial-fan-nitk",
      },
    ],
  },
  {
    labName: "Geo Technical Engineering Lab",
    experiments: [
      {
        id: "Standard Proctor test",
        path: "geo_technical/exp-standard-proctor-test",
      },
      {
        id: "Liquid limit and plastic limit",
        path: "geo_technical/exp-liquid-limit-and-plastic-limit",
      },
      {
        id: "Dry density by core cutter method",
        path: "geo_technical/exp-standard-proctor-test",
      },
    ],
  },
  {
    labName: "Ground Water Engineering Lab",
    experiments: [
      {
        id: "Georesistivity test",
        path: "ground_water/Georesistivity-test-nitk",
      },
      {
        id: "Percolation rate test",
        path: "ground_water/Percolation-rate-test-nitk",
      },
      {
        id: "Determination of the Transmissivity of an Aquifer Soil",
        path: "ground_water/Transmissivity-of-an-aquifer",
      },
    ],
  },
  {
    labName: "Remote Sensing and GIS Lab",
    experiments: [
      { id: "Cartography", path: "remote_sensing/exp-cartography" },
      { id: "Geo Reference", path: "remote_sensing/exp-geo-reference" },
      { id: "Leaf Area Index", path: "remote_sensing/exp-leaf-area-index" },
    ],
  },
  {
    labName: "Physical Metallurgy Lab",
    experiments: [
      {
        id: "Microstructural analysis of stainless steels",
        path: "http://vlabs.iitb.ac.in/vlabs-dev/labs/nitk_labs/physical-metallurgy/labs/microstructural-analysis-nitk/index.html",
      },
      {
        id: "Comparison between mild steel and grey cast iron",
        path: "http://vlabs.iitb.ac.in/vlabs-dev/labs/nitk_labs/physical-metallurgy/labs/mildsteel-castiron-nitk/index.html",
      },
      {
        id: "Severity of quenching",
        path: "http://vlabs.iitb.ac.in/vlabs-dev/labs/nitk_labs/physical-metallurgy/labs/quenching-severity-nitk/index.html",
      },
      {
        id: "Grain Size Measurement",
        path: "physicalMetallurgy/exp-grain-size-measuremnt/index.html",
      },
      {
        id: "Optical Microscopy of Non Ferrous Samples",
        path: "physicalMetallurgy/exp-optical-microscopy/index.html",
      },
      {
        id: "Determination of Crystall Structure of a Powder Sample by X-RAY Diffractometer",
        path: "physicalMetallurgy/exp-crystal-structure/index.html",
      },
    ],
  },
  // {
  //     labName: "Engineering Mechanics",
  //     experiments: [
  //         {id: "Experiment 1", path: "../EngineeringMechanics/experiment1/index.html"},
  //         {id: "Experiment 2", path: "../EngineeringMechanics/experiment1/index.html"},
  //         {id: "Experiment 3", path: "../EngineeringMechanics/experiment1/index.html"}]
  // },
];

let labList = "";
let experimentList = "";
labs.forEach((lab) => {
  experimentList = "";
  getExperimentList(lab.experiments);
  labList += `
    <div class="card col-md-3 m-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${lab.labName}</h5>
            <p class="card-text">List of Experiments</p>
            ${experimentList}
        </div>
    </div> 
    `;
});

function getExperimentList(experiments) {
  experiments.forEach(function (expt) {
    experimentList += `
        <button onclick="location.href='${expt.path}'"class="btn btn-outline-primary m-2 p-2">${expt.id}</button>
        `;
  });
  return experimentList;
}

document.getElementById("labCards").innerHTML = labList;
