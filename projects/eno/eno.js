$(document).ready(function() {

    var strategies = [];

    jQuery.get('eno/oblique_strategies.txt', function(data){
        fileText = data;
        strategies = data.split('\n');
        console.log(strategies[0]);
    });

    $(".obliqueCard").click(function() {

    changeText(strategies);

    });
  
});


function changeText(strategies) {

    var currentText = document.getElementById('strategy').innerHTML;

    console.log(strategies.length);

    var numStrategies = strategies.length;

    var next = Math.floor(Math.random()*numStrategies)

    newText = strategies[next];

    $("#strategy").text(newText);

}

