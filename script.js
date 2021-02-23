let wakeuptime = 7;
let noon = 12;
let lunchtime = 12;
let naptime = lunchtime + 2;
let partytime;
let evening = 18;

// Getting it to show the current time on the time
const showCurrentTime = function() 
{

    // display the string on the webpage
    let clock =  document.getElementById('clock');

    let currentetime = new Date();

    let hours = currentetime.getHours();
    let minutes = currentetime.getMinutes();
    let seconds = currentetime.getSeconds();
    let meridian = "AM";

    // Set hours
    if (hours >= noon) // H = 14hr , noon = 12
    {
       meridian = "PM"; // 14PM
    }

    if (hours > noon) // H = 14hr, noon = 12
    {
        hours = hours - 12; // hours = 14 - 12 // hours = 2 
    }

    // Set Minutes
    if (minutes < 10) // < 10 -> 1, 2, 3, 4, 5, 6, 7, 8, 9 
    {
        minutes = "0" + minutes; // -> 01, 02, 03, 04, 05, 06, 07, 08, 09
    }

    // Set Seconds
    if (seconds < 10) // < 10 -> 1, 2, 3, 4, 5, 6, 7, 8, 9
    {
        seconds = "0" = seconds; // -> 01, 02, 03, 04, 05, 06, 07, 08, 09
    }

    // put together the string that display the time
    const clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
};

