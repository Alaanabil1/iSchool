$(".View-more .students_list").hide();
$(".View-more .fa-chevron-right").click(function() {
    $(".View-more .students_list").toggle("fast");
})

function resetStudents() {
    $(".students-container .Active").removeClass("Active")
}
$(".student-block").click(function() {
    resetStudents()
    $(this).addClass("Active")
})