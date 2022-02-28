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
    $(".achieve-comp").click(function() {
        achievesPopupexpand();
    })
    $(".viewallAch").click(function() {
        AllachivesPopup();

    })
    $(".activty-comp").click(function() {
        activityPopupexpand();
    });
    $(".activty-comp-all").click(function() {
        activityPopupexpand();
    });
    $(".viewallatv").click(function() {
        AllactivityPopup();
    })
    const carousel = $(".activty")
    const carousel01 = $(".achieve")
    const card = $(".activty-comp")
    const card01 = $(".achieve-comp")


    // Prepare to limit the direction in which the carousel can slide, 
    // and to control how much the carousel advances by each time.
    // In order to slide the carousel so that only three cards are perfectly visible each time,
    // you need to know the carousel width, and the margin placed on a given card in the carousel
    let carouselWidth = carousel.offsetWidth;
    let carouselWidth01 = carousel01.offsetWidth;


    // Count the number of total cards you have
    const cardCount = $(".activty-comp").length;
    const cardCount01 = $(".achieve-comp").length;

    // Define an offset property to dynamically update by clicking the button controls
    // as well as a maxX property so the carousel knows when to stop at the upper limit
    let offset = 0;
    let offset01 = 0;
    const maxX = -250 * (cardCount - 1)
    const maxX01 = -250 * (cardCount01 - 1)
        // Add the click events
    $(".activities .slideLeft").click(function() {

        carouselWidth = carousel.width();
        if (offset <= ((-1 * maxX))) {
            if (offset !== 0) {
                offset += $(".activities .wrapper").width();
                carousel.css("transform", `translateX(${offset}px)`);
            }
        } else {

        }
    })

    $(".activities .slideRight").click(function() {

        carouselWidth = carousel.width();
        if (offset > ((maxX))) {
            if (offset !== maxX) {

                offset -= $(".activities .wrapper").width();
                carousel.css("transform", `translateX(${offset}px)`);
            }
        } else {

        }
    })

    $(".achieves .slideLeft").click(function() {

        carouselWidth01 = carousel01.width();
        if (offset01 <= ((-1 * maxX01))) {
            if (offset01 !== 0) {
                offset01 += $(".activities .wrapper").width();
                carousel01.css("transform", `translateX(${offset01}px)`);
            }
        } else {

        }
    })

    $(".achieves .slideRight").click(function() {

        carouselWidth01 = carousel01.width();
        if (offset01 > ((maxX01 + $(".achieves .wrapper").width()))) {
            if (offset01 !== maxX01) {

                offset01 -= $(".activities .wrapper").width();
                carousel01.css("transform", `translateX(${offset01}px)`);
            }
        } else {

        }
    })


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


    $(".session-expand-table tbody tr").click(function() {
        sessionExpand();
    })
    $(".expandsession.back").click(function() {
        sessions();
    })
    $(".invoices-viewall").click(function() {
        invoicesexpand();
    })
    $(".invoices-back").click(function() {
        financeHome();
    })
    $('.packages-back').click(function() {
        financeHome();
    })
    $(".packages-viewall").click(function() {
        packagesExpand();
    })
    $(".invoices-table-item").click(function() {
        singleInvoce();
    })
}
$(".addstudent").click(function() {
    addNewstudent();
})
$(document).on('click', '.stli', function() {
    $('.stli').removeClass('active');
    $('ul').toggleClass('expanded');
    $(this).addClass('active');
    var tab_id = $(this).attr('data-tab');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $('#' + tab_id).addClass('current');
});

