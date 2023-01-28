var data = require("./data.json");
const fs = require('fs');

//Marks item as found
function markFound(travellerKey, lostItem) {
    if(data.Travellers[travellerKey] && data.Travellers[travellerKey]['lost-items'][lostItem]){
      data.Travellers[travellerKey]['lost-items'][lostItem]['status'] = 1;
      fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
    }
    else
      console.log("Could not find this specific username or item");
}

//// markFound(data, 'hma12', 'Laptop');

//Entering lost item
function enterItem(username, item, description, location, image) {
    data["Travellers"][username]["lost-items"][item] = {"description": description, "location": location, "image": image, "status": 0};
    
    var dataText = JSON.stringify(data, null, 2);

    fs.writeFile("data.json", dataText, err => {
        if (err) throw err; 
   
    });
}

//enterItem("hma12", "Airpods", "White airpods with pink case", "Customs", "img");