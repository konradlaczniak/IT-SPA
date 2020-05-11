import $ from 'jquery';
import cartRoom from "../../images/cartRoom.png";
import cartTreatment from "../../images/cartTreatment.png";
import { calendarRestriction, reservationDetails,showFinalTotal } from "../cart/booking-logic";
export const booking = () => {
  const fragment = $(new DocumentFragment());

  fragment.append(`<header class="booking-header">
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
    // .append(`
    // <section class="container cart-section my-5">
    //         <h2 class="section-header">Your shopping cart</h2>
    //         <div class="cart-row cart-categories">
    //             <span class="cart-item cart-header cart-column">ITEM</span>
    //             <span class="cart-price cart-header cart-column">PRICE</span>
    //             <span class="cart-delete cart-header cart-column"></span>
    //         </div>
    //         <div class="cart-items">
    //             <div class="cart-row">
    //                 <div class="cart-item cart-column">
    //                     <img class="cart-item-image mx-3" src='${massage}' width="100" height="100">
    //                     <span class="cart-item-title">T-Shirt</span>
    //                 </div>
    //                 <span class="cart-price cart-column">$19.99</span>
    //                 <div class="cart-delete cart-column">
    //                     <button class="btn btn-danger" type="button">REMOVE</button>
    //                 </div>
    //             </div>
    //             <div class="cart-row">
    //                 <div class="cart-item cart-column">
    //                     <img class="cart-item-image mx-3" src='${sleep}' width="100" height="100">
    //                     <span class="cart-item-title">Album 3</span>
    //                 </div>
    //                 <span class="cart-price cart-column">$9.99</span>
    //                 <div class="cart-delete cart-column">
    //                     <button class="btn btn-danger" type="button">REMOVE</button>
    //                 </div>
    //             </div>
    //         </div>
    //         <button class="btn btn-dark btn-purchase" type="button">PURCHASE</button>
    //     </section>`)
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
    <h2 class="section-header">Your shopping</h2>
    </div>
  </li>
  <li class="list-group-item">
    <div class="cart-total">
      <strong class="cart-total-title">Total</strong>
      <span class="cart-total-price"></span>
    </div>
  </li>
  
</ul>
<button class="btn btn-dark btn-purchase" type="button">Confirm your reservation</button>
    </div> 
  </section>
    `);

calendarRestriction();
reservationDetails(showFinalTotal);

  return fragment;
};



