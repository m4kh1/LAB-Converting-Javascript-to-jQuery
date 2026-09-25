$(document).ready(function () {
    $("#area").on("mouseenter", function () {
        $("#area").css("background-color", "green");
        alert("Close me to turn the box green.");
    });

    $("#reset").on("click", function () {
        $("#area").css("background-color", "#953674");
    });
});
