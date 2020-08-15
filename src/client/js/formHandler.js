const formHandler = async (local, country, dateTrip) => {

    //Check null values
    if(local == ''){
        alert("Default entry at locals, please type a city!");
        throw new Error('default value at local input, formHandle function');
    }

    if(dateTrip == ''){
        alert("Default entry at date trip, please select a date!");
        throw new Error('default value at date trip input, formHandle function');
    }

    if(country == '') {
        alert("Default entry at country, please type a country at ISO 3166-2!");
        throw new Error('default value at country input, formHandle function');
    }
    
    //Calculate days to trip
    const todayDate = new Date();
    const daytrip = new Date(dateTrip);
    const differenceBetweenDates = daytrip.getTime() - todayDate.getTime();

    if(differenceBetweenDates < 0) {
        alert("Invalid date, please use a date after today");
        throw new Error('trip date before today, formHandle function');
    }
    
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const countdownDaysToTrip = Math.ceil(Math.abs(differenceBetweenDates) / millisecondsInDay);
    

    //Call functions
    const data = await Client.geonamesAPI(local, country);
    
    //Case of city not found from geonames 
    // -> use the length of postalCodes to know if exist any entry or not
    if(data.postalCodes.length === 0){
        alert("local not found");
        throw new Error("local not found");
    }

    //Get weather from city
    const weather = await Client.weatherAPI(data.postalCodes[0].lat, data.postalCodes[0].lng );

    //Get picture Url form pixabayAPI
    let picture = await Client.pixabayAPI(local);
    if(picture.hits.length === 0){
        //Try with country
        picture = await Client.pixabayAPI(country);
        if(picture.hits.length === 0){
            alert("Couldn't find a picture of this city and country");
            picture.hits[0].webformatURL = "../images/defaultIMG.png";
            picture.hits[0].tag = "default image";
        }
    }
    
    Client.updateUI(picture, countdownDaysToTrip, weather, dateTrip, local, country);
}

//Event Listener


document.addEventListener('DOMContentLoaded', () => {
    const entry = document.getElementById("submitForm");
    const local = document.getElementById("localholder");
    const country = document.getElementById("countryholder");
    const dateTrip = document.getElementById("dateholder");
    
    //event listeners here

    entry.addEventListener("click", function(event){
        try{
            formHandler(local.value,country.value, dateTrip.value);   
            local.value = '';
            country.value = '';
        }
        catch (e) {
            console.log(e);
        }
        
    });
});
