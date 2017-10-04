$(function() {
    $.get("includes/header.html", function(data) {
        $('body').prepend(data);
    });
    $("#footer").load("includes/footer.html");
})