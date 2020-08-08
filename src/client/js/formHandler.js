const formHandler = async (value) => {
    try{
        //Testing null value
        if(value === ''){
            throw new Error('default value at input');
        }

        //Slipt values to city= result(0) & country= result(1)
        let r = String(value);
        let result = r.split(', ');

        //Call functions
        //const picture = Client.pixabay(city);
        Client.geonamesAPI(result[0], result[1])
        .then(async (data) => {
            //Getting weather info
            const lat = String(data.postalCodes[0].lat)
            const lng = String(data.postalCodes[0].lng)
            const w = await Client.weatherAPI(lat, lng );
            console.log(w.data[0].app_temp);

            //getting 
        })

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