function financeHome() {
    $(".content-container.body").html(`  <div data-issue="" class="comp_container invoices-cont" style="padding: 20px;">
    <div class="headding">
        <div class="head">
            Invoices
        </div>
        <div class="btn btn-primary invoices-viewall">
            View All
        </div>
    </div>
    <table class="invoices-table">

        <thead>
            <tr>
                <th scope="col">Description</th>
                <th scope="col-auto">Pay For</th>
                <th scope="col-auto">Date</th>
                <th scope="col-auto">Amount</th>
                <th scope="col-auto">Status</th>


            </tr>
        </thead>
        <tbody>
            <tr class="invoices-table-item">
                <td data-label="Description"> Description Description Description Des Description </td>
                <td data-label="Pay For">STUDENT 01</td>
                <td data-label="Date">10/10/2010</td>
                <td data-label="Amount">2,000 EGP</td>
                <td data-label="Status" class="duepay">DUE & PAYABLE</td>
            </tr>
            <tr class="invoices-table-item">
                <td data-label="Description"> Description Description Description Des Description </td>
                <td data-label="Pay For">STUDENT 01</td>
                <td data-label="Date">10/10/2010</td>
                <td data-label="Amount">2,000 EGP</td>
                <td data-label="Status" class="duepay">DUE & PAYABLE</td>
            </tr>
            <tr class="invoices-table-item">
                <td data-label="Description"> Description Description Description Des Description </td>
                <td data-label="Pay For">STUDENT 01</td>
                <td data-label="Date">10/10/2010</td>
                <td data-label="Amount">2,000 EGP</td>
                <td data-label="Status" class="due">DUE</td>
            </tr>
            <tr class="invoices-table-item">
                <td data-label="Description"> Description Description Description Des Description </td>
                <td data-label="Pay For">STUDENT 01</td>
                <td data-label="Date">10/10/2010</td>
                <td data-label="Amount">2,000 EGP</td>
                <td data-label="Status" class="due">DUE</td>
            </tr>
            <tr class="invoices-table-item">
                <td data-label="Description"> Description Description Description Des Description </td>
                <td data-label="Pay For">STUDENT 01</td>
                <td data-label="Date">10/10/2010</td>
                <td data-label="Amount">2,000 EGP</td>
                <td data-label="Status" class="due">DUE</td>
            </tr>
        </tbody>
    </table>
    <button data-save="20%" style="margin-left:auto; display:block; margin-top:40px;font-size:25px;" class="btn btn-warning">Pay <a>5,400</a> once</button>


</div>
<div data-issue="" class="comp_container Packages-cont" style="padding: 20px;">
    <div class="headding">
        <div class="head">
            Packages
        </div>
        <div class="btn btn-primary packages-viewall">
            View more
        </div>
    </div>
    <table class="invoices-table">

        <thead>
            <tr>
                <th scope="col">Kids</th>
                <th scope="col-auto">Quota</th>
                <th scope="col-auto">Used</th>
                <th scope="col-auto">Remain</th>
                <th scope="col-auto">Status</th>


            </tr>
        </thead>
        <tbody>
            <tr class="package-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="package-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="package-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="package-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
        </tbody>
    </table>


</div>
<div data-issue="" class="comp_container statistics-container" style="padding: 20px;">
    <div class="headding">

        Statistics

    </div>

    <div class="statistics-cont">
        <div class="statistics-comp">
            <div class="title">Total Fees</div>
            <span>
            
            <div class="price">30,000</div>
        </span>
        </div>
        <div class="statistics-comp">
            <div class="title">TOTAL DISCOUNT</div>
            <span>
            
            <div class="price">5,000</div>
        </span>
        </div>
        <div class="statistics-comp">
            <div class="title">PAID AMOUNT</div>
            <span class="green">
            
            <div class="price">24,000</div>
        </span>
        </div> 
        
        <div class="statistics-comp">
            <div class="title">DUE AMOUNT</div>
            <span class="red">
            <div class="price">6,000</div>
        </span>
        </div>


    </div>
    `);
    AddstudentClicks();

}

