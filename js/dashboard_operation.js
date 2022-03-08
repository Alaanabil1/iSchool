

////----------------------------- parent tab ---------------------------- ///
///---------------------------------------------------------------------- ///
///---------------------------------------------------------------------- ///

///-------------------------------Date Picker--------------------------------------- ///
import Datepicker from '../node_modules/vanillajs-datepicker/js/Datepicker.js';
const elem = document.getElementById('foo');

const getDatePickerTitle = elem => {
    // From the label or the aria-label
    const label = elem.nextElementSibling;
    let titleText = '';
    if (label && label.tagName === 'LABEL') {
      titleText = label.textContent;
    } else {
      titleText = elem.getAttribute('aria-label') || '';
    }
    return titleText;
  }
  
  const elems = document.querySelectorAll('.datepicker_input');
  for (const elem of elems) {
    const datepicker = new Datepicker(elem, {
      'format': 'mm/yyyy', // UK format
      title: getDatePickerTitle(elem),
      pickLevel : 1,
      startView : 1,
      autohide: true
    });
  }
//-----------------------------------Assigned Customers Stats
let satisfiedCustomersPrecent = ($('#satisfiedCustomers').attr("data-precent") / 100)
$('#satisfiedCustomers').circleProgress({
    value: satisfiedCustomersPrecent,
    size: 90,
    thickness: 10,
    lineCap: "round",
    fill: {
        gradient: ["#05BC0C", "#008305"]
    }
});
$('#satisfiedCustomers a').html($('#satisfiedCustomers').attr("data-precent") + "%")

let notsatisfiedCustomersPrecent = ($('#notsatisfiedCustomers').attr("data-precent") / 100)
$('#notsatisfiedCustomers').circleProgress({
    value: notsatisfiedCustomersPrecent,
    size: 90,
    thickness: 10,
    lineCap: "round",
    fill: {
        gradient: ["#E10000", "#A60101"]
    }
});
$('#notsatisfiedCustomers a').html($('#notsatisfiedCustomers').attr("data-precent") + "%")

//-----------------------------------Incomming Calls Stats

let InanswerdPrecent = ($('#Inanswerd').attr("data-precent") / 100)
$('#Inanswerd').circleProgress({
    value: InanswerdPrecent,
    size: 60,
    thickness: 6,
    lineCap: "round",
    fill: {
        gradient: ["#05BC0C", "#008305"]
    }
});
$('#Inanswerd a').html($('#Inanswerd').attr("data-precent") + "%")

let InnotanswerdPrecent = ($('#Innotanswerd').attr("data-precent") / 100)
$('#Innotanswerd').circleProgress({
    value: InnotanswerdPrecent,
    size: 60,
    thickness: 6,
    lineCap: "round",
    fill: {
        gradient: ["#E10000", "#A60101"]
    }
});
$('#Innotanswerd a').html($('#Innotanswerd').attr("data-precent") + "%")

//-----------------------------------Outgoing Calls Stats

let OutanswerdPrecent = ($('#Outanswerd').attr("data-precent") / 100)
$('#Outanswerd').circleProgress({
    value: OutanswerdPrecent,
    size: 60,
    thickness: 6,
    lineCap: "round",
    fill: {
        gradient: ["#05BC0C", "#008305"]
    }
});
$('#Outanswerd a').html($('#Outanswerd').attr("data-precent") + "%")

let OutnotanswerdPrecent = ($('#Outnotanswerd').attr("data-precent") / 100)
$('#Outnotanswerd').circleProgress({
    value: OutnotanswerdPrecent,
    size: 60,
    thickness: 6,
    lineCap: "round",
    fill: {
        gradient: ["#E10000", "#A60101"]
    }
});
$('#Outnotanswerd a').html($('#Outnotanswerd').attr("data-precent") + "%")


//----------------------------------Survey Stats
$(".onestar p").html(  $(".onestar").attr("data-count"))
$(".twostar p").html(  $(".twostar").attr("data-count"))
$(".threestar p").html($(".threestar").attr("data-count"))
$(".fourstar p").html( $(".fourstar").attr("data-count"))
$(".fivestar p").html( $(".fivestar").attr("data-count"))

let totalSurv = Number($(".onestar").attr("data-count")) + Number($(".twostar").attr("data-count")) + Number($(".threestar").attr("data-count")) + Number($(".fourstar").attr("data-count")) + Number($(".fivestar").attr("data-count"))
$(".onestar .progress-thumb").animate({
    width : ( (Number($(".onestar").attr("data-count")) / totalSurv) * 100 ) + "%" 
}, 1700,"swing")
$(".twostar .progress-thumb").animate({
    width : ( (Number($(".twostar").attr("data-count")) / totalSurv) * 100 ) + "%" 
}, 1400,"swing")
$(".threestar .progress-thumb").animate({
    width : ( (Number($(".threestar").attr("data-count")) / totalSurv) * 100 ) + "%" 
}, 1000,"swing")
$(".fourstar .progress-thumb").animate({
    width : ( (Number($(".fourstar").attr("data-count")) / totalSurv) * 100 ) + "%" 
}, 1200 ,"swing")
$(".fivestar .progress-thumb").animate({
    width : ( (Number($(".fivestar").attr("data-count")) / totalSurv) * 100 ) + "%" 
}, 1500 ,"swing")


