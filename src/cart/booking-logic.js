import $ from "jquery";
import cartRoom from "../../images/cartRoom.png";
import cartTreatment from "../../images/cartTreatment.png";
import { Cart } from "./cart";
import { itSpaCart } from "./it-spa-cart";

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
    // print resrvation data if exists

    const reservation = new Cart("IT_SPA_RESERVATION");
    const details = {};
    let cart_reservation_time = [];
    cart_reservation_time = reservation.get();
    console.log(cart_reservation_time);

    if (cart_reservation_time.length > 0) {
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

    const reservation_cart = new Cart("IT_SPA_RESERVATION_CART");
    let cart_reservation_items = [];
    cart_reservation_items = reservation_cart.get();

    if (cart_reservation_items.length > 0) {
      cart_reservation_items.forEach(function (item, index) {
        const condition = item.path;
        console.log(condition);
        if (condition.includes("Room")) {
          console.log(1);
          const itemCart = $(`<div class="cart-row">
                        <div class="cart-item-info cart-column">
                            <img class="cart-item-image mx-3" src='${item.path}' width="100" height="100">
                            <span class="cart-item-title">${item.title}</span>
                        </div>
                        <span class="cart-price cart-price-room cart-column">$ ${item.price} (price per night)</span>
                        </div>`);
          const cartItems = $(".itemSummary");
          cartItems.append(itemCart);
          showFinalTotal();
        } else if (condition.includes("Treatment")) {
          const itemCart = $(`<div class="cart-row">
                        <div class="cart-item-info cart-column">
                            <img class="cart-item-image mx-3" src='${item.path}' width="100" height="100">
                            <span class="cart-item-title">${item.title}</span>
                        </div>
                        <span class="cart-price cart-price-treatment cart-column">$ ${item.price} (price per treatment)</span>
                        </div>`);
          const cartItems = $(".itemSummary");
          cartItems.append(itemCart);
          showFinalTotal();
        }
      });
    }

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

        // Adding items to cookies

        details.arrDate = arrDate;
        details.depDate = depDate;
        details.guestsNum = guestsNum;
        details.nights = differenceInDays;
        cart_total = [];
        cart_total.push(details);

        console.log(cart_total, cart_total[0]);
        reservation.set(cart_total);

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

        showFinalTotal();
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

export function cartLogic(showTotals, showFinalTotal) {
  $(function () {
    console.log("cartLOGIC");
    // read items from cart
    const cart = new Cart("IT_SPA_CART");
    let cart_total = cart.get();

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

    const reservation_cart = new Cart("IT_SPA_RESERVATION_CART");
    const details = {};
    cart_total_reservation = [];
    let cart_total_reservation = reservation_cart.get();
    // const test = cart_total_reservation[0].path;
    // console.log(test);

    const cartInfo = $("#cart-info");
    const cartBar = $("#cart");

    cartInfo.on("click", function () {
      cartBar.toggleClass("show-cart");
    });

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

    const checkoutButton = $("#checkout");
    checkoutButton[0].addEventListener("click", checkout);

    function checkout(event) {
      event.preventDefault();
      const cartItems = document.getElementsByClassName("cart-item");
      console.log(cartItems);
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

        details.path = finalPath;
        details.price = price;
        details.title = title;

        cart_total_reservation.push(details);

        console.log(cart_total, cart_total[0], cart_total[1]);
        reservation_cart.set(cart_total_reservation);

        console.log(finalPath.includes("Room"));

        // if (finalPath.includes("Room")) {
        //     const add = $('<span>(price per night)</span>')
        //     $('.cart-price').text('${price})
        // } else if (finalPath.includes("Treatment")) {
        //     const add = $("<span>(price per treatment)</span>");
        //     $(".cart-price").append(add);
        // }

        if (finalPath.includes("Room")) {
          console.log(1);
          const itemCart = $(`<div class="cart-row">
                        <div class="cart-item-info cart-column">
                            <img class="cart-item-image mx-3" src='${finalPath}' width="100" height="100">
                            <span class="cart-item-title">${title}</span>
                        </div>
                        <span class="cart-price cart-price-room cart-column">$ ${price} (price per night)</span>
                        </div>`);
          const cartItems = $(".itemSummary");
          cartItems.append(itemCart);
          clearCart(event);
          showFinalTotal();
        } else if (finalPath.includes("Treatment")) {
          const itemCart = $(`<div class="cart-row">
                        <div class="cart-item-info cart-column">
                            <img class="cart-item-image mx-3" src='${finalPath}' width="100" height="100">
                            <span class="cart-item-title">${title}</span>
                        </div>
                        <span class="cart-price cart-price-treatment cart-column">$ ${price} (price per treatment)</span>
                        </div>`);
          const cartItems = $(".itemSummary");
          cartItems.append(itemCart);
          clearCart(event);
          showFinalTotal();
        }
      });
    }
  });
}

export function showFinalTotal() {
  const totalRoom = [];
  const totalTreatment = [];
  const itemRoom = $(".cart-price-room");
  const itemtreatment = $(".cart-price-treatment");
  const nights = $(".nights-summ");
  const nightsNumber = Number(nights.text());

  // console.log(Number(nightsNumber.text()));

  itemRoom.each(function (index, element) {
    totalRoom.push(parseFloat($(element).text().slice(1).slice(0, -17).trim()));
  });

  itemtreatment.each(function (index, element) {
    totalTreatment.push(
      parseFloat($(element).text().slice(1).slice(0, -21).trim())
    );
  });

  console.log(totalRoom, totalTreatment);

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

  console.log(totalRoom, totalTreatment, finalMoney);
  $(".cart-total-price").text("$ " + finalMoney);
}

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
  let cart_total = [];
  cart_total = cart.get();
  details.photo = photo;
  details.title = cart_item.title;
  details.price = cart_item.price;
  cart_total.push(details);
  cart.set(cart_total);
  console.log(cart_total);

  // Removing of items in cart

  for (let i = 0; i < removeCartItemButtons.length; i++) {
    removeCartItemButtons[i].originalindex = i;
    removeCartItemButtons[i].addEventListener("click", removeCartItem);
  }

  function removeCartItem(event) {
    const i = this.originalindex;
    cart_total.splice(i, 1);
    cart.set(cart_total);
    const buttonClicked = event.currentTarget;
    buttonClicked.parentElement.remove();
    showTotals();
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
