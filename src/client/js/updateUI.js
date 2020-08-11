const updateUI = (photoURL, city, country, departureDate, returnDate, totalOfDays, weather) => {
  
  let imgBox = document.createElement('img');
  imgBox.src = photoURL;
  imgBox.alt = "No Alt photo";
  imgBox.className = "img_card";

  let textConteiner = document.createElement('div');
  textConteiner.className = "ct-text";
  //Text conteiner inner html
  let localTravel = document.createElement('h4');
  localTravel.innerHTML = `Travel : ${city}, ${country}`;
  let departureDateTravel = document.createElement('p');
  departureDateTravel.innerHTML = `Departure : ${departureDate}`;
  let returnDateTravel = document.createElement('p');
  returnDateTravel.innerHTML = `Return : ${returnDate}`;
  let daysTraveled = document.createElement('p');
  daysTraveled.innerHTML = `Trip lenght : ${totalOfDays} days`;
  let todayWeather = document.createElement('p');
  todayWeather.innerHTML = `Weather : ${weather}C`;
  
  textConteiner.appendChild(localTravel);
  textConteiner.appendChild(departureDateTravel);
  textConteiner.appendChild(returnDateTravel);
  textConteiner.appendChild(daysTraveled);
  textConteiner.appendChild(todayWeather);

  const ctBox = document.getElementById('ct-box');
  let entryHolder = document.createElement('article');
  entryHolder.className = "entry";
  entryHolder.appendChild(imgBox);
  entryHolder.appendChild(textConteiner);

  ctBox.appendChild(entryHolder);
}

export { updateUI }