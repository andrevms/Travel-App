const geonamesAPI = async (city) => {
    const res = await fetch(`/geonames?city=${city}`)
    try {
        console.log("Esperando Data");
        //const data = await res.json();
        console.log(res);
        return res;
      } catch (error){
        console.log(error);
    }
}

export { geonamesAPI }