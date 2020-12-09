let index = Object.keys(localStorage).length;
//key in local storage
let conference = {
groupId:'',
title : 'WhatEver',
start : Date(),
end : '',
assigneeName : 'Yes',
dueDate : '',
taskDetails : '',
taskStatus : ''
}
//Data format in local storage, some props is for full calendar

 

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