import $ from "jquery";
import sleep from "../../images/sleep2.png";
import massage from "../../images/massage1.png";

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

export function cartLogic(showTotals) {
         $(function () {
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
           }

           const checkoutButton = $("#checkout");
           checkoutButton[0].addEventListener("click", checkout);

           function checkout(event) {
               event.preventDefault();
               const cartItems = document.getElementsByClassName('cart-item');
            console.log(cartItems);

                Array.from(cartItems).forEach(function(){

                    const item = $(`<div class="cart-row">
                            <div class="cart-item cart-column">
                                <img class="cart-item-image mx-3" src='a' width="100" height="100">
                                <span class="cart-item-title">a</span>
                            </div>
                            <span class="cart-price cart-column">a</span>
                            <div class="cart-delete cart-column">
                                <button class="btn btn-danger" type="button">REMOVE</button>
                            </div>
                            </div>`);

                        const cartItems = $('.itemSummary');
                        cartItems.append(item);      

                })

           }

         });
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

  const cart = $(".cart-total-container");
  cart.before(newItem);

  const removeCartItemButtons = document.getElementsByClassName(
    "cart-item-remove"
  );

  for (let i = 0; i < removeCartItemButtons.length; i++) {
    const button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  function removeCartItem(event) {
    var buttonClicked = event.currentTarget;
    buttonClicked.parentElement.remove();
    showTotals();
  }
  
}

export function treatmentBook(showTotals,addItemToCart) {

  $(function () {
    
    const addToCartButtons = $(".shop-item-button");

    for (let i = 0; i < addToCartButtons.length; i++) {
      const button = addToCartButtons[i];
      button.addEventListener("click", addToCartClicked);
    }

    function addToCartClicked(event) {
        const button = event.target;
        const shopItem = button.parentElement.previousSibling.previousSibling;
        
        var title = shopItem.getElementsByClassName("treatmens-name")[0].innerText;
        var price = shopItem.getElementsByClassName("value")[1]
        .innerText.slice(0, -1)
        .trim();
        
        const cart_item = {};
        cart_item.price = price;
        cart_item.title = title;
        
        addItemToCart(massage,cart_item)
        showTotals();
    }

  });
}

export function roomBook(showTotals,addItemToCart) {
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

      addItemToCart(sleep, cart_item);
      showTotals();
    }

  });
}