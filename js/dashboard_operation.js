$(function() {
    $("#datepicker").datepicker({
        changeMonth: true,
        changeYear: true

    });
});
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