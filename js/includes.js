$(function() {
    $.get("includes/header.html", function(data) {
        $('body').prepend(data);
        $('.dropdown-item[href="' + window.location.pathname.split('/').pop() + '"]').addClass('active');
    });
    $("#footer").load("includes/footer.html");


})