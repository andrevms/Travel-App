const updateUI = (photoURL, city, country, departure, comingBack) => {
  
  let imgBox = document.createElement('img');
  imgBox.src = photoURL;
  imgBox.alt = "No Alt photo";
  imgBox.className = "img_card";

  let textConteiner = document.createElement('div');
  textConteiner.className = "ct-text";
  //Text conteiner inner html
  let localTravel = document.createElement('h4');
  localTravel.innerHTML = `Travel : ${city}, ${country}`;
  let dateTravel = document.createElement('p');
  dateTravel.innerHTML = `Departure : ${departure}  Return : ${comingBack}`;
  
  textConteiner.appendChild(localTravel);
  textConteiner.appendChild(dateTravel);

  const ctBox = document.getElementById('ct-box');
  let entryHolder = document.createElement('article');
  entryHolder.className = "entry";
  entryHolder.appendChild(imgBox);
  entryHolder.appendChild(textConteiner);

  ctBox.appendChild(entryHolder);
}

export { updateUI }