const geonamesAPI = async (city, country) => {
    try {
        const res = await fetch(`/geonames?city=${city}&country=${country}`)
        const data = await res.json();
        return data;
      } catch (error){
        console.error("Error at src/client/js/geonamesRequest");
    }
}

export { geonamesAPI }