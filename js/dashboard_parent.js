$(".View-more .students_list").hide();
$(".View-more .fa-chevron-right").click(function() {

    $(".View-more .students_list").slideToggle("fast");
})
parent_clicks();
generateStudentsmenu();
// overView();

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



function addNewstudent() {

    if ($(".addstudent-pop .content-container").attr("data-page") === " ") {
        $(".popup").show("fast");
        $(".addstudent-pop .content-container").attr("data-page", "add-student-step01")
        $(".addstudent-pop .content-container").html(` <div class="close"><i class="fa-solid fa-xmark"></i></div>
        <div class="content-body">
            <div class="headding">Add New Student</div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="Student_name_input" placeholder="studentName">
                <label for="Student_name_input" style="opacity:0.5;">Student Name</label>
            </div>
            <div class="headding" style="text-align:left;margin-top:10px;  margin-bottom: -7px;">Select Age Range</div>
            <hr>
            <div class="ages-buttons-container">
                <div class="ages-button">6-8 YEARS</div>
                <div class="ages-button">9-12 YEARS</div>
                <div class="ages-button">13-18 YEARS</div>
            </div>
            <div class="headding" style="text-align:left;margin-top:20px;  margin-bottom: -7px;">Select Group</div>
            <hr>
            <div class="Schedule-button">
                <span>Friday</span>
                <span>22/07/2022</span>
                <span>4:30 PM</span>
            </div>
            <div class="Schedule-button">
                <span>Friday</span>
                <span>22/07/2022</span>
                <span>4:30 PM</span>
            </div>
            <div class="Schedule-button">
                <span>Friday</span>
                <span>22/07/2022</span>
                <span>4:30 PM</span>
            </div>
            <div class="Schedule-button">
                <span>Friday</span>
                <span>22/07/2022</span>
                <span>4:30 PM</span>
            </div>
            <div class="Schedule-button">
                <span>Friday</span>
                <span>22/07/2022</span>
                <span>4:30 PM</span>
            </div>
            <button class="btn btn-primary addstudent-next-btn">Next <i class="fa-solid fa-arrow-right"></i></button>
        </div>
    `)
    }


    AddstudentClicks();
}

function nextPageStudent() {

    $(".addstudent-pop .content-container").attr("data-page", "add-student-step02");
    $(".addstudent-pop .content-container").html(`<div class="back-close">
        <div class="back"><i class="fa-solid fa-arrow-left"></i></div>
        <div class="close"> <i class="fa-solid fa-xmark"></i></div>
    </div>
    <div class="student-payment-container">
        <div class="student-payment-info">
            <div class="headding">Student Info</div>
            <hr>
            <div class="student-payment-labels">
                <span><a>Student Name :</a> Sayed Isamael Mohamed</span>
                <span><a>Age Range :</a> 6-8 Years</span>
                <span><a>Day :</a> Friday</span>
                <span><a>Starting Date :</a> 22/7/2022</span>
                <span><a>Time Slot :</a> 4:30 PM</span>
            </div>
        </div>
        <hr>
        <div class="student-payment-info">
            <div style="margin-top:30px;text-align: center;" class="headding">Select Payment Plan</div>
            <hr>
            <div class="student-payment-plans">
                <div class="payment-plans-container">
                    <div class="header">Monthly Plan</div>
                    <div class="price">1,990</div>
                    <hr class="between">
                    <li>Billed as 1,990 / Month</li>
                    <li>Consist of 12 payments</li>
                    <li>Total fees 23.880 EGP</li>
                    <hr class="between">
                    <div class="offer-container">
                        <div class="form-floating">
                            <input type="text" style="height: 30px;font-size:13px;" class="form-control" id="Promo_input" placeholder="studentName">
                            <label for="Promo_input" style="opacity:0.5;font-size:13px;margin-top:-8px">Promo code</label>
                        </div>
                        <span>Apply offer</span>
                    </div>
                    <button class="btn btn-warning">Pay 1,990 EGP</button>
                </div>
                <div class="payment-plans-container">
                    <div class="header">Quarterly Plan</div>
                    <div class="price">1,790</div>
                    <hr class="between">
                    <li>Billed as 5,370 / Month</li>
                    <li>Consist of 4 payments</li>
                    <li>Total fees 21.480 EGP</li>
                    <hr class="between">
                    <div class="offer-container">
                        <div class="form-floating">
                            <input type="text" style="height: 30px;font-size:13px;" class="form-control" id="Promo_input" placeholder="studentName">
                            <label for="Promo_input" style="opacity:0.5;font-size:13px;margin-top:-8px">Promo code</label>
                        </div>
                        <span>Apply offer</span>
                    </div>
                    <button class="btn btn-warning">Pay 5,370 EGP</button>
                </div>
                <div class="payment-plans-container">
                    <div class="header">Annually Plan</div>
                    <div class="price">1,590</div>
                    <hr class="between">
                    <li>Billed as 19,080 / Month</li>
                    <li>Consist of 1 payment</li>
                    <li>Total fees 19.080 EGP</li>
                    <hr class="between">
                    <div class="offer-container">
                        <div class="form-floating">
                            <input type="text" style="height: 30px;font-size:13px;" class="form-control" id="Promo_input" placeholder="studentName">
                            <label for="Promo_input" style="opacity:0.5;font-size:13px;margin-top:-8px">Promo code</label>
                        </div>
                        <span>Apply offer</span>
                    </div>
                    <button class="btn btn-warning">Pay 19.080 EGP</button>
                </div>
            </div>
        </div>
    </div>`)
    AddstudentClicks();
}

