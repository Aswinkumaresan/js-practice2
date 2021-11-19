//      let hoursElement = document.getElementById('hours');
// let minuteElement = document.getElementById('minute');
// let secondsElement =  document.getElementById('seconds');

// function currentMoment(){

//     //how to get current date & Timestamp
//     let timestamp =new Date();
//     console.log(timestamp);

//     hoursElement.innerHTML = timestamp.getHours();
//     minutesElement.innerHTML = timestamp.getMinutes();
//     secondsElement.innerHTML = timestamp.getSeconds();

// //How to get current year
// console.log('Year:' + timestamp.getFullYear());

// //How to get current month
// console.log('Month:' + timestamp.getFullMonth());

// //How to get current Date
// console.log('Date:' + timestamp.getFullDate());

// //How to get current Hour
// console.log('Hour:' + timestamp.getFullHour());

// //How to get current Minutes
// console.log('Minutes:' + timestamp.getFullMinutes());

// //How to get current Seconds
// console.log('Seconds:' + timestamp.getFullSeconds());

// //How to get current Day
// console.log('Day:' + timestamp.getFullDay());

// //How to get current Time
// console.log('Time:' + timestamp.getFullTime());

// }

// //currentMoment();
// //How to call a function in reglar interval

let hoursElement = document.getElementById("hours");
let minuteElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");

// how to get current Date and time

function currentMoment() {
  let timestamp = new Date();
  console.log(currentTime);

  hoursElement.innerHTML = currentTime.getHours();
  minuteElement.innerHTML = currentTime.getMinutes();
  secondsElement.innerHTML = currentTime.getSeconds();

  //how to get current Year
  console.log("Year:" + currentTime.getFullYear());
  //how to get current Month
  console.log("Month:" + currentTime.getMonth());

  //how to get current Date
  console.log("Date:" + currentTime.getDate());
  //how to get current Day
  console.log("Day:" + currentTime.getDay());
  //how to get current hours
  console.log("Hours:" + currentTime.getHours());
  //how to get current Minutes
  console.log(" Miutes:" + currentTime.getMinutes());
  //how to get current Seconds
  console.log("Seconds:" + currentTime.getSeconds());
  //how to get current currentTime
  console.log(" Time:" + currentTime.getTime());
}
//How to call the function in regular interval
// currentMoment();
function targetDate() {
  let targetdate = new Date(2022, 01, 01, 08, 30);
  console.log(targetDate);

  //how to get current Year
  console.log("Year:" + targetDate.getFullYear());
  //how to get current Month
  console.log("Month:" + targetDate.getMonth());

  //how to get current Date
  console.log("Date:" + targetDate.getDate());
  //how to get current Day
  console.log("Day:" + targetDate.getDay());
  //how to get current hours
  console.log("Hours:" + targetDate.getHours());
  //how to get current Minutes
  console.log(" Miutes:" + targetDate.getMinutes());
  //how to get current Seconds
  console.log("Seconds:" + targetDate.getSeconds());
  //how to get current targetDate

  console.log(" Time:" + targetDate.getTime());
}



// setInterval(currentMoment,1000);
