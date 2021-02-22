"use strict";


function show(value) {    // Shows the extra features of each type of website when selected at  "Website Features"
  let id = value;
  let features = document.getElementsByClassName('extra-feature-card');

  for(let i = 0; i < features.length; i++) {
    features[i].style.display = "none";
    let inputs = features[i].getElementsByTagName('input');

    for(let j = 0; j < inputs.length; j++) {
      inputs[j].checked = false;
    }
  }
  let showEl = document.getElementById(id).style.display = "flex";
}



function checkService(){    // Checks which type of service was selected and then changes its colors
  let serviceRadios = document.querySelectorAll('input[name="type-of-service"]');
  let selected;
  let notSelected = [];
  for(const radio of serviceRadios) {     // Selects the checked radio button
    if(radio.checked){
      selected = radio.value;
    } else{
      notSelected.push(radio.value);      // Selects the rest of (unchecked) radio buttons
    }
  }

  for(const card of notSelected){         // Removes the "checked" card colors from the unchecked radio's cards.
    let notSelectedCard = document.getElementById(card).parentElement;
    notSelectedCard.classList.remove("checkedCard");
  }

  let selectedCard = document.getElementById(selected).parentElement;   // Adds the "checked" card colors to the checked radio's card.
  selectedCard.classList.add("checkedCard");
}




let form = document.getElementsByTagName('form')[0];
form.onsubmit = async (event) => {
  event.preventDefault();
  let data = new FormData(form);
  let value = Object.fromEntries(data.entries());
  console.log(value);

  const request = new XMLHttpRequest();

  request.open('POST', 'https://api.clickup.com/api/v2/list/6-11571035-1/task/');
  request.setRequestHeader('Authorization', 'pk_3131202_J2ZVH2UNVJBEXQCOSW3G9GWCBW0331CL');
  request.setRequestHeader('Content-Type', 'application/json');

  request.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 201) {
      console.log('Status:', this.status);
      console.log('Headers', this.getAllResponseHeaders());
      console.log('Body', this.responseText);
    }
  };

  var body = {
    'name': value.name,
    'description': `${value.name} ${value.lastname} solicita un servicio de tipo ${value.type-of-service}
    para construir un sitio ${value.type-of-website} de ${value.number-of-pages} con ${value}`
  }
};
