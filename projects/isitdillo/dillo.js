$(document).ready(function() {

    checkDate();
  
});

function checkDate() {

    var rightNow = Date();

    dateSplit = rightNow.split(' ');

    if (dateSplit[1] == "May" && dateSplit[2] == "30" && dateSplit[3] == "2015") {
        $('#mainText').text('YES');
    }
    else {
        $('#mainText').text('NO :(');
    }
}