const pixabayAPI = async (local) => {
    try {
        const res = await fetch(`/pixabay?local=${local}`)
        const data = await res.json();
        return data;
      } catch (error){
        console.error("Error at src/client/js/pixabayRequest");
    }
}

export { pixabayAPI }