function resetAgeranges() {
    $(".ages-button").removeClass("active");

}

function resetSchedule() {
    $(".Schedule-button").removeClass("active");
}
AddstudentClicks();

function AddstudentClicks() {
    actComps = $(".activty-comp").length;
    console.log(actComps)
    for (let i = 0; i < actComps; i++) {
        if ($(".activty-comp:" + "nth-child(" + (i + 1) + ")").attr("data-progress") === "100") {
            $(".activty-comp:" + "nth-child(" + (i + 1) + ") .activty-icon").addClass("done");
            $(".activty-comp:" + "nth-child(" + (i + 1) + ") .activity-thumb").css("width", "100%")
            $(".activty-comp:" + "nth-child(" + (i + 1) + ") .activity-thumb").css("background-color", "#06b800")

        } else if ($(".activty-comp:" + "nth-child(" + (i + 1) + ")").attr("data-progress") === "0") {

            $(".activty-comp:" + "nth-child(" + (i + 1) + ")").addClass("upcomming")
        } else {
            let Progress = $(".activty-comp:" + "nth-child(" + (i + 1) + ")").attr("data-progress") + "%"

            $(".activty-comp:" + "nth-child(" + (i + 1) + ") .activity-thumb").css("width", Progress);

        }
    }


    $(".addstudent").click(function() {
        addNewstudent();
    })
    $(".ages-button").click(function() {
        resetAgeranges();
        $(this).addClass("active")
    })
    $(".Schedule-button").click(function() {
        resetSchedule();
        $(this).addClass("active")
    })
    $(".addstudent-next-btn").click(function() {
        $(".addstudent-pop .content-body").animate({
            opacity: 0
        }, 300)
        setTimeout(function() {
            nextPageStudent();

        }, 300)
        $(".addstudent-pop .content-body").animate({
            opacity: 1
        }, 300)

    })
    $(".addstudent-pop .close").click(function() {
        $(".popup").hide("fast");

        $(".addstudent-pop .content-container").attr("data-page", " ")

    })

    $(".addstudent-pop .back").click(function() {
        $(".addstudent-pop .content-container").attr("data-page", " ")
        addNewstudent();
    })
    $(".pages-link.overview").click(function() {
        overView();
    })
    $(".pages-link.sessions").click(function() {
        sessions();
    })
    $("tbody tr").click(function() {
        sessionExpand();
    })
}

