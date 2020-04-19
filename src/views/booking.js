import $ from 'jquery';
import massage from '../../images/massage1.png';
import sleep from '../../images/sleep1.png';
export const booking = () => {
  const fragment = $(new DocumentFragment());

  fragment
    .append(`<header class="booking-header">
    <div class="container-fluid">
        <div class="booking-form-box">
          <div class="booking-form">
          <form>
            <div class="input-grp">
                <label>Arrival</label>
                <input type="date" class="form-control select-date" id="arrival-date" >
            </div>
            <div class="input-grp">
                <label>Departure</label>
                <input type="date" class="form-control select-date" id="departure-date" disabled>
            </div>
            <div class="input-grp">
                <label>Guests</label>
                <input type="number" class="form-control" id="numGuests" value="1">
            </label>
            <div class="input-grp">
              <button type="button" class="btn btn-primary bookBtn">Confirm</button>
            </div>
            </form>
          </div>
        </div>
    </div>
    </header>`)
    .append(`
    <section class="container cart-section my-5">
            <h2 class="section-header">Your shopping cart</h2>
            <div class="cart-row cart-categories">
                <span class="cart-item cart-header cart-column">ITEM</span>
                <span class="cart-price cart-header cart-column">PRICE</span>
                <span class="cart-delete cart-header cart-column"></span>
            </div>
            <div class="cart-items">
                <div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image mx-3" src='${massage}' width="100" height="100">
                        <span class="cart-item-title">T-Shirt</span>
                    </div>
                    <span class="cart-price cart-column">$19.99</span>
                    <div class="cart-delete cart-column">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
                </div>
                <div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image mx-3" src='${sleep}' width="100" height="100">
                        <span class="cart-item-title">Album 3</span>
                    </div>
                    <span class="cart-price cart-column">$9.99</span>
                    <div class="cart-delete cart-column">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
                </div>
            </div>
            <button class="btn btn-dark btn-purchase" type="button">PURCHASE</button>
        </section>`)
    .append(`
  <section class="container summary-section my-5">
    <div class="card">
      <div class="card-header">
        <h2>Your reservation</h2>
      </div>
        <ul class="list-group">
  <li class="list-group-item">
    <p><span class="arrival summary-item-info">Arrival: </span><span class="arrival-date-summ"></span></p>
    <p><span class="departure summary-item-info">Departure: </span><span class="departure-date-summ"></span></p>
    <p> <span class ="nightsNumber summary-item-info"> Nights: </span><span class="nights-summ"></span></p>
        <p><span class="guests summary-item-info">Guests: </span><span class="guests-summ"></span></p>
  </li>
  <li class="list-group-item">
    <div class="itemSummary">
    <p>Items:</p>
    </div>
  </li>
  <li class="list-group-item">
    <div class="cart-total">
      <strong class="cart-total-title">Total</strong>
      <span class="cart-total-price">$39.97</span>
    </div>
  </li>
  
</ul>
<button class="btn btn-dark btn-purchase" type="button">Confirm your reservation</button>
    </div> 
  </section>
    `)


    // wybór daty i rezerwacja
    // Koszyk
    // podsumowanie

  return fragment;
};

export function calendarRestriction() {
//Display Only Date from today // 

let dtToday = new Date();

let month = dtToday.getMonth() + 1; 
let day = dtToday.getDate();
let year = dtToday.getFullYear();
let nextYear = dtToday.getFullYear() +1;

if (month < 10)
  month = '0' + month.toString();
if (day < 10)
  day = '0' + day.toString();


let minDate = year + '-' + month + '-' + day;
let maxDate = nextYear + '-' + month + '-' + day;
const arrDate = $('#arrival-date');
const depDate = $('#departure-date');

$('#arrival-date').attr('min', minDate).attr('max', maxDate);


$('#arrival-date').change(function () {
  const arrDate = $('#arrival-date').val();
  const depDate = $('#departure-date');

depDate.attr('min', arrDate).attr('max', maxDate);

 if (!arrDate) {
  depDate.attr('disabled', '');
  depDate.val('')
} else {
  depDate.removeAttr('disabled', '');
}
})

}

export function reservationDetails() {

  $(function () {

    const button = $('.bookBtn')
    button.on('click', function(event){
      const arrDate = $('#arrival-date').val();
      const depDate = $('#departure-date').val();
      const guestsNum = $('#numGuests').val();
      console.log(!arrDate, !depDate);
      

      if (arrDate && depDate) {
      const arrival = $('.arrival-date-summ').html(arrDate);
      const departure = $('.departure-date-summ').html(depDate);
      const guests = $('.guests-summ').html(guestsNum);
      
      // nights calculation
      const diffrenceInTime = new Date(depDate).getTime() - new Date(arrDate).getTime();
      const differenceInDays = diffrenceInTime / (1000*3600*24);
const nights = $('.nights-summ').html(differenceInDays);


      const alert = $(`
      <div class="alert alert-success alert-dismissible fade show alert-position" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>Success! </strong> 
        <br><br>
        <p>You should check your reservation below.</p>
      </div>`)

      const header = $('.booking-header').append(alert);
      
      $('.booking-form-box').css('border', '1px solid #c59d5f');
      $('.form-control').css('border', '1px solid #c59d5f');
      $('.bookBtn').css('border', '1px solid #c59d5f');
  
} else {
const alert = $(`
      <div class="alert alert-warning alert-dismissible fade show alert-position alert-fail" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>fill in the missing data!</strong> 
      </div>`)

const header = $('.booking-header').append(alert);

$('.booking-form-box').css('border', '1px solid grey');
$('.form-control').css('border', '1px solid grey');
$('.bookBtn').css('border', '1px solid grey');
}

    })


  })

}