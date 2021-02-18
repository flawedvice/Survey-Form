"use strict";


function show(value) {    // Shows the extra features of each type of website when selected at  "Website Features"
  let id = value;
  let features = document.getElementsByClassName('feature-card');

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
