let index = 1 ;
//key in local storage
let person = {
groupId :'',
title : 'Meeting',
start : Date(),
end : '2020-11-15T16:30:00',
taskName : 'WhatEver',
assigneeName : 'Yes',
dueDate : '',
taskDetails : '',
taskStatus : ''
}
//Data format in local storage

console.log (person.end);


document.getElementById("addEventButton").onclick = () => {
  person.end = index; //change of index happen within the fuction so we are actuall assign index for current loop
  window.localStorage.setItem(`${index}`, JSON.stringify(person));
  index += 1; // index updated for the next loop
  }

  // 