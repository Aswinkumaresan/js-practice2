let hoursElement = document.getElementById('hours');
let minuteElement = document.getElementById('minute');
let secondsElement =  document.getElementById('seconds');

function currentMoment(){

    //how to get current date & Timestamp
    let timestamp =new Date();
    console.log(timestamp);

    hoursElement.innerHTML = timestamp.getHours();
    minutesElement.innerHTML = timestamp.getMinutes();
    secondsElement.innerHTML = timestamp.getSeconds();



//How to get current year
console.log('Year:' + timestamp.getFullYear());


//How to get current month
console.log('Month:' + timestamp.getFullMonth());

//How to get current Date
console.log('Date:' + timestamp.getFullDate());

//How to get current Hour
console.log('Hour:' + timestamp.getFullHour());

//How to get current Minutes
console.log('Minutes:' + timestamp.getFullMinutes());

//How to get current Seconds
console.log('Seconds:' + timestamp.getFullSeconds());

//How to get current Day
console.log('Day:' + timestamp.getFullDay());

//How to get current Time
console.log('Time:' + timestamp.getFullTime());

}

//currentMoment();
//How to call a function in reglar interval
setInterval(currentMoment,1000);