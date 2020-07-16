const dayArr = ['Sun', 'Mon','Tue','Wed','Thur','Fri','Sat'];

export function dayLoader(){
    let curDate = moment();
    dayTopBar(curDate);
    populateHours();
}

//renders the current date at the top of the page
function dayTopBar(curDate){
    const dateHead = $("#date-header");

    let dateValue = moment(curDate).format('DD')
    let dayValue = moment(curDate).day();
    let day = dayArr[dayValue];

    let dayEl = `<div id='dayEl' class='row'>${day}</div>`;
    let dateEl = `<div id='dateEl' class='row'>${dateValue}</div>`;

    dateHead.append(dayEl);
    dateHead.append(dateEl);
}

//adds the hour blocks to the hour-content div
function populateHours(){
    const hourBlocks = $('#hour-blocks');
    const blockEvent = $("#hour-events")
    let hour;
    for(let i = 0; i < 24 ; i++){
       if(i===0){
           hour='12 AM';
       }
       if(i!==0 && i < 12){
           hour = `${i} AM`;
       }
       else if(i===12){
        hour = `12 PM`;
        }
       else if(i!==0 && i > 12){
           hour = `${i-12} PM`;
        }
        let hourEl=`<div id='hourEl' class='row align-items-center justify-content-center ${i}' data-hourVal=${i}>${hour}</div>`;
        let blockEl=`<div id='hourBlockContent' class='row align-items-center justify-content-center ${i}' data-hourVal=${i}></div>`;

        blockEvent.append(blockEl);
        hourBlocks.append(hourEl);
    }
    hourBlockPos();
    colorCode();
}

//this function sets the #hour-content div to be at the 9am block when loading the page
function hourBlockPos(){
    let blockHt = $('#hourBlockContent').innerHeight();
    let scrollPos = Math.floor(blockHt*9) + 10;
    $('#hour-content').scrollTop(Math.ceil(scrollPos));
}

//color coding to blocks show past,present,future
function colorCode(){
    let curHour = moment().hour();
    for(let i = 0; i < 24; i++){
        if(i<curHour){
            $(`#hour-events .${i}`).css('background-color','#c0c0c0');
        }
        else if(i === curHour){
            $(`#hour-events .${i}`).css('border','2px solid #2296F3');
            $(`#hour-events .${i}`).css('border-left','0px');
            $(`#hour-blocks .${i}`).css('border','2px solid #2296F3');
            $(`#hour-blocks .${i}`).css('color','#2296F3');
        }
    }
}