function resetTopnav() {
    $(".pages-link").removeClass("active")
}

function overView() {
    resetTopnav();
    $(".pages-link.overview").addClass("active")
    $(".content-container.body").html(`  <div data-issue="Membership Expired Upgrade Now" class="comp_container expired">
    <div class="student-info">
        <span><a>Student ID :</a> D1001</span>
        <span><a>Group ID :</a> B-Fo-630</span>
        <span><a>Age :</a> 5 Years old</span>
    </div>
</div>
<div data-issue="Membership Expired Upgrade Now" class="comp_container expired">
    <div class="package-container">
        <div class="headding">
            Package Information
        </div>
        <div class="package-progress-container">
            <div class="progress-headers">
                <div class="befbar">
                    <div class="ava"><a>Available Quota :</a> 42 Sessions</div>
                    <div class="used"><a>Used Quota :</a> 20 Sessions </div>
                </div>
                <div class="progressbar-container">
                    <div style="width:25%;" class="progressbar"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="slice-container">
    <div class="comp_container left ">
        <div class="upgradenow"></div>
        <div class="session-container">
            <div class="headding">
                Next Session Date & Time
            </div>
            <div class="countdown">
                <div class="comp_container">
                    <h1>01</h1>
                    <h5>Days</h5>
                </div>
                <div class="comp_container">
                    <h1>01</h1>
                    <h5>Hours</h5>
                </div>
                <div class="comp_container">
                    <h1>01</h1>
                    <h5>Minutes</h5>
                </div>
                <div class="comp_container">
                    <h1>01</h1>
                    <h5>Secounds</h5>
                </div>

            </div>
        </div>
    </div>
    <div class="comp_container right">
        <div class="session-container">
            <div class="headding">
                Student Statistics
            </div>
            <div class="Statics">

                <div class="Stats_container">
                    <h5>Attendance</h5>
                    <h1 class="comp_container">45/50</h1>
                </div>
                <div class="Stats_container">
                    <h5>Tasks</h5>
                    <h1 class="comp_container">45/50</h1>

                </div>
                <div class="Stats_container">
                    <h5>Session Score</h5>
                    <h1 class="comp_container">50%</h1>

                </div>
                <div class="Stats_container">
                    <h5>Skills</h5>
                    <h1 class="comp_container">15</h1>

                </div>
                <div class="Stats_container">
                    <h5>Modules</h5>
                    <h1 class="comp_container">01</h1>

                </div>

            </div>
        </div>
    </div>

</div>
`)
    AddstudentClicks();
}

