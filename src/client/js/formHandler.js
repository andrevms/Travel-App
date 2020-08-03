const formHandler = async (input) => {
    //test value
    try{
        if(input === ''){
            throw new Error('default value at input');
        }
        Client.geonamesAPI(input);
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