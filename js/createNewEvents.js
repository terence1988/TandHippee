let index = 1 ;
//key in local storage
let conference = {
groupId:'',
title : Date(),
start : Date(),
end : '',
taskName : 'WhatEver',
assigneeName : 'Yes',
dueDate : '',
taskDetails : '',
taskStatus : ''
}
//Data format in local storage

 

document.getElementById("addEventButton").onclick = () => {
  let startDate =new Date();
  //console.log(endDate);
  startDate.setDate(startDate.getDate()+index);
  //console.log(endDate);
  conference.start = startDate ; //change of index happen within the fuction so we are actuall assign index for current loop
  window.localStorage.setItem(`${index}`, JSON.stringify(conference));
  index += 1; // index updated for the next loop
  }

  // 