function sessions() {

    resetTopnav();
    $(".pages-link.sessions").addClass("active")
    $(".content-container.body").html(`<table>

    <thead>
        <tr>
            <th scope="col">Sessions</th>
            <th scope="col">Modules</th>
            <th scope="col">Attendance</th>
            <th scope="col">Tasks</th>
            <th scope="col">Score</th>
            <th scope="col">Skills</th>
        </tr>
    </thead>
    <tbody>
        <tr class="session-table-item">
            <td data-label="Sessions">Session 01</td>
            <td data-label="Modules">Module 01</td>
            <td data-label="Attendance"><i class="fa-solid fa-check"></i></td>
            <td data-label="Tasks">90%</td>
            <td data-label="Score">90%</td>
            <td data-label="Skills">1</td>
        </tr>

        <tr class="session-table-item">
            <td data-label="Sessions">Session 01</td>
            <td data-label="Modules">Module 01</td>
            <td data-label="Attendance"><i class="fa-solid fa-check"></i></td>
            <td data-label="Tasks">90%</td>
            <td data-label="Score">90%</td>
            <td data-label="Skills">1</td>
        </tr>
        <tr class="session-table-item">
            <td data-label="Sessions">Session 01</td>
            <td data-label="Modules">Module 01</td>
            <td data-label="Attendance"><i class="fa-solid fa-check"></i></td>
            <td data-label="Tasks">90%</td>
            <td data-label="Score">90%</td>
            <td data-label="Skills">1</td>
        </tr>
        <tr class="session-table-item">
            <td data-label="Sessions">Session 01</td>
            <td data-label="Modules">Module 01</td>
            <td data-label="Attendance"><i class="fa-solid fa-check"></i></td>
            <td data-label="Tasks">90%</td>
            <td data-label="Score">90%</td>
            <td data-label="Skills">1</td>
        </tr>
        <tr class="session-table-item">
            <td data-label="Sessions">Session 01</td>
            <td data-label="Modules">Module 01</td>
            <td data-label="Attendance"><i class="fa-solid fa-check"></i></td>
            <td data-label="Tasks">90%</td>
            <td data-label="Score">90%</td>
            <td data-label="Skills">1</td>
        </tr>
        <tr class="session-table-item">
            <td data-label="Sessions">Session 01</td>
            <td data-label="Modules">Module 01</td>
            <td data-label="Attendance"><i class="fa-solid fa-check"></i></td>
            <td data-label="Tasks">90%</td>
            <td data-label="Score">90%</td>
            <td data-label="Skills">1</td>
        </tr>
        <tr class="session-table-item">
            <td data-label="Sessions">Session 01</td>
            <td data-label="Modules">Module 01</td>
            <td data-label="Attendance"><i class="fa-solid fa-check"></i></td>
            <td data-label="Tasks">90%</td>
            <td data-label="Score">90%</td>
            <td data-label="Skills">1</td>
        </tr>
        <tr class="session-table-item">
            <td data-label="Sessions">Session 01</td>
            <td data-label="Modules">Module 01</td>
            <td data-label="Attendance"><i class="fa-solid fa-check"></i></td>
            <td data-label="Tasks">90%</td>
            <td data-label="Score">90%</td>
            <td data-label="Skills">1</td>
        </tr>
        <tr class="session-table-item">
            <td data-label="Sessions">Session 01</td>
            <td data-label="Modules">Module 01</td>
            <td data-label="Attendance"><i class="fa-solid fa-check"></i></td>
            <td data-label="Tasks">90%</td>
            <td data-label="Score">90%</td>
            <td data-label="Skills">1</td>
        </tr>
        <tr class="session-table-item">
            <td data-label="Sessions">Session 01</td>
            <td data-label="Modules">Module 01</td>
            <td data-label="Attendance"><i class="fa-solid fa-check"></i></td>
            <td data-label="Tasks">90%</td>
            <td data-label="Score">90%</td>
            <td data-label="Skills">1</td>
        </tr>

    </tbody>
</table>
<nav aria-label="...">
    <ul class="pagination pagination-sm">
        <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
        </li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item" aria-current="page">
            <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
            <a class="page-link" href="#">Next</a>
        </li>
    </ul>
</nav>`)
    AddstudentClicks();
}

