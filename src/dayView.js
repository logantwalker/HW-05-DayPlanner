const dayArr = ['Sun', 'Mon','Tue','Wed','Thur','Fri','Sat'];

export function dayLoader(){
    let curDate = moment();
    dayTopBar(curDate);
    populateHours(curDate);
}

function dayTopBar(curDate){
    const hourBlocks = $('#hour-blocks');
    let dateValue = moment(curDate).format('DD')
    let dayValue = moment(curDate).day();
    let day = dayArr[dayValue];
    console.log(day);
}

function populateHours(curDate){
    
    
}
