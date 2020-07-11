const dayArr = ['Sun', 'Mon','Tue','Wed','Thur','Fri','Sat'];

export function dayLoader(){
    let curDate = moment();
    dayTopBar(curDate);
    populateHours();
}

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

function populateHours(){
    const hourBlocks = $('#hour-blocks');
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
        let hourEl=`<div id='hourEl' class='row align-items-center' data-hourVal=${i}>${hour}</div>`;
        hourBlocks.append(hourEl);
    }
}
