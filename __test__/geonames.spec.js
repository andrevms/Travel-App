
// Import the js file to test
import {geonamesAPI} from "../src/client/js/geonamesRequest";
    
describe("Testing the geonamesRequest", () => {  
    
    test("Testing the geonamesRequest function", () => {
           expect(geonamesAPI("Natal","BR").toBeDefined());
    })
});