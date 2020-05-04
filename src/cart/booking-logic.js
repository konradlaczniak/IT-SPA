import $ from "jquery";

export function calendarRestriction() {
  //Display Only Date from today //
  $(function () {
  console.log("check")

  let dtToday = new Date();

  let month = dtToday.getMonth() + 1;
  let day = dtToday.getDate();
  let year = dtToday.getFullYear();
  let nextYear = dtToday.getFullYear() + 1;

  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();

  let minDate = year + "-" + month + "-" + day;
  let maxDate = nextYear + "-" + month + "-" + day;
  const arrDate = $("#arrival-date");
 

  arrDate.attr("min", minDate).attr("max", maxDate);

  arrDate.change(function () {
    const arrDateValue = arrDate.val();
    const depDate = $("#departure-date");

    depDate.attr("min", arrDateValue).attr("max", maxDate);

    if (!arrDateValue) {
      depDate.attr("disabled", "");
      depDate.val("");
    } else {
      depDate.removeAttr("disabled", "");
    }
  });
}
  )};


export function reservationDetails() {
  $(function () {
    const button = $(".bookBtn");
    button.on("click", function (event) {
      const arrDate = $("#arrival-date").val();
      const depDate = $("#departure-date").val();
      const guestsNum = $("#numGuests").val();
      console.log(!arrDate, !depDate);

      if (arrDate && depDate) {
        const arrival = $(".arrival-date-summ").html(arrDate);
        const departure = $(".departure-date-summ").html(depDate);
        const guests = $(".guests-summ").html(guestsNum);

        // nights calculation
        const diffrenceInTime =
          new Date(depDate).getTime() - new Date(arrDate).getTime();
        const differenceInDays = diffrenceInTime / (1000 * 3600 * 24);
        const nights = $(".nights-summ").html(differenceInDays);

        const alert = $(`
      <div class="alert alert-success alert-dismissible fade show alert-position" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>Success! </strong> 
        <br><br>
        <p>You should check your reservation below.</p>
      </div>`);

        const header = $(".booking-header").append(alert);

        $(".booking-form-box").css("border", "1px solid #c59d5f");
        $(".form-control").css("border", "1px solid #c59d5f");
        $(".bookBtn").css("border", "1px solid #c59d5f");
      } else {
        const alert = $(`
      <div class="alert alert-warning alert-dismissible fade show alert-position alert-fail" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>fill in the missing data!</strong> 
      </div>`);

        const header = $(".booking-header").append(alert);

        $(".booking-form-box").css("border", "1px solid grey");
        $(".form-control").css("border", "1px solid grey");
        $(".bookBtn").css("border", "1px solid grey");
      }
    });
  });
}
