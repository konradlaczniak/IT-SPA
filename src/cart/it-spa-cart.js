import $ from "jquery";

import { cartLogic, removeCartItemsFromCart } from "./booking-logic";
import { showTotals, showFinalTotal } from "./booking-logic";
export const itSpaCart = () => {
  const fragment = $(new DocumentFragment());

  fragment.append(`
        <div id="cart" class="cart">
          <div class="cart-total-container d-flex justify-content-around text-capitalize mt-5">
            <h5>total</h5>
            <h5> $ <strong id="cart-total" class="font-weight-bold">0.00</strong> </h5>
          </div>
          <div class="cart-buttons-container mt-3 d-flex justify-content-between">
            <a href="#" id="clear-cart" class="btn btn-outline-secondary btn-black text-uppercase">clear cart</a>
            <a href="#" id="checkout"class="btn btn-outline-secondary text-uppercase btn-pink">checkout</a>
          </div>
        </div>
      
  `);

  cartLogic(showTotals, showFinalTotal);

  // allowance of deleting cart items after website refresh

  $(document).ready(function () {
    removeCartItemsFromCart();
  });

  return fragment;
};
