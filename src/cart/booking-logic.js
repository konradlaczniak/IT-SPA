import $ from "jquery";
import cartRoom from "../../images/cartRoom.png";
import cartTreatment from "../../images/cartTreatment.png";
import { Cart } from "./cart";

export function calendarRestriction() {
  //Display Only Date from today and till 1 year from now//

  $(function () {
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
  });
}

export function reservationDetails(showFinalTotal) {
  $(function () {
    // create reservation details cookie
    // print resrvation details if exists

    const reservation = new Cart("IT_SPA_RESERVATION");

    let cart_reservation_time = reservation.get();

    if (cart_reservation_time && cart_reservation_time.length > 0) {
      const arrival = $(".arrival-date-summ").html(
        cart_reservation_time[cart_reservation_time.length - 1].arrDate
      );
      const departure = $(".departure-date-summ").html(
        cart_reservation_time[cart_reservation_time.length - 1].depDate
      );
      const guests = $(".guests-summ").html(
        cart_reservation_time[cart_reservation_time.length - 1].guestsNum
      );
      const nights = $(".nights-summ").html(
        cart_reservation_time[cart_reservation_time.length - 1].nights
      );
    }

    // print reservation items if exists

    const reservation_cart = new Cart("IT_SPA_ITEMS_CHECKOUT");
    let cart_reservation_items = reservation_cart.get();

    if (cart_reservation_items && cart_reservation_items.length > 0) {
      cart_reservation_items.forEach(function (item) {
        const condition = item.path;
        const cartItems = $(".itemSummary");

        if (condition.includes("Room")) {
          const itemCart = $(`
          <div class="cart-row">
            <div class="cart-item-info cart-column">
              <img class="cart-item-image mx-3" src='${item.path}' width="100" height="100">
              <span class="cart-item-title">${item.title}</span>
            </div>
            <span class="cart-price cart-price-room cart-column">$ ${item.price} (price per night)</span>
          </div>`);
          cartItems.append(itemCart);
        } else if (condition.includes("Treatment")) {
          const itemCart = $(`
          <div class="cart-row">
            <div class="cart-item-info cart-column">
              <img class="cart-item-image mx-3" src='${item.path}' width="100" height="100">
              <span class="cart-item-title">${item.title}</span>
            </div>
            <span class="cart-price cart-price-treatment cart-column">$ ${item.price} (price per treatment)</span>
          </div>`);
          cartItems.append(itemCart);
        }
        showFinalTotal();
      });
    }

    // adding reservation details from form to summary reservation

    const button = $(".bookBtn");

    button.on("click", function (event) {
      const arrDate = $("#arrival-date").val();
      const depDate = $("#departure-date").val();
      const guestsNum = $("#numGuests").val();

      if (arrDate && depDate) {
        const arrival = $(".arrival-date-summ").html(arrDate);
        const departure = $(".departure-date-summ").html(depDate);
        const guests = $(".guests-summ").html(guestsNum);

        // nights calculation
        const diffrenceInTime =
          new Date(depDate).getTime() - new Date(arrDate).getTime();
        const differenceInDays = diffrenceInTime / (1000 * 3600 * 24);
        const nights = $(".nights-summ").html(differenceInDays);

        // Adding items to cookies
        cart_reservation_time = [];
        let details = {};
        details.arrDate = arrDate;
        details.depDate = depDate;
        details.guestsNum = guestsNum;
        details.nights = differenceInDays;

        cart_reservation_time.push(details);
        reservation.set(cart_reservation_time);

        const alert = $(`
      <div class="alert alert-success alert-dismissible fade show alert-position" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>Success! </strong> 
        <br><br>
        <p>Now check your reservation below.</p>
      </div>`);

        const header = $(".booking-header").append(alert);

        $(".booking-form-box").css("border", "1px solid #c59d5f");
        $(".form-control").css("border", "1px solid #c59d5f");
        $(".bookBtn").css("border", "1px solid #c59d5f");

        showFinalTotal();
      } else {
        const alert = $(`
      <div class="alert alert-warning alert-dismissible fade show alert-position alert-fail" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>Fill out missing data!</strong> 
      </div>`);

        const header = $(".booking-header").append(alert);

        $(".booking-form-box").css("border", "1px solid grey");
        $(".form-control").css("border", "1px solid grey");
        $(".bookBtn").css("border", "1px solid grey");
      }
    });

    // total clear

    function reservationClear(event) {
      const arrDate = $("#arrival-date").val("");
      const depDate = $("#departure-date").val("");

      $(".booking-form-box").css("border", "1px solid grey");
      $(".form-control").css("border", "1px solid grey");
      $(".bookBtn").css("border", "1px solid grey");

      const arrival = $(".arrival-date-summ").html("");
      const departure = $(".departure-date-summ").html("");
      const guests = $(".guests-summ").html("");
      const nights = $(".nights-summ").html("");

      reservation.empty();
      clearCart(event, reservation_cart);
      clearReservationCart(event);
    }

    // reservation confirmation

    const button_purchase = $(".btn-purchase");
    button_purchase.on("click", function () {
      const arrival = $(".arrival-date-summ").html();
      const total_price = $(".cart-total-price").html();
      console.log(Boolean(arrival), arrival);
      console.log(Boolean(total_price === "$ 0"), total_price);

      if (arrival && total_price !== "$ 0") {
        reservationClear(event);

        const alert = $(`<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">IT SPA </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Your booking at IT-SPA hotel has been confirmed. </p><br>
        <p><b>See you soon!</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`);

        const header = $(".button-holder").append(alert);
      } else {
        const alert = $(`
      <div class="alert alert-warning alert-dismissible fade show alert-position alert-fail" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>You cannot complete reservation without all the information</strong> 
      </div>`);

        const header = $(".booking-header").append(alert);
      }
    });

    // total clear

    const button_reservation_clear = $(".btn-reservation-clear");
    button_reservation_clear.on("click", function () {
      reservationClear(event);
      const alert = $(`
      <div class="alert alert-success alert-dismissible fade show alert-position alert-fail" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>Done! You can start your booking from the beginning.</strong> 
      </div>`);

      const header = $(".booking-header").append(alert);
    });
  });
}

