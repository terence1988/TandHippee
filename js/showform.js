let count = Math.floor((Math.random() * localStorage.length + 1));
console.log(count);
let value = JSON.parse(window.localStorage.getItem(count)); //count / key to getItem


document.getElementById("readEventButton").onclick = () => {
  console.log (value);
  }
;

function allStorage() {
  var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;  
  while ( i-- ) {
      values = localStorage.getItem(keys[i]);
  }
      return values;
}

let eventss =JSON.parse(allStorage());