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
function parent_clicks() {
    $(".student-block").click(function() {
        resetStudents()
        $(this).addClass("Active")
    })
    $(".student_item").click(function() {

    })
}

//Student List
function generateStudentsmenu() {
    let activeStudentlist = 0;
    let R = "";
    if (window.innerWidth > 570) {
        for (i = activeStudentlist; i <= (activeStudentlist + 2); i++) {
            R = R + ` <span class="student-block">
        <div class="row">
            <div class="col-auto student-img"><img src="` + $(".student_item:nth-child(" + (i + 1) + ")").attr("data-img") + `" alt=""></div>
            <div class="col">
                <div class="studentname">` + $(".student_item:nth-child(" + (i + 1) + ")").html() + `</div>
                <div class="studentage">` + $(".student_item:nth-child(" + (i + 1) + ")").attr("data-age") + ` Year Old</div>
            </div>
        </div>
    </span>`
        }
    } else {
        R = ` <span class="student-block">
        <div class="row">
            <div class="col-auto student-img"><img src="` + $(".student_item:nth-child(" + (activeStudentlist + 1) + ")").attr("data-img") + `" alt=""></div>
            <div class="col">
                <div class="studentname">` + $(".student_item:nth-child(" + (activeStudentlist + 1) + ")").html() + `</div>
                <div class="studentage">` + $(".student_item:nth-child(" + (activeStudentlist + 1) + ")").attr("data-age") + ` Year Old</div>
            </div>
        </div>
    </span>`
        $(".students-container").html(R)
    }
    $(".student_item").click(function() {
        R = "";
        activeStudentlist = $(this).index();
        if (window.innerWidth > 570) {
            for (i = activeStudentlist; i <= (activeStudentlist + 2); i++) {
                if (i < $(".student_item").length) {
                    R = R + ` <span class="student-block">
            <div class="row">
                <div class="col-auto student-img"><img src="` + $(".student_item:nth-child(" + (i + 1) + ")").attr("data-img") + `" alt=""></div>
                <div class="col">
                    <div class="studentname">` + $(".student_item:nth-child(" + (i + 1) + ")").html() + `</div>
                    <div class="studentage">` + $(".student_item:nth-child(" + (i + 1) + ")").attr("data-age") + ` Year Old</div>
                </div>
            </div>
        </span>`
                } else {

                }
            }
        } else {
            R = "";
            R = ` <span class="student-block">
        <div class="row">
            <div class="col-auto student-img"><img src="` + $(".student_item:nth-child(" + (activeStudentlist + 1) + ")").attr("data-img") + `" alt=""></div>
            <div class="col">
                <div class="studentname">` + $(".student_item:nth-child(" + (activeStudentlist + 1) + ")").html() + `</div>
                <div class="studentage">` + $(".student_item:nth-child(" + (activeStudentlist + 1) + ")").attr("data-age") + ` Year Old</div>
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



// function addNewstudent() {

//     if ($(".addstudent-pop .content-container").attr("data-page") === "") {
//         $(".popup").show("fast");
//         $(".addstudent-pop .content-container").attr("data-page", "add-student-step01")
//         $(".addstudent-pop .content-container").html(` <div class="close"><i class="fa-solid fa-xmark"></i></div>
//         <div class="content-body">
//             <div class="headding">Add New Student</div>
//             <div class="form-floating mb-3">
//                 <input type="text" class="form-control" id="Student_name_input" placeholder="studentName">
//                 <label for="Student_name_input" style="opacity:0.5;">Student Name</label>
//             </div>
//             <div class="headding" style="text-align:left;margin-top:10px;  margin-bottom: -7px;">Select Age Range</div>
//             <hr>
//             <div class="ages-buttons-container">
//                 <div class="ages-button">6-8 YEARS</div>
//                 <div class="ages-button">9-12 YEARS</div>
//                 <div class="ages-button">13-18 YEARS</div>
//             </div>
//             <div class="headding" style="text-align:left;margin-top:20px;  margin-bottom: -7px;">Select Group</div>
//             <hr>
//             <div class="Schedule-button">
//                 <span>Friday</span>
//                 <span>22/07/2022</span>
//                 <span>4:30 PM</span>
//             </div>
//             <div class="Schedule-button">
//                 <span>Friday</span>
//                 <span>22/07/2022</span>
//                 <span>4:30 PM</span>
//             </div>
//             <div class="Schedule-button">
//                 <span>Friday</span>
//                 <span>22/07/2022</span>
//                 <span>4:30 PM</span>
//             </div>
//             <div class="Schedule-button">
//                 <span>Friday</span>
//                 <span>22/07/2022</span>
//                 <span>4:30 PM</span>
//             </div>
//             <div class="Schedule-button">
//                 <span>Friday</span>
//                 <span>22/07/2022</span>
//                 <span>4:30 PM</span>
//             </div>
//             <button class="btn btn-primary addstudent-next-btn">Next <i class="fa-solid fa-arrow-right"></i></button>
//         </div>
//     `)
//     }

//     AddstudentClicks();
// }


// function resetAgeranges() {
//     $(".ages-button").removeClass("active");

// }


// function resetSchedule() {
//     $(".Schedule-button").removeClass("active");
// }
// AddstudentClicks();

// function AddstudentClicks() {
//     $(".addstudent").click(function() {
//         addNewstudent();
//     })
//     $(".ages-button").click(function() {
//         resetAgeranges();
//         $(this).addClass("active")
//     })
//     $(".Schedule-button").click(function() {
//         resetSchedule();
//         $(this).addClass("active")
//     })
//     $(".addstudent-next-btn").click(function() {
//         $(".addstudent-pop .content-body").hide("drop", { direction: 'right' }, 300);
//         setTimeout(function() {
//             addstudentNewpage();
//             $(".addstudent-pop .content-body").show("drop", { direction: 'left' }, 300);
//         }, 300)

//     })
//     $(".addstudent-pop .close").click(function() {
//         $(".popup").hide("fast");
//         $(".addstudent-pop .content-container").attr("data-page", "")

//     })
// }

// function addstudentNewpage() {
//     $(".addstudent-pop .content-body").html($(".addstudent-pop .content-body").html());
//     AddstudentClicks();
// }