function boxGrow(item){
  $(item).animate({
        height: "+=50",
        width: "+=50"
    }, 500, function() {
        // Animation complete.
    })

  $(item).text('Click ME!');
}

function boxShrink(item){
  $(item).animate({
        height: "-=50",
        width: "-=50"
    }, 500, function() {
        // Animation complete.
    })
   $(item).text('');
}