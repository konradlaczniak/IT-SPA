import $ from "jquery";
import {
  calendarRestriction,
  reservationDetails,
  showFinalTotal,
} from "../cart/booking-logic";
export const booking = () => {
  window.scroll(0, 0);

  const fragment = $(new DocumentFragment());

  fragment.append(`<header class="booking-header">
    <div class="container-fluid">
    <section id="section04" class="demo">
          <a href="booking#summary-section"><span></span></a>
    </section>
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
    </header>`).append(`
  <section id="summary-section" class="container summary-section my-5">
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
    <h2 class="section-header">Your shopping</h2>
    </div>
  </li>
  <li class="list-group-item">
    <div class="cart-total">
      <strong class="cart-total-title">Total</strong>
      <span class="cart-total-price">$ 0</span>
    </div>
  </li>
  
</ul>
    <div class="button-holder">
      <button class="btn btn-dark btn-reservation-clear" type="button">Clear reservation</button>
      <button class="btn btn-dark btn-purchase" type="button" data-toggle="modal" data-target="#exampleModalCenter">Confirm your reservation</button>
    </div>
      </div> 
  </section>
    `);

  calendarRestriction();
  reservationDetails(showFinalTotal);

  return fragment;
};
