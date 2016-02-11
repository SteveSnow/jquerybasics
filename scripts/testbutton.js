$("#addButton").click(function() {
    var boxes = document.getElementsByClassName("box")
    var newID = "item" + (boxes.length + 1);
    $("#stage").append("<div class='box' id='" + newID + "'></div>");

});

$("#removeButton").click(function() {
    var boxes = document.getElementsByClassName("box")
    var newID = "item" + (boxes.length);
    var el = document.getElementById(newID)
    el.remove()
});
