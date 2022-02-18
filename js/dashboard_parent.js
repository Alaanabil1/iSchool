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
function nextPageStudent(){
 
        $(".addstudent-pop .content-container").attr("data-page" , "add-student-step02");
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
                    <button class="btn btn-warning">Pay 1,990 EGP</button>
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
                    <button class="btn btn-warning">Pay 1,990 EGP</button>
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
        $(".addstudent-pop .content-body").hide("drop", { direction: 'right' }, 300);
        setTimeout(function() {
           nextPageStudent();
            $(".addstudent-pop .content-body").show("drop", { direction: 'left' }, 300);
        }, 300)

    })
    $(".addstudent-pop .close").click(function() {
        $(".popup").hide("fast");
       
        $(".addstudent-pop .content-container").attr("data-page", " ")

    })
}