function sessionExpand() {
    $(".content-container.body").html(`   <div class="back"><i class="fa-solid fa-arrow-left"></i></div>
    <div class="session-title" style="text-align:center; color:#2c2c2c80; font-size:20px;">
        Session 01 : <a style="font-weight:bold; color:#2c2c2c;">Title</a>
    </div>
    <ul class="nav nav-pills mb-3 justify-content-center " style="margin-top: 20px;" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-learning-tab" data-bs-toggle="pill" data-bs-target="#pills-learning" type="button" role="tab" aria-controls="pills-learning" aria-selected="true">Learning Outcomes</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-studentm-tab" data-bs-toggle="pill" data-bs-target="#pills-studentm" type="button" role="tab" aria-controls="pills-studentm" aria-selected="false">Student Material</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-feedback-tab" data-bs-toggle="pill" data-bs-target="#pills-feedback" type="button" role="tab" aria-controls="pills-feedback" aria-selected="false">Feedback</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-tasks-tab" data-bs-toggle="pill" data-bs-target="#pills-tasks" type="button" role="tab" aria-controls="pills-tasks" aria-selected="false">Tasks</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-skills-tab" data-bs-toggle="pill" data-bs-target="#pills-skills" type="button" role="tab" aria-controls="pills-skills" aria-selected="false">Skills</button>
        </li>
    </ul>
    <div class="sessoions-container-body">
        <div class="col-auto last-session-btn"><i class="fa-solid fa-chevron-left"></i></div>
        <div class="tab-content col" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-learning" role="tabpanel" aria-labelledby="pills-learning-tab">
                <div class="learning-outcomes-container">
                    <div class="session-expand-comp">
                        <div class="title">Learning Outcomes</div>
                        <div class="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit placeat amet quas deleniti alias sit, explicabo eum ratione quam possimus iste distinctio. Ut magni deleniti, quos voluptatum quae maxime reiciendis.</div>
                    </div>
                    <div class="session-expand-comp">
                        <div class="title">Learning Outcomes</div>
                        <div class="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit placeat amet quas deleniti alias sit, explicabo eum ratione quam possimus iste distinctio. Ut magni deleniti, quos voluptatum quae maxime reiciendis.</div>
                    </div>
                    <div class="session-expand-comp">
                        <div class="title">Learning Outcomes</div>
                        <div class="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit placeat amet quas deleniti alias sit, explicabo eum ratione quam possimus iste distinctio. Ut magni deleniti, quos voluptatum quae maxime reiciendis.</div>
                    </div>
                    <div class="session-expand-comp">
                        <div class="title">Learning Outcomes</div>
                        <div class="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit placeat amet quas deleniti alias sit, explicabo eum ratione quam possimus iste distinctio. Ut magni deleniti, quos voluptatum quae maxime reiciendis.</div>
                    </div>
                    <div class="session-expand-comp">
                        <div class="title">Learning Outcomes</div>
                        <div class="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit placeat amet quas deleniti alias sit, explicabo eum ratione quam possimus iste distinctio. Ut magni deleniti, quos voluptatum quae maxime reiciendis.</div>
                    </div>
                    <div class="session-expand-comp">
                        <div class="title">Learning Outcomes</div>
                        <div class="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit placeat amet quas deleniti alias sit, explicabo eum ratione quam possimus iste distinctio. Ut magni deleniti, quos voluptatum quae maxime reiciendis.</div>
                    </div>
                    <div class="session-expand-comp">
                        <div class="title">Learning Outcomes</div>
                        <div class="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit placeat amet quas deleniti alias sit, explicabo eum ratione quam possimus iste distinctio. Ut magni deleniti, quos voluptatum quae maxime reiciendis.</div>
                    </div>
                    <div class="session-expand-comp">
                        <div class="title">Learning Outcomes</div>
                        <div class="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit placeat amet quas deleniti alias sit, explicabo eum ratione quam possimus iste distinctio. Ut magni deleniti, quos voluptatum quae maxime reiciendis.</div>
                    </div>
                    <div class="session-expand-comp">
                        <div class="title">Learning Outcomes</div>
                        <div class="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit placeat amet quas deleniti alias sit, explicabo eum ratione quam possimus iste distinctio. Ut magni deleniti, quos voluptatum quae maxime reiciendis.</div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="pills-studentm" role="tabpanel" aria-labelledby="pills-studentm-tab">
                <div class="student-material-container">
                    <div class="session-expand-comp" style="cursor:pointer;">
                        <div class="session-comp-cont">
                            <div class="row title"><a>File Name 01</a></div>
                            <div class="row">
                                <div class="type col">Type : Video</div>
                                <div style="display: flex; justify-content:right; margin-right:20px;" class="link col"><a><i class="fa-solid fa-download"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="session-expand-comp" style="cursor:pointer;">
                        <div class="session-comp-cont">
                            <div class="row title"><a>File Name 01</a></div>
                            <div class="row">
                                <div class="type col">Type : Video</div>
                                <div style="display: flex; justify-content:right; margin-right:20px;" class="link col"><a><i class="fa-solid fa-download"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="session-expand-comp" style="cursor:pointer;">
                        <div class="session-comp-cont">
                            <div class="row title"><a>File Name 01</a></div>
                            <div class="row">
                                <div class="type col">Type : Video</div>
                                <div style="display: flex; justify-content:right; margin-right:20px;" class="link col"><a><i class="fa-solid fa-download"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="session-expand-comp" style="cursor:pointer;">
                        <div class="session-comp-cont">
                            <div class="row title"><a>File Name 01</a></div>
                            <div class="row">
                                <div class="type col">Type : Video</div>
                                <div style="display: flex; justify-content:right; margin-right:20px;" class="link col"><a><i class="fa-solid fa-download"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="session-expand-comp" style="cursor:pointer;">
                        <div class="session-comp-cont">
                            <div class="row title"><a>File Name 01</a></div>
                            <div class="row">
                                <div class="type col">Type : Video</div>
                                <div style="display: flex; justify-content:right; margin-right:20px;" class="link col"><a><i class="fa-solid fa-download"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="session-expand-comp" style="cursor:pointer;">
                        <div class="session-comp-cont">
                            <div class="row title"><a>File Name 01</a></div>
                            <div class="row">
                                <div class="type col">Type : Video</div>
                                <div style="display: flex; justify-content:right; margin-right:20px;" class="link col"><a><i class="fa-solid fa-download"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="session-expand-comp" style="cursor:pointer;">
                        <div class="session-comp-cont">
                            <div class="row title"><a>File Name 01</a></div>
                            <div class="row">
                                <div class="type col">Type : Video</div>
                                <div style="display: flex; justify-content:right; margin-right:20px;" class="link col"><a><i class="fa-solid fa-download"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="tab-pane fade" id="pills-feedback" role="tabpanel" aria-labelledby="pills-feedback-tab">
                <div class="session-expand-comp" style="cursor:pointer;">
                    <div class="session-comp-cont taskscomp">
                        <div class="row paragraph" data-precent="50%"><a>Lorem ipsum dolor sit amet consectetur adipisLorem ipsum dolor sit amet consectetur adipisicing elit.icing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </a></div>
                    </div>

                </div>
                <div class="session-expand-comp" style="cursor:pointer;">
                    <div class="session-comp-cont taskscomp">
                        <div class="row paragraph" data-precent="50%"><a>Lorem ipsum dolor sit amet consectetur adipisLorem ipsum dolor sit amet consectetur adipisicing elit.icing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </a></div>
                    </div>

                </div>
                <div class="session-expand-comp" style="cursor:pointer;">
                    <div class="session-comp-cont taskscomp">
                        <div class="row paragraph" data-precent="50%"><a>Lorem ipsum dolor sit amet consectetur adipisLorem ipsum dolor sit amet consectetur adipisicing elit.icing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </a></div>
                    </div>

                </div>
                <div class="session-expand-comp" style="cursor:pointer;">
                    <div class="session-comp-cont taskscomp">
                        <div class="row paragraph" data-precent="50%"><a>Lorem ipsum dolor sit amet consectetur adipisLorem ipsum dolor sit amet consectetur adipisicing elit.icing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </a></div>
                    </div>

                </div>
            </div>
            <div class="tab-pane fade" id="pills-tasks" role="tabpanel" aria-labelledby="pills-tasks-tab">
                <div class="session-expand-comp" style="cursor:pointer;">
                    <div class="session-comp-cont taskscomp">
                        <div class="row paragraph" data-precent="50%"><a>Lorem ipsum dolor sit amet consectetur adipisLorem ipsum dolor sit amet consectetur adipisicing elit.icing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </a></div>
                    </div>

                </div>
                <div class="session-expand-comp" style="cursor:pointer;">
                    <div class="session-comp-cont taskscomp">
                        <div class="row paragraph" data-precent="50%"><a>Lorem ipsum dolor sit amet consectetur adipisLorem ipsum dolor sit amet consectetur adipisicing elit.icing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </a></div>
                    </div>

                </div>
                <div class="session-expand-comp" style="cursor:pointer;">
                    <div class="session-comp-cont taskscomp">
                        <div class="row paragraph" data-precent="50%"><a>Lorem ipsum dolor sit amet consectetur adipisLorem ipsum dolor sit amet consectetur adipisicing elit.icing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </a></div>
                    </div>

                </div>
                <div class="session-expand-comp" style="cursor:pointer;">
                    <div class="session-comp-cont taskscomp">
                        <div class="row paragraph" data-precent="50%"><a>Lorem ipsum dolor sit amet consectetur adipisLorem ipsum dolor sit amet consectetur adipisicing elit.icing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </a></div>
                    </div>

                </div>
            </div>
            <div class="tab-pane fade" id="pills-skills" role="tabpanel" aria-labelledby="pills-skills-tab">
                <div class="skills-container">
                    <div class="skills-comp">
                        <div class="skill-icon"><img src="img/01.jpg" alt=""></div>
                        <div class="title">Skill 01</div>
                    </div>
                    <div class="skills-comp">
                        <div class="skill-icon"><img src="img/01.jpg" alt=""></div>
                        <div class="title">Skill 01</div>
                    </div>
                    <div class="skills-comp">
                        <div class="skill-icon"><img src="img/01.jpg" alt=""></div>
                        <div class="title">Skill 01</div>
                    </div>
                    <div class="skills-comp">
                        <div class="skill-icon"><img src="img/01.jpg" alt=""></div>
                        <div class="title">Skill 01</div>
                    </div>
                    <div class="skills-comp">
                        <div class="skill-icon"><img src="img/01.jpg" alt=""></div>
                        <div class="title">Skill 01</div>
                    </div>
                    <div class="skills-comp">
                        <div class="skill-icon"><img src="img/01.jpg" alt=""></div>
                        <div class="title">Skill 01</div>
                    </div>
                    <div class="skills-comp">
                        <div class="skill-icon"><img src="img/01.jpg" alt=""></div>
                        <div class="title">Skill 01</div>
                    </div>
                    <div class="skills-comp">
                        <div class="skill-icon"><img src="img/01.jpg" alt=""></div>
                        <div class="title">Skill 01</div>
                    </div>
                    <div class="skills-comp">
                        <div class="skill-icon"><img src="img/01.jpg" alt=""></div>
                        <div class="title">Skill 01</div>
                    </div>
                    <div class="skills-comp">
                        <div class="skill-icon"><img src="img/01.jpg" alt=""></div>
                        <div class="title">Skill 01</div>
                    </div>
                </div>

            </div>
        </div>
        <div class="col-auto next-session-btn"><i class="fa-solid fa-chevron-right"></i></div>
    </div>
`);
    AddstudentClicks();
}
const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

// Prepare to limit the direction in which the carousel can slide, 
// and to control how much the carousel advances by each time.
// In order to slide the carousel so that only three cards are perfectly visible each time,
// you need to know the carousel width, and the margin placed on a given card in the carousel
const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

// Count the number of total cards you have
const cardCount = carousel.querySelectorAll("[data-target='card']").length;

// Define an offset property to dynamically update by clicking the button controls
// as well as a maxX property so the carousel knows when to stop at the upper limit
let offset = 0;
const maxX = -130 * (cardCount - 1)

// Add the click events
leftButton.addEventListener("click", function() {
    if (offset !== 0) {
        offset += 130;
        carousel.style.transform = `translateX(${offset}px)`;
    }
})

rightButton.addEventListener("click", function() {
    if (offset !== maxX) {
        offset -= 130;
        carousel.style.transform = `translateX(${offset}px)`;
    }
})