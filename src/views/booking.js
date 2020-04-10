import $ from 'jquery';

export const booking = () => {
  const fragment = $(new DocumentFragment());

  fragment
    .append(`<header class="booking-header">
    <div class="container-fluid">
        <div class="booking-form-box">
          <div class="booking-form">
            <div class="input-grp">
                <label>Arrival</label>
                <input type="date" class="form-control select-date">
            </div>
            <div class="input-grp">
                <label>Departure</label>
                <input type="date" class="form-control select-date">
            </div>
            <div class="input-grp">
                <label>Guests</label>
                <input type="number" class="form-control" value="1">
            </div>
            <div class="input-grp">
              <button type="button" onclick="location.href='http://localhost:1234/rooms'" class="btn btn-primary bookBtn">Save and show rooms</button>
            </div>
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
                        <img class="cart-item-image" src="Images/Shirt.png" width="100" height="100">
                        <span class="cart-item-title">T-Shirt</span>
                    </div>
                    <span class="cart-price cart-column">$19.99</span>
                    <div class="cart-delete cart-column">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
                </div>
                <div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="Images/Album 3.png" width="100" height="100">
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
    <p><span class="arrival summary-item-info">Arrival:</span></p>
    <p><span class="departure summary-item-info">Departure:</span></p>
    <p><span class="nightsNumber summary-item-info">Nights:</span></p>
        <p><span class="guests summary-item-info">Guests:</span></p>
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
$('.select-date').attr('min', minDate).attr('max', maxDate);
}