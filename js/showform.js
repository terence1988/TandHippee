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

// strings in setitem can't recover to key ?????? How to construct obj by using just strings?

  // events: [
    //   {
    //     title: 'All Day Event',
    //     start: '2020-11-01'
    //   },
    //   {
    //     title: 'Long Event',
    //     start: '2020-11-07',
    //     end: '2020-11-10'
    //   },
    //   {
    //     groupId: '999',
    //     title: 'Repeating Event',
    //     start: '2020-11-09T16:00:00'
    //   },
    //   {
    //     groupId: '999',
    //     title: 'Repeating Event',
    //     start: '2020-11-16T16:00:00'
    //   },
    //   {
    //     title: 'Conference',
    //     start: '2020-11-11',
    //     end: '2020-11-13'
    //   },
    //   {
    //     title: 'Meeting',
    //     start: '2020-11-12T10:30:00',
    //     end: '2020-11-12T12:30:00'
    //   },
    //   {
    //     title: 'Lunch',
    //     start: '2020-11-12T12:00:00'
    //   },
    //   {
    //     title: 'Meeting',
    //     start: '2020-11-12T14:30:00'
    //   },
    //   {
    //     title: 'Birthday Party',
    //     start: '2020-11-13T07:00:00'
    //   },
    //   {
    //     title: 'Click for Google',
    //     url: 'http://google.com/',
    //     start: '2020-11-28'
    //   }
    // ]
    // code to get events data from localstroage / DB