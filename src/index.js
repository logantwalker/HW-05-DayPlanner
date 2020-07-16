//rendering the topbar and dayplanner content
import { navIconRender, navMonthRender } from './NavBar.js';
import { dayLoader } from './dayView.js';

navIconRender();
navMonthRender();
dayLoader();

let schedule = JSON.parse(localStorage.getItem('schedule'));
//init function. checking for existing events to render to the page
init();
function init(){
    if(!localStorage.getItem('schedule')){
        schedule = [];
        console.log(schedule);
    }
    else{
        console.log(schedule);
    }
}


//showing the Event Input Form
function showEventInput(){
    $('#eventInput').show('drop',300);
}
$(document).ready(function(){
    $('#hour-content').click(showEventInput);
});

//this event listener and function handle rendering the time select options 
//so that you can't have an event that lasts -1hr or 0hr etc
$('#hour-events').click( event => {
    $('#startSelect').empty();
    $('#endSelect').empty();
    let targ = event.target.getAttribute('data-hourVal');
    hourBlockRender(targ);
});

$('#cancelBtn').click( () => {
    $('#eventInput').hide('drop',300);
    $('#startSelect').empty();
    $('#endSelect').empty();
});


function hourBlockRender(targ){
    let startSelectEl = $('#startSelect');
    targ = parseInt(targ);
    if(targ === 0){
        let startOption = document.createElement('option');
        $(startOption).text(`${targ + 12}:00 AM`);
        $(startOption).attr('value',`${targ}`);
        startSelectEl.append(startOption);
    }
    else if(targ > 0 && targ < 12){
        let startOption = document.createElement('option');
        $(startOption).text(`${targ}:00 AM`);
        $(startOption).attr('value',`${targ}`);
        startSelectEl.append(startOption);
    }
    else if(targ === 12){
        let startOption = document.createElement('option');
        $(startOption).text(`${targ}:00 PM`);
        $(startOption).attr('value',`${targ}`);
        startSelectEl.append(startOption);
    }
    else if(targ > 12 && targ < 24){
        let startOption = document.createElement('option');
        $(startOption).text(`${targ -12}:00 PM`);
        $(startOption).attr('value',`${targ}`);
        startSelectEl.append(startOption);
    }
    
    let endSelectEl = $('#endSelect');
    for (let i=targ+1; i < 24;i++){
        if(i > 12){
            let endOption = document.createElement('option');
            $(endOption).text(`${i -12}:00 PM`);
            $(endOption).attr('value',`${i}`);
            endSelectEl.append(endOption);
        }
        else if(i === 12){
            let endOption = document.createElement('option');
            $(endOption).text(`${i}:00 PM`);
            $(endOption).attr('value',`${i}`);
            endSelectEl.append(endOption);
        }
        else if(i > 0 && i < 12){
            let endOption = document.createElement('option');
            $(endOption).text(`${i}:00 AM`);
            $(endOption).attr('value',`${i}`);
            endSelectEl.append(endOption);
        }
    }
    if(targ === 23){
        let endOption = document.createElement('option');
        $(endOption).text(`12:00 AM`);
        $(endOption).attr('value',`24`);
        endSelectEl.append(endOption);
    }
}

//Rendering the Event and saving it to storage below

class Event{
    constructor(eventTitle,startTime,endTime,description){
        this.title=eventTitle;
        this.startTime = startTime;
        this.endTime = endTime;
        this.description = description;
    }
}
//capturing event data
$('#saveBtn').click(()=>{
    let eventTitle = $("#eventTitleInput").val();
    let startTime = parseInt($("select.startSelect").children('option:selected').val());
    let endTime = parseInt($('select.endSelect').children('option:selected').val());
    let description = $('#eventDescription').val();
    schedule.push(new Event(eventTitle,startTime,endTime,description));
    localStorage.setItem('schedule',JSON.stringify(schedule));

});

// $('select.endSelect').change(initEventBlock);
// function initEventBlock(){
//     let startTimeVal = parseInt($("select.startSelect").children('option:selected').val());
//     let endTimeVal = parseInt($('select.endSelect').children('option:selected').val());
//     let eventBlockHt = endTimeVal - startTimeVal;
    
//     renderEventBlock(startTimeVal,eventBlockHt);
// }


// function renderEventBlock(startTimeVal,eventBlockHt){
//     let eventBlkPixelHt = eventBlockHt*($('#hourBlockContent').innerHeight());
//     let eventContainer = `<div id='eventContainer' class='row z-depth-3'></div>`
//     let eventStartPosition = (24*$('#hourBlockContent').innerHeight()) - (startTimeVal)*($('#hourBlockContent').innerHeight());
//     $('#hour-events').append(eventContainer);
//     $('#eventContainer').css('height',`${eventBlkPixelHt}px`)
//     $('#eventContainer').css('top',`-${eventStartPosition}px`)
// }





