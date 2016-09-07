function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

$('.btn-reset').on("click", function(){
    $('body').css('background-color','white');
});

$('.btn-random').on("click", function() {
  var color = getRandomColor();
  $('body').css('background-color', color);
});
