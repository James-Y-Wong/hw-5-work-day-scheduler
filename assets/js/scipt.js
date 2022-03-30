var dateDisplayEl = $('#currentDay');

var rightNow = moment().format('dddd, MMMM Do');
dateDisplayEl.text(rightNow);