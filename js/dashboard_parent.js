$(".View-more .students_list").hide();
$(".View-more .fa-chevron-right").click(function() {

    $(".View-more .students_list").slideToggle("fast");
})
parent_clicks();
generateStudentsmenu();

function resetStudents() {
    $(".students-container .Active").removeClass("Active")
}
//Navigation Clicks List
function parent_clicks(){
    $(".student-block").click(function() {
        resetStudents()
        $(this).addClass("Active")
    })
    $(".student_item").click(function(){

    })
}

//Student List
function generateStudentsmenu() {
    let activeStudentlist = 0;
    let R = "";
    if (window.innerWidth > 570){
    for (i = activeStudentlist; i<=(activeStudentlist+2); i++ ){
        R = R + ` <span class="student-block">
        <div class="row">
            <div class="col-auto student-img"><img src="` + $(".student_item:nth-child(" + ( i + 1 ) +")").attr("data-img") + `" alt=""></div>
            <div class="col">
                <div class="studentname">` + $(".student_item:nth-child(" + ( i + 1 ) +")").html() + `</div>
                <div class="studentage">` + $(".student_item:nth-child(" + ( i + 1 ) +")").attr("data-age") + ` Year Old</div>
            </div>
        </div>
    </span>`
    }
    }
    else{
        R = ` <span class="student-block">
        <div class="row">
            <div class="col-auto student-img"><img src="` + $(".student_item:nth-child(" + ( activeStudentlist + 1 ) +")").attr("data-img") + `" alt=""></div>
            <div class="col">
                <div class="studentname">` + $(".student_item:nth-child(" + ( activeStudentlist + 1 ) +")").html() + `</div>
                <div class="studentage">` + $(".student_item:nth-child(" + ( activeStudentlist + 1 ) +")").attr("data-age") + ` Year Old</div>
            </div>
        </div>
    </span>`
    $(".students-container").html(R)
    }
    $(".student_item").click(function(){
        R="";
        activeStudentlist = $(this).index();
        if (window.innerWidth > 570){
        for (i = activeStudentlist; i<=(activeStudentlist+2); i++ ){
            if(i <  $(".student_item").length){
            R = R + ` <span class="student-block">
            <div class="row">
                <div class="col-auto student-img"><img src="` + $(".student_item:nth-child(" + ( i + 1 ) +")").attr("data-img") + `" alt=""></div>
                <div class="col">
                    <div class="studentname">` + $(".student_item:nth-child(" + ( i + 1 ) +")").html() + `</div>
                    <div class="studentage">` + $(".student_item:nth-child(" + ( i + 1 ) +")").attr("data-age") + ` Year Old</div>
                </div>
            </div>
        </span>`
    }
    else{

    }
        }
    }
    else{
        R="";
        R = ` <span class="student-block">
        <div class="row">
            <div class="col-auto student-img"><img src="` + $(".student_item:nth-child(" + ( activeStudentlist + 1 ) +")").attr("data-img") + `" alt=""></div>
            <div class="col">
                <div class="studentname">` + $(".student_item:nth-child(" + ( activeStudentlist + 1 ) +")").html() + `</div>
                <div class="studentage">` + $(".student_item:nth-child(" + ( activeStudentlist + 1 ) +")").attr("data-age") + ` Year Old</div>
            </div>
        </div>
    </span>`
    $(".students-container").html(R)
    }
        $(".students-container").html(R);
        $(".student-block:first-child").addClass("Active");
        parent_clicks();
        $(".students_list").hide();
    })
    $(".students-container").html(R)
   
$(".student-block:first-child").addClass("Active");
parent_clicks();
}

$(".addstudent").click(function(){
    addNewstudent();
})

function addNewstudent(){
    $(".popup").show("fast");

}