function invoicesexpand() {
    $(".content-container.body").html(`    <div class="back invoices-back"><i class="fa-solid fa-arrow-left"></i></div>
    <div class="headding">
        All Invoices
    </div>
    <button data-save="20%" style="margin-left:auto; display:block; margin-top:40px;font-size:25px;" class="btn btn-warning">Pay <a>5,400</a> once</button>

    <table class="invoices-table">

        <thead>
            <tr>
                <th scope="col">Kids</th>
                <th scope="col-auto">Quota</th>
                <th scope="col-auto">Used</th>
                <th scope="col-auto">Remain</th>
                <th scope="col-auto">Status</th>


            </tr>
        </thead>
        <tbody>
            <tr class="invoices-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="invoices-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="invoices-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="invoices-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="invoices-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="invoices-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="invoices-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="invoices-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="invoices-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="invoices-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
        </tbody>
    </table>

    <nav aria-label="...">
        <ul style="justify-content:center; margin-top:20px" class="pagination">
            <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item ">
                <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>`);
    AddstudentClicks();
}

function packagesExpand() {
    $(".content-container.body").html(` <div class="headding">

    <div class="back packages-back"><i class="fa-solid fa-arrow-left"></i></div>
    <br>
    <div class="head">
        Packages

    </div>
    <br>
    <table class="invoices-table">

        <thead>
            <tr>
                <th scope="col">Kids</th>
                <th scope="col-auto">Quota</th>
                <th scope="col-auto">Used</th>
                <th scope="col-auto">Remain</th>
                <th scope="col-auto">Status</th>


            </tr>
        </thead>
        <tbody>
            <tr class="package-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="package-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="package-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="package-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="package-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="package-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="package-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="package-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="package-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
            <tr class="package-table-item">
                <td data-label="Kids">STUDENT 01</td>
                <td data-label="Quota">50 Sessions</td>
                <td data-label="Used">30 Sessions</td>
                <td data-label="Remain">20 Sessions</td>
                <td data-label="Status">Active</td>
            </tr>
        </tbody>
    </table>

    <nav aria-label="...">
        <ul style="justify-content:center; margin-top:20px" class="pagination">
            <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item ">
                <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
</div> `);
    AddstudentClicks();
}

function singleInvoce() {
    $(".addstudent-pop .content-container").attr("data-page", "invoice-expand");
    $(".popup").show("fast");
    $(".addstudent-pop .content-container").html(`  <div class="close"><i class="fa-solid fa-xmark"></i></div>
    <div class="container invoices">
        <div class="row">
            <div class="col-md col-md-offset-3 body-main">
                <div class="col-md-12">
                    <div class="row logo">
                        <img style="width:150px" class="img" alt="Invoce Template" src="img/blue-logo.svg" />

                    </div> <br />
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h2>INVOICE</h2>
                            <h5>04854654101</h5>
                            <div class="row invoice-details">
                                <div class="col-sm">
                                    <h5>Student name : Mohamed Ali klay</h5>
                                </div>
                                <div class="col-sm">
                                    <h5>Parent name : Mohamed Ali klay</h5>
                                </div>
                            </div>

                        </div>
                    </div> <br />
                    <div>
                        <table class="table-sm">
                            <thead>
                                <tr>
                                    <th>
                                        <h5>Description</h5>
                                    </th>
                                    <th>
                                        <h5>Amount</h5>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="col-md-9">Samsung Galaxy 8 64 GB</td>
                                    <td class="col-md-3">
                                        50,000 L.E </td>
                                </tr>
                                <tr>
                                    <td class="col-md-9">JBL Bluetooth Speaker</td>
                                    <td class="col-md-3">
                                        5,200 L.E </td>
                                </tr>
                                <tr>
                                    <td class="col-md-9">Apple Iphone 6s 16GB</td>
                                    <td class="col-md-3">
                                        25,000 L.E </td>
                                </tr>
                                <tr>
                                    <td class="col-md-9">MI Smartwatch 2</td>
                                    <td class="col-md-3">
                                        2,200 L.E </td>
                                </tr>

                                <tr style="color: #1955CC;">
                                    <td class="text-center">
                                        <h4><strong>Total:</strong></h4>
                                    </td>
                                    <td class="text-center">
                                        <h4><strong> </i> 79,900 </strong></h4>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div class="col-md-12">
                            <p><b>Date :</b> 6 June 2019</p> <br />
                            <p><b>Signature</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`)
    addNewstudent();
}
financeHome();