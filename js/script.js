//Paragraph hide using 'this'
$('p').click(function() {
    $(this).slideToggle('slow');
});

//Button mouse over/leave
$('button').mouseenter(function (){
    $(this).removeClass('makered').addClass('makeblue');
});

$('button').mouseleave(function (){
    $(this).removeClass('makeblue').addClass('makered');
});

//find by class
$('.box').click(function (){
    var classNames = $(this).attr('class').split(" "); //list of class names
    $('.' + classNames[1]).css("background", "red"); //change anything of class in array
});

//find by class
$('.boxA').click(function (){
    var classNames = $(this).attr('class').split(" ");
    var boxClass = classNames[0]; //First class name
    var className = classNames[1]; //Second class name
    if ($(this).css("background-color") === 'rgb(255, 0, 0)'){  //If this background = red
        $('.' + className).css("background-color", '#000'); //Turn white
    } else {
        $('.' + boxClass).css("background-color", '#000'); //Turn all with class "boxClass"
        $('.' + className).css("background-color", 'red'); //Turn all with class "className"
    }
});
