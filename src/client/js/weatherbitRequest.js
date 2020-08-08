const weatherAPI = async (lat, lon) => {
    try {
        const res = await fetch(`/weather?lat=${lat}&lon=${lon}`)
        const data = await res.json();
        return data;
      } catch (error){
        console.error("Error at src/client/js/geonamesRequest");
    }
}

export { weatherAPI }