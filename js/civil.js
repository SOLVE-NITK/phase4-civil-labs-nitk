let labs = [
    { 
    labName: "Mining Environmental Lab", 
    experiments: [
        {id: "Vane Anemometer", path: "http://vlabs.iitb.ac.in/vlabs-dev/labs/nitk_labs/mining-enviornment/labs/vane-anemometer-nitk/index.html"},
        {id: "Determination of Relative Humidity of Assman Psychrometer", path: "http://vlabs.iitb.ac.in/vlabs-dev/labs/nitk_labs/mining-enviornment/labs/assman-psychrometer-nitk/index.html"},
        {id: "Determination of Relative Humidity of Whirling Hygrometer", path: "http://vlabs.iitb.ac.in/vlabs-dev/labs/nitk_labs/mining-enviornment/labs/whirling-hygrometer-nitk/index.html"}]   
    },
    { 
    labName: "Geo Technical Engineering Lab", 
    experiments: [
        {id: "Standard Proctor test", path: "geo_technical/exp-standard-proctor-test"},
        {id: "Liquid limit and plastic limit", path: "geo_technical/exp-liquid-limit-and-plastic-limit"},
        {id: "Dry density by core cutter method", path: "geo_technical/exp-standard-proctor-test"}]   
    },
    { 
        labName: "Ground Water Engineering Lab", 
        experiments: [
            {id: "Georesistivity test", path: "ground_water/Georesistivity-test-nitk"},
            {id: "Percolation rate test", path: "ground_water/Percolation-rate-test-nitk"},
            {id: "Determination of the Transmissivity of an Aquifer Soil", path: "ground_water/Transmissivity-of-an-aquifer"}]    
    },
    { 
        labName: "Remote Sensing and GIS Lab", 
        experiments: [
            {id: "Cartography", path: "remote_sensing/exp-cartography"},
            {id: "Geo Reference", path: "remote_sensing/exp-geo-reference"},
            {id: "Leaf Area Index", path: "remote_sensing/exp-leaf-area-index"}]    
    },
    { 
        labName: "Physical Metallurgy Lab", 
        experiments: [
            {id: "Microstructural analysis of stainless steels", path: "http://vlabs.iitb.ac.in/vlabs-dev/labs/nitk_labs/physical-metallurgy/labs/microstructural-analysis-nitk/index.html"},
            {id: "Comparison between mild steel and grey cast iron", path: "http://vlabs.iitb.ac.in/vlabs-dev/labs/nitk_labs/physical-metallurgy/labs/mildsteel-castiron-nitk/index.html"},
            {id: "Severity of quenching", path: "http://vlabs.iitb.ac.in/vlabs-dev/labs/nitk_labs/physical-metallurgy/labs/quenching-severity-nitk/index.html"}]    
    },
    // { 
    //     labName: "Engineering Mechanics", 
    //     experiments: [
    //         {id: "Experiment 1", path: "../EngineeringMechanics/experiment1/index.html"},
    //         {id: "Experiment 2", path: "../EngineeringMechanics/experiment1/index.html"},
    //         {id: "Experiment 3", path: "../EngineeringMechanics/experiment1/index.html"}]
    // },
]

let labList = "";
let experimentList = "";
labs.forEach((lab)=>{
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
    `
});

function getExperimentList(experiments){
    experiments.forEach(function(expt){
        experimentList+= `
        <button onclick="location.href='${expt.path}'"class="btn btn-outline-primary m-2 p-2">${expt.id}</button>
        `
    });
    return experimentList;
    
} 

document.getElementById("labCards").innerHTML = labList;