$('#calendar').fullCalendar({

  eventSources: [

    // your event source
    {
      events: [ // put the array in the `events` property
        {
          title  : 'event1',
          start  : '2010-01-01'
        },
        {
          title  : 'event2',
          start  : '2010-01-05',
          end    : '2010-01-07'
        },
        {
          title  : 'event3',
          start  : '2010-01-09T12:30:00',
        }
      ],
      color: 'black',     // an option!
      textColor: 'yellow' // an option!
    }

    // any other event sources...

  ]

});



// var calendar = new Calendar(calendarEl, {
//   events: [
//     { // this object will be "parsed" into an Event Object
//       title: 'The Title', // a property!
//       start: '2018-09-01', // a property!
//       end: '2018-09-02' // a property! ** see important note below about 'end' **
//     }
//   ]
// })