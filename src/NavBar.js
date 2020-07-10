//I'm stealing some ideas from google here. You can insert the current date and get an image that corresponds
export function navIconRender() {
    let src = '';
    let currDate = moment().date();

    if (currDate < 10) {
        src = `"http://www.gstatic.com/calendar/images/dynamiclogo/2x/cal_0${currDate}_v2.png#"`;
    }
    else {
        src = `"http://www.gstatic.com/calendar/images/dynamiclogo/2x/cal_${currDate}_v2.png#"`;
    }
    let img= `<img src= ${src} alt='current date'>`;
    $('.navbar').prepend(`<span id='date-icon'>${img}</span>`);
}

export function navMonthRender(){
    let textDisp = moment().format('MMMM YYYY');
    $(".navCurMonth").text(textDisp);
}


