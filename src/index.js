import { navIconRender, navMonthRender } from './NavBar.js';
navIconRender();
navMonthRender();

import { dayLoader } from './dayView.js';
dayLoader();

//data handling
function showInput(){
    $('#eventInput').show('drop');
}
$(document).ready(function(){
    $('#addBtn').click(showInput);
    $('#hour-content').click(showInput);
});





