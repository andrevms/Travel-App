const formHandler = async (value) => {
    try{
        //Testing null value
        if(value === ''){
            throw new Error('default value at input');
        }

        //Slipt values to city & country
        let r = String(value);
        let result = r.split(', ');

        //Call functions
        Client.geonamesAPI(result[0], result[1])
        .then(function(data){
            //Taking first data
            console.log(data.postalCodes[0]);
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