// ----------------------------------------- Tickets

let activeTicketsPrecent = ($('#activeTickets').attr("data-precent") / 100)
$('#activeTickets').circleProgress({
    value: activeTicketsPrecent,
    size: 60,
    thickness: 6,
    lineCap: "round",
    fill: {
        gradient: ["#05BC0C", "#008305"]
    }
});
$('#activeTickets a').html($('#activeTickets').attr("data-precent") + "%")

let inprogressTicketsPrecent = ($('#inprogressTickets').attr("data-precent") / 100)
$('#inprogressTickets').circleProgress({
    value: inprogressTicketsPrecent,
    size: 60,
    thickness: 6,
    lineCap: "round",
    fill: {
        gradient: ["#FD7D00", "#FDF300"]
    }
});
$('#inprogressTickets a').html($('#inprogressTickets').attr("data-precent") + "%")

let closedTicketsPrecent = ($('#closedTickets').attr("data-precent") / 100)
$('#closedTickets').circleProgress({
    value: closedTicketsPrecent,
    size: 60,
    thickness: 6,
    lineCap: "round",
    fill: {
        gradient: ["#4F4F4F", "#2c2c2c"]
    }
});
$('#closedTickets a').html($('#closedTickets').attr("data-precent") + "%")



// ----------------------------------------- Chat

let allMsgsPrecent = ($('#allMsgs').attr("data-precent") / 100)
$('#allMsgs').circleProgress({
    value: allMsgsPrecent,
    size: 60,
    thickness: 6,
    lineCap: "round",
    fill: {
        gradient: ["#4F4F4F", "#2c2c2c"]
    }
});
$('#allMsgs a').html($('#allMsgs').attr("data-precent") + "%")

let pendingMsgsPrecent = ($('#pendingMsgs').attr("data-precent") / 100)
$('#pendingMsgs').circleProgress({
    value: pendingMsgsPrecent,
    size: 60,
    thickness: 6,
    lineCap: "round",
    fill: {
        gradient: ["#FD7D00", "#FDF300"]
    }
});
$('#pendingMsgs a').html($('#pendingMsgs').attr("data-precent") + "%")

let doneMsgsPrecent = ($('#doneMsgs').attr("data-precent") / 100)
$('#doneMsgs').circleProgress({
    value: doneMsgsPrecent,
    size: 60,
    thickness: 6,
    lineCap: "round",
    fill: {
        gradient: ["#05BC0C", "#008305"]
    }
});
$('#doneMsgs a').html($('#doneMsgs').attr("data-precent") + "%")



// ----------------------------------------- Installments

let pendingDuePrecent = ($('#pendingDue').attr("data-precent") / 100)
$('#pendingDue').circleProgress({
    value: pendingDuePrecent,
    size: 60,
    thickness: 6,
    lineCap: "round",
    fill: {
        gradient: ["#FD7D00", "#FDF300"]
    }
});
$('#pendingDue a').html($('#pendingDue').attr("data-precent") + "%")

let duePrecent = ($('#due').attr("data-precent") / 100)
$('#due').circleProgress({
    value: duePrecent,
    size: 60,
    thickness: 6,
    lineCap: "round",
    fill: {
        gradient: ["#E10000", "#A60101"]
    }
});
$('#due a').html($('#due').attr("data-precent") + "%")

let deadARPrecent = ($('#deadAR').attr("data-precent") / 100)
$('#deadAR').circleProgress({
    value: deadARPrecent,
    size: 60,
    thickness: 6,
    lineCap: "round",
    fill: {
        gradient: ["#4F4F4F", "#2c2c2c"]
    }
});
$('#deadAR a').html($('#deadAR').attr("data-precent") + "%")



//-----------------------------------upgradation Stats
let renewUpPrecent = ($('#renewUp').attr("data-precent") / 100)
$('#renewUp').circleProgress({
    value: renewUpPrecent,
    size: 120,
    thickness: 10,
    lineCap: "round",
    fill: {
        gradient: ["#05BC0C", "#008305"]
    }
});
$('#renewUp a').html($('#renewUp').attr("data-precent") + "%")

let pedningUpPrecent = ($('#pedningUp').attr("data-precent") / 100)
$('#pedningUp').circleProgress({
    value: pedningUpPrecent,
    size: 120,
    thickness: 10,
    lineCap: "round",
    fill: {
        gradient: ["#FD7D00", "#FDF300"]
    }
});
$('#pedningUp a').html($('#pedningUp').attr("data-precent") + "%")

let expiredUpPrecent = ($('#expiredUp').attr("data-precent") / 100)
$('#expiredUp').circleProgress({
    value: expiredUpPrecent,
    size: 120,
    thickness: 10,
    lineCap: "round",
    fill: {
        gradient: ["#E10000", "#A60101"]
    }
});
$('#expiredUp a').html($('#expiredUp').attr("data-precent") + "%")

let outUpPrecent = ($('#outUp').attr("data-precent") / 100)
$('#outUp').circleProgress({
    value: outUpPrecent,
    size: 120,
    thickness: 10,
    lineCap: "round",
    fill: {
        gradient: ["#4F4F4F", "#2c2c2c"]
    }
});
$('#outUp a').html($('#outUp').attr("data-precent") + "%")



// Drop List------------------------------------------------------------------
