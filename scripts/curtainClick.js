$("#curtain").click(function() {
    openCurtain()
});

function openCurtain() {
    $("#curtain").hide("slow");
    $(".box").show();
    $('#options').show();
}
