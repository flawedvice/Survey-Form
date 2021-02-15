"use strict";



function show(value) {
  let id = value;
  let features = document.getElementsByClassName('feature');

  for(let i = 0; i < features.length; i++) {
    features[i].style.display = "none";
    let inputs = features[i].getElementsByTagName('input');

    for(let j = 0; j < inputs.length; j++) {
      inputs[j].checked = false;
    }
  }
  let showEl = document.getElementById(id).style.display = "inline-block";
}