export function cartLogic(showTotals, showFinalTotal) {
  $(function () {
    // read items from cart
    const cart = new Cart("IT_SPA_CART");
    let cart_total = cart.get();

    if (cart_total && cart_total.length > 0) {
      cart_total.forEach(function (item) {
        const newItem = $(`<div class="cart-item d-flex justify-content-between text-capitalize my-3">
                <img src="${item.photo}" class="img-fluid" id="item-img" alt="">
                <div class="cart-item-text">
                <p id="cart-item-title" class="font-weight-bold mb-0">${item.title}</p>
                <span>$</span>
                <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                </div>
                <span class="cart-item-remove">
                <i class="trash-position fas fa-trash"></i>
                </span>
            </div>`);

        const items_container = $(".cart-total-container");
        items_container.before(newItem);
        showTotals();
      });
    }

    // cart hide and show

    const cartInfo = $("#cart-info");
    const cartBar = $("#cart");
    const checkoutBtn = $("#checkout");
    const clearBtn = $("#clear-cart");

    cartInfo.on("click", function () {
      cartBar.toggleClass("show-cart");
    });
    checkoutBtn.on("click", function () {
      cartBar.toggleClass("show-cart");
    });
    clearBtn.on("click", function () {
      cartBar.toggleClass("show-cart");
    });

    // functions for clearing of cart and reservation

    const clearCartItemsButton = $("#clear-cart");
    clearCartItemsButton[0].addEventListener("click", clearCart);

    function clearCart(event) {
      event.preventDefault();
      const cartItemsContainer = $(".cart-item");
      cartItemsContainer.remove();
      showTotals();
      cart.empty();
    }

    function clearReservationCart(event) {
      event.preventDefault();
      const cartItemsContainer = $(".cart-row");
      cartItemsContainer.remove();
      showFinalTotal();
    }

    // cookie creating of checkouted items
    // checkout - making cart empty, pass items to reservation details

    const reservation_cart = new Cart("IT_SPA_ITEMS_CHECKOUT");
    let cart_total_reservation = reservation_cart.get();

    const checkoutButton = $("#checkout");
    checkoutButton[0].addEventListener("click", checkout);

    function checkout(event) {
      event.preventDefault();
      const cartItems = document.getElementsByClassName("cart-item");
      cart_total_reservation = [];
      clearReservationCart(event);

      Array.from(cartItems).forEach(function (item) {
        const fullPath = item.firstElementChild.src;
        let pos = fullPath.indexOf("cart");
        const finalPath = fullPath.slice(pos);
        const price =
          item.firstElementChild.nextElementSibling.lastElementChild.innerText;
        const title =
          item.firstElementChild.nextElementSibling.firstElementChild.innerText;

        const details = {};
        details.path = finalPath;
        details.price = price;
        details.title = title;

        cart_total_reservation.push(details);
        reservation_cart.set(cart_total_reservation);

        if (finalPath.includes("Room")) {
          const itemCart = $(`
          <div class="cart-row">
            <div class="cart-item-info cart-column">
              <img class="cart-item-image mx-3" src='${finalPath}' width="100" height="100">
              <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-price-room cart-column">$ ${price} (price per night)</span>
          </div>`);
          const cartItems = $(".itemSummary");
          cartItems.append(itemCart);
        } else if (finalPath.includes("Treatment")) {
          const itemCart = $(`
          <div class="cart-row">
            <div class="cart-item-info cart-column">
              <img class="cart-item-image mx-3" src='${finalPath}' width="100" height="100">
              <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-price-treatment cart-column">$ ${price} (price per treatment)</span>
          </div>`);
          const cartItems = $(".itemSummary");
          cartItems.append(itemCart);
        }
      });
      clearCart(event);
      showFinalTotal();
    }
  });
}

