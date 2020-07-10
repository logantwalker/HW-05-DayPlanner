export function renderDates(){
    
    monthGrid();
    populateDates();
}

function monthGrid() {
    let windowHt = $(window).height()
    let weekHt = windowHt/5.5;
    for(let i=0; i<7; i++){
        let dayW1 = `<div class='col mvDiv' id='week-day' data-weekday='${i}'></div>`;
        $('#w1').append(dayW1);
    }
    for(let i=0; i<7; i++){
        let dayW2 = `<div class='col mvDiv' id='week-day' data-weekday='${i}'></div>`;
        $('#w2').append(dayW2);
    }
    for(let i=0; i<7; i++){
        let dayW3 = `<div class='col mvDiv' id='week-day' data-weekday='${i}'></div>`;
        $('#w3').append(dayW3);
    }
    for(let i=0; i<7; i++){
        let dayW4 = `<div class='col mvDiv' id='week-day' data-weekday='${i}'></div>`;
        $('#w4').append(dayW4);
    }
    for(let i=0; i<7; i++){
        let dayW5 = `<div class='col mvDiv' id='week-day' data-weekday='${i}'></div>`;
        $('#w5').append(dayW5);
    }
    $('.mvDiv').css('height',`${weekHt}`);
}

function populateDates(){
    let curDate = moment().format('M Y');
    console.log(curDate);
    curDate = curDate.split(' ');
    let curMonth = curDate[0];
    let curYear = curDate[1];

    //first day of the current month
    let initialIndex = moment(`${curYear}-${curMonth}-01`).weekday();
    let initialDate = moment(`${curYear}-${curMonth}-01`);

    let wk1d1 = moment(initialDate).subtract(initialIndex,'days');
    let wk2d1 = moment(wk1d1).add(7,'days');
    let wk3d1 = moment(wk2d1).add(7,'days');
    let wk4d1 = moment(wk3d1).add(7,'days');
    let wk5d1 = moment(wk4d1).add(7,'days');

    console.log(initialDate.format('MM DD YY'))
    console.log(wk1d1.format('MM DD YY'));
    

    let w1 = $('#w1').children('.mvDiv');
    let w2 = $('#w2').children('.mvDiv');
    let w3 = $('#w3').children('.mvDiv');
    let w4 = $('#w4').children('.mvDiv');
    let w5 = $('#w5').children('.mvDiv');

    

    //rendering the week1 dates
    for(let i=0; i<7; i++){
        
        if(i === 0){
            let dateEl = wk1d1.format('DD');
            w1[0].append(dateEl);
        }
        else{
            let dateVal = moment(wk1d1).add(i,'days');
            if(i === initialIndex){
                let dateEl = dateVal.format('MMM D');
                w1[i].append(dateEl);
            }
            else{
                let dateEl = dateVal.format('D');
                w1[i].append(dateEl);
            }
        }
    }
    //rendering the week2 dates
    for(let i=0; i<7; i++){
        
        if(i === 0){
            let dateEl = wk2d1.format('D');
            w2[0].append(dateEl);
        }
        else{
            let dateVal = moment(wk2d1).add(i,'days');
            let dateEl = dateVal.format('D');
            w2[i].append(dateEl);
        }
    }
    //rendering the week3 dates
    for(let i=0; i<7; i++){
        
        if(i === 0){
            let dateEl = wk3d1.format('D');
            w3[0].append(dateEl);
        }
        else{
            let dateVal = moment(wk3d1).add(i,'days');
            let dateEl = dateVal.format('D');
            w3[i].append(dateEl);
        }
    }
    //rendering the week4 dates
    for(let i=0; i<7; i++){
        
        if(i === 0){
            let dateEl = wk4d1.format('D');
            w4[0].append(dateEl);
        }
        else{
            let dateVal = moment(wk4d1).add(i,'days');
            let dateEl = dateVal.format('D');
            w4[i].append(dateEl);
        }
    }
    //rendering the week5 dates
    for(let i=0; i<7; i++){
        
        if(i === 0){
            let dateEl = wk5d1.format('D');
            w5[0].append(dateEl);
        }
        else{
            let dateVal = moment(wk5d1).add(i,'days');
            if(dateVal.format('D') === '1'){
                let dateEl = dateVal.format('MMM D');
                w5[i].append(dateEl);
            }
            else{
                let dateEl = dateVal.format('D');
                w5[i].append(dateEl);
            }
        }

    }
}
