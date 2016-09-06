//
// $('#button').("click", function(){
//   var randomColor =  "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);
//   body.css("background-color", randomColor)
//   });
// });

// // function reset () {
// //   body.css("background-color","#FFFFFF");
// // }
//
// $('.btn-reset').on("click", function (){
//   // reset();
//   body.css("background-color","#FFFFFF");
// $('.federalist').css('backgroundColor', 'pink');
// }
// });

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
// $('body').css('background-color','getRandomColor');
});
