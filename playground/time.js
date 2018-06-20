// unix epic Jan 1st 1970 00:00:00 am
var moment = require('moment')
// var date = new Date()
// var months = ['Jan','Feb','March','April','May','June']
// console.log(date.getMonth())

var date = moment();

console.log(date.format('MMM Do, YYYY h:mm a'))

// 13:35