const updateUI = (picture, countdownDaysToTrip, weather, dateTrip, local, country) => {
  
  let imgBox = document.createElement('img');
  imgBox.src = picture.hits[0].webformatURL;
  imgBox.alt = picture.hits[0].tags;
  imgBox.className = "img_card";

  let textConteiner = document.createElement('div');
  textConteiner.className = "ct-text";

  //Text conteiner inner html
  let localTravel = document.createElement('h4');
  localTravel.innerHTML = `Travel : ${local}, ${country}`;

  let departure = document.createElement('h5');
  departure.innerHTML = `Departure : ${dateTrip}`
  
  //Add text header to a div
  let hdTxtCt = document.createElement('div');
  hdTxtCt.appendChild(localTravel);
  hdTxtCt.appendChild(departure);

  //Get total days
  let daysTraveled = document.createElement('p');
  daysTraveled.innerHTML = `Trip lenght : ${countdownDaysToTrip} days`;
  
  //Get weather
  
  let weatherCT = document.createElement('p');
  weatherCT.innerHTML = `Tipical weather for the is :`

  let todayWeather = document.createElement('p');
  todayWeather.innerHTML = `High : ${weather.data[0].app_max_temp} Low : ${weather.data[0].app_min_temp}`;

  let descriptionWeather = document.createElement('p');
  descriptionWeather.innerHTML = `For the day we have some ${weather.data[0].weather.description}`;

  //Append to div weather
  let weatherCTBOX = document.createElement('div');
  weatherCTBOX.appendChild(weatherCT);
  weatherCTBOX.appendChild(todayWeather);
  weatherCTBOX.appendChild(descriptionWeather);


  //Append content to conteiner
  textConteiner.appendChild(hdTxtCt);
  textConteiner.appendChild(daysTraveled);
  textConteiner.appendChild(weatherCTBOX);

  const ctBox = document.getElementById('ct-box');
  let entryHolder = document.createElement('article');

  entryHolder.className = "entry";
  entryHolder.appendChild(imgBox);
  entryHolder.appendChild(textConteiner);

  ctBox.appendChild(entryHolder);
}

export { updateUI }