// function to calculate final cost of the reservation

export function showFinalTotal() {
  const totalRoom = [];
  const totalTreatment = [];
  const itemRoom = $(".cart-price-room");
  const itemtreatment = $(".cart-price-treatment");
  const nights = $(".nights-summ");
  const nightsNumber = Number(nights.text());

  itemRoom.each(function (index, element) {
    totalRoom.push(parseFloat($(element).text().slice(1).slice(0, -17).trim()));
  });

  itemtreatment.each(function (index, element) {
    totalTreatment.push(
      parseFloat($(element).text().slice(1).slice(0, -21).trim())
    );
  });

  const totalMoneyRooms = totalRoom.reduce(function (totalRoom, item) {
    totalRoom += item;
    return totalRoom;
  }, 0);

  const totalMoneyTreatments = totalTreatment.reduce(function (
    itemtreatment,
    item
  ) {
    itemtreatment += item;
    return itemtreatment;
  },
  0);

  const finalMoney = totalMoneyTreatments + totalMoneyRooms * nightsNumber;
  $(".cart-total-price").text("$ " + finalMoney);
}

// function to calculate final cost of cart

export function showTotals() {
  const total = [];
  const items = $(".cart-item-price");

  items.each(function (index, element) {
    total.push(parseFloat($(element).text()));
  });

  const totalMoney = total.reduce(function (total, item) {
    total += item;
    return total;
  }, 0);

  const finalMoney = totalMoney.toFixed(2);

  $("#cart-total").text(finalMoney);
  $(".item-total").text(finalMoney);
  $("#item-count").text(total.length);

  if (total.length) {
    $(".cart-start").text(" items - $");
  } else {
    $(".cart-start").text("Add something!");
    $("#item-count").text("");
    $(".item-total").text("");
  }
}

