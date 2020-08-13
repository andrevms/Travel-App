const weatherAPI = async (lat, lon) => {
    try {
        const res = await fetch(`/weather?lat=${lat}&lon=${lon}`)
        const data = await res.json();
        return data;
      } catch (err){
        console.error("Error at src/client/js/weatherRequest");
    }
}

export { weatherAPI }