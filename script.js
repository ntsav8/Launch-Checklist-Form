// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      let pilotNameInput = document.querySelector("input[name= pilotName]");
      let copilotNameInput = document.querySelector("input[name = copilotName]");
      let fuelLevelInput = document.querySelector("input[name = fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");

      checkAllFields();

      function checkAllFields() {
         if (pilotNameInput.value === "" ||
            copilotNameInput.value === "" || 
            fuelLevelInput.value === "" || 
            cargoMassInput.value === "") {
            alert("All fields required");
            event.preventDefault();
            event.stopPropagation();
         } else if (!(isNaN(pilotNameInput.value)) || (!(isNaN(copilotNameInput.value)))) {
            alert("Please check that you put in a proper name");
            event.preventDefault();
            event.stopPropagation();
         } else if ((isNaN(fuelLevelInput.value)) || ((isNaN(cargoMassInput.value)))) {
            alert("Please enter numbers only");
            event.preventDefault();
            event.stopPropagation();      
         } else {
            faultyItems.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for takeoff.`
            copilotStatus.innerHTML = `Copilot ${copilotNameInput.value} is ready for takeoff.`
            let validTakeoff = true;
            
            
            if (fuelLevelInput.value < 10000) {
               fuelStatus.innerHTML = `There is not enough fuel for the journey!`;
               validTakeoff = false;
               
            } else {
               fuelStatus.innerHTML = `Fuel level high enough for journey`;
              
            }

            if (cargoMassInput.value > 10000) {
               cargoStatus.innerHTML = `There is too much mass for the shuttle to take off`;
               validTakeoff = false;

            } else {
               cargoStatus.innerHTML = `Cargo mass is low enough for journey`;
               
            }

         if (validTakeoff) {

            launchStatus.innerHTML= `Ready for takeoff!`;
            launchStatus.style.color = "green";
         } else {
            launchStatus.innerHTML = `Shuttle not ready for takeoff!`
            launchStatus.style.color = "red";
         }
               event.preventDefault();
            }
            }
         }); 
     
  
 

fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
   response.json().then( function(json){
      let missionTarget = document.querySelector("#missionTarget");
      index = 5;
      
      missionTarget.innerHTML = `
   
      <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}"></img>`

   })  

});

});
  

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