export function clearCart(event, cart) {
  event.preventDefault();
  const cartItemsContainer = $(".cart-item");
  cartItemsContainer.remove();
  showTotals();
  cart.empty();
}

export function clearReservationCart(event) {
  event.preventDefault();
  const cartItemsContainer = $(".cart-row");
  cartItemsContainer.remove();
  showFinalTotal();
}

export function addItemToCart(photo, cart_item) {
  const newItem = $(`<div class="cart-item d-flex justify-content-between text-capitalize my-3">
                <img src="${photo}" class="img-fluid" id="item-img" alt="">
                <div class="cart-item-text">

                <p id="cart-item-title" class="font-weight-bold mb-0">${cart_item.title}</p>
                <span>$</span>
                <span id="cart-item-price" class="cart-item-price" class="mb-0">${cart_item.price}</span>
                </div>
                <span class="cart-item-remove">
                <i class="trash-position fas fa-trash"></i>
                </span>
            </div>`);

  const items_container = $(".cart-total-container");
  items_container.before(newItem);

  const removeCartItemButtons = document.getElementsByClassName(
    "cart-item-remove"
  );

  // adding items to cart

  const cart = new Cart("IT_SPA_CART");
  const details = {};
  // let cart_total = [];
  let cart_total = cart.get();
  details.photo = photo;
  details.title = cart_item.title;
  details.price = cart_item.price;

  cart_total.push(details);
  cart.set(cart_total);

  // Removing of items in cart

  removeCartItemsFromCart();
}

export function removeCartItemsFromCart() {
  const removeCartItemButtons = document.getElementsByClassName(
    "cart-item-remove"
  );
  console.log(removeCartItemButtons);
  const cart = new Cart("IT_SPA_CART");
  let cart_total = cart.get();

  function removeCartItem(event) {
    const i = this.originalindex;
    cart_total.splice(i, 1);
    cart.set(cart_total);
    const buttonClicked = event.currentTarget;
    buttonClicked.parentElement.remove();
    showTotals();
  }

  for (let i = 0; i < removeCartItemButtons.length; i++) {
    removeCartItemButtons[i].originalindex = i;
    removeCartItemButtons[i].addEventListener("click", removeCartItem);
  }
}

export function treatmentBook(showTotals, addItemToCart) {
  $(function () {
    const addToCartButtons = $(".shop-item-button");

    for (let i = 0; i < addToCartButtons.length; i++) {
      const button = addToCartButtons[i];
      button.addEventListener("click", addToCartClicked);
    }

    function addToCartClicked(event) {
      const button = event.target;
      const shopItem = button.parentElement.previousSibling.previousSibling;

      var title = shopItem.getElementsByClassName("treatmens-name")[0]
        .innerText;
      var price = shopItem
        .getElementsByClassName("value")[1]
        .innerText.slice(0, -1)
        .trim();

      const cart_item = {};
      cart_item.price = price;
      cart_item.title = title;

      addItemToCart(cartTreatment, cart_item);
      showTotals();
    }
  });
}

export function roomBook(showTotals, addItemToCart) {
  $(function () {
    const addToCartButtons = $(".shop-item-button");

    for (let i = 0; i < addToCartButtons.length; i++) {
      const button = addToCartButtons[i];
      button.addEventListener("click", addToCartClicked);
    }

    function addToCartClicked(event) {
      const button = event.target;
      const shopItem = button.parentElement.parentElement;
      var title = shopItem.getElementsByClassName("room-name-headline")[0]
        .innerText;
      var price = shopItem
        .getElementsByClassName("card-price")[0]
        .innerText.slice(0, -7)
        .trim();

      const cart_item = {};
      cart_item.price = price;
      cart_item.title = title;

      addItemToCart(cartRoom, cart_item);
      showTotals();
    }
  });
}
