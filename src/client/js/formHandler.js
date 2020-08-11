const { updateUI } = require("./updateUI");

const formHandler = async (value) => {
    try{
        //Testing null value
        if(value === ''){
            throw new Error('default value at input');
        }

        //Slipt values to city= result(0) & country= result(1)
        let r = String(value);
        let result = r.split(', ');

        //date departure and return
        const departureDate = new Date(result[2]);
        const returnDate = new Date(result[3]);

        const diff = Math.abs(departureDate.getTime() - returnDate.getTime()); 
        const totalOfDays = Math.ceil(diff / (1000 * 60 * 60 * 24));

        //Call functions
        const pictureURL = await Client.pixabayAPI(result[0]);
        // console.log( pictureURL.hits[0].webformatURL);
        
        const data = await Client.geonamesAPI(result[0], result[1]);
        //Getting weather info
        const lat = String(data.postalCodes[0].lat);
        const lng = String(data.postalCodes[0].lng);
        const weather = await Client.weatherAPI(lat, lng );
        //weather temp --> console.log(w.data[0].app_temp);

        Client.updateUI(
                        pictureURL.hits[0].webformatURL,
                        result[0],
                        result[1],
                        departureDate.toDateString(),
                        returnDate.toDateString(),
                        totalOfDays,
                        weather.data[0].app_temp
                    );

    }catch(e) {
        console.error(e);
    }
}

//Event Listener
let input = document.getElementById("placehold");
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger functions
      formHandler(input.value);
      // Change back to default value
      input.value = '';
    }
});