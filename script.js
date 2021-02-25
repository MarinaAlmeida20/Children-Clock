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
        seconds = "0" + seconds; // -> 01, 02, 03, 04, 05, 06, 07, 08, 09
    }

    // put together the string that display the time
    const clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
};

// Getting the clock to increment on its own and change out messages and pictures

let updateClock = function ()
{
    let time = new Date().getHours();
    let messageText;
    let image = 
    'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

    let timeEventJS = document.getElementById("timeEvent");
    let lolkidsImageJS = document.getElementById('lolkidsImage');

    if (time == partytime)
    {
        image = 
        "https://images.pexels.com/photos/1049622/pexels-photo-1049622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        messageText = "Let's Party";
    } 
    else if (time == wakeuptime)
    {
        image = 
        "https://images.pexels.com/photos/796606/pexels-photo-796606.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        messageText = "Wake up";
    }
    else if (time == naptime)
    {
        image = 
        "https://images.pexels.com/photos/1438504/pexels-photo-1438504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        messageText = "Sleep tight!"
    }
    else if (time < noon)
    {
        image = 
        "https://images.pexels.com/photos/585759/pexels-photo-585759.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        messageText = "Good Morning!"
    }
    else
    {
        image =
        "https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
        messageText = "Good afternoon!"
    }

    console.log(messageText);
    timeEventJS.innerHTML = messageText;
    lolkidsImage.src = image;

    showCurrentTime();
};

updateClock();

// Getting the clock to increment once a second
let oneSecond = 1000;
setInterval( updateClock, oneSecond);

// Getting the Party Time Button to Work
let partyButton = 
document.getElementById("partyTimeButton");

let partyEvent = function()
{
    if(partytime < 0)
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222"
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

// Activates Wake-Up selector
let wakeUpTimeSelector = 
  document.getElementById("wakeUpTimeSelector");

let wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// Activates Lunch selector
let lunchTimeSelector = 
 document.getElementById("lunchTimeSelector");

let lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

// Activates Nap-Time selector
let napTimeSelector = 
  document.getElementById("napTimeSelector